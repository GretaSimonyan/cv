import React from "react";
import cov from '../../assets/images/landing1.jpg';
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
                    <View flex alignI="center" justC='center' fD='column' c='white'>
                        <Tada>
                            <View fontSize='15px'>
                                Hi , I'm 
                            </View>
                        </Tada>
                        
                        <Text fontSize='30px'>
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
            </View>
        </View>
    )
}

export default Cover;