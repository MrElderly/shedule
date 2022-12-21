
import styled from "styled-components/native";

const PostView = styled.View`
flex-direction: row;
padding: 10px;
border-bottom-width: 1px;
border-bottom-color: rgba(0,0,0,0.1);
border-bottom-style: solid;
border-top-width: 1px;
border-top-color: rgba(0,0,0,0.1);
border-top-style: solid;
`;

const PostImage = styled.Image`
width: 5px;
height: 80px;
border-radius: 50px;
margin-right: 15px;
`;

const PostTitle = styled.Text`
font-size: 18px;
font-weight: bold;
margin-bottom: 3px;
`;

const PostDetails = styled.View`
flex: 1;
justify-content: center;
`;

const PostDate = styled.Text`
font-size: 16px;
color: #999;
`;


export const GroupInfo = ({title, imageUrl, createdAt, shortName}) => {
    return (
        <PostView>
        <PostImage source={{uri: imageUrl}} />
        <PostDetails>
        <PostTitle>{title}</PostTitle>
        <PostDate>{shortName}</PostDate>
        </PostDetails>
      </PostView>
      )
}