import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { FullPostScreen } from './FullPost';
import { HomeScreen } from './HomeScreen';
import { Faculties} from './Faculties';
import { ClassRoom} from './ClassRoom';
import { Teacher} from './Teacher';
import { Group} from './Group';
import { SubGroup} from './SubGroup';
import { FullPostScreen2} from './FullPost2';
import { FullPostScreen3} from './FullPost3';



// <Routes>....</Routes> => Stack.Navigator

export const Navigation = () => {
    const Stack = createStackNavigator();
  return (
    <NavigationContainer height="100%">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Главная',}}  />
        <Stack.Screen name="FullPost" component={FullPostScreen} options={{ title: 'Расписание' }} />
        <Stack.Screen name="FullPost2" component={FullPostScreen2} options={{ title: 'Расписание' }} />
        <Stack.Screen name="FullPost3" component={FullPostScreen3} options={{ title: 'Расписание' }} />
        <Stack.Screen name="Faculties" component={Faculties} options={{ title: 'Список факультетов' }} />
        <Stack.Screen name="Teacher" component={Teacher} options={{ title: 'Список преподавателей' }} />
        <Stack.Screen name="ClassRoom" component={ClassRoom} options={{ title: 'Список аудиторий' }} />
        <Stack.Screen name="Group" component={Group} options={{ title: 'Список групп' }} />
        <Stack.Screen name="SubGroup" component={SubGroup} options={{ title: 'Выбери подгруппу'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};