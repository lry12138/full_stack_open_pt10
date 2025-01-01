import { View, StyleSheet,Pressable } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: Constants.statusBarHeight*2,
    backgroundColor: '#24292e',
    padding: 20,
  },
});

const AppBar = () => {
  return(
  <View style={styles.container}>
    <AppBarTab txt='Repositories'/>
  </View>
  );
};

export default AppBar;