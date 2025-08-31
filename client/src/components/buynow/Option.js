import React, { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContexProvider';

const Option = ({deletedata,get}) => {

  const {account, setAccount } = useContext(LoginContext);
     
  // const removedata = async(req,res) => {
  //     try{
  //       const res = await fetch(`/remove/${deletedata}`, {
  //         method: "DELETE",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json"
  //         },
  //         credentials: "include"
  //       });
  //       const data = await res.json();
  //       console.log(data);

  //       if (res.status === 400 || !data) {
  //         console.log("error aai remove time pr");
  //     } else {
  //         console.log("user delete");
  //         get();
  //     }

  //     }catch(error){
  //           console.log('error');
  //     }
  // }


  const removedata = async (req, res) => {
    try {
      console.log("Remove data function called");
      const res = await fetch(`/remove/${deletedata}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
  
      if (res.status === 400 || !data) {
        console.log("error aai remove time pr");
      } else {
        console.log("user delete");
        setAccount(data);
        toast.success("Item removed from cart  😃!", {
          position: "top-center"
      });
        get();
      }
    } catch (error) {
      console.log('error', error);
    }
  };
  


  return (
    <div className='add_remove_select'>
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        
      </select>
      <p style={{ cursor: "pointer" }} onClick={() => removedata(deletedata)}>Delete</p><span>|</span>
      <p className='forremovemedia'>Save Or Later</p><span>|</span>
      <p className='forremovemedia'>See More like this</p>
      <ToastContainer/>
    </div>
  )
}

export default Option
