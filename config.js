const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET;

const generateToken = (payload, expiresIn = '1h') => {
    try {
        const token = jwt.sign(payload, secretKey, { expiresIn });
        console.log(`Token: ${token}`);
        return token;
    } catch (err) {
        console.error(`Error generating JWT: ${err}`)
        return null;
    }
}

module.exports = generateToken;