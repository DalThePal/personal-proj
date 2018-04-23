import * as controller from './controller';
import axios from 'axios';

let initialState = {
    monstDash: [],
    spellDash: [],
    equipDash: [],
    armorDash: [],
    weaponDash: [],
    mountDash: [],
    monsters: [],
    spells: [],
    equipment: [],
    mounts: [],
    armor: [],
    weapons: [],
    displayItem: '',


};

const ADD_TO_MONST_DASH = 'ADD_TO_MONST_DASH';
const ADD_TO_SPELL_DASH = 'ADD_TO_SPELL_DASH';
const ADD_TO_EQUIP_DASH = 'ADD_TO_EQUIPMENT_DASH';
const ADD_TO_WEAPON_DASH = 'ADD_TO_WEAPON_DASH';
const ADD_TO_ARMOR_DASH = 'ADD_TO_ARMOR_DASH';
const ADD_TO_MOUNT_DASH = 'ADD_TO_MOUNT_DASH';

const REM_FROM_MONST_DASH = 'REM_FROM_MONST_DASH';
const REM_FROM_SPELL_DASH = 'REM_FROM_SPELL_DASH';
const REM_FROM_EQUIP_DASH = 'REM_FROM_EQUIP_DASH';
const REM_FROM_WEAPON_DASH = 'REM_FROM_WEAPON_DASH';
const REM_FROM_ARMOR_DASH = 'REM_FROM_ARMOR_DASH';
const REM_FROM_MOUNT_DASH = 'REM_FROM_MOUNT_DASH';

const UPDATE_MONST_DASH = 'UPDATE_MONST_DASH';
const UPDATE_SPELL_DASH = 'UPDATE_SPELL_DASH';
const UPDATE_ARMOR_DASH = 'UPDATE_ARMOR_DASH';
const UPDATE_EQUIP_DASH = 'UPDATE_EQUIP_DASH';
const UPDATE_MOUNT_DASH = 'UPDATE_MOUNT_DASH';
const UPDATE_WEAPON_DASH = 'UPDATE_WEAPON_DASH';

const GET_MONSTERS = 'GET_MONSTERS';
const GET_SPELLS = 'GET_SPELLS';
const GET_EQUIPMENT = 'GET_EQUIPMENT';

const DISPLAY_DASH_ITEM = 'DISPLAY_DASH_ITEM';

// DASHBOARD

export function displayDashItem(item) {
    return ({
        type: DISPLAY_DASH_ITEM,
        payload: item
    })
}


// MONSTER DASH

export function getMonstDash() {
    const promise = axios.get(`/monstDashItems`)
    return {
        type: UPDATE_MONST_DASH,
        payload: promise
    }
    
}

export function addToMonstDash(item) {
    const promise = axios.post('/monstDashItems', item)
    return {
        type: UPDATE_MONST_DASH,
        payload: promise
    }
    
}

export function remFromMonstDash(item) {
    console.log('reducer object', item)
    const promise = axios.put('/monstDashItems', item)
    return {
        type: UPDATE_MONST_DASH,
        payload: promise
    }
}

// SPELL DASH

export function getSpellDash() {
    const promise = axios.get('/spellDashItems')
    return {
        type: UPDATE_SPELL_DASH,
        payload: promise
    }
    
}

export function addToSpellDash(item) {
    const promise = axios.post('/spellDashItems', item)
    return {
        type: UPDATE_SPELL_DASH,
        payload: promise
    }
}

export function remFromSpellDash(item) {
    const promise = axios.put('/spellDashItems', item)
    return {
        type: UPDATE_SPELL_DASH,
        payload: promise
    }
}

// ARMOR DASH

export function getArmorDash() {
    const promise = axios.get('/armorDashItems')
    return {
        type: UPDATE_ARMOR_DASH,
        payload: promise
    }
    
}

export function addToArmorDash(item) {
    const promise = axios.post('/armorDashItems', item)
    return {
        type: UPDATE_ARMOR_DASH,
        payload: promise
    }
}

export function remFromArmorDash(item) {
    const promise = axios.put('/armorDashItems', item)
    return {
        type: UPDATE_ARMOR_DASH,
        payload: promise
    }
}

// WEAPON DASH

export function getWeaponDash() {
    const promise = axios.get('/weaponDashItems')
    return {
        type: UPDATE_WEAPON_DASH,
        payload: promise
    }
    
}

