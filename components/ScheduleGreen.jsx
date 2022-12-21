import React from "react";
import { View } from "react-native";
import styled from "styled-components";


const PostView = styled.View`
flex-direction: row;
padding: 5px;
border-bottom-width: 1px;
border-bottom-color: rgba(0,0,0,0.1);
border-bottom-style: solid;
background-color: #50d37b66;
`;

const PostTime = styled.Text`
width: 45px;
height: 50px;
font-size: 16px;
margin-right: 15px;
border-right-width: 1px;
border-right-color: rgba(0,0,0,0.1);
border-right-style: solid;
`;

const PostTitle = styled.Text`
font-size: 16px;
font-weight: bold;
margin-bottom: 1px;
`;

const PostDetails = styled.View`
flex: 1;
justify-content: center;
`;

const PostDate = styled.Text`
font-size: 12px;
color: #727272;
`;




export const ScheduleGreen = ( {time, name, teacher}) => {
    return(
    
            <PostView>
               
            <PostTime>{time}</PostTime>
            <PostDetails>
            <PostTitle>{name}</PostTitle>
            <PostDate>{teacher}</PostDate>
            </PostDetails>
          </PostView>

          
    ) 
}
