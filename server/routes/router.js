const express=require("express");
const router =new express.Router();
const Products=require("../models/productsSchema");
const USER  =require("../models/userSchema");
const bcrypt = require("bcryptjs");
const athenticate=require("../middleware/authenticate");




//get productsdata api
router.get("/getProducts", async (req, res) => {
    try{
        
          const productsdata = await Products.find();
          //console.log("console the data" + productsdata);
          res.status(201).json(productsdata);
    }catch(error){
         console.log("error " + error.message);
        
    }
});


//get individual data

router.get("/getproductsone/:id", async (req, res) => {
       
    try{
        const {id}=req.params;
        //console.log(id);
        const individualdata=await Products.findOne({id:id});
        //console.log(individualdata +"individual data"); 

         res.status(201).json(individualdata);


    }catch(error){
              
        res.status(400).json(individualdata);
        console.log("error " + error.message);
    }


});

//register data

router.post("/register", async (req, res) =>{
      //console.log(req.body);

      const { fname, email, mobile, password, cpassword } = req.body;
     
      if (!fname || !email || !mobile || !password || !cpassword) {
        res.status(422).json({ error: "fill all the details" });
        console.log("no data available");
       };


       try{
            const preuser = await USER.findOne({ email: email });
             

            if (preuser) {
                res.status(422).json({ error: "This email  already exist's" });
            } else if (password !== cpassword) {
                res.status(422).json({ error: "password are not matching" });
            } else {
    
                const finalUser = new USER({
                    fname, email, mobile, password, cpassword
                });

                //we will do hashing here
                //bcryptjs hashing alogorithm

               const storedata = await finalUser.save();
               console.log(storedata);

               res.status(201).json(storedata);

            }

       }catch(error){
        // console.log("error the bhai catch ma for registratoin time" + error.message);
        // res.status(422).send(error);
       }



});


// login data
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400).json({ error: "fill the details" });
    }

    try{
        const userlogin = await USER.findOne({ email: email });
         
        //console.log(userlogin + "user value");

        if (userlogin) {
            const isMatch = await bcrypt.compare(password, userlogin.password);
            //console.log(isMatch);

            //Token generated from userSchema
            const token = await userlogin.generatAuthtokenn();
            //console.log(token);

            res.cookie("h&hweb", token, {
                expires: new Date(Date.now() + 900000),
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ error: "invalid crediential pass" });
            }else{
                res.status(201).json(userlogin);
            }
        } else {
            res.status(400).json({ error: "invalid crediential pass" });
        }


    }catch(error){
        res.status(400).json({ error: "invalid details" });
    }
});


// adding the data into cart humlog call carenge post api ko


// router.post("/addcart/:id",athenticate, async (req, res) =>{
//           try{
//             const { id } = req.params;
//             const cart = await Products.findOne({ id: id });
//             console.log(cart + "cart value");

//             const UserContact = await USER.findOne({ _id: req.userID });
//             console.log(UserContact);

//             if(UserContact){
//                 const cartData = await UserContact.addcartdata(cart);
//                 await UserContact.save();
//                 console.log(CartData);
//                 res.status(201).json(UserContact);

//             }else{
//                 res.status(401).json({error: "invalid user contact"});
//             }
       

//           } catch (error) {
//             res.status(500).json({error: "invalid server error"});

//           }
// })

// Inside the addcart endpoint
router.post("/addcart/:id", athenticate, async (req, res) => {
    try {
      const { id } = req.params;
      const cart = await Products.findOne({ id: id });
  
      const UserContact = await USER.findOne({ _id: req.userID });
  
      if (UserContact) {
        const cartData = await UserContact.addcartdata(cart);
        await UserContact.save();
        console.log("Cart Data:", cartData);
        res.status(201).json(UserContact);
      } else {
        res.status(401).json({ error: "Invalid user contact" });
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

 // we will be getting cart detils 
  
 router.get("/cartdetails", athenticate, async (req, res) => {
    try {
        const buyuser = await USER.findOne({ _id: req.userID });
        //console.log(buyuser + "user hain buy pr");
        res.status(201).json(buyuser);
    } catch (error) {
        console.log(error + "error for buy now");
    }
});
  
//get a valid user user login ho tabi anna chahei cart ka value
router.get("/validateuser", athenticate, async (req, res) => {
    try {
        const validuserone = await USER.findOne({ _id: req.userID });
       
        res.status(201).json(validuserone);
    } catch (error) {
        console.log(error + "error for valid user");
    }
});

// remove item from cart

router.delete("/remove/:id",athenticate, async (req, res) =>{
       try{
        const { id } = req.params;
        req.rootUser.carts = req.rootUser.carts.filter((cruval) => {
            return cruval.id != id;  //cruval i scurrent value
        });
        req.rootUser.save();
        res.status(201).json(req.rootUser);
        console.log("iteam remove");
       }catch (error) {
        console.log(error + "jwt provide then remove");
        res.status(400).json(error);
       }
});


//for user logout 

router.get("/logout", athenticate, async (req, res) => {
    try {
        req.rootUser.tokens = req.rootUser.tokens.filter((curelem) => {
            return curelem.token !== req.token
        });

        res.clearCookie("h&hweb", { path: "/" });
        req.rootUser.save();
        res.status(201).json(req.rootUser.tokens);
        console.log("user logout");

    } catch (error) {
        console.log( "error for user then logout");
    }
});

module.exports =router;