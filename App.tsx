import React from 'react';
import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from 'react-native';
import {Search} from "./components/Search";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar/>
            <Search/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#fff',
    },
});
