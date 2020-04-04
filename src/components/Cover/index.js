import React from "react";
import cov from '../../assets/images/landing1.jpg';
import Header from '../Header';
import Contact from '../Contact';
import Greeting from '../Greeting';
import {View} from '../../styled';

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
                // justC='space-around'
                fD='column'
                >
                    <View alignS='flex-start'>
                        <Contact/>
                    </View>
                    <View alignS='center'>
                        <Greeting/>
                    </View>
                    <View alignS='flex-end'>
                        <Header/>
                    </View>
            </View>
        </View>
    )
}

export default Cover;