import { StyleSheet, Text, View } from 'react-native';
import React, { PropsWithChildren } from 'react';

interface FormItemProps extends PropsWithChildren<any> {
  label: string;
}

const FormItem: React.FC<FormItemProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    color: '#8e8e93',
  },
});

export default FormItem;
