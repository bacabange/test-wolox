import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../config/constants';

const Button = ({text, onPress, disabled, type, containerStyle, ...props}) => {
  const colorsType = disabled
    ? [colors.gray, colors.gray]
    : type === 'secondary'
    ? [colors.white, colors.white]
    : [colors.primary, colors.primaryDark];

  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colorsType}
      style={[
        styles.container,
        containerStyle,
        disabled && styles.containerDisabled,
        type === 'secondary' && styles.containerSecondary,
      ]}>
      <Pressable
        onPress={onPress}
        style={styles.button}
        disabled={disabled}
        {...props}>
        <Text
          style={[styles.text, type === 'secondary' && styles.textSecondary]}>
          {text}
        </Text>
      </Pressable>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.primaryDark,
  },
  containerDisabled: {
    borderColor: colors.gray,
  },
  containerSecondary: {
    borderColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});
