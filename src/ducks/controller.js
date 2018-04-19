import axios from 'axios';

const monstURL = 'http://www.dnd5eapi.co/api/monsters/';
const spellURL = 'http://www.dnd5eapi.co/api/spells/';
const equipURL = 'http://www.dnd5eapi.co/api/equipment/';

export const getEquipment = function () {
    return axios.get(equipURL).then(res => res.data.results);
}

export const getMonsters = function () {
    return axios.get(monstURL).then(res => res.data.results);
}

export const getSpells = function () {
    return axios.get(spellURL).then(res => res.data.results);
}
