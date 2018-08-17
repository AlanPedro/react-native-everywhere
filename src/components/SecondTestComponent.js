import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Link } from '../utilities/routing/router';

import { getPosts } from '../actions';

class SecondTestComponent extends Component {

  _renderPosts = () => {
    const { posts } = this.props;
    return newPosts = _.map(posts, post => <li key={post.id}> {post.title} </li>)
  }

  render() {
    return (
      <View>
        <View>{this._renderPosts()}</View>
        <TouchableOpacity onPress={() => this.props.getPosts()}>
          <Text> Get Posts </Text>
        </TouchableOpacity>
        <Link to='/'>
          <Text> To screen 1 </Text>
        </Link>
      </View>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { getPosts })(SecondTestComponent)
