import React from "react";
import styled from 'styled-components';
import {
    View
}from '../../styled';

const Link = styled.a`
    margin: 15px;
    padding: 5px 8px;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 3px;
`;

function Header (){
    return(
        <View flex fD='column' alignI="center" justC='center' >
            <View><Link href='#about'>About</Link></View>
            <View><Link href='#skills'>My skills</Link></View>
            <View><Link href='#exp/ed'>Experience/Education</Link></View>
            <View><Link href='#portfolio'>Portfolio</Link></View>
            <View><Link href='#contact'>Contact</Link></View>
        </View>
    )
}

export default Header;