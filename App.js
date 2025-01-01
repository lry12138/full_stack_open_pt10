import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import RepositoryList from './components/RepositoryList';
import AppBar from './components/AppBar';
import theme from './src/theme';

export default function App() {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.headerBar}> 
        <AppBar />
      </View>
      <View style={styles.contents}>
        <RepositoryList />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
  },
  headerBar: {
    flexGrow: 1,
    
  },
  contents: {
    flexGrow: 1,
    backgroundColor: theme.colors.backgroundMain,
  },
});


