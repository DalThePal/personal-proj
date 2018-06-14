import * as controller from './controller';
import types from './types/';
import { combineReducers } from 'redux';


let initialState = {
    dash: [],
    monsters: [],
    spells: [],
    equipment: [],
    userEquipment: [],
    mounts: [],
    userMounts: [],
    armor: [],
    userArmor: [],
    weapons: [],
    displayItem: {},
    user: {}

};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.DISPLAY_DASH_ITEM:
            return Object.assign({}, state, { displayItem: action.payload });
            
        case types.ADD_TO_DASH + '_FULFILLED':
            return Object.assign({}, state, { dash: action.payload.data });

        case types.REM_FROM_DASH + '_FULFILLED':
            return Object.assign({}, state, { dash: action.payload.data });

        case types.GET_DASH + '_FULFILLED':
            return Object.assign({}, state, { dash: action.payload.data });

        default:
            return state;
    }
}

const dndAPIReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_MONSTERS + '_FULFILLED':
            return Object.assign({}, state, { monsters: action.payload });

        case types.GET_SPELLS + '_FULFILLED':
            return Object.assign({}, state, { spells: action.payload });

        case types.GET_EQUIPMENT + '_FULFILLED':
            var weapons = action.payload.slice(0, 37);
            let armor = action.payload.slice(37, 50);
            let equipment = action.payload.slice(50, 191);
            let mounts = action.payload.slice(191);
            return Object.assign({}, state, { armor: armor, weapons: weapons, equipment: equipment, mounts: mounts });

        default: 
            return state;
    }
}

const armorReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_USER_ARM + '_FULFILLED':
            return Object.assign({}, state, { userArmor: action.payload.data });

        case types.CREATE_ARM + '_FULFILLED':
            return Object.assign({}, state, { userArmor: action.payload.data });

        case types.REM_USER_ARM + '_FULFILLED':
            return Object.assign({}, state, { userArmor: action.payload.data });

        case types.EDIT_USER_ARM + '_FULFILLED':
            return Object.assign({}, state, { userArmor: action.payload.data });
        default: 
            return state;
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.UPDATE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        default:
            return state;
    }
}

const equipmentReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.CREATE_EQUIP + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, { userEquipment: action.payload.data });

        case types.GET_USER_EQUIP + '_FULFILLED':
            console.log(action.payload.data)
            return Object.assign({}, state, { userEquipment: action.payload.data });

        case types.REM_USER_EQUIP + '_FULFILLED':
            return Object.assign({}, state, { userEquipment: action.payload.data });

        case types.EDIT_USER_EQUIP + '_FULFILLED':
            return Object.assign({}, state, { userEquipment: action.payload.data });

        default:
            return state;
    }
}

const mountsReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.CREATE_MOUNT + '_FULFILLED':
            return Object.assign({}, state, { userMounts: action.payload.data });

        case types.GET_USER_MOUNT + '_FULFILLED':
            return Object.assign({}, state, { userMounts: action.payload.data });

        case types.REM_USER_MOUNT + '_FULFILLED':
            return Object.assign({}, state, { userMounts: action.payload.data });

        case types.EDIT_USER_MOUNT + '_FULFILLED':
            return Object.assign({}, state, { userMounts: action.payload.data });

        default:
            return state;
    }
}

const reducer = combineReducers( {

    user: userReducer,
    api: dndAPIReducer,
    dashboard: dashboardReducer,
    armor: armorReducer,
    equipment: equipmentReducer,
    mounts: mountsReducer

} );

export default reducer;