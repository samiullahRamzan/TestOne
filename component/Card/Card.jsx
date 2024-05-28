import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({ leftContent, rightContent, children }) => {
    return (
        <View style={styles.card}>
            <View style={styles.content}>
                {leftContent && <View style={styles.leftContent}>{leftContent}</View>}
                {rightContent && <View style={styles.rightContent}>{rightContent}</View>}
            </View>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 8,
        marginVertical: 4,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 5 },
        elevation: 2,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    leftContent: {
        flex: 1,
        marginRight: 8,
    },
    rightContent: {
        flex: 1,
        marginLeft: 8,
    },
});

export default Card