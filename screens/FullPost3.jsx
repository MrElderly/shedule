import React from "react";
import axios from "axios";
import { View, Text, FlatList, Alert, SafeAreaView, Pressable, TouchableOpacity  } from "react-native";
import styled from "styled-components";
import { Loading } from "../components/Loading";
import { Schedule} from "../components/Schedule";
import { Post} from "../components/Post";
import { ScheduleDay} from "../components/ScheduleDay";
import { ScheduleGreen} from "../components/ScheduleGreen";

const PostView = styled.View`
flex-direction: row;
padding: 20px;
border-bottom-width: 1px;
border-bottom-color:  rgba(0,0,0,0.1);
border-bottom-style: solid;
border-top-width: 1px;
border-top-color:  rgba(0,0,0,0.1);
border-top-style: solid;
`;

const PostTime = styled.Text`
width: 50px;
height: 50px;
font-size: 16px;
margin-right: 15px;
border-right-width: 1px;
border-right-color: #b0020218;
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


const DayCarousel = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  color: white;
`

const PostDate = styled.Text`
font-size: 16px;
color: #dbdbdb;
`;

const DayButton = styled.Pressable`
height:48px;
width:48px;
align-items: center;
justifyContent: center
  margin: 5px;
  padding: 10px;
  backgroundColor: black;
  border-radius: 50px;
`


let day= "MONDAY";
let dayRu = "Понедельник"

export const FullPostScreen3 = ( {route, navigation}) => {

  const [items, setItems] = React.useState(true);
  const [itemsG, setItemsG] = React.useState(true);
  const [itemsDay, setItemsDay] = React.useState(true);
    const [isLoading, setIsLoading] = React.useState(true);
    const { id, roomNumber, roomOptional} = route.params;

   let day= "MONDAY"

    const fetchPosts = (days, daysRu) => {
      setIsLoading(true);
      axios
      .get(`http://172.20.10.3:2000/api/v3/lesson/findBy/roomNumberAndRoomOptionalAndDayOfWeekAndGreenOrWhiteAndGeneral?roomNumber=${roomNumber}&roomOptional=${roomOptional}&dayOfWeek=${days}&isGreen=false`)
        .then(({ data }) => {
          day=days;
          dayRu=daysRu;

          //console.log(data);
          setItems(data);
        })
        .catch((error) => {
          console.log(error);
          Alert.alert('Ошибка', 'Не удалось загрузить данные');
        }).finally(() => {
          setIsLoading(false);
        }
        );
    };

    const fetchPosts2 = (days) => {
      setIsLoading(true);
      axios
      .get(`http://172.20.10.3:2000/api/v3/lesson/findBy/roomNumberAndRoomOptionalAndDayOfWeekAndGreenOrWhiteAndGeneral?roomNumber=${roomNumber}&roomOptional=${roomOptional}&dayOfWeek=${days}&isGreen=true`)
        .then(({ data }) => {
          day=days;
          //console.log(data);
          setItemsG(data);
        })
        .catch((error) => {
          console.log(error);
          Alert.alert('Ошибка', 'Не удалось загрузить данные');
        }).finally(() => {
          setIsLoading(false);
        }
        );
    };

   const  fetchPostsAll = () => {
    dayRu="Понедельник"
      fetchPosts("MONDAY", "Понедельник");
      fetchPosts2("MONDAY")
    }
  
    React.useEffect(() => fetchPostsAll(), []);

 


    if (isLoading) {
        return (
         <Loading />
        );
      }
   
    return (
    
    <SafeAreaView height="100%">
      <ScheduleDay
      day={dayRu}
      />
      {     <FlatList
        data={items}
        renderItem={({ item }) =>
        <TouchableOpacity onPress={() =>  Alert.alert(`${item.fullName}`, `${item.teacherSecondName} ${item.teacherFirstName} ${item.teacherThirdName}`)}>
      <Schedule
     time={item.timeStart.substring(0, 5) + item.timeEnd.substring(0, 5)}
     name={item.shortName+ " " + "(" +item.classRoomNumber + item.optionalClassRoomNumber +")"}
     teacher={item.teacherSecondNameAndInitials}
      />
      </TouchableOpacity>
    }
    
    />}
     {     <FlatList
        
        data={itemsG}
        renderItem={({ item }) =>
        <TouchableOpacity onPress={() =>  Alert.alert(`${item.fullName}`, `${item.teacherSecondName} ${item.teacherFirstName} ${item.teacherThirdName}`)}>
      <ScheduleGreen
     time={item.timeStart.substring(0, 5) + item.timeEnd.substring(0, 5)}
     name={item.shortName + " " + "(" +item.classRoomNumber + item.optionalClassRoomNumber +")"}
     teacher={item.teacherSecondNameAndInitials}
      />
      </TouchableOpacity>
    }
    
    />}
       <DayCarousel>

<DayButton   onPress={() => {fetchPosts("MONDAY", "Понедельник"), fetchPosts2("MONDAY")}}>
      <PostDate>{"Пн"}</PostDate>
  </DayButton>
  <DayButton   onPress={() => {fetchPosts("TUESDAY", "Вторник"),fetchPosts2("TUESDAY")}}>
      <PostDate>{"Вт"}</PostDate>
  </DayButton>
  <DayButton   onPress={() => {fetchPosts("WEDNESDAY", "Среда"),fetchPosts2("WEDNESDAY")}}>
      <PostDate>{"Ср"}</PostDate>
  </DayButton> 
  <DayButton   onPress={() => {fetchPosts("THURSDAY", "Четверг"),fetchPosts2("THURSDAY")}}>
      <PostDate>{"Чт"}</PostDate>
  </DayButton>
  <DayButton   onPress={() => {fetchPosts("FRIDAY", "Пятница"),fetchPosts2("FRIDAY")}}>
     <PostDate>{"Пт"}</PostDate>
  </DayButton>
  <DayButton  onPress={() => {fetchPosts("SATURDAY", "Суббота"),fetchPosts2("SATURDAY")}}>
     <PostDate>{"Сб"}</PostDate>
  </DayButton>
</DayCarousel>
    </SafeAreaView>

    )
}

export default FullPostScreen3;