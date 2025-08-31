import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../context/ContexProvider';
import './rightheader.css';

const Rightheader = ({ Logclose }) => {

    const { account, setAccount } = useContext(LoginContext);
    return (
        <>
            <div className="rightheader">
                <div className="right_nav">
                    {/* {
                        account ? <Avatar className='avtar2'>{account.fname ? account.fname[0].toUpperCase() : ""}</Avatar> :
                            <Avatar className='avtar'></Avatar>
                    }
                    {
                        account ? <h3>Hello, {account.fname.toUpperCase()}</h3> : ""
                    } */}

                    {
                        account && account.fname ? (
                            <Avatar className='avtar2'>
                                {account.fname[0].toUpperCase()}
                            </Avatar>
                        ) : (
                            <Avatar className='avtar'></Avatar>
                        )
                    }

                    {
                        account && account.fname ? (
                            <h3>Hello, {account.fname.toUpperCase()}</h3>
                        ) : null
                    }

                </div>
                <div className='nav_btn' onClick={() => Logclose()}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Shop By Category</NavLink>
                    <Divider style={{ width: "100%", marginLeft: -20 }} />
                    <NavLink to="/">today's Deal</NavLink>
                    {/* {
                        account ? <NavLink to="/buynow">Your Order</NavLink> :
                            <NavLink to="/login">Your Order</NavLink>
                    } */}

                    {
                        account && account.fname ? (
                            <NavLink to="/buynow">Your Order</NavLink>
                        ) : (
                            <NavLink to="/login">Your Order</NavLink>
                        )
                    }


                    <Divider style={{ width: "100%", marginLeft: -20 }} />
                    <div className="flag">
                        <NavLink to="/">Settings</NavLink>
                        <img src="" alt="" />
                    </div>


                </div>
            </div>


        </>
    )
}

export default Rightheader

