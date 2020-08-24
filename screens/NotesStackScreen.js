import { createStackNavigator } from '@react-navigation/stack';
import ViewNotesScreen from './ViewNotesScreen' 
import AddNotesScreen from './AddNotesScreen'
const Stack=createStackNavigator()

import React from 'react'
const NotesStackScreen=()=> {
    return (
      <Stack.Navigator>
          <Stack.Screen name="ViewNotesScreen" component={ViewNotesScreen}/>
          <Stack.Screen name="AddNotesScreen" component={AddNotesScreen}/>
      </Stack.Navigator>
    )
}

export default NotesStackScreen


