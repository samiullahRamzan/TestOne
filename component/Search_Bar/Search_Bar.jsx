import { View, Text, StyleSheet } from 'react-native'
import * as React from 'react'
import { Searchbar } from 'react-native-paper';

const Search_Bar = () => {

    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.searchbarWrapper}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                    style={styles.searchbar}
                    //inputStyle={styles.input}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchbarWrapper: {
        width: '90%',
        marginLeft: 45,
    },
    searchbar: {
        borderRadius: 10,
        height: 50,
        justifyContent: 'center',
        backgroundColor:'#ededed',
    },

});

export default Search_Bar