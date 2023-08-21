
const mongoose = require('mongoose');

const url ='mongodb+srv://ashishkumar19011997:Ashish1997@cluster0.qmu3itc.mongodb.net/mydb?retryWrites=true&w=majority'

// asynchronous function - returns a promise
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('connected to mongodb');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;







