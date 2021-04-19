import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, FlatList, Image, StyleSheet, TextInput, View} from 'react-native';
import {FilmItem} from './FilmItem';
import {apiFetch} from './api/apiFetch';
import {wait} from "./libs/wait";

export function Search() {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        apiFetch('')
            .then(response => setData(response.results))
            .catch(err => console.log(err))

        wait(2000)
            .then(() => setIsLoading(true))
    }, [])

    return (
        <View style={{flex: 1}}>
            <TextInput style={styles.textInput} placeholder='Titre du film'/>
            <Button color='#000' title='Rechercher' onPress={(e) => console.log(e)}/>
            <Image style={styles.logoSearch} source={require('../assets/icons8-search-64.png')}/>
            {data && isLoading ? (
                <FlatList
                    data={data}
                    renderItem={({item}) => <FilmItem film={item}/>}
                    keyExtractor={item => item.episode_id.toString()}
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
