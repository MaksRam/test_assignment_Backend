const nodemailer = require('nodemailer');

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
"V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
"u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", 
"*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

function generate() {
    const generatedPass = [];
    while (generatedPass.length < 13) {
    let randomNum = Math.floor(Math.random() * 90);
    generatedPass.push(characters[randomNum])
    }
    return generatedPass.join('')
    }


const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth:{
        user: 'helloworld071008@outlook.com',
        pass: 'aura123321'
    }

})

const newPass = generate();

function sendAutoEmail(txt, passNew) {
    const options = {
        from: 'helloworld071008@outlook.com',
        to: `${txt}`,
        subject: 'Password recovery',
        text: `Hello! Your new password is: ${passNew}. Change it ASAP!`
    }

transporter.sendMail(options, function(err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log('Sent: ' + info.response)
})
}


function greetingEmail(email, link) {
    const options = {
        from: 'helloworld071008@outlook.com',
        to: `${email}`,
        subject: 'Welcome to our website!',
        html: `<p>Click <a href="http://localhost:3000//activate/${link}">here</a> to validate</p>`
    }

transporter.sendMail(options, function(err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log('Sent: ' + info.response)
})

}

function deletingEmail(email) {
    const options = {
        from: 'helloworld071008@outlook.com',
        to: `${email}`,
        subject: 'Deleted account',
        text: 'Your account has been deleted!!! '
    }

transporter.sendMail(options, function(err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log('Sent: ' + info.response)
})

}

module.exports = {sendAutoEmail, generate, greetingEmail, deletingEmail}