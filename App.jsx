import React from 'react';
import PageNavigation from './component/Navigation_Bar/PageNavigation.jsx';
import { NavigationContainer } from '@react-navigation/native';



// const slides = [
//   { image: require('./assets/170197658_1261199427652464_4401420973948881651_n.jpg'), caption: 'Caption Text' },
//   { image: require('./assets/178454201_1261195077652899_9035280234351532844_n.jpg'), caption: 'Caption Two' },
//   { image: require('./assets/178735472_1261198584319215_5068689612255949169_n.jpg'), caption: 'Caption Three' },
// ];

function App() {

  return (
    <NavigationContainer>
      <PageNavigation />
    </NavigationContainer>
  );
}

export default App;
