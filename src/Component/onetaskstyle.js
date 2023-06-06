import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mapContainer: {
        flexDirection: 'row',
        backgroundColor: '#1EB18C',
        marginVertical: 5,
        marginHorizontal: 22,
        borderRadius: 40,
    },
    mapElement: {
        textAlign: 'left',
        fontSize: 18,
        marginHorizontal: 10,
        marginVertical: 5,
        paddingHorizontal: 25,
        paddingVertical: 15,
        fontWeight: '300'
    },
    checkbox: {
        margin: 0,
    },
    chkTxt: {
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 5,
        paddingVertical: 15,
        fontWeight: '300'
    },
    checkAction: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    done: {
        textDecorationLine: 'line-through',
    }
})

export default styles;