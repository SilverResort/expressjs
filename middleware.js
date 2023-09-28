const verifydate=(req,res,next)=>{
    let today = new Date
    let day=today.getDay()
    const hour=today.getHours()

    if (day===0||day===6||hour<9||hour>17){
        res.redirect('/error')
    }else{
        next()
    }
}

const verifyname =(req,res,next)=>{
    const {name,email,phone}=req.body;
    if(!name||!email||!phone){
        res.status(400).send("Name, email and phone are required")
    }
    next();
}

module.exports={verifydate, verifyname}