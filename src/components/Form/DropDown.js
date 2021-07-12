import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {colors} from '../../config/constants';

const DropDown = ({items, error, ...props}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const validationColor = error ? colors.danger : colors.primaryDark;

  return (
    <View style={[styles.container, {borderColor: validationColor}]}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        style={styles.input}
        dropDownContainerStyle={styles.inputContainer}
        placeholderStyle={styles.inputLabel}
        {...props}
      />
      {error && <Text style={styles.textValidation}>{error}</Text>}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  container: {
    zIndex: 1000,
    minHeight: 140,
  },
  input: {
    height: 44,
    borderColor: colors.primary,
    borderWidth: 1,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 22,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  inputContainer: {
    borderColor: colors.primary,
    borderBottomEndRadius: 22,
    borderBottomStartRadius: 22,
    zIndex: 999,
  },
  inputLabel: {
    color: colors.gray,
  },
  textValidation: {
    fontSize: 12,
  },
});
