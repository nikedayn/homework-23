const ADD_NOTE = "ADD-NOTE";
const DELETE_NOTE = "DELETE-NOTE";
const EDIT_HEADLINE = "EDIT-HEADLINE";
const EDIT_PARAGRAPH = "EDIT-PARAGRAPH"

export const addNoteAC = (note) => {
    return {
        type: ADD_NOTE,
        note
    }
}

export const delNoteAC = (id) => {
    return {
        type: DELETE_NOTE,
        id
    }
}

export const editHeadlineAC = (id, newHeadline, time) => {
    return {
        type: EDIT_HEADLINE,
        newHeadline,
        id,
        time
    }
}

export const editParagraphAC = (id, newParagraph, time) => {
    return {
        type: EDIT_PARAGRAPH,
        newParagraph,
        id,
        time
    }
}

export const NotesReducer = (state, action) => {
    if(action.type === ADD_NOTE) {
        return ({
            ...state,
            notesPage: [
                ...state.notesPage,
                {
                    ...action.note
                }
            ]
        })
    }
    else if(action.type === DELETE_NOTE) {
        let newNotesPage = state.notesPage.filter(note => note.id !== action.id);
        return ({
            ...state,
            notesPage: [
                ...newNotesPage
            ]
        })
    }
    else if(action.type === EDIT_HEADLINE) {
        let editedNotes = [
            ...state.notesPage
        ]
        editedNotes[action.id] = {
            ...editedNotes[action.id],
            title: action.newHeadline,
            time: action.time
        }
        return ({
            ...state,
            notesPage: [
                ...editedNotes
            ]
        })
    }
    else if(action.type === EDIT_PARAGRAPH) {
        let editedNotes = [
            ...state.notesPage
        ]
        editedNotes[action.id] = {
            ...editedNotes[action.id],
            text: action.newParagraph,
            time: action.time
        }
        return ({
            ...state,
            notesPage: [
                ...editedNotes
            ]
        })
    }
    else {
        return state;
    }
}