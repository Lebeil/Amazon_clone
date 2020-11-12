const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51Hlyg2Czva6o2vzTeCgzI0QMuMFSpryjtNvy5nyjGWIU2tLAcqRxfmKQtoi8wOsHJc9kpdQVV4uFP4aeoCINTDqL009QHWQiut');

//API

// - App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response)=> response.status(200).send('hello world'))
app.post('/payments/create', async (request, response)=> {
    const total = request.query.total;

    console.log('payment Request Received Boom ! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "eur",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app)


// http://localhost:5001/clone-166bb/us-central1/api
