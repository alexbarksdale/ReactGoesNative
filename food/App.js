import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import config from './config';

console.log(config.YELP_API);

const navigator = createStackNavigator(
    {
        Search: SearchScreen,
    },
    {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'Business Search',
        },
    }
);

export default createAppContainer(navigator);
