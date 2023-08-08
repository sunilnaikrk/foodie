const exprees = require('express')
const app = exprees()

const mongoose = require('mongoose') // to install mongoose npm i mangoose
const cors = require('cors'); //cross origin resource sharing--- to install npm i cors 

//port
const PORT = 5000

//importing model
const User = require('./model/user')
const Food = require('./model/food')



//middleware


app.use(exprees.json())
app.use(cors())
app.use(exprees.urlencoded({extended: false}))

//connecting to database
const dbURL = 'mongodb://localhost:27017/FoodBlog'
mongoose.connect(dbURL).then(() => {
    console.log('connected to database');
})

//sinin
app.post('/signin',(req,res) => {
    User.findOne({email:req.body.email}).then((doc) =>{
        if (doc) {
            if(doc.password === req.body.password){
                res.send({message: 'login successful',status:200})
            }else {
            res.send({message: 'login failed'})
        } 
    }else {
        res.send({message: 'user not found'})


        }
    })
})

//signup
app.post('/signup',(req,res) => {
    User.findOne({email: req.body.email}).then((doc)=>{
        if (doc) {
            res.send({message:"user already registered"})
        } else {
           let data = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
            data.save().then(()=>{
                res.send({message:"user registration successful"})
            }).catch(err => {
                res.send({message:"user registration failed"})
            })
        }
    })
})

//addfood
app.post('/addfood',(req,res) => {
    const data = new Food({
        title:req.body.title,
        author:req.body.author,
        imageURL:req.body.imageURL
    })
    data.save().then(()=>{
        res.send({message:"food added successfully"})
    }).catch((err)=>{
        res.send({message:"Error while adding food"})
    })
})


//fetch all data
app.get('/food',async(req,res)=>{
    try {
        const data = await Food.find()
        res.json(data)
    } catch (error) {
        console.log(error);
    }
})





app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})


