import {Platform} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Toast from 'react-native-toast-message';

export const wp = val => widthPercentageToDP(val);

export const hp = val => heightPercentageToDP(val);

export const statusBarHeight = getStatusBarHeight();

export const isIos = Platform.OS === 'ios';

export const validateEmail = email => {
  const re =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
};

export const validPassword = password => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return re.test(password);
};

export const errorMessage = (text1, text2) => {
  Toast.show({
    type: 'error',
    text1: text1,
    text2: text2,
  });
};
