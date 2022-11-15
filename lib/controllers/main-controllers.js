const getUsers = require('../data/data')
const sendEmail = require('../email/passw-recovery')
const newPassword = require('../email/passw-recovery')
const token = require('../service/token-service')
const uuid = require('uuid')

async function login(ctx) {
    const email = ctx.query.email;
    const passw = ctx.query.passw;
    const check = await getUsers.checkUser(email, passw)

    if (check.length !== 0) {
        const generatedToken = token.generateToken({
            "UserName": JSON.stringify(`${email}`), 
        } )
        
        ctx.body = generatedToken
        ctx.status = 200;
    } else {
        ctx.body = 'Something went wrong';
        ctx.status = 404;
    }
}

async function getAllUsers(ctx) {
    ctx.body = await getUsers.getAll();

    // localStorage.setItem("token", generatedToken)
    
    ctx.status = 201;
    
}

async function getUserById(ctx) {
    const id = ctx.params.id;
    const user = await getUsers.getById(id);
    ctx.status = 200;
    ctx.body = user;
  }

async function getUsersEmail(ctx) {
    const email = ctx.query.email;  
    ctx.status = 200;
    ctx.body = await getUsers.getUserByEmail(email);
    const newPass = newPassword.generate();
    await getUsers.changePassword(ctx.body[0].id, newPass)
    sendEmail.sendAutoEmail(email, newPass)
    
}

async function getNewPassword(ctx) {   
    const id = ctx.params.id;
    const newPass = ctx.request.body.Password; 
    await getUsers.changePassword(id, newPass)
    ctx.status = 201;
}

async function create(ctx) {
    
    const newUser = ctx.request.body;
    const candidate = await getUsers.getUserByEmail(newUser.UserEmail)   
    if(candidate.length === 0){
    await getUsers.addUser(newUser);
    const activationLink = uuid.v4();
    sendEmail.greetingEmail(newUser.UserEmail, activationLink)
    ctx.status = 201;
    } else  {
        ctx.status = 404;
    } 
}

async function deleteUser(ctx) {
    const id = ctx.params.id;
    const user = await getUsers.getById(id);
    await getUsers.deleteById(id);
    ctx.status = 200;
    sendEmail.deletingEmail(user[0].UserEmail)
}


module.exports = {getAllUsers, create, deleteUser, getUsersEmail, getNewPassword, getUserById, login}

