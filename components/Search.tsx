import React from 'react';
import {Button, StyleSheet, TextInput, View, Image, FlatList, Text} from 'react-native';
import { data } from '../data/filmsData';
import {FilmItem} from "./FilmItem";

export function Search() {
    return (
        <View>
            <TextInput style={styles.textInput} placeholder='Titre du film'/>
            <Button color='#000' title='Rechercher' onPress={(e) => console.log(e)}/>
            <Image style={styles.logoSearch} source={require('../assets/icons8-search-64.png')}/>
            <FlatList
                data={data}
                renderItem={({item}) => <FilmItem film={item}/>}
                keyExtractor={item => item.id.toString()}
            />
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
    }
})
