import { View, StyleSheet,Pressable } from 'react-native';
import Text from './Text';

const AppBarTab =({txt}) =>{
    return(
        <Pressable onPress = {()=>console.log('pressed')}>
        <Text fontSize = 'subheading' fontWeight = 'bold' color = 'onDark' > {txt}</Text>
        </Pressable>
    );
}
export default AppBarTab;