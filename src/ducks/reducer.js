import * as controller from './controller';
import axios from 'axios';

let initialState = {
    dash: [],
    monsters: [],
    spells: [],
    equipment: [],
    mounts: [],
    armor: [],
    weapons: [],
    displayItem: {},
    user: {}

};

// DASHBOARD
const ADD_TO_DASH = 'ADD_TO_DASH';
const GET_DASH = 'GET_DASH';
const REM_FROM_DASH = 'REM_FROM_DASH';
const DISPLAY_DASH_ITEM = 'DISPLAY_DASH_ITEM';

// USERS
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

// DND API
const GET_MONSTERS = 'GET_MONSTERS';
const GET_SPELLS = 'GET_SPELLS';
const GET_EQUIPMENT = 'GET_EQUIPMENT';


// USERS

export function getUser() {

    const userData = axios.get('/auth/me').then(res => {
        return res.data;
    })

    return {
        type: UPDATE_USER_INFO,
        payload: userData
    }

}

// DASHBOARD

export function displayDashItem(item) {
    return ({
        type: DISPLAY_DASH_ITEM,
        payload: item
    })
}

export function getDash() {
    const promise = axios.get(`/dashItems`)
    return {
        type: GET_DASH,
        payload: promise
    }

}

export function addToDash(item) {
    const promise = axios.post('/dashItems', item)
    return {
        type: ADD_TO_DASH,
        payload: promise
    }

}

export function remFromDash(item) {
    const promise = axios.delete(`/dashItems/${item}`)
    return {
        type: REM_FROM_DASH,
        payload: promise
    }
}


// DND API

export function getMonsters() {
    return ({
        type: GET_MONSTERS,
        payload: controller.getMonsters()
    })
}


export function getSpells() {
    return ({
        type: GET_SPELLS,
        payload: controller.getSpells()
    })
}

export function getEquipment() {
    return ({
        type: GET_EQUIPMENT,
        payload: controller.getEquipment()
    })
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_DASH_ITEM:
            return Object.assign({}, state, { displayItem: action.payload });

        case UPDATE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        case ADD_TO_DASH + '_FULFILLED':
            return Object.assign({}, state, { dash: action.payload.data });

        case REM_FROM_DASH:
            return Object.assign({}, state, { dash: action.payload.data});

        case GET_MONSTERS + '_FULFILLED':
            return Object.assign({}, state, { monsters: action.payload });

        case GET_SPELLS + '_FULFILLED':
            return Object.assign({}, state, { spells: action.payload });

        case GET_DASH + '_FULFILLED':
            return Object.assign({}, state, { dash: action.payload.data });

        case GET_EQUIPMENT + '_FULFILLED':
            var weapons = action.payload.slice(0, 37);
            let armor = action.payload.slice(37, 50);
            let equipment = action.payload.slice(50, 191);
            let mounts = action.payload.slice(191);
            return Object.assign({}, state, { armor: armor, weapons: weapons, equipment: equipment, mounts: mounts });

        default:
            return state;
    }
};
