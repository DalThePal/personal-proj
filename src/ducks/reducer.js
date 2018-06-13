import * as controller from './controller';
import axios from 'axios';

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

// DASHBOARD
const ADD_TO_DASH = 'ADD_TO_DASH';
const ADD_TO_USER_DASH = 'ADD_TO_USER_DASH';
const GET_DASH = 'GET_DASH';
const REM_FROM_DASH = 'REM_FROM_DASH';
const DISPLAY_DASH_ITEM = 'DISPLAY_DASH_ITEM';

// USERS
const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

// DND API
const GET_MONSTERS = 'GET_MONSTERS';
const GET_SPELLS = 'GET_SPELLS';
const GET_EQUIPMENT = 'GET_EQUIPMENT';

// EQUIPMENT 
const CREATE_EQUIP = 'CREATE_EQUIP';
const GET_USER_EQUIP = 'GET_USER_EQUIP';
const EDIT_USER_EQUIP = 'EDIT_USER_EQUIP';
const REM_USER_EQUIP = 'REM_USER_EQUIP';

// MOUNTS
const CREATE_MOUNT = 'CREATE_MOUNT';
const GET_USER_MOUNT = 'GET_USER_MOUNT';
const EDIT_USER_MOUNT = 'EDIT_USER_MOUNT';
const REM_USER_MOUNT = 'REM_USER_MOUNT';

// ARMOR
const CREATE_ARM = 'CREATE_ARM';
const GET_USER_ARM = 'GET_USER_ARM';
const EDIT_USER_ARM = 'EDIT_USER_ARM';
const REM_USER_ARM = 'REM_USER_ARM';


// USERS

export function getUser() {
    const promise = axios.get('/auth/me')
    return {
        type: UPDATE_USER_INFO,
        payload: promise
    }

}

// DASHBOARD

export function displayDashItem(item) {
    return {
        type: DISPLAY_DASH_ITEM,
        payload: item
    }
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

export function addToUserDash(item) {
    const promise = axios.post('/userDashItems', item)
    return {
        type: ADD_TO_USER_DASH,
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
    return {
        type: GET_MONSTERS,
        payload: controller.getMonsters()
    }
}


export function getSpells() {
    return {
        type: GET_SPELLS,
        payload: controller.getSpells()
    }
}

export function getEquipment() {
    return {
        type: GET_EQUIPMENT,
        payload: controller.getEquipment()
    }
}

// EQUIPMENT

export function createEquip(item) {
    const promise = axios.post('/Equipment', item)
    return {
        type: CREATE_EQUIP,
        payload: promise
    }
}

export function getUserEquip() {
    const promise = axios.get('/Equipment')
    return {
        type: GET_USER_EQUIP,
        payload: promise
    }
}

export function editUserEquip(obj) {
    const promise = axios.put('/Equipment', obj)
    return {
        type: EDIT_USER_EQUIP,
        payload: promise
    }
}

export function remUserEquip(item) {
    const promise = axios.delete(`/Equipment/${item}`)
    return {
        type: REM_USER_EQUIP,
        payload: promise
    }
}

// MOUNTS

export function getUserMount() {
    const promise = axios.get('/Mounts')
    return {
        type: GET_USER_MOUNT,
        payload: promise
    }
}

export function createMount(item) {
    const promise = axios.post('/Mounts', item)
    return {
        type: CREATE_MOUNT,
        payload: promise
    }
}

export function remUserMount(item) {
    const promise = axios.delete(`/Mounts/${item}`)
    return {
        type: REM_USER_MOUNT,
        payload: promise
    }
}

export function editUserMount(item) {
    const promise = axios.put('/Mounts', item)
    return {
        type: EDIT_USER_MOUNT,
        payload: promise
    }
}

// ARMOR

export function getUserArm() {
    const promise = axios.get('/Armor')
    return {
        type: GET_USER_ARM,
        payload: promise
    }
}

export function createArm(item) {
    const promise = axios.post('/Armor', item)
    return {
        type: CREATE_ARM,
        payload: promise
    }
}

export function remUserArm(item) {
    const promise = axios.delete(`/Armor/${item}`)
    return {
        type: REM_USER_ARM,
        payload: promise
    }
}

export function editUserArm(item) {
    const promise = axios.put('/Armor', item)
    return {
        type: EDIT_USER_ARM,
        payload: promise
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case DISPLAY_DASH_ITEM:
            return Object.assign({}, state, { displayItem: action.payload });

        case UPDATE_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload });

        case ADD_TO_DASH + '_FULFILLED':
            return Object.assign({}, state, { dash: action.payload.data });

        case REM_FROM_DASH + '_FULFILLED':
            return Object.assign({}, state, { dash: action.payload.data });

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

        case CREATE_EQUIP + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, { userEquipment: action.payload.data });

        case GET_USER_EQUIP + '_FULFILLED':
            console.log(action.payload.data)
            return Object.assign({}, state, { userEquipment: action.payload.data });

        case REM_USER_EQUIP + '_FULFILLED':
            return Object.assign({}, state, { userEquipment: action.payload.data });

        case EDIT_USER_EQUIP + '_FULFILLED':
            return Object.assign({}, state, { userEquipment: action.payload.data });

        case CREATE_MOUNT + '_FULFILLED':
            return Object.assign({}, state, { userMounts: action.payload.data });

        case GET_USER_MOUNT + '_FULFILLED':
            return Object.assign({}, state, { userMounts: action.payload.data });

        case REM_USER_MOUNT + '_FULFILLED':
            return Object.assign({}, state, { userMounts: action.payload.data });

        case EDIT_USER_MOUNT + '_FULFILLED':
            return Object.assign({}, state, { userMounts: action.payload.data });

        case GET_USER_ARM + '_FULFILLED':
            return Object.assign({}, state, { userArmor: action.payload.data });

        case CREATE_ARM + '_FULFILLED':
            return Object.assign({}, state, { userArmor: action.payload.data });

        case REM_USER_ARM + '_FULFILLED':
            return Object.assign({}, state, { userArmor: action.payload.data });

        case EDIT_USER_ARM + '_FULFILLED':
            return Object.assign({}, state, { userArmor: action.payload.data });

        default:
            return state;
    }
};
