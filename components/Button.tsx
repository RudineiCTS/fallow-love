import { forwardRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

type ButtonProps = {
  title?: string;
  styleCustom?: StyleProp<ViewStyle>;
  takeInfo?: () => void;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(
  ({ title, styleCustom, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        style={[styles.button, touchableProps.style, styleCustom]}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FC5568',
    borderRadius: 18,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: 200,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
