import types from './types';
import { combineReducers } from 'redux';

export const initialState = {
    user: {},
    monsters: [],
    spells: [],
    equipment: [],
    armor: [],
    weapons: [],
    mounts: [],
    dash: [],
    displayDashItem: null,
    userArmor: [],
    userEquipment: [],
    userMounts: [],
    search: ''
};

const dash = (state = [], action) => {
    switch (action.type) {

        case types.ADD_TO_DASH + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.REM_FROM_DASH + '_FULFILLED':
            console.log(action.payload)
            let index = state.findIndex(item => item.id === action.payload.data[0].id);
            return [...state.slice(0, index), ...state.slice(index + 1)];

        case types.GET_DASH + '_FULFILLED':
            if (state.length === 0) {
                return [...state, ...action.payload.data];
            } else return state;

        default:
            return state;
    }
}

const displayDashItem = (state = '', action) => {
    switch (action.type) {

        case types.ADD_DISPLAY_DASH_ITEM:
            return action.payload;

        default:
            return state;
    }
}

const monsters = (state = [], action) => {
    switch (action.type) {

        case types.GET_MONSTERS + '_FULFILLED':
            let monsters = action.payload;
            return monsters;

        default:
            return state;
    }
}

const spells = (state = [], action) => {
    switch (action.type) {

        case types.GET_SPELLS + '_FULFILLED':
            let spells = action.payload;
            return spells;

        default:
            return state;
    }
}

const equipment = (state = [], action) => {
    switch (action.type) {

        case types.GET_EQUIPMENT + '_FULFILLED':
            let equipment = action.payload.slice(50, 191);
            return equipment;

        default:
            return state;
    }
}

const mounts = (state = [], action) => {
    switch (action.type) {

        case types.GET_EQUIPMENT + '_FULFILLED':
            let mounts = action.payload.slice(191);
            return mounts;

        default:
            return state;
    }
}

const weapons = (state = [], action) => {
    switch (action.type) {

        case types.GET_EQUIPMENT + '_FULFILLED':
            let weapons = action.payload.slice(0, 37);
            return weapons;

        default:
            return state;
    }
}

const armor = (state = [], action) => {
    switch (action.type) {

        case types.GET_EQUIPMENT + '_FULFILLED':
            let armor = action.payload.slice(37, 50);
            return armor;

        default:
            return state;
    }
}

const userArmor = (state = [], action) => {
    switch (action.type) {

        case types.GET_USER_ARM + '_FULFILLED':
            return action.payload.data;

        case types.CREATE_ARM + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.REM_USER_ARM + '_FULFILLED':
            let index = state.findIndex(item => item.name === action.payload.data[0].name);
            return [...state.slice(0, index), ...state.slice(index + 1)];

        case types.EDIT_USER_ARM + '_FULFILLED':
            let editIndex = state.findIndex(item => item.name === action.payload.data[0].name);
            return [...state.slice(0, editIndex), action.payload.data[0], ...state.slice(editIndex + 1)];

        case types.USER_ARM_DASH + '_FULFILLED':
            console.log(action.payload)
            let dashIndex = state.findIndex(item => item.id === action.payload.data[0].id);
            return [...state.slice(0, dashIndex), action.payload.data[0], ...state.slice(dashIndex + 1)];

        default:
            return state;
    }
}

const user = (state = {}, action) => {
    switch (action.type) {

        case types.UPDATE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}

const userEquipment = (state = [], action) => {
    switch (action.type) {

        case types.GET_USER_EQUIP + '_FULFILLED':
            return action.payload.data;

        case types.CREATE_EQUIP + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.REM_USER_EQUIP + '_FULFILLED':
            let index = state.findIndex(item => item.name === action.payload.data[0].name);
            return [...state.slice(0, index), ...state.slice(index + 1)];

        case types.EDIT_USER_EQUIP + '_FULFILLED':
            let editIndex = state.findIndex(item => item.name === action.payload.data[0].name);
            return [...state.slice(0, editIndex), action.payload.data[0], ...state.slice(editIndex + 1)];

        default:
            return state;
    }
}

const userMounts = (state = [], action) => {
    switch (action.type) {

        case types.GET_USER_MOUNT + '_FULFILLED':
            return action.payload.data;

        case types.CREATE_MOUNT + '_FULFILLED':
            return state.concat(action.payload.data);

        case types.REM_USER_MOUNT + '_FULFILLED':
            let index = state.findIndex(item => item.name === action.payload.data[0].name);
            return [...state.slice(0, index), ...state.slice(index + 1)];

        case types.EDIT_USER_MOUNT + '_FULFILLED':
            let editIndex = state.findIndex(item => item.name === action.payload.data[0].name);
            return [...state.slice(0, editIndex), action.payload.data[0], ...state.slice(editIndex + 1)];

        default:
            return state;
    }
}

const search = (state = '', action) => {
    switch (action.type) {

        case types.SEARCH:
            return action.payload;
        
        default:
            return state;
    }
}

const reducer = combineReducers({

    user,
    monsters,
    spells,
    equipment,
    armor,
    weapons,
    mounts,
    dash,
    displayDashItem,
    userArmor,
    userEquipment,
    userMounts,
    search

});

export default reducer;