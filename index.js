const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js')
const productRoutes = require('./routes/productRoutes.js');

dotenv.config();

app.use(cors())
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/order', orderRoutes);
app.use('/products', productRoutes);

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

module.exports = app;