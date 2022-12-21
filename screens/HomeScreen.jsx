import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity, 
  StyleSheet    
        } from 'react-native';
import { Post } from '../components/Post';
import React from 'react';
import { Loading } from '../components/Loading';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1'
  },
  buttonsContainer: {
    padding: 10
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8
  }
});

export const HomeScreen = ({navigation}) => {

  const [items, setItems] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState();

  const DATA = [
    {
      id: "1",
      name: "Faculties",
      fullName: "Список факультетов",
      imageUrl: "https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-student-glyph-black-icon-png-image_691145.jpg"
     },
     {
      id: "2",
      name: "Teacher",
      fullName: "Список преподователей",
      imageUrl: "https://www.pngitem.com/pimgs/m/236-2363813_vector-theory-teacher-teacher-symbol-png-transparent-png.png"
     },
     {
      id: "3",
      name: "ClassRoom",
      fullName: "Список аудиторий",
      imageUrl: "https://www.petrinum.de/images/unterricht.JPG"
     }
  ];

  const fetchPosts = () => {
    
   
        setItems(DATA);
     console.log(items);
  };

  React.useEffect(() => fetchPosts(), []);

if (isLoading) {
  return (
   <Loading/>
  );
}


  return (
    <SafeAreaView  >
     <StatusBar
        animated={true}
        backgroundColor="#61dafb"
      />
         {     <FlatList
        data={items}
        renderItem={({ item }) =>
        <TouchableOpacity onPress={() =>
         navigation.navigate(item.name, {id:item.id, title: item.fullName})}>
        <Post 
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
