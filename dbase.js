const mongoose = require ('mongoose')

const url = 'mongodb://localhost/EntregaGem'
mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser:true,
    useFindAndModify: false,
    useUnifiedTopology:true
}).then(db => console.log('DB is connect')).catch(err => console.error(err))



