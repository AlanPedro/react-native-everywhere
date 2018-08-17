import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from '../utilities/routing/router';

import { testApplication } from '../actions';

class SecondTestComponent extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.testApplication()}>
          <Text> {this.props.counter + 10} </Text>
        </TouchableOpacity>
        <Link to='/'>
          <Text> To screen 1 </Text>
        </Link>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  }
}

export default connect(mapStateToProps, { testApplication })(SecondTestComponent)
