import React from "react";
import styled from 'styled-components';
import {
    View
}from '../../styled';
import {
    GoPerson, 
    GoMortarBoard
} from "react-icons/go";
import {
    FiBriefcase as Port,
    FiTarget as Skil,
    FiPhone 
} from "react-icons/fi";

const HeadIcon = styled(View)`
    margin: 5px;
    padding: 5px 8px;
    color: white;
    letter-spacing: 2px;
    font-size: 15px;
    &:hover{
        text-shadow: 2px 2px 4px rgba(45,0,0,.4);
    }
`;

function Header (){
    return(
        <View flex fD='column' alignI="center" justC='center' >
            <HeadIcon id='#about'><GoPerson/><View op='0'>About</View></HeadIcon>
            <HeadIcon id='#skills'><Skil/><View>My skills</View></HeadIcon>
            <HeadIcon id='#exp/ed'><GoMortarBoard/><View>Experience/Education</View></HeadIcon>
            <HeadIcon id='#portfolio'><Port/><View>Portfolio</View></HeadIcon>
            <HeadIcon id='#contact'><FiPhone/><View>Contact</View></HeadIcon>
        </View>
    )
}

export default Header;