import {View,Image,StyleSheet} from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff',
  },

  info:{
    flex:1,
    flexDirection: 'row',
    padding:10,
  },

  detail1:{
    flex:1,
    paddingLeft:10,
  },

  detail2:{
    flex:1,
    paddingLeft:10,
    justifyContent: 'center', 
    alignItems: 'center',
    textAlign:'center',
  },
  
  tinyLogo: {
    width: 50,
    height: 50,
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
            <View style={styles.detail1}>
                <Text fontWeight='bold'>{item.item.fullName}</Text>
                <Text>{item.item.description}</Text>
                <Text>{item.item.language}</Text>
            </View>
            
            </View>
            <View style={styles.info}>
                <View style={styles.detail2}>
                    <Text fontWeight='bold'>{item.item.stargazersCount}</Text>
                    <Text>Stars</Text>
                </View>
                <View style={styles.detail2}>
                    <Text fontWeight='bold'>{item.item.forksCount}</Text>
                    <Text>Forks</Text>
                </View>
                <View style={styles.detail2}>
                    <Text fontWeight='bold'>{item.item.reviewCount}</Text>
                    <Text>Reviews</Text>
                </View>
                <View style={styles.detail2}>
                    <Text fontWeight='bold'>{item.item.ratingAverage}</Text>
                    <Text>Rating</Text>
                </View>
                
            </View>
            
        </View>
    );
};

export default RepositoryItem;