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
        flex: 1,
        paddingTop: 50,
        paddingBottom: 100,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});
