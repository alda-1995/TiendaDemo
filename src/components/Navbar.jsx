import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import BtnCartInfo from './BtnCartInfo';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <nav className="w-full fixed top-0 left-0 z-20 bg-primary h-[80px] lg:h-[90px] flex items-center">
                <div className="container">
                    <div className='flex justify-between'>
                        <Link to="/" className='text-white h3'>SHOP</Link>
                        <BtnCartInfo />
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;