
import styled from "styled-components/native";

const PostView = styled.View`
flex-direction: row;
padding: 10px;
padding-left: 20px;
border-bottom-width: 1px;
border-bottom-color: rgba(0,0,0,0.1);
border-bottom-style: solid;
border-top-width: 1px;
border-top-color: rgba(0,0,0,0.1);
border-top-style: solid;
`;

const PostImage = styled.Image`
width: 80px;
height: 80px;
border-radius: 50px;
margin-right: 15px;
`;

const PostTitle = styled.Text`
font-size: 16px;
font-weight: bold;
margin-bottom: 3px;
`;

const PostDetails = styled.View`
flex: 1;
justify-content: center;
`;

const PostDate = styled.Text`
font-size: 12px;
color: #999;
`;


export const TeacherInfo = ({firstName, secondName, thirdName}) => {
    return (
        <PostView>
        <PostDetails>
        <PostTitle>{secondName}</PostTitle>
        <PostTitle>{firstName}</PostTitle>
        <PostTitle>{thirdName}</PostTitle>
        </PostDetails>
      </PostView>
      )
}