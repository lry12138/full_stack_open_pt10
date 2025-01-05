import Text from './Text';
import {TextInput, Pressable, View ,StyleSheet} from 'react-native';
import { useFormik } from 'formik';
import theme from '../src/theme';
import * as yup from 'yup';

const initialValues ={
  username:"",
  password:"",
};

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required'),
  password: yup.string()
    .required('Password is required'),
});

const SignInForm = ({onSubmit}) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  })
  return (
    <View style={styles.container}>
      <TextInput
          value = {formik.values.username}
          style= {[styles.input,formik.errors.username?{borderColor: '#d73a4a'}:{}]}
          placeholder = "Username"
          onChangeText={formik.handleChange('username')}
        />
        {formik.touched.username && formik.errors.username && (
        <Text style={styles.errorMsg}>{formik.errors.username}</Text>
        )}

        <TextInput
          value = {formik.values.password}
          style= {[styles.input, formik.errors.password?{borderColor: '#d73a4a'}:{}]}
          placeholder = "Password"
          secureTextEntry
          onChangeText={formik.handleChange('password')}
        />
        {formik.touched.password && formik.errors.password && (
        <Text style={styles.errorMsg}>{formik.errors.password}</Text>
        )}
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
  },

  errorMsg:{
    paddingLeft: 12,
    color: '#d73a4a',
  }
});

export default SignIn;