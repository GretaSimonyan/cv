import React from "react";
import cov from '../../assets/images/3.jpg';
import Header from '../Header';
import Contact from '../Contact';
import Greeting from '../Greeting';
import About from '../About';
import {View} from '../../styled';

function Cover (){
    return(
        <View bgImg={cov} 
            h='100vh' 
            bgPos='center' 
            bgSize='cover' 
            bgRep='no-repeat' 
            flex
            alignI="center"
            justC='center'
            >
                <View w="90%" flex fD='column' justC='space-around'>
                    <View alignS='flex-start'>
                        <Contact/>
                    </View>
                    <View alignS='center'>
                        <Greeting/>
                    </View>
                    <View alignS='flex-end'>
                        <Header/>
                    </View>
                    <View alignS='center'>
                        <About/>
                    </View>
                </View>
                
        </View>
    )
}

export default Cover;