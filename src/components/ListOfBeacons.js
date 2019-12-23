import React from 'react';
import {View, FlatList, TouchableOpacity, Text} from 'react-native';
import {styles} from '../styles/ListOfBeacons.styles';

export default class ListOfBeacons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfBeacons: [
        {
          type: 'ibeacon-1',
          rssi: -23,
        },
        {
          type: 'ibeacon-2',
          rssi: -50,
        },
        {
          type: 'ibeacon-3',
          rssi: -55,
        },
        {
          type: 'ibeacon-4',
          rssi: -18,
        },
      ],
    };
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'List of beacons',
      headerBackTitle: 'Back',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#9cc5cc',
        height: 50,
      },
    };
  };
  renderBeacon(beacon) {
    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('Beacon', {params: beacon.item.type})
        }
        style={styles.separator}>
        <View style={styles.view}>
          <Text style={styles.type}>{beacon.item.type}</Text>
          <Text style={styles.rssi}>rssi: {beacon.item.rssi}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.state.listOfBeacons}
          renderItem={this.renderBeacon.bind(this)}
        />
      </View>
    );
  }
}
