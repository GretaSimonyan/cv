import React from "react";
import cov from '../../assets/images/landing1.jpg';
import Header from '../Header';
import Contact from '../Contact';
import {
    View,
    Text
}from '../../styled';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';

function Cover (){
    return(
        <View>
            <View bgImg={cov} 
                h='40vw' 
                bgPos='center' 
                bgSize='cover' 
                bgRep='no-repeat' 
                flex
                alignI="center"
                justC='center'
                >
                    <Contact/>
                    <View flex alignI="center" justC='center' fD='column' c='white'>
                        <Tada>
                            <View fontSize='20px'>
                                Hi , I'm 
                            </View>
                        </Tada>
                        
                        <Text fontSize='35px'>
                            <Fade top big cascade>
                                Greta Simonyan
                            </Fade>
                        </Text>

                        <Text lh='3'> 
                            <Fade bottom>
                                Front-End Junior Developer
                            </Fade>
                        </Text>
                    </View>
                    <Header/>

            </View>
        </View>
    )
}

export default Cover;