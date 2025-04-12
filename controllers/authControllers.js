const {success , error} = require("../utils/resposeWrapper.js");

const signUp = async (req , res) => {
    try {
        const {email , password} = req.body ; 
        
    } catch (error) {
        
    }
   
}

const signIn = async (req , res) => {
    
}   

module.exports = {
    signUp  ,
    signIn
}