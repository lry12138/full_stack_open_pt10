import { View, StyleSheet,Pressable,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';



const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight*2,
    backgroundColor: '#24292e',
    justifyContent:'center',
    padding:20,
    
  },
  scrollView:{
    flexGrow:1,
    flexDirection:'row',
    justifyContent:'space-evenly',
  }
});

const AppBar = () => {
  return(
  <View style={styles.container}>
    <ScrollView horizontal
     contentContainerStyle = {styles.scrollView}>
      
        <AppBarTab txt='Repository' url="/repo"/>
        <AppBarTab txt='Sign In' url="/signin"/>
    </ScrollView>
  </View>
  );
};

export default AppBar;