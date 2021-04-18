import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

interface Props {
    film: {
        id: number;
        vote_average: number;
        title: string;
        poster_path: string;
        original_title: string;
        overview: string;
        release_date: string;
    }
}

export const FilmItem = ({film}: Props) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/react.png')}/>
            <View style={styles.containerText}>
                <View style={styles.headerText}>
                    <Text style={styles.titleFilm}>{film.title}</Text>
                    <Text style={styles.average}>{film.vote_average}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        paddingLeft: 5,
        paddingRight: 5,
    },
    image: {
        width: 100,
        height: 150,
    },
    containerText: {
        flex: 1,
        paddingLeft: 10,
    },
    headerText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleFilm: {
        flex: 1,
        flexWrap: 'wrap',
        fontWeight: "bold",
    },
    average: {
        fontSize: 10,
        zIndex: 1,
    }
})
