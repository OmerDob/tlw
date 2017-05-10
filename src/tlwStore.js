import { createStore, combineReducers } from 'redux';

function language(state = {languages: []}, action) {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return Object.assign({}, state, {
                currentLanguage: state.languages.filter(language => language.id == action.to)[0]
            });
        
        case 'ADD_LANGUAGE':
            return Object.assign({}, state, {
                languages: [...state.languages, action.language]
            });

        default: return state;
    }
}

export const tlwStore = createStore(combineReducers({language}));