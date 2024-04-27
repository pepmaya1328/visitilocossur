<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactFormController extends Controller
{
    // Store Contact Form Data
    public function ContactForm(Request $request) {

        // Form validation
        $validator = Validator::make($request->all(), [
            "name"=> "required",
            "email"=> "required|email",
            "subject"=>"required",
            "message"=> "required"
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 401);
    }

    // Store data in database
    Contact::create($request->all());

    // Send mail to Application Admin
    Mail::send('emails.contactemail', array(
        'name' => $request->get('name'),
        'email' => $request->get('email'),
        'subject' => $request->get('subject'),
        'bodyMessage' => $request->get('message'),
    ), function($message) use ($request){
        $message->from($request->email);
        $message->to('clifford.alviar28@gmail.com', 'Admin')->subject($request->get('subject'));
    });
    return response()->json(['success' => 'The email has been sent.']);
    }
}
