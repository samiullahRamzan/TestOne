import React, { useState } from 'react';
import { View, Image, Text, ScrollView } from 'react-native';
import Card from './component/Card/Card.jsx';
import Search_Bar from './component/Search_Bar/Search_Bar.jsx';
import ImageSlider from './component/MainSlider/ImageSlider.jsx';
import PageNavigation from './component/Navigation_Bar/PageNavigation.jsx';
import { NavigationContainer } from "@react-navigation/native";


// const slides = [
//   { image: require('./assets/170197658_1261199427652464_4401420973948881651_n.jpg'), caption: 'Caption Text' },
//   { image: require('./assets/178454201_1261195077652899_9035280234351532844_n.jpg'), caption: 'Caption Two' },
//   { image: require('./assets/178735472_1261198584319215_5068689612255949169_n.jpg'), caption: 'Caption Three' },
// ];

function App() {

  return (
    <ScrollView vertical={true}>
      <View>
        <Card>
          <Search_Bar />
        </Card>
        <Card>
          <ImageSlider />
        </Card>
        {/* <Image source={'https://cdn.pixabay.com/photo/2024/04/08/14/09/nature-8683570_960_720.jpg'} />
        <Image source={'../assets/170197658_1261199427652464_4401420973948881651_n.jpg'} /> */}

        <NavigationContainer>
          <PageNavigation />
        </NavigationContainer>


      </View>
    </ScrollView>
  );
}

export default App;
