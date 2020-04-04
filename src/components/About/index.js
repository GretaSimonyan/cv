import React from "react";
// import styled from 'styled-components';
import {GoPerson} from "react-icons/go";
import {
    View
}from '../../styled';

function About (){
    return(
        <View id='about' flex p='10px 0px' c='white' bgColor='#96b952' justC='center' alignI='center' boxS='border-box'>
            <View w='50%' flex alignI="center" fD="column">
                <View>
                    <h1>About Me</h1>
                </View>
                <View fontSize='20px' lh='1.65' tAlign='justify'>
                    For now I work on a project, where I create a website in programing language JS with use React library
                    and styled-components technology, you can see it in my GitHub profile.Also, I studied programming at the 
                    university for a year, the topic of my diploma was "Developing an Automatic Fluid Controller", which I 
                    presented in Assembler programming language. It was rated excellent by the Admissions Committee․
                </View>
                <View>
                    Interests/Hobies
                    - Photography
                    - Drawing
                    - Reading Detective Books 
                    - Photoshop
                </View>
            </View>
        </View>
    )
}

export default About;