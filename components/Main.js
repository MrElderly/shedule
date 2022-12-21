import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";


export default function Main({ navigation }) {

    const loadScene = () => {
        navigation.navigate('ClassRoom');
    }

    const [news, setNews] = React.useState([
        { id: 1, title: 'Новость 1', text: 'Текст новости 1' },
    ]);

    return(
        <View style={styles.container}>
            <Text>Main</Text>
            <Button title="Go to ClassRoom" onPress={loadScene} />
            </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});