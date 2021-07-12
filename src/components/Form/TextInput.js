import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput as RNTextInput, View, Text} from 'react-native';
import {colors} from '../../config/constants';

const TextInput = ({error, touched, style, ...props}) => {
  const validationColor = error ? colors.danger : colors.primaryDark;

  return (
    <View style={styles.container}>
      <RNTextInput
        style={[styles.input, {borderColor: validationColor}, style]}
        placeholderTextColor={colors.gray}
        {...props}
      />
      {error && <Text style={styles.textValidation}>{error}</Text>}
    </View>
  );
};

TextInput.propTypes = {
  error: PropTypes.string,
};

TextInput.defaultProps = {
  name: null,
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  input: {
    height: 44,
    borderColor: colors.primary,
    borderWidth: 1,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 22,
    paddingHorizontal: 8,
  },
  textValidation: {
    fontSize: 12,
  },
});
