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

const NumFormat = ({num}) =>{
  return (                    
  <Text fontWeight='bold'>
    {(num>=100)?Intl.NumberFormat('en-us',{minimumFractionDigits: 1,maximumFractionDigits: 1,notation: "compact",}).format(num):num}
  </Text>);
}

RepositoryItem = ({item}) =>{
    return(
        <View style={styles.container}>
            <View style={styles.info}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: item.ownerAvatarUrl,
                    }}
                />

                <View style={styles.detail}>
                    <Text fontWeight='bold'>{item.fullName}</Text>
                    <Text>{item.description}</Text>
                    <Text style={styles.language} color='onDark'>{item.language}</Text>
                </View>
            </View>

            <View style={styles.info}>
                <View style={styles.stats}>
                    <NumFormat num = {item.stargazersCount}/>
                    <Text>Stars</Text>
                </View>
                <View style={styles.stats}>
                  <NumFormat num = {item.forksCount}/>
                  <Text>Forks</Text>
                </View>
                <View style={styles.stats}>
                  <NumFormat num = {item.reviewCount}/>
                  <Text>Reviews</Text>
                </View>
                <View style={styles.stats}>
                  <NumFormat num = {item.ratingAverage}/>
                  <Text>Rating</Text>
                </View>
                
            </View>
            
        </View>
    );
};

export default RepositoryItem;
