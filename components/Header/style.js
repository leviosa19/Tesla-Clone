import { View, Text, StyleSheet } from 'react-native';

// define your styles
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20
    },
    logo: {
        width: 100,
        height: 20,
        resizeMode: 'contain'
    },
    menu: {
        width: 25,
        height: 25
    }
});

export default styles