import types from './types';
import { combineReducers } from 'redux';


export const initialState = {};

const dash = (state = [], action) => {
    switch (action.type) {
            
        case types.ADD_TO_DASH + '_FULFILLED':
            console.log(action.payload)
            return state.concat(action.payload.data);

        case types.REM_FROM_DASH + '_FULFILLED':
            console.log(action.payload)
            let index = state.findIndex(item => item.name === action.payload.data[0].name);
            console.log(index)
            return [...state.slice(0, index), ...state.slice(index + 1)];

        case types.GET_DASH + '_FULFILLED':
            return state.concat(action.payload.data);

        default:
            return state;
    }
}

const monsters = (state = [], action) => {
    switch (action.type) {

        case types.GET_MONSTERS + '_FULFILLED':
            return state.concat(action.payload);
            
        default: 
            return state;
    }
}

const spells = (state = [], action) => {
    switch (action.type) {

        case types.GET_SPELLS + '_FULFILLED':
            return state.concat(action.payload);
        
        default: 
            return state;
    }
}

const equipment = (state = [], action) => {
    switch (action.type) {

        case types.GET_EQUIPMENT + '_FULFILLED':
            let equipment = action.payload.slice(50, 191);
            return state.concat(equipment);

        default:
            return state;
    }
}

const mounts = (state = [], action) => {
    switch (action.type) {

        case types.GET_EQUIPMENT + '_FULFILLED':
            let mounts = action.payload.slice(191);
            return state.concat(mounts);

        default:
            return state;
    }
}

const weapons = (state = [], action) => {
    switch (action.type) {

        case types.GET_EQUIPMENT + '_FULFILLED':
            let weapons = action.payload.slice(0, 37);
            return state.concat(weapons);

        default:
            return state;
    }
}

const armor = (state = [], action) => {
    switch (action.type) {

        case types.GET_EQUIPMENT + '_FULFILLED':
            let armor = action.payload.slice(37, 50);
            return state.concat(armor);
        
        default:
            return state;
    }
}

const userArmor = (state = [], action) => {
    switch (action.type) {

        case types.GET_USER_ARM + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.CREATE_ARM + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.REM_USER_ARM + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.EDIT_USER_ARM + '_FULFILLED':
            return state.concat(action.payload.data);

        default: 
            return state;
    }
}

const user = (state = {}, action) => {
    switch (action.type) {
        
        case types.UPDATE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, action.payload );

        default:
            return state;
    }
}

const userEquipment = (state = [], action) => {
    switch (action.type) {

        case types.CREATE_EQUIP + '_FULFILLED':
            console.log(action.payload)
            return state.concat(action.payload.data);

        case types.GET_USER_EQUIP + '_FULFILLED':
            console.log(action.payload.data)
            return state.concat(action.payload.data);

        case types.REM_USER_EQUIP + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.EDIT_USER_EQUIP + '_FULFILLED':
            return state.concat(action.payload.data);

        default:
            return state;
    }
}

const userMounts = (state = [], action) => {
    switch (action.type) {

        case types.CREATE_MOUNT + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.GET_USER_MOUNT + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.REM_USER_MOUNT + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.EDIT_USER_MOUNT + '_FULFILLED':
            return state.concat(action.payload.data);

        default:
            return state;
    }
}

const reducer = combineReducers( {

    user,
    monsters,
    spells,
    equipment,
    armor,
    weapons,
    mounts,
    dash,
    userArmor,
    userEquipment,
    userMounts

} );

export default reducer;