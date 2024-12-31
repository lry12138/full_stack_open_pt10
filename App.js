import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RepositoryList from './src/RepositoryList';

export default function App() {
  return (
    <View style={styles.container}>
      <RepositoryList />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const HelloWorld = props =>{
  return <Text>Hello World!</Text>
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
