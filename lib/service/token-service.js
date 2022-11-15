const jwt = require('jsonwebtoken');
require('dotenv').config({path: '../../.env'})


function generateToken(payload) {
    const accessToken = jwt.sign(
        payload, 
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '30m'})
        

            return {
                accessToken
            }

}



module.exports = {generateToken}








