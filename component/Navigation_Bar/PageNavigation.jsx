import { View, StyleSheet, Image, Text,ScrollView } from 'react-native'
import * as React from 'react';

//import { enableScreens } from 'react-native-screens';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Feather';
import Home from "../Home/Home.jsx";
import Notification from '../Notification/Notification.jsx';
import Post_Upload from '../Post_Upload/Post_Upload.jsx';
import Profile from '../Profile/Profile.jsx';

//enableScreens();
const Tabs = createBottomTabNavigator();

// const tabBarOptions = {
//     // tabBarActiveTintColor: 'tomato',
//     // tabBarInactiveTintColor: 'green',
//     showlabel: false,
//     style: {
//         position: 'absolute',
//         bottom: 25,
//         left: 20,
//         right: 20,
//         elevation: 0,
//         backgroundColor: '#ffffff',
//         borderRadius: 15,
//         height: 90,
//     }
// }

const PageNavigation = () => {

    
    // screenOptions={{
    //     // showlabel: false,
    //     Style: {
    //         position: 'absolute',
    //         bottom: 25,
    //         left: 20,
    //         right: 20,
    //         elevation: 0,
    //         backgroundColor: '#ffffff',
    //         borderRadius: 15,
    //         height: 90,
    //     }
    // }
    // } style={(styles.shadow)}
    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Home" component={Home} 
                options={{headerShown:false,
                      
                        tabBarIcon: (tabinfo) => {
                                return <Icon name='home' color={'purple'}  size={25}/>  
                        }
                   }} 
            />
            <Tabs.Screen name="Noti" component={Notification} />
            <Tabs.Screen name="Post_upload" component={Post_Upload} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
             
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    // tabBarStyle: {
    //     position: 'relative',
    //     bottom: -30,
    //     left: 20,
    //     right: 20,
    //     elevation: 0,
    //     backgroundColor: '#ffffff',
    //     borderRadius: 15,
    //     height: 90,
    //     display:'flex',
    // },
    // fixedBottomContent: {
    //     position: 'absolute',
    //     bottom: 0,
    //     left: 0,
    //     right: 0,
    //     backgroundColor: 'lightgray', // Optional: add background color
    //     padding: 10, // Optional: add padding
    //     alignItems: 'center', // Optional: center content horizontally
    // },
})

export default PageNavigation