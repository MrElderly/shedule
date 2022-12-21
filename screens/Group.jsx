import axios from 'axios';
import {
  SafeAreaView,
  Alert,
  FlatList,
  RefreshControl,
  TouchableOpacity,     
        } from 'react-native';
import { GroupInfo } from '../components/GroupInfo';
import React from 'react';
import { Loading } from '../components/Loading';
import styled from "styled-components";


export const Group = ( {route, navigation}) => {

  const [items, setItems] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState();
  const { id, shortName } = route.params;

  const fetchPosts = () => {
    setIsLoading(true);
    axios
    //http://localhost:2000/api/v3/faculty/findBy/partOfName?name=
    //https://635eb7feed25a0b5fe4bd24e.mockapi.io/Post
   // https://635eb7feed25a0b5fe4bd24e.mockapi.io/tt
    .get('http://172.20.10.3:2000/api/v3/team/findBy/facultyShortName?facultyShortName='  +  shortName )
      .then(({ data }) => {
        console.log(data);
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

  React.useEffect(() => fetchPosts(), []);

  const handlePress = () => Alert.alert("Test", "This is a test",
   [ { text: "Yes", onPress: () => console.log("Yes") },
    { text: "No", onPress: () => console.log("No") } ]);

  const handlePress2 = () => Alert.prompt("Test", "This is a test",
   test => console.log(test));

if (isLoading) {
  return (
   <Loading/>
  );
}


  return (
    <SafeAreaView  >
         {     <FlatList
         refreshControl= { <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} /> }
        data={items}
        renderItem={({ item }) =>
        <TouchableOpacity onPress={() =>
         navigation.navigate('SubGroup', {id:item.id, title: item.fullName, shortName: item.shortName})}>
        <GroupInfo 
        title={item.fullName} 
        shortName={item.shortName}
        />
      </TouchableOpacity>
      }
       
      />}

    </SafeAreaView>
  );
}

;

 