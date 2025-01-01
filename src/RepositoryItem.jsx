import {Text,View} from 'react-native';

RepositoryItem = (item) =>{
    console.log(item);
    return(
        <View>
            <Text>Full name: {item.item.fullName}</Text>
            <Text>Description: {item.item.description}</Text>
            <Text>Language: {item.item.language}</Text>
            <Text>Stars: {item.item.stargazersCount}</Text>
            <Text>Forks: {item.item.forksCount}</Text>
            <Text>Reviews: {item.item.reviewCount}</Text>
            <Text>Rating: {item.item.ratingAverage}</Text>
        </View>
    );
};

export default RepositoryItem;
