import { Text } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import Animated, { SlideInRight } from 'react-native-reanimated';
import styles from './styles';

export default function MenuNovo({ navigation }) {
    const toggleNovo = () => {
        navigation.navigate('Detalhes');
    }
    return (
        <Animated.View
            entering={SlideInRight.duration(3000)}
            style={styles.container}>
            <Text onPress={toggleNovo} style={styles.icon}>
                <Ionicons
                    name={'person'}
                    size={30}
                    color={'white'}
                />
            </Text>
        </Animated.View>
    );
}