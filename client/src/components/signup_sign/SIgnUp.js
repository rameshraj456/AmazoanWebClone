import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SIgnUp = () => {

    const [udata, setUdata] = useState({
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: ""
    });
  

   const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);

    setUdata((pre) => {
        return {
            ...pre,
            [name]: value
        }
      })
      };

      const senddata = async (e) =>{
        e.preventDefault();

        const { fname, email, mobile, password, cpassword } = udata;
        //yah seh thaa
        
        //  if(fname ===""){
        //     toast.warn("Prove fname 👎!", {
        //         position: "top-center"
        //     });
        //  }else if(email ===""){
        //     toast.warn("Prove your email 👎!", {
        //         position: "top-center"
        //     });
        //  } else {
        //     const res = await fetch("/register", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             fname, email, mobile, password, cpassword
        //         })
        //     });
    
           
        //  }
        //yah tak
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, email, mobile, password, cpassword
            })
        });

        const data = await res.json();
       
        
        if (res.status === 422 || !data){
          
            toast.warn("Invalid Details 👎!", {
                position: "top-center"
            });

        }else {
                
                toast.success("Registration Successfully done 😃!", {
                    position: "top-center"
                });


                setUdata({...udata,
                    fname: "", email: "",
                    mobile: "", password: "", cpassword: ""
                });
        }
    }
   
    

  return (
    <>
      <section>
         <div className='sign_container'>
            <div className='sign_header'>
               <img src="./h&hpng.png" alt="amazoanlogo" />
            </div>
            <div className='sign_form'>
                <form method='POST'>
                    <h1>Sign-Up</h1>
                    <div className='form_data'>
                        <label htmlFor='fname'>Your name</label>
                         <input type="text" name="fname"
                         onChange={adddata} value={udata.fname} id='fname'/>

                    </div>
                    <div className='form_data'>
                        <label htmlFor='email'>Email</label>
                         <input type="text" name="email" 
                         onChange={adddata} value={udata.email}id='email'/>

                    </div>
                    <div className='form_data'>
                        <label htmlFor='number'>Mobile</label>
                         <input type="text"
                         onChange={adddata}
                         value={udata.mobile} name="mobile" id='mobile'/>

                    </div>
                    <div className='form_data'>
                        <label htmlFor='password'>Password</label>
                         <input type="password" name="password"
                          onChange={adddata}
                          value={udata.password} placeholder='At least 6 char' id='password'/>

                    </div>
                    <div className='form_data'>
                        <label htmlFor='cpassword'>Password Again</label>
                         <input type="password" name="cpassword" 
                         onChange={adddata}
                         value={udata.cpassword} id='cpassword'/>

                    </div>
                    <button className='signin_btn' onClick={senddata}>Continue</button>
                     <div className='signin_info'>
                        <p>Already have an account?</p>
                        <NavLink to='/login'>Signin</NavLink>

                     </div>
                </form>
            </div>
            <ToastContainer />
         </div>
      </section>
    </>
  )
}

export default SIgnUp
