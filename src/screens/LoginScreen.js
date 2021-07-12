import React, {useState} from 'react';
import {StyleSheet, View, Text, Switch, ActivityIndicator} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';

import {ageArray} from '../config/utils';

import AuthContainer from '../components/Layout/AuthContainer';
import TextInput from '../components/Form/TextInput';
import DropDown from '../components/Form/DropDown';
import Button from '../components/Form/Button';
import {colors} from '../config/constants';
import {signIn} from '../actions/authAction';

const LoginScreen = ({onSignIn, isLoading}) => {
  const [accept, setAccept] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    name: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
  });

  const {handleChange, handleSubmit, errors, isValid} = useFormik({
    initialValues: {email: '', lastName: '', name: ''},
    validationSchema: LoginSchema,
    onSubmit: values => {
      onSignIn(values);
    },
  });

  const isDisabled = isValid && accept;

  return (
    <AuthContainer>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.container}>
        <TextInput
          placeholder="Name"
          onChangeText={handleChange('name')}
          error={errors.name}
        />
        <TextInput
          placeholder="Last Name"
          onChangeText={handleChange('lastName')}
          error={errors.lastName}
        />
        <TextInput
          placeholder="Email"
          onChangeText={handleChange('email')}
          error={errors.email}
        />
        <DropDown placeholder="Age" items={ageArray(18, 50)} />

        <View style={styles.acceptContainer}>
          <Switch
            trackColor={{false: colors.gray, true: colors.primaryDark}}
            thumbColor={accept ? colors.primaryLight : colors.white}
            ios_backgroundColor={colors.gray}
            onValueChange={setAccept}
            value={accept}
          />

          <Text style={styles.acceptText}>Accept Terms and conditions</Text>
        </View>

        {isLoading ? (
          <ActivityIndicator size="large" color={colors.white} />
        ) : (
          <Button
            disabled={!isDisabled}
            onPress={() => handleSubmit()}
            text="ENTER"
          />
        )}
      </View>
    </AuthContainer>
  );
};

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    isLoading: state.auth.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignIn: data => {
      dispatch(signIn(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    color: colors.white,
    fontWeight: 'bold',
    marginBottom: 22,
  },
  acceptContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  acceptText: {
    color: colors.white,
    marginLeft: 4,
  },
});
