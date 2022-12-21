import React from "react";
import { View } from "react-native";
import styled from "styled-components";

const PostTitleDay = styled.Text`
font-size: 16px;
margin-bottom: 3px;
text-align: center;
color: red;

`;
const DayView = styled.View`
   border-bottom-width: 1px;
border-bottom-color:  #00000018;
border-bottom-style: solid; 
`

export const ScheduleDay = ( {day, route, navigation}) => {
    return(
        <DayView>
        <PostTitleDay>{day}</PostTitleDay>
        </DayView>
    ) 
}
