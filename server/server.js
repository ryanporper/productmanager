const express = require('express');
const cors = require('cors') 
const app = express();
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
require('./config/mongoose.config'); 
require('./routes/product.routes')(app);
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})







// const express = require('express');
// const cors = require('cors');

// Environment vars
// const port = 8000;

// const { jokeRouter } = require('./routes/jokes.routes');

// requiring / importing runs the file!
// This file doesn't need to export anything though, so we need a var.
// require('./config/mongoose.config');

// app is a function but it also has key value pairs on it like an object.
// const app = express();

// require('./routes/testroute')(app);

/* 
app.use is adding 'middleware':
stuff that happens in the middle of the the request and response.
*/

// avoid CORS error since our front-end is running on a different port
// so our requests are 'cross origin' port 3000 -> 8000
// app.use(cors());
// 
// req.body undefined without this!
// app.use(express.json());

// url infront of every route
// app.use('/api/products', jokeRouter);

// app.listen(port, () =>
//   console.log(`Listening on port ${port} for REQuests to RESpond to.`)
// );