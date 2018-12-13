import types from './types';
import axios from 'axios';
import controller from './controller.js';

// USERS

const getUser = () => {
    const promise = axios.get('/auth/me')
    return {
        type: types.UPDATE_USER_INFO,
        payload: promise
    }
}

// DASHBOARD

const addDisplayDashItem = (item) => {
    return {
        type: types.ADD_DISPLAY_DASH_ITEM,
        payload: item
    }
}

const getDash = () => {
    const promise = axios.get(`/dashItems`)
    return {
        type: types.GET_DASH,
        payload: promise
    }

}

const addToDash = (item) => {
    const promise = axios.post('/dashItems', item)
    return {
        type: types.ADD_TO_DASH,
        payload: promise
    }

}

const addToUserDash = (item) => {
    const promise = axios.post('/userDashItems', item)
    return {
        type: types.ADD_TO_USER_DASH,
        payload: promise
    }
}

const remFromDash = (item) => {
    const promise = axios.delete(`/dashItems?name=${item.name}&dashType=${item.dashType}`)
    return {
        type: types.REM_FROM_DASH,
        payload: promise
    }
}


// DND API

const getMonsters = () => {
    return {
        type: types.GET_MONSTERS,
        payload: controller.getMonsters()
    }
}


const getSpells = () => {
    return {
        type: types.GET_SPELLS,
        payload: controller.getSpells()
    }
}

const getEquipment = () => {
    return {
        type: types.GET_EQUIPMENT,
        payload: controller.getEquipment()
    }
}

// EQUIPMENT

const createEquip = (item) => {
    const promise = axios.post('/Equipment', item);
    return {
        type: types.CREATE_EQUIP,
        payload: promise
    }
}

const getUserEquip = () => {
    const promise = axios.get('/Equipment');
    return {
        type: types.GET_USER_EQUIP,
        payload: promise
    }
}

const editUserEquip = (obj) => {
    const promise = axios.put('/Equipment', obj);
    return {
        type: types.EDIT_USER_EQUIP,
        payload: promise
    }
}

const remUserEquip = (item) => {
    const promise = axios.delete(`/Equipment/${item}`);
    return {
        type: types.REM_USER_EQUIP,
        payload: promise
    }
}

// MOUNTS

const getUserMount = () => {
    const promise = axios.get('/Mounts');
    return {
        type: types.GET_USER_MOUNT,
        payload: promise
    }
}

const createMount = (item) => {
    const promise = axios.post('/Mounts', item);
    return {
        type: types.CREATE_MOUNT,
        payload: promise
    }
}

const remUserMount = (item) => {
    const promise = axios.delete(`/Mounts/${item}`);
    return {
        type: types.REM_USER_MOUNT,
        payload: promise
    }
}

const editUserMount = (item) => {
    const promise = axios.put('/Mounts', item);
    return {
        type: types.EDIT_USER_MOUNT,
        payload: promise
    }
}

// ARMOR

const getUserArm = () => {
    const promise = axios.get('/Armor');
    return {
        type: types.GET_USER_ARM,
        payload: promise
    }
}

const createArm = (item) => {
    const promise = axios.post('/Armor', item);
    return {
        type: types.CREATE_ARM,
        payload: promise
    }
}

const remUserArm = (item) => {
    const promise = axios.delete(`/Armor/${item}`);
    return {
        type: types.REM_USER_ARM,
        payload: promise
    }
}

const editUserArm = (item) => {
    const promise = axios.put('/Armor', item);
    return {
        type: types.EDIT_USER_ARM,
        payload: promise
    }
}

const userArmDash = (item) => {
    const promise = axios.put(`/ArmorDash`, item);
    return {
        type: types.USER_ARM_DASH,
        payload: promise
    }
}

const search = (string) => {
    return {
        type: types.SEARCH,
        payload: string
    }
}

export default {

// USERS

    getUser,

// DASHBOARD

    addDisplayDashItem,
    getDash,
    addToDash,
    addToUserDash,
    remFromDash,

// DND API

    getMonsters,
    getSpells,
    getEquipment,

// EQUIPMENT

    createEquip,
    getUserEquip,
    editUserEquip,
    remUserEquip,

// MOUNTS

    getUserMount,
    createMount,
    remUserMount,
    editUserMount,

// ARMOR

    getUserArm,
    createArm,
    remUserArm,
    editUserArm,
    userArmDash,
    
    // SEARCH

    search

}