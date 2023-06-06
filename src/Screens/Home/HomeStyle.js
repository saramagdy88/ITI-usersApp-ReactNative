import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        flexDirection: 'row',
        marginHorizontal: 25,
        paddingHorizontal: 10,
    },
    btn: {
        margin: 'auto',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    btnTxt: {
        width: 100,
        backgroundColor: 'teal',
        textAlign: 'center',
        padding: 10,
        color: 'white',
        fontSize: 18,
        fontWeight: '500'
    },
    header: {
        paddingHorizontal: 18,
        paddingVertical: 12,
        fontSize: 22,
        backgroundColor: 'rgba(15, 150, 15, 0.5)',
        color: 'white'
    },
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 15,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.1)',
        paddingBottom: 8,
    },
    
});

export default styles;
