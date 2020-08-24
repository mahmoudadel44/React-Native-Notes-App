import * as actions from '../../constants'
import remove from 'lodash.remove'
const initialState = {
    note: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_NOTE_SUCCESS:
            return {
                ...state,
                note: [
                    ...state.note,
                    action.payload,
                ]
            }

        case actions.DELETE_NOTE_SUCCESS:
            return {
                ...state,
                note: state.note.filter(note => note.id !== action.payload)
            }



        case actions.DELETE_ALL_NOTE_SUCCESS:
            return {
                note: []
            }

        default:
            return state
    }
}