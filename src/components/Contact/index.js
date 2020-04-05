import React from "react";
import styled from 'styled-components';
import {
    FiPhone,
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";
import {
    View
}from '../../styled';

const Link = styled.a`
    margin: 8px;
    padding: 5px;
    color: white;
    text-decoration: none;
    letter-spacing: 2px;
    fontSize: 17px;
`;

function Contact (){
    return(
        <View id='contact' c='white'>
            <Link href="https://github.com/GretaSS"><FiGithub/></Link>
            <Link href="https://www.linkedin.com/in/greta-simonyan-a20492158/"><FiLinkedin/></Link>
            <Link href="gsimonyan228@gmail.com"><FiMail/></Link>
            <Link href="#+374 93 069 263"><FiPhone/></Link>
        </View>
    )
}

export default Contact;