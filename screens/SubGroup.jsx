
import axios from 'axios';
import {
  SafeAreaView,
  Alert,
  Image,
  FlatList,
  RefreshControl,
  TouchableOpacity,     
} from 'react-native';
import { Post2 } from '../components/Post2';
import React from 'react';
import { Loading } from '../components/Loading';

export const SubGroup = ( {route, navigation}) => {

  const [isLoading, setIsLoading] = React.useState();
  const { id, shortName } = route.params;
if (isLoading) {
  return (
   <Loading/>
  );
}

const DATA = [
    {
      id: '2',
      title: '1 подгруппа',
    },
    {
      id: '3',
      title: '2 подгруппа',
    }
  ];


  return (
    <SafeAreaView  >
         {     <FlatList
         refreshControl= { <RefreshControl refreshing={isLoading}  /> }
        data={DATA}
        renderItem={({ item }) =>
        <TouchableOpacity onPress={() =>
         navigation.navigate('FullPost', {id: item.id, shortName: shortName})}>
        <Post2 
        title={item.title} 
        />
      </TouchableOpacity>
      
      
      }
       
      />}
         

    </SafeAreaView>
  );
};