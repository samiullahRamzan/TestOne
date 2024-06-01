import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SlidesImages } from './SlidesImages';
import StylesSlider from './StylesSlider';


const ImageSlider = () => {

  const [activeImg, setActiveImg] = useState(0)

  const handlePre = () => {
    if (activeImg <= 0) {
      setActiveImg(SlidesImages.length - 1)
    } else {
      setActiveImg(activeImg - 1)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleNext();
    }, 4000);

    // Cleanup function to clear the timeout when the component unmounts or activeImg changes
    return () => {
      clearTimeout(timeout);
    }
  }, [activeImg]);

  const handleNext = () => {
    setActiveImg((activeImg + 1) % SlidesImages.length) //Stopped Infinait loop
  }

  return (
    <View style={{ flexDirection: 'row' }}>

      <TouchableOpacity onPress={handlePre} style={[StylesSlider.button,StylesSlider.buttonLeft]}>
        <Text style={StylesSlider.buttonText}>&#10096;</Text>
      </TouchableOpacity>
      <View style={StylesSlider.carousel}>
        <ScrollView horizontal={true}>
          {
            SlidesImages.map((item, i) => {
              return (
                <Image
                key={item.id}
                source={{ uri: item.url }}
                //count={`${i + 1}/${SlidesImages.length}`}
                style={[StylesSlider.imageStyle, activeImg === i ? StylesSlider.show : StylesSlider.hide]}/>
              )
            })
          }
        </ScrollView>
      </View>
      <TouchableOpacity onPress={handleNext} style={[StylesSlider.button,StylesSlider.buttonRight]}>
        <Text style={StylesSlider.buttonText}>&#10097;</Text>
      </TouchableOpacity>
    </View>

  );
}

export default ImageSlider

// {[StylesSlider.imageStyle, /*activeImg === i ? StylesSlider.show : StylesSlider.hide*/]}
// {{ StylesSlider: 'imageStyle', width: 200, height: 200 }}

// https://www.npmjs.com/package/react-native-image-slider-box