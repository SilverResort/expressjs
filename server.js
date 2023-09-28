const express=require('express')
const { verifydate, verifyname} = require('./middleware')
const app=express()
const PORT=5000

const pug = require('pug');

app.listen(PORT,(err)=>{
    console.log(err)
})

app.use(verifydate)

// app.get('/',(req,res)=>{
//     res.status(200).send('Home')
// })

app.get('/OurServices',(req,res)=>{
    res.status(200).send('Our services')
})

app.get('/ContactUs',(req,res)=>{
    res.status(200).send('Contact Us')
})

app.get('/error', (req,res)=>{
    res.status(400).send('Il y a une erreur')
})

//users

let users=
[
    {
        name:"Fares",
        email:"fares@gmail.com",
        phone:50505050
    },
    {
        name:"Ahmed",
        email:"ahemd@gmail.com",
        phone:60606060
    },
    {
        name:"Karim",
        email:"karim@gmail.com",
        phone:70707070
    }
]

//get users
app.get('/users', (req,res)=>{
    res.status(200).send(users)
})

//add users
app.post('/add_user',verifyname, (req,res)=>{
    const newUser=req.body
    users=[...users, newUser]
    res.status(200).send(`L'utilisateur ${newUser.name} à été ajouté avec succées`)
})

//PUG
app.set('view engine','pug')
app.set('views','./views')

app.get('/', (req,res)=>{
    res.render('home')
})

app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.get('/services', (req,res)=>{
    res.render('services')
})