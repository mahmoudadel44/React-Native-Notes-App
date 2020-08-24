import * as actions from '../constants'
let noteId = 0;
export const addnote = (mynote) => {
    return {
        type: actions.ADD_NOTE_SUCCESS,
        id: noteId++,
        payload: { mynote, id: noteId }
    }

}

export const deletenote = (id) => {
    return {
        type: actions.DELETE_NOTE_SUCCESS,
        payload: id
    }

}


export const deleteallnote = () => {
    return {
        type: actions.DELETE_ALL_NOTE_SUCCESS,
    }
}
