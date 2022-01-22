//https://covid-api.mmediagroup.fr/v1/cases
//https://api.imgflip.com/get_memes
//https://random-word-api.herokuapp.com/all
//https://random-word-api.herokuapp.com/word?number=20&swear=1


const axios = require('axios');
const exp = require('express')
const app =  exp()
const env = require('dotenv')
env.config()
app.listen(process.env.PORT)



app.use(exp.static('public'))

app.get('/', (req, res)=>{
	res.sendFile(__dirname+'/public/index.html')
})



//MEMES
app.get('/memes', (req,res)=>{
	axios.get('https://api.imgflip.com/get_memes')
	.then(function (response) {
		res.send(JSON.stringify(response.data.data.memes))
	}) 

})



