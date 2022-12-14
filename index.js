const express = require('express');
const cors = require('cors');
const userRoutes =require('./routes/v1/user.route')
const app = express()
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json())
// app.use('/public', express.static(__dirname + '/public'));
// app.use(express.static(__dirname + '/public'));

// https://intense-gorge-50700.herokuapp.com/users/all
app.use('/user', userRoutes)
app.get('/', (req, res) => {
    res.send('Welcome to Random Api')
    
})
app.all('*', (req, res) => {
  res.send('No route found')
})

app.listen(port, () => {
    console.log(`Listening port ${port}`);
})

process.on("unhandledRejection", (error) => {
    console.log(error.name, error.message);
    app.close(() => {
        process.exit(1)
    })
})