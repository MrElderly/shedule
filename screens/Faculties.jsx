import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import {
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
  Image,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,     
        } from 'react-native';
import { Post2 } from '../components/Post2';
import React from 'react';
import { Loading } from '../components/Loading';
import styled from "styled-components";


export const Faculties = ( {route, navigation}) => {

  const [items, setItems] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState();


  const fetchPosts = () => {
    setIsLoading(true);
    axios
    //http://localhost:2000/api/v3/faculty/findBy/partOfName?name=
    //https://635eb7feed25a0b5fe4bd24e.mockapi.io/Post
   // https://635eb7feed25a0b5fe4bd24e.mockapi.io/tt
    .get('http://172.20.10.3:2000/api/v3/faculty/findBy/partOfName?name=')
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
         navigation.navigate('Group', {id:item.id,  shortName: item.shortName})}>
        <Post2 
        title={item.fullName} 
        imageUrl={item.imageUrl}
        createdAt={item.createdAt}
        />
      </TouchableOpacity>
      }
       
      />}

    </SafeAreaView>
  );
}

;

 