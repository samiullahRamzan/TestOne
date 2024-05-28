//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '../Card/Card';
import Search_Bar from '../Search_Bar/Search_Bar';
import ImageSlider from '../MainSlider/ImageSlider';

// create a component
const Home = () => {
    return (
        <View style={styles.container}>
            <View style={{marginBottom:50}}>
                <Card>
                    <Search_Bar />
                </Card>
            </View>
            <View>
                <Card>
                    <ImageSlider />
                </Card>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default Home;
