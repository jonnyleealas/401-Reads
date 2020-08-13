# connecting mongoDb

- const mongoose = require('mongoose');
mongoose.connect ('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('connected')
})

- brew services start mongodb-community

