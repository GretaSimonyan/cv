import React from "react";
import {
    View,
    Text
}from '../../styled';
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';

function Greeting (){
    return(
        <View flex alignI="center" justC='center' fD='column' c='white'>
            <Tada>
                <View fontSize='20px' fontSize_m='13px' fontSize_s='10px'>
                    Hi , I'm 
                </View>
            </Tada>

            <Text fontSize='35px' fontSize_m='15px' fontSize_s='13px' >
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
    )
}

export default Greeting;