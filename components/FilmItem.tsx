import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {NavigationProp} from "@react-navigation/native";

interface Props {
    film: {
        episode_id: number;
        title: string;
        poster_path: string;
        original_title: string;
        opening_crawl: string;
        release_date: string;
    },
    id: number,
    navigation: NavigationProp<any>
}

export const FilmItem = ({film, id, navigation}: Props) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/react.png')}/>
            <View style={styles.containerText}>
                <View style={styles.headerText}>
                    <Text style={styles.titleFilm}>{film.title}</Text>
                    <Text style={styles.average}>Film n.{film.episode_id}</Text>
                </View>
                <Text style={styles.description} numberOfLines={5}>{film.opening_crawl}</Text>
                <View style={styles.footerText}>
                    <Text style={styles.date}>Sorti le {film.release_date}</Text>
                    <Pressable onPress={() => navigation.navigate('FilmDetails', {
                        filmId: id + 1,
                        title: film.title
                    })}>
                        <Text style={styles.link}>Voir plus</Text>
                    </Pressable>
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
        paddingHorizontal: 5,
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
    },
    titleFilm: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 19,
        fontWeight: "bold",
    },
    average: {
        fontSize: 14,
        paddingLeft: 15
    },
    description: {
        flex: 1,
        color: '#666666',
        fontStyle: 'italic',
        fontSize: 13
    },
    footerText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date: {
        fontSize: 12,
    },
    link: {
        fontSize: 12,
        color: '#007AFF'
    }
})
