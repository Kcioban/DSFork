import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        width: '80%',
        padding: 10,
        backgroundColor: '#666',
        alignItems: 'center',
        color: '#fff',
        borderRadius: 5,
        shadowOpacity: 0.3,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    textButton: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
    }
});