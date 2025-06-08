const adminAuth = (req,res, next)=>{
    const token = 'kunal'
    const isAuthenticate = token === 'kunal'
    if(!isAuthenticate){
        res.status(401).send('unauthorized')
    }
    else{
        next()
    }
}


const userAuth = (req, res, next)=>{
    token = 'user token'
    const isTokenAuthenticate = token === 'user token'
    !isTokenAuthenticate ? res.status(401).send('unathurized'):next()
    
}

module.exports= {adminAuth, userAuth}