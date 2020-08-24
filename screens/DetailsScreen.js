import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView } from 'react-native';
import { FAB } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { bindActionCreators } from 'redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import { addnote } from '../redux/actions'
const DetailsSCreen = (props) => {
  const dispatch = useDispatch()
  const [noteTitle, setNoteTitle] = useState('');
  const navigation = useNavigation()
  const [noteDescription, setNoteDescription] = useState('');
  const onSaveNote = () => {
    dispatch(addnote({ noteTitle, noteDescription }))
    navigation.goBack()
    setNoteTitle('')
    setNoteDescription('')
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerTextStyle}>Add A New Note</Text>
      </View>

      <AntDesign
        style={styles.iconButton}
        name="closecircleo" size={30} color="white"
        onPress={() => navigation.goBack()}
      />
      <KeyboardAwareScrollView bounces={false} contentContainerStyle={{ marginLeft: 15 }}>

        <Text style={styles.title}>Add Note Title Here</Text>
        <TextInput
          value={noteTitle}
          onChangeText={setNoteTitle}
          style={styles.noteTitleStyle}
        />
        <Text style={styles.title}> Add Note Description Here</Text>
        <TextInput
          value={noteDescription}
          onChangeText={setNoteDescription}
          multiline={true}
          numberOfLines={6}
          style={styles.noteDescriptionStyle}
          placeholder="Type something"
          placeholderTextColor="#204060"
          textAlignVertical="top"
        />
      </KeyboardAwareScrollView>
      <FAB
        style={styles.fab}
        small
        icon="check"
        disabled={noteTitle == '' ? true : false}
        onPress={onSaveNote}
      />
    </View>
  );
}
export default DetailsSCreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  headerStyle: {
    backgroundColor: '#009387',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'flex-start',
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4d88',
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  iconButton: {
    backgroundColor: '#EE1C25',
    position: 'absolute',
    right: 0,
    marginHorizontal: 10,
    marginTop: 5,
    borderRadius: 15
  },
  fab: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    margin: 10
  },
  title: {
    fontSize: 18,
    padding: 10,
    color: '#204060',
    fontWeight: 'bold',
    marginTop: 10
  },
  noteTitleStyle: {
    backgroundColor: '#009387',
    width: '95%',
    marginVertical: 5,
    height: 50,
    borderRadius: 5,
    padding: 7,
    fontSize: 18,
    color: '#fff'
  },
  noteDescriptionStyle: {
    backgroundColor: '#009387',
    width: '95%',
    marginVertical: 10,
    height: 200,
    borderRadius: 5,
    padding: 7,
    fontSize: 18,
    color: '#fff'
  }
});


