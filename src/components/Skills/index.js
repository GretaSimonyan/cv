import React from "react";
// import styled from 'styled-components';
import {FiTarget} from "react-icons/fi"; 
import {
    View
}from '../../styled';

function Skills (){
    return(
        <View id='skills'>
            <View>
                <h1>My skills</h1>
                <View>
                    Languages: JavaScript
                    Libraries: React.js
                    Web Technologies: HTML, CSS,  Styled-components
                </View>
            </View>
        </View>
    )
}

export default Skills;