import { StyleSheet, Text, View,Image } from 'react-native';
import { Route, Routes, Navigate, Router, NativeRouter } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../src/theme';
import SignIn from './SignIn';

const Main = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.headerBar}> 
        
        <AppBar />
        <Routes>
            <Route path="/repo" element={<View style ={styles.contents}><RepositoryList/></View>} />
            <Route path="/signin" element={<View style ={styles.contents}><SignIn /></View>} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
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

export default Main;