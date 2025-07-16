export class Template {
  getContactUsTemplate(data) {
    if (!data) {
      throw new Error("Data Not Found");
    }

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>${data.subject}</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f3f4f6;
      margin: 0;
      padding: 20px;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: auto;
      background: #ffffff;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border-top: 5px solid #ec4899;
    }
    .header {
      text-align: center;
      margin-bottom: 30px;
    }
    .header h2 {
      color: #ec4899;
      margin: 0;
    }
    .field {
      margin-bottom: 15px;
    }
    .field strong {
      color: #1f2937;
    }
    .message {
      background: #fef3f9;
      padding: 15px;
      border-radius: 6px;
      color: #6b7280;
      font-style: italic;
    }
    .footer {
      margin-top: 30px;
      text-align: center;
      font-size: 13px;
      color: #9ca3af;
    }
    hr {
      margin: 20px 0;
      border: none;
      border-top: 1px solid #e5e7eb;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Contact Request Received</h2>
      <p>You have a new contact request from <strong>${data.projectName}</strong></p>
    </div>

    <div class="field">
      <strong>Name:</strong> ${data.name}
    </div>

    <div class="field">
      <strong>Mobile:</strong> ${data.mobile}
    </div>

    <div class="field">
      <strong>Email:</strong> ${data.email || 'N/A'}
    </div>

    <div class="field">
      <strong>Subject:</strong> ${data.subject}
    </div>

    <div class="field">
      <strong>Message:</strong>
      <div class="message">${data.message}</div>
    </div>

    <hr />

    <div class="footer">
      &copy; ${data.year} ${data.projectName}. All rights reserved.
    </div>
  </div>
</body>
</html>`;
  }
}
