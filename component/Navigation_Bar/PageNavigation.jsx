import { View, StyleSheet, Image, Text,ScrollView } from 'react-native'
import * as React from 'react'
import PageNavigation_Style from './PageNavigation_Style.js';

import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { faHome, faBell, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { FaHome } from "react-icons/fa";

import App from '../MainSlider/ImageSlider.jsx';
import Notification from '../Notification/Notification.jsx';
import Post_Upload from '../Post_Upload/Post_Upload.jsx';
import Profile from '../Profile/Profile.jsx';

enableScreens();
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

    return (
        <ScrollView virtical={true}>
        <SafeAreaView style={{ flex: 1 }}>
            {/* <View style={(styles.fixedBottomContent, styles.tabBarStyle)}> */}
                <View style={{ flex: 1 }}>
                    <Tabs.Navigator screenOptions={{
                        // showlabel: false,
                        Style: {
                            position: 'absolute',
                            bottom: 25,
                            left: 20,
                            right: 20,
                            elevation: 0,
                            backgroundColor: '#ffffff',
                            borderRadius: 15,
                            height: 90,
                        }
                        //tabBarShowLabel: false,
                    }
                    } style={(styles.shadow)}>
                        <Tabs.Screen name="Home" component={App}
                            options={{
                                tabBarIcons: ({ focused }) => (
                                    <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                        <Ionicons name="home" color={tintColor} size={25} />

                                        {/* <FontAwesomeIcon
                                    icon={faHome}
                                    size={25}
                                    color={focused ? '#e32f45' : '#748c94'}
                                /> */}
                                        <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }}>
                                            HOME
                                        </Text>
                                    </View>
                                )
                            }}
                        />
                        <Tabs.Screen name="Noti" component={Notification} />
                        <Tabs.Screen name="Post_upload" component={Post_Upload} />
                        <Tabs.Screen name="Profile" component={Profile} />
                    </Tabs.Navigator>
                </View>
            {/* </View> */}
        </SafeAreaView>
        </ScrollView>
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