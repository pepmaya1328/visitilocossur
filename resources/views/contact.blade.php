<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact</title>
</head>
<body>

</body>
</html>

<div class="container">
    <h1>Contact</h1>

    <form action="{{ route('contact.store') }}" method="post">
        @csrf
        <table>
            <tr>
                <td>Full Name</td>
                <td><input type="text" name="full_name" value=""></td>
            </tr>
            <tr>
                <td>Email Address</td>
                <td><input type="text" name="email_address" value=""></td>
            </tr>
            <tr>
                <td>Subject</td>
                <td><input type="text" name="subject" value=""></td>
            </tr>
            <tr>
                <td>Send  Message</td>
                <td><textarea name="message"></textarea></td>
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type="submit" />
                </td>
            </tr>
        </table>
    </form>
</div>
