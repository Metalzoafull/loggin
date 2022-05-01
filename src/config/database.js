const path = require("path");
const mongoose = require('mongoose');
const { mongodb } = require(path.join(__dirname, 'keys'));


mongoose.connect(mongodb.URI)
  .then(()=>{
  console.log('DB is connected');
  })
  .catch(err => console.log(err));

//mongoose.set('useFindAndModify', false);
/*mongoose.connect(mongodb.URI, {
  useNewUrlParser: true, // <-- no longer necessary
  useUnifiedTopology: true // <-- no longer necessary
})*/
  //.then(db => console.log('DB is connected'))
  //.catch(err => console.log(err));