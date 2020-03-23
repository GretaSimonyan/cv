import React from "react";
import styled from 'styled-components';
import {
    View
}from '../../styled';

const Link = styled.a`
    margin: 15px;
    padding: 5px 8px;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
`;
function Header (){
    return(
        <View flex>
            <View><Link href='#about'>About</Link></View>
            <View><Link href='#collections'>Collections</Link></View>
            <View><Link href='#contact'>Contact</Link></View>
        </View>
    )
}

export default Header;