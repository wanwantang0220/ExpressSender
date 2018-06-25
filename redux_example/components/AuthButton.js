import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

const AuthButton = ({ logout, loginScreen, isLoggedIn }) => (
  <Button
    title={isLoggedIn ? 'Log Out' : 'Open Login Screen'}
    onPress={isLoggedIn ? logout : loginScreen}
  />
);

AuthButton.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  loginScreen: PropTypes.func.isRequired,
};

/***
 * 传入所有state，返回指定的state数据
 * @param state
 * @returns {{isLoggedIn: *|boolean}}
 */
const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
});


/***
 * 传入dispatch，返回使用bindActionCreators()绑定的action方法
 * @param dispatch
 * @returns {{logout: function(): *, loginScreen: function(): *}}
 */
const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({ type: 'Logout' }),
  loginScreen: () => dispatch(NavigationActions.navigate({ routeName: 'Login' })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthButton);
