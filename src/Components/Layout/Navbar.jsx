import React from 'react';
import MyContainer from './MyContainer';
import Logo from '../../assets/logo.jpg'
const Navbar = () => {
    return (
        <div className='bg-gray-200'>
           <MyContainer>
            <div>
                <img src={Logo} className='w-[50px] h-[50px]'  alt="" />

            </div>
            <div>

            </div>
           </MyContainer>
        </div>
    );
};

export default Navbar;