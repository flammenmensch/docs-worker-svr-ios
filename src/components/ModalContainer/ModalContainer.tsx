import React, { PropsWithChildren } from 'react';
import { Button, Modal, ScrollView, StyleSheet, Text, View } from 'react-native';

interface ModalContainerProps extends PropsWithChildren<any> {
  title: string;
  visible: boolean;
  scrollEnabled: boolean;
  onClose: () => void;
}

const ModalContainer: React.FC<ModalContainerProps> = (props) => {
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{props.title}</Text>
          <Button title="Закрыть" onPress={props.onClose} />
        </View>
        <ScrollView scrollEnabled={props.scrollEnabled} style={styles.content}>
          {props.children}
        </ScrollView>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  header: {
    flexDirection: 'row',
    height: 75,
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
    alignItems: 'center',
    paddingTop: 22,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    height: '100%',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  }
});

export default ModalContainer;
