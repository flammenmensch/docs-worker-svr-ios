import React from 'react';
import { ActivityIndicator, KeyboardAvoidingView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Formik } from 'formik';
import StyledInput from '../StyledInput/StyledInput';
import FormItem from '../FormItem/FormItem';
import StyledPicker from '../StyledPicker/StyledPicker';

interface FormProps {
  isSubmitting: boolean;
  onSubmit: () => void;
}

const stages = [
  {label: '-', value: ''},
  {label: '1', value: '1'},
  {label: '2', value: '2'},
  {label: '3', value: '3'},
];

const categories = [
  '-',
  'аптечное',
  'батарейки',
  'газетное',
  'диабетические продукты',
  'еда',
  'книги',
  'лупы',
  'мобильные телефоны',
  'ноутбуки и планшеты',
  'обувь',
  'одежда',
  'одёжные аксессуары',
  'православное',
  'прочее',
  'радио, муз. центры',
  'сбор на сайте',
  'специальзированно для слепых',
  'тапки',
  'телевизоры',
  'техника прочее',
  'хобби и рукоделие',
  'хоз. и гигиена',
  'цифровые приставки и антенны',
  'электробритвы',
  'DVD и CD-диски',
  'DVD-проигрыватели',
].map((category) => ({
  label: category,
  value: category,
}));

const initialValues = {
  name: 'Test',
  roomNumber: '6',
  stage: '1',
  need: 'Test from iOS',
  category: 'прочее',
  responsible: 'A',
  notes: 'Testing request from ios application',
};

const Form: React.FC<FormProps> = (props) => {
  return (
    <KeyboardAvoidingView behavior="position">
      <Formik initialValues={initialValues} onSubmit={props.onSubmit}>
        {({handleChange, submitForm, values}) => (
          <React.Fragment>
            <FormItem label="Имя">
              <StyledInput defaultValue={values.name} onChangeText={handleChange('name')} placeholder="ФИО постояльца"/>
            </FormItem>
            <FormItem label="Номер комнаты">
              <StyledInput defaultValue={values.roomNumber} onChangeText={handleChange('roomNumber')} placeholder="Введите номер"/>
            </FormItem>
            <FormItem label="Нужности">
              <StyledInput defaultValue={values.need} onChangeText={handleChange('need')} placeholder="Что необходимо?"/>
            </FormItem>
            <FormItem label="Ответственный">
              <StyledInput defaultValue={values.responsible} onChangeText={handleChange('responsible')} placeholder="Представьтесь"/>
            </FormItem>
            <FormItem label="Этаж">
              <StyledPicker value={values.stage} onValueChange={handleChange('stage')} items={stages}/>
            </FormItem>
            <FormItem label="Категория">
              <StyledPicker value={values.category} onValueChange={handleChange('category')} items={categories}/>
            </FormItem>
            <FormItem label="Примечание">
              <StyledInput defaultValue={values.notes} onChangeText={handleChange('notes')} placeholder="Необязательное поле"/>
            </FormItem>
            <TouchableHighlight disabled={props.isSubmitting} style={styles.submitButton} onPress={submitForm}>
              {props.isSubmitting
                ? <ActivityIndicator />
                : <Text style={styles.submitButtonLabel}>Отправить</Text>
              }
            </TouchableHighlight>
          </React.Fragment>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    padding: 20,
    backgroundColor: '#147efb',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonLabel: {
    fontSize: 18,
    color: '#fff',
  }
});

export default Form;
