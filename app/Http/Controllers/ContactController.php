<?php

// app/Http/Controllers/ContactController.php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use App\Models\Contact;

class ContactController extends Controller
{
    public function sendEmail(Request $request)
    {
        // Validate the incoming request
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|subject|max:255',
            'message' => 'required|string',
        ]);

        // Save the form data to the database
        // You can define your database schema and model accordingly
        $contact = new Contact();
        $contact->name = $request->name;
        $contact->email = $request->email;
        $contact->message = $request->message;
        $contact->save();

        // Send email
        Mail::to('clifford.alviar28@gmail.com')->send(new ContactMail($request->all()));

        return response()->json(['message' => 'Email sent successfully']);
    }
}
