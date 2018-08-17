import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { testApplication } from '../actions';

class TestComponent extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.testApplication()}>
          <Text> {this.props.counter} </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps, { testApplication })(TestComponent)
