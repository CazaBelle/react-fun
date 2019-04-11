import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../logo.png'
import styled from 'styled-components'

export default class Navbar extends Component {
    render (){
        return(
           <NavWrap className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
            <Link to='/' >
                <img src={logo} alt="store-tag" className='navbar-brand' width={50}/>
            </Link>
            <ul className="navbar-nav align-items-center" >
                <li className="nav-item ml-5">  
                    <Link to='/' className="nav-link ">
                        Clothing
                    </Link>
                </li>
            </ul>
            <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus" />
                    </span>
                    cart
                </ButtonContainer>
            </Link>
           </NavWrap>
        )
    }
}

const ButtonContainer = styled.button`
    text-transform: capitalize;
    background: transparent;
    border: red;
    `;

const NavWrap = styled.nav`
    .nav-link {
        color:white !important;
        font-size: 1.3rem;
    }
`;