export function addToWeaponDash(item) {
    const promise = axios.post('/weaponDashItems', item)
    return {
        type: UPDATE_WEAPON_DASH,
        payload: promise
    }
}

export function remFromWeaponDash(item) {
    const promise = axios.put('/weaponDashItems', item)
    return {
        type: UPDATE_WEAPON_DASH,
        payload: promise
    }
}

// EQUIP DASH

export function getEquipDash() {
    const promise = axios.get('/equipDashItems')
    return {
        type: UPDATE_EQUIP_DASH,
        payload: promise
    }
    
}
export function addToEquipDash(item) {
    const promise = axios.post('/equipDashItems', item)
    return {
        type: UPDATE_EQUIP_DASH,
        payload: promise
    }
}

export function remFromEquipDash(item) {
    const promise = axios.put('/equipDashItems', item)
    return {
        type: UPDATE_EQUIP_DASH,
        payload: promise
    }
}

// MOUNT DASH

export function getMountDash() {
    const promise = axios.get('/mountDashItems')
    return {
        type: UPDATE_MOUNT_DASH,
        payload: promise
    }
    
}

export function addToMountDash(item) {
    const promise = axios.post('/mountDashItems', item)
    return {
        type: UPDATE_MOUNT_DASH,
        payload: promise
    }
}

export function remFromMountDash(item) {
    const promise = axios.put('/mountDashItems', item)
    return {
        type: UPDATE_MOUNT_DASH,
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

        case UPDATE_MOUNT_DASH + '_FULFILLED':
            return Object.assign({}, state, { mountDash: action.payload.data });

        case UPDATE_MONST_DASH + '_FULFILLED':
            return Object.assign({}, state, { monstDash: action.payload.data });

        case UPDATE_SPELL_DASH + '_FULFILLED':
            return Object.assign({}, state, { spellDash: action.payload.data });

        case UPDATE_ARMOR_DASH + '_FULFILLED':
            return Object.assign({}, state, { armorDash: action.payload.data });

        case UPDATE_WEAPON_DASH + '_FULFILLED':
            return Object.assign({}, state, { weaponDash: action.payload.data });

        case UPDATE_EQUIP_DASH + '_FULFILLED':
            return Object.assign({}, state, { equipDash: action.payload.data });

        case REM_FROM_MOUNT_DASH:
            let mountIndex = state.mountDash.findIndex(mount => mount.name === action.payload)
            let newMountDash = state.mountDash.slice();
            newMountDash.splice(mountIndex, 1);
            return Object.assign({}, state, { mountDash: newMountDash });

        case REM_FROM_MONST_DASH:
            let monstIndex = state.monstDash.findIndex(monster => monster.name === action.payload)
            let newMonstDash = state.monstDash.slice();
            newMonstDash.splice(monstIndex, 1);
            return Object.assign({}, state, { monstDash: newMonstDash });

        case REM_FROM_SPELL_DASH:
            let spellIndex = state.spellDash.findIndex(spell => spell.name === action.payload)
            let newSpellDash = state.spellDash.slice();
            newSpellDash.splice(spellIndex, 1);
            return Object.assign({}, state, { spellDash: newSpellDash });

        case REM_FROM_ARMOR_DASH:
            let armorIndex = state.armorDash.findIndex(armor => armor.name === action.payload)
            let newArmorDash = state.armorDash.slice();
            newArmorDash.splice(armorIndex, 1);
            return Object.assign({}, state, { armorDash: newArmorDash });

        case REM_FROM_WEAPON_DASH:
            let weaponIndex = state.weaponDash.findIndex(weapon => weapon.name === action.payload)
            let newWeaponDash = state.weaponDash.slice();
            newWeaponDash.splice(weaponIndex, 1);
            return Object.assign({}, state, { weaponDash: newWeaponDash });

        case REM_FROM_EQUIP_DASH:
            let equipIndex = state.equipDash.findIndex(equipment => equipment.name === action.payload)
            let newEquipDash = state.equipDash.slice();
            newEquipDash.splice(equipIndex, 1);
            return Object.assign({}, state, { equipDash: newEquipDash });

        case GET_MONSTERS + '_FULFILLED':
            return Object.assign({}, state, { monsters: action.payload });

        case GET_SPELLS + '_FULFILLED':
            return Object.assign({}, state, { spells: action.payload });

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
