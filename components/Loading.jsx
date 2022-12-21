import { Text, SafeAreaView, ActivityIndicator} from "react-native";

export const Loading = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <ActivityIndicator size="large" color="#ffd000" />
    <Text>Загрузка...</Text>
  </SafeAreaView>
  )
}
