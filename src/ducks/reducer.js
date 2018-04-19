import * as controller from './controller';

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

const GET_MONSTERS = 'GET_MONSTERS';
const GET_SPELLS = 'GET_SPELLS';
const GET_EQUIPMENT = 'GET_EQUIPMENT';

const DISPLAY_DASH_ITEM = 'DISPLAY_DASH_ITEM';

export function displayDashItem(item) {
    return ({
        type: DISPLAY_DASH_ITEM,
        payload: item
    })
}

export function addToMountDash(item) {
    return({
        type: ADD_TO_MOUNT_DASH,
        payload: item
    })
}

export function addToMonstDash(item) {
    return ({
        type: ADD_TO_MONST_DASH,
        payload: item
    })
}

export function addToSpellDash(item) {
    return ({
        type: ADD_TO_SPELL_DASH,
        payload: item
    })
}

export function addToArmorDash(item) {
    return ({
        type: ADD_TO_ARMOR_DASH,
        payload: item
    })
}

export function addToWeaponDash(item) {
    return ({
        type: ADD_TO_WEAPON_DASH,
        payload: item
    })
}

export function addToEquipDash(item) {
    return ({
        type: ADD_TO_EQUIP_DASH,
        payload: item
    })
}

export function remFromMountDash(item) {
    return ({
        type: REM_FROM_MOUNT_DASH,
        payload: item
    })
}

export function remFromMonstDash(item) {
    return ({
        type: REM_FROM_MONST_DASH,
        payload: item

    })
}

export function remFromSpellDash(item) {
    return ({
        type: REM_FROM_SPELL_DASH,
        payload: item
    })
}

export function remFromArmorDash(item) {
    return ({
        type: REM_FROM_ARMOR_DASH,
        payload: item
    })
}

export function remFromWeaponDash(item) {
    return ({
        type: REM_FROM_WEAPON_DASH,
        payload: item
    })
}

export function remFromEquipDash(item) {
    return ({
        type: REM_FROM_EQUIP_DASH,
        payload: item
    })
}

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
            return Object.assign({}, state, { displayItem: action.payload});

        case ADD_TO_MOUNT_DASH:
            return Object.assign({}, state, { mountDash: [...state.mountDash, action.payload] });

        case ADD_TO_MONST_DASH:
            return Object.assign({}, state, { monstDash: [...state.monstDash, action.payload] });

        case ADD_TO_SPELL_DASH:
            return Object.assign({}, state, { spellDash: [...state.spellDash, action.payload] });

        case ADD_TO_ARMOR_DASH:
            return Object.assign({}, state, { armorDash: [...state.armorDash, action.payload] });

        case ADD_TO_WEAPON_DASH:
            return Object.assign({}, state, { weaponDash: [...state.weaponDash, action.payload] });

        case ADD_TO_EQUIP_DASH:
            return Object.assign({}, state, { equipDash: [...state.equipDash, action.payload] });

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
