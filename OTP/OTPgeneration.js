const fast2sms = require('fast-two-sms')

var options = {
    authorization:"1702EaszqdyxpwbKgIQXWBDok8fGvVjS6tFYiNe5JL3ZumMROlby2KkPCXpYRuVxE0Q1SGMcj9TafqN6",
    message:"this is a test top code Message your OTP code is 5678",
    numbers:['9961387902']
};
fast2sms.sendMessage(options).then((response)=>{
    console.log(response)
}).catch((error)=>{
    console.log(error)
})