const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/saveMessage', (req, res) => {
    const { name, email, message } = req.body;
    const datetime = new Date().toLocaleString();
    const data = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nDate & Time: ${datetime}\n\n`;

    fs.appendFile('visitorMessage.txt', data, (err) => {
        if (err) throw err;
        console.log('Message saved to visitorMessage.txt');
        res.send('Message saved successfully');
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));