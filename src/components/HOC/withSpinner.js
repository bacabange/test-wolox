import React from 'react';
import {ActivityIndicator} from 'react-native';
import {colors} from '../../config/constants';

const withSpinner =
  Component =>
  ({isLoading, children, ...props}) => {
    if (isLoading) {
      return <ActivityIndicator size="large" color={colors.primary} />;
    } else {
      return <Component {...props}>{children}</Component>;
    }
  };

export default withSpinner;
