import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import {StyleSheet} from 'react-native'
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
import { Post } from '../components/Post';
import React from 'react';
import { Loading } from '../components/Loading';
import { TeacherInfo} from '../components/TeacherInfo';

const styles = StyleSheet.create({
  bar: {
    background: '#ff0000'
  }
})

export const ClassRoom = ({navigation}) => {

  const [items, setItems] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState();

  const fetchPosts = () => {
    setIsLoading(true);
    axios
    //http://localhost:2000/api/v3/faculty/findBy/partOfName?name=
    //https://635eb7feed25a0b5fe4bd24e.mockapi.io/Post
   // https://635eb7feed25a0b5fe4bd24e.mockapi.io/tt
    .get('http://172.20.10.3:2000/api/v3/lesson/list/rooms')
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
      <StatusBar style={styles.bar}></StatusBar>
    {     <FlatList
    refreshControl= { <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} /> }
   data={items}
   renderItem={({ item }) =>
   <TouchableOpacity onPress={() =>
    navigation.navigate('FullPost3', {id:item.id,  roomNumber: item.roomNumber, roomOptional: item.roomOptional})}>
   <TeacherInfo 
   firstName={item.roomNumber + item.roomOptional} 
   />
 </TouchableOpacity>
 }
  
 />}

</SafeAreaView>
  );
}

;
