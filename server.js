const express = require('express');
const cors = require('cors');
const Stripe = require('stripe');
const admin = require('firebase-admin');

require('dotenv').config();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Configurar Firebase Admin
admin.initializeApp({
  credential: admin.credential.cert(require('./path/to/your/firebase-admin-sdk.json')),
});

const app = express();
app.use(express.json());
app.use(cors());

// Rota para processar pagamento
app.post('/create-payment-intent', async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: 'usd',
    });
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000');
});
