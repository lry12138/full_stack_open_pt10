import { View, StyleSheet,Pressable } from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";

const AppBarTab =({txt,url}) =>{
    return(
        <View style={{margin:10,}}>
        <Link to={url}>
            <Text fontSize = 'subheading' fontWeight = 'bold' color = 'onDark' > {txt}</Text>
        </Link>
        </View>
        
    );
}
export default AppBarTab;