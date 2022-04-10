const express = require('express');
const app = express();
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());
app.use(cors());

app.post("/payment", cors(), async (req,res)=>{
  let {amount, id} = req.body;
  console.log("amount > ",amount)
  console.log("id > ",id)
  try{
    const payment = await stripe.paymentIntents.create({
      amount,
      currency : "USD",
      payment_method: id,
      description: "Amazon clone",
      confirm: true
    })
    // console.log("Payment", payment)
    res.json({
      message: "payment successful",
      success: true
    })
  }
  catch(error){
    console.log("Error", error)
    res.json({
      message: "payment failed",
      success: false
    })
  }
})

app.listen(process.env.PORT || 4000, ()=>{
  console.log("server is listening on port 4000");
})