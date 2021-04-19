import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList, Image, StyleSheet, TextInput, View} from 'react-native';
import {FilmItem} from './FilmItem';
import {apiFetch} from './api/apiFetch';
import {wait} from "./libs/wait";
import {StatusBar} from "expo-status-bar";

export function Search({ navigation }) {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        apiFetch('films/')
            .then(response => setData(response.results))
            .catch(err => console.log(err))

        wait(2000)
            .then(() => setIsLoading(true))
    }, [])

    return (
        <View style={styles.container}>
            <StatusBar/>
            <View>
                <TextInput style={styles.textInput} placeholder='Titre du film'/>
                <Image style={styles.logoSearch} source={require('../assets/icons8-search-64.png')}/>
            </View>
            <Button color='#000' title='Rechercher' onPress={(e) => console.log(e)}/>
            {data && isLoading ? (
                <FlatList
                    data={data}
                    renderItem={({item, index}) => <FilmItem film={item} id={index} navigation={navigation}/>}
                    keyExtractor={item => item.episode_id.toString()}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#000"/>
                </View>
            )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    textInput: {
        height: 50,
        backgroundColor: '#dedede',
        borderColor: '#fff',
        borderRadius: 8,
        borderWidth: 0,
        paddingLeft: 15,
        marginBottom: 5
    },
    logoSearch: {
        position: "absolute",
        top: 10,
        right: 10,
        height: 30,
        width: 30,
        opacity: .5,
    },
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
