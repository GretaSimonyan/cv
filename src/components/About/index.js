import React from "react";
import {GoPerson} from "react-icons/go";
import {
    View
}from '../../styled';

function About (){
    return(
        <View id='about' flex justC='center' alignI='center' boxS='border-box'>
            <View w='75%'
                flex
                alignI="center"
                fD="column" 
                p='9px' 
                // bgColor='#f8ad44c4' 
                bgColor='white' 
                boxSh='0px 0px 10px 0px #f8f8f8' 
                bRad='5px 0px'
                >
                <View flex justC='center' alignI='center' c='#f8ad44c4'>
                    <GoPerson/>
                    <h1>About Me</h1>
                </View>
                <View fontSize='20px' lh='1.65' tAlign='justify'>
                    For now I work on a project, where I create a website in programing language JS with use React library
                    and styled-components technology, you can see it in my GitHub profile.Also, I studied programming at the 
                    university for a year, the topic of my diploma was "Developing an Automatic Fluid Controller", which I 
                    presented in Assembler programming language. It was rated excellent by the Admissions Committee․
                </View>
                <View fontSize='20px' lh='1.65'>
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