import React from 'react';
import SearchableDropDown from 'react-native-searchable-dropdown';
import {styles} from '../styles/Beacon.styles';
import {View, Text, TouchableOpacity} from 'react-native';
import {binCapacity, tareWeights, wasteSteams} from '../data/details';

export default class Beacon extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.getParam('params'),
      headerBackTitle: 'Back',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#9cc5cc',
        height: 50,
      },
    };
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <View>
          <Text style={{marginLeft: 10}}>Tare Weight </Text>
          <SearchableDropDown
            onTextChange={text => console.log(text)}
            onItemSelect={item => console.log(item)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
            itemStyle={styles.itemStyle}
            itemTextStyle={styles.itemTextStyle}
            itemsContainerStyle={styles.itemsContainerStyle}
            items={tareWeights}
            placeholder="Select"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <Text style={{marginLeft: 10}}>Bin Capacity </Text>
          <SearchableDropDown
            onTextChange={text => console.log(text)}
            onItemSelect={item => console.log(item)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
            itemStyle={styles.itemStyle}
            itemTextStyle={styles.itemTextStyle}
            itemsContainerStyle={styles.itemsContainerStyle}
            items={binCapacity}
            placeholder="Select"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <Text style={{marginLeft: 10}}>Waste Stream </Text>
          <SearchableDropDown
            onTextChange={text => console.log(text)}
            onItemSelect={item => console.log(item)}
            containerStyle={styles.containerStyle}
            textInputStyle={styles.textInputStyle}
            itemStyle={styles.itemStyle}
            itemTextStyle={styles.itemTextStyle}
            itemsContainerStyle={styles.itemsContainerStyle}
            items={wasteSteams}
            placeholder="Select"
            resetValue={false}
            underlineColorAndroid="transparent"
          />
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigate('ConfiguredDetails')}
            style={styles.button}>
            <Text style={styles.text}>Configure</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
