import React, {useEffect} from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

import {asyncStorageKey, screenString} from '../../../helpers/strings';

const LandingScreen = ({navigation}) => {
  const getLoginData = () => {
    AsyncStorage.getItem(JSON.parse(asyncStorageKey.isLogin)).then(value => {
      console.log('value:-bva', value);
      if (value !== null) {
        navigation.reset(screenString.listingScreen);
        // navigation.dispatch(
        //   CommonActions.reset({
        //     index: 0,
        //     routes: [{name: screenString.listingScreen}],
        //   }),
        // );
      } else {
        navigation.reset(screenString.loginScreen);
        // navigation.dispatch(
        //   CommonActions.reset({
        //     index: 0,
        //     routes: [{name: screenString.loginScreen}],
        //   }),
        // );
      }
    });
  };

  const getResult = () => {
    AsyncStorage.getItem(asyncStorageKey.onBoarding).then(value => {
      if (value !== null) {
        return getLoginData();
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: screenString.onBoarding}],
          }),
        );
      }
    });
  };

  useEffect(() => {
    getResult();
  }, []);

  return <View />;
};

export default LandingScreen;
