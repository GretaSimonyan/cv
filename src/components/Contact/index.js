import React from "react";
// import styled from 'styled-components';
// import {
//     GoMarkGithub, 
//     GoMail
// } from "react-icons/go";
import {
    FiPhone,
    FiGithub,
    FiLinkedin,
    FiMail
} from "react-icons/fi";
import {
    View
}from '../../styled';

function Contact (){
    return(
        <View id='contact' c='white'>
            <View>
                <h1>Contact</h1>
            </View>
            <View>
                <View>Phone Number  •   +374 93 06 92 63 </View>
                <View>Gmail  •   gsimonyan228@gmail.com</View>
                <View>Linkedin  •  https://www.linkedin.com/in/greta-simonyan-a20492158/</View>
                <View>GitHub  •  https://github.com/GretaSS</View>
            </View>
        </View>
    )
}

export default Contact;