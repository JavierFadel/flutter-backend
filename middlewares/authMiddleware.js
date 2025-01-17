const jwt = require('jsonwebtoken')

const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(`Auth header: ${authHeader}`);

    if (!authHeader) {
        return res.status(401).json({ message: 'Token required' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token verified, payload:', payload);

        req.user = payload; // Menyimpan data user dari token
        next();
    } catch (error) {
        console.error('Token verification error:', error.message);
        res.status(403).json({ message: 'Invalid token' });
    }
}

module.exports = authenticate;