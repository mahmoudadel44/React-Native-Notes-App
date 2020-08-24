import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import { FAB, List } from 'react-native-paper'
import { useSelector, useDispatch, connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { deletenote, deleteallnote } from '../redux/actions'
import { AntDesign } from '@expo/vector-icons';
const HomeScreen = (props) => {
  const navigation = useNavigation()
  const { note } = useSelector(state => state.NotesReducer)
  const dispatch = useDispatch()
  const deleteNote = (id) => {
    dispatch(deletenote(id))
  }
  const deleteAllNote = () => {
    dispatch(deleteallnote())
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerStyle}>
        <Text style={styles.headerTextStyle}>Simple Note Taking App</Text>
      </View>
      {
        note.length === 0 ? (
          <View>
            <Animatable.Text style={styles.TextStyle} animation="fadeIn" iterationCount={2}>There is no notes to show</Animatable.Text>
          </View>
        )
          : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={note}
              key={item => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={styles.notesStyle}>
                    <View style={{
                      flexDirection: 'row'
                      , justifyContent: 'space-between'
                    }}>
                      <Text style={styles.notesTitle}>
                        {item.mynote.noteTitle}
                      </Text>
                      <AntDesign name="delete" size={30} color="#EE1C25"
                        onPress={() => deleteNote(item.id)}
                        style={{ marginTop: 5 }}
                      />
                    </View>
                    <Text style={styles.notesDescription}>
                      {item.mynote.noteDescription}

                    </Text>

                  </View>
                )
              }}
              keyExtractor={item => item.id}

            />)}
      <FAB
        style={styles.fab}
        small
        label="Add New Notes"
        icon="plus"
        onPress={() => navigation.navigate('Details'
        )}
      />
      {
        note.length !== 0 ? (
          <TouchableOpacity style={styles.signIn}
            onPress={() => deleteAllNote()}
          >
            <Text style={styles.textSign}>Delete All Notes</Text>
          </TouchableOpacity>
        ) : null}
    </View>
  );
}
export default HomeScreen


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    backgroundColor: '#009387',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingVertical: 15,
    justifyContent: 'flex-start',
  },
  TextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#009387',
    marginTop: 200,
    marginHorizontal: 60,
    width: '100%'
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },

  fab: {
    backgroundColor: '#009387',
    position: 'absolute',
    margin: 5,
    right: 0,
    bottom: 0,
  },
  notesTitle: {
    fontSize: 24,
    color: "#204060"
  },
  notesStyle: {
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: '#009387',
  },
  notesDescription: {
    fontSize: 18,
    color: "#204060"
  },
  signIn: {
    width: '40%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: '#EE1C25',
    marginBottom: 5,
    marginLeft: 3

  },
  textSign: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'

  },
});