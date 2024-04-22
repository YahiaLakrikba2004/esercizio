import React from 'react';

function NavComponent () {
    return (
        <div>
            <nav className='NAV'>
                <ul className='UL'>
                    <li className='LI'><a className='A' href="#home">Home</a></li>
                    <li className='LI'><a className='A' href="#about">About</a></li>
                    <li className='LI'><a className='A' href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavComponent;