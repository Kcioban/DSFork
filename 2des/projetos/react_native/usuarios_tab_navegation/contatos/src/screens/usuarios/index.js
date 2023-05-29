import { View, FlatList } from 'react-native';
import styles from './styles';
import users from '../../../mocks/usuarios';
import ItemList from '../../components/item';

export default function Usuarios() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        style={styles.list}
        renderItem={({ item }) => ItemList(item)}
      >
      </FlatList>
    </View>
  );
}