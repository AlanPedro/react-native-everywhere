import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Link } from '../utilities/routing/router';

class TestComponent extends Component {
  render() {
    return (
      <View>
        <Link to='/second'>
          <Text> To screen 2 </Text>
        </Link>
      </View>
    )
  }
}

export default TestComponent;
