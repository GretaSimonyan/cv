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
    display: flex;
    margin: 5px;
    padding: 5px 8px;
    color: white;
    letter-spacing: 2px;
    font-size: 20px;
    &:hover div{
        opacity: 1;
    }
`;

function Header (){
    return(
        <View flex fD='column' justC='center' >
            <HeadIcon>
                <GoPerson/>
                <View op='0'>About</View>
            </HeadIcon>
            <HeadIcon>
                <Skil/>
                <View op='0'>My skills</View>
            </HeadIcon>
            <HeadIcon>
                <GoMortarBoard/>
                <View op='0'>Experience/Education</View>
            </HeadIcon>
            <HeadIcon>
                <Port/>
                <View op='0'>Portfolio</View>
            </HeadIcon>
            <HeadIcon>
                <FiPhone/>
                <View op='0'>Contact</View>
            </HeadIcon>
        </View>
    )
}

export default Header;