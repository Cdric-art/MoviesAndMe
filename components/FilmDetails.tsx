import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {apiFetch} from "./api/apiFetch";
import {wait} from "./libs/wait";
import {StatusBar} from "expo-status-bar";

export const FilmDetails = ({route}) => {

    const {filmId} = route.params
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        apiFetch(`films/${filmId}/`)
            .then(response => setData(response))
            .catch(err => console.log(err))

        wait(1000)
            .then(() => setIsLoading(true))
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar/>
            {data && isLoading ? (
                <SafeAreaView>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Image style={styles.image} source={require('../assets/react.png')}/>
                        <Text style={styles.description}>{data.opening_crawl}</Text>
                    </ScrollView>
                </SafeAreaView>
            ) : (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#000"/>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 10
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    description: {
        fontSize: 20,
        width: '100%'
    },
    image: {
        alignSelf: "center",
        marginVertical: 20,
        width: 100,
        height: 150,
    }
})

