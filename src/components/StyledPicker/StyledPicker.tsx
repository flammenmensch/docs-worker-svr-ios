import React from 'react';
import { StyleSheet } from 'react-native';
import PickerSelect, { PickerProps } from 'react-native-picker-select';

const StyledPicker: React.FC<PickerProps> = (props) => {
  return (
    <PickerSelect
      {...props}
      style={styles.picker}
      textInputProps={{
        style: styles.input,
        placeHolderTextColor: '#efefef'
      }}
    />
  );
};

const styles = StyleSheet.create({
  picker: {

  },
  input: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#efefef',
    padding: 10,
  }
});

export default StyledPicker;
