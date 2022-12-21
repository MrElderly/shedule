import React from "react";
import { View } from "react-native";
import styled from "styled-components";


const PostView = styled.View`
flex-direction: row;
padding: 5px;
border-bottom-width: 1px;
border-bottom-color: rgba(0,0,0,0.1);
border-bottom-style: solid;
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

const PostTitleDay = styled.Text`
font-size: 16px;
font-weight: bold;
margin-bottom: 3px;
align-items: center;
justify-content: center;
margin-left: 41%;
color: red;
`;

const PostDetails = styled.View`
flex: 1;
justify-content: center;
`;

const PostDetailsGreen = styled.View`
margin: 0;
padding: 0;
flex: 1;
justify-content: center;
background-color: green;
border-left-width: 1px;
border-left-color: rgba(0,0,0,0.1);
border-left-style: solid;
margin-left: -10px;
padding-left:20px;
`;

const PostDate = styled.Text`
font-size: 12px;
color: #727272;
`;





export const Schedule = ( {time, name, teacher, week}) => {
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
