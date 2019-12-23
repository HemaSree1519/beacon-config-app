import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import BeaconScanner from '../components/BeaconScanner';
import ListOfBeacons from '../components/ListOfBeacons';
import Beacon from '../components/Beacon';
import ConfiguredDetails from '../components/ConfiguredDetails';
const Navigator = createStackNavigator(
  {
    BeaconScanner: BeaconScanner,
    ListOfBeacons: ListOfBeacons,
    Beacon: Beacon,
    ConfiguredDetails: ConfiguredDetails,
  },
  {
    initialRouteName: 'BeaconScanner',
  },
);
let AppContainer;
export default (AppContainer = createAppContainer(Navigator));
