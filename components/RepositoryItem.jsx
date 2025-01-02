import {View,Image,StyleSheet} from 'react-native';
import Text from './Text';
import theme from '../src/theme';
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
  },

  info:{
    direction:'flex',
    flexDirection: 'row',
    padding:10,
  },

  detail:{
    flexShrink:1,
    paddingLeft:10,
    alignItems:'flex-start',
  },

  stats:{
    paddingLeft:10,
    justifyContent: 'center', 
    alignItems: 'center',
    textAlign:'center',
    margin:'auto',
  },
  
  language:{
    backgroundColor: theme.colors.primary,
    padding:5,
    borderRadius: 10,
  },

  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  
});

RepositoryItem = (item) =>{
    return(
        <View style={styles.container}>
            <View style={styles.info}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: item.item.ownerAvatarUrl,
                    }}
                />

                <View style={styles.detail}>
                    <Text fontWeight='bold'>{item.item.fullName}</Text>
                    <Text>{item.item.description}</Text>
                    <Text style={styles.language} color='onDark'>{item.item.language}</Text>
                </View>
            </View>

            <View style={styles.info}>
                <View style={styles.stats}>
                    <Text fontWeight='bold'>{item.item.stargazersCount}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.stats}>
                    <Text fontWeight='bold'>{item.item.forksCount}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.stats}>
                    <Text fontWeight='bold'>{item.item.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.stats}>
                    <Text fontWeight='bold'>{item.item.ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
                
            </View>
            
        </View>
    );
};

export default RepositoryItem;
