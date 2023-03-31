import React, { Component } from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar'

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
                <Navbar />
                <div className="py-32">
                    <Outlet />
                </div>
            </>
        );
    }
}

export default Layout;