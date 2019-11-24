import React from 'react';
import { Button, StatusBar, StyleSheet, View } from 'react-native';
import Form from './components/Form/Form';
import ModalContainer from './components/ModalContainer/ModalContainer';
import OfflineNotice from './components/OfflineNotice/OfflineNotice';
import { useNetInfo } from './hooks/useNetInfo';
import { sendData } from './services/api';

export default function App() {
  const isConnected = useNetInfo();
  const [showForm, setShowForm] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleAddRecord = React.useCallback(() => setShowForm(true), []);

  const handleClose = React.useCallback(() => setShowForm(false), []);

  const handleSubmit = React.useCallback(async (values) => {
    setIsSubmitting(true);
    try {
      await sendData(values);
      setShowForm(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Button
        disabled={!isConnected}
        title="Добавить запись"
        accessibilityLabel="Добавить запись"
        onPress={handleAddRecord}
      />
      <ModalContainer title="Новая запись" visible={showForm} onClose={handleClose}>
        <Form isSubmitting={isSubmitting} onSubmit={handleSubmit} />
      </ModalContainer>
      {!isConnected && <OfflineNotice />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
