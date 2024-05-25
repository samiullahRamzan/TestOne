import { StyleSheet, Dimensions } from 'react-native'

const { width: screenWidth } = Dimensions.get('window');

export default StyleSheet.create({
    carousel: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50%',
        width: screenWidth,
    },
    imageStyle: {
        width: screenWidth,
        height: 200,
        resizeMode: 'contain',
        objectFit:'fill',
    },
    show: {
        display: 'flex', // Replace 'block' with 'flex' for React Native
    },
    hide: {
        display: 'none',
    },
    button: {
        backgroundColor: '#333131',
        cursor: 'pointer',
        opacity: 0.8,
        padding: 10,
        marginHorizontal: -8,
        justifyContent: 'center',
        marginTop: 75,
        height: 50,
        borderRadius: 25,
        zIndex: 1, // Ensure the button is above the images
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonLeft: {
        left: 5,
    },
    buttonRight: {
        right: 5,
    },
});