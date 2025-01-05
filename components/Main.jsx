import { StyleSheet, Text, View,Image } from 'react-native';
import { Route, Routes, Navigate, Router, NativeRouter } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../src/theme';
import SignIn from './SignIn';

const Main = () => {
  return (
    <View style={styles.contents}>
      <View style={styles.headerBar}> 
        
        <AppBar />
        <Routes>
            <Route path="/repo" element={<RepositoryList/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerBar: {
    flexGrow: 1,
    
  },
  contents: {
    flexGrow: 1,
    backgroundColor: theme.colors.backgroundMain,
  },
});

export default Main;