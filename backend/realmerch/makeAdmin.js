let adminMail = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Back Admin</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            padding: 10px 0;
            border-bottom: 2px solid #eaeaea;
        }
        .header h1 {
            margin: 0;
            color: #eda145;
        }
        .content {
            padding: 20px;
        }
        .content p {
            line-height: 1.6;
        }
        .footer {
            text-align: center;
            padding: 10px 0;
            border-top: 2px solid #eaeaea;
            margin-top: 20px;
            font-size: 12px;
            color: #999;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome Back Admin</h1>
        </div>
        <div class="content">
            <p>Dear [User's Name],</p>
            <p>You've been made an admin at Realmerch. We're excited to have you on board!</p>
            <p>follow the link below to login <br> [admin-login] </p>
            <p>If you have any questions or need assistance, feel free to reply to this email or contact our support team.</p>
            <p>Best regards,<br>The Realmerch Team</p>
        </div>
        <div class="footer">
            <p>&copy; 2024 Realmerch. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`

module.exports = adminMail