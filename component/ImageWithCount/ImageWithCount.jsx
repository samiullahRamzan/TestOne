import { View, Text,Image, StyleSheet, } from 'react-native'
import React from 'react'
import Svg, { Circle } from 'react-native-svg';

const ImageWithCount = ({ imageSource, count }) => {
  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.circleContainer}>
        <Svg height="40" width="40">
          <Circle cx="20" cy="20" r="20" fill="red" />
        </Svg>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative',
    },
    // image: {
    //   width: 300,
    //   height: 300,
    //   // Adjust according to your image dimensions
    // },
    circleContainer: {
      position: 'absolute',
      top: 10, // Adjust the position as needed
      right: 10, // Adjust the position as needed
      justifyContent: 'center',
      alignItems: 'center',
      width: 40,
      height: 40,
    },
    countText: {
      position: 'absolute',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 14,
    },
  });

export default ImageWithCount