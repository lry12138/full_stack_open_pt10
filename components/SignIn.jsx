import Text from './Text';
import {TextInput, Pressable, View ,StyleSheet} from 'react-native';
import { useFormik } from 'formik';
import theme from '../src/theme';

const initialValues ={
  username:"",
  password:"",
};

const SignInForm = ({onSubmit}) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  })
  return (
    <View style={styles.container}>
      <TextInput
          value = {formik.values.username}
          style= {styles.input}
          placeholder = "Username"
          onChangeText={formik.handleChange('username')}
        />
        <TextInput
          value = {formik.values.password}
          style= {styles.input}
          placeholder = "Password"
          secureTextEntry
          onChangeText={formik.handleChange('password')}
        />
        <Pressable style= {styles.button} onPress = {formik.handleSubmit}>
          <Text color='onDark'>Submit</Text>
        </Pressable>
      
    </View>
  );
};

const SignIn = () =>{
  const onSubmit = values =>{
    console.log(values)
  };

  return (
    <SignInForm onSubmit={onSubmit} />
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: theme.colors.backgroundMain,
    padding: 10,
    borderRadius:10,
    
  },
  button:{
    height: 40,
    margin: 12,
    padding: 10,
    borderRadius:10,
    backgroundColor: theme.colors.primary,
    alignItems:"center",
  }
});

export default SignIn;