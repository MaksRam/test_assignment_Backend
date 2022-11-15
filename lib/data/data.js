const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'tobaksvara.2019',
        database: 'users'
    }
});

async function token(id) {
    await knex('token').select().where({id});
}

async function addUser(newUser) {
await knex('persons').insert(newUser)
}

async function getAll() {
const data = await knex.from('persons').select('*');
return data;
}

async function deleteById(id) {
    return await knex('persons').select().where({ id }).del();
}

async function getUserByEmail(email) {
    return await knex('persons').select().where('UserEmail', `${email}`)
}

async function checkUser(email, password){
    return await knex('persons').select().where('UserEmail', `${email}`).andWhere('Password', `${password}`)
}

async function getById(id) { 
    return await knex('persons').select().where({ id }) }

async function changePassword(id, newPass) {
    await knex.from('persons').update('Password', newPass).where({id})

    
}

module.exports = {addUser, getAll, deleteById, getUserByEmail, changePassword, getById, token, checkUser}


