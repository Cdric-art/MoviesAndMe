import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {Search} from "./components/Search";
import {FilmDetails} from "./components/FilmDetails";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerStatusBarHeight: 30
            }}>
                <Stack.Screen name='Home' component={Search}/>
                <Stack.Screen
                    name='FilmDetails'
                    component={FilmDetails}
                    options={({ route }) => ({ title: route.params.title})}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

