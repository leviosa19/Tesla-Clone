import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height
    },
    image: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        resizeMode: 'cover'
    },
    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#5c5e62',
        fontSize: 16
    },
    subtitleCTA: {
        textDecorationLine: 'underline'
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }
})

export default styles