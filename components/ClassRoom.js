import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


export default function ClassRoom({ navigation }) {
    return (
        <View style={styles.container}>
        <Text>ClassRoom</Text>
        <Button
            title="Go to Main"
            onPress={() => navigation.goBack()}
        />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});