const router = require("express").Router();
const authControllers = require("../controllers/authControllers.js") ;

router.post("/signup", authControllers.signUp) ;
router.post("/login", authControllers.signIn) ; 


module.exports = router;