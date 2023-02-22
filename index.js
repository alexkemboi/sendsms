// Set your app credentials
const credentials = {
  apiKey: "cee5da823a4e014514efd199a9d9207d6a2e37340ecb890e0a4e71a95caa0492",
  username: "sandbox",
};

// Initialize the SDK
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
  const options = {
    // Set the numbers you want to send to in international format
    to: "+254726837210",
    // Set your message
    message:
      "I'm a lumberjack and its ok, I sleep all night and I work all day",
    // Set your shortCode or senderId
    //from: 'XXYYZZ'
  };

  // That’s it, hit send and we’ll take care of the rest
  sms
    .send(options)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

sendMessage();
