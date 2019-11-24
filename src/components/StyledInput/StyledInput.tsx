import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import React from 'react';

const StyledInput: React.FC<TextInputProps> = (props) => {
  const [focused, setFocused] = React.useState(false);

  const handleFocus = React.useCallback(() => {
    setFocused(true);
  }, []);

  const handleBlur = React.useCallback(() => {
    setFocused(false);
  }, []);

  return (
      <TextInput
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor="#efefef"
        style={{
          ...styles.input,
          ...(focused ? {borderColor: '#147efb'} : {})
        }}
      />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#efefef',
    padding: 10,
  }
});

export default StyledInput;
