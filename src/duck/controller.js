import axios from 'axios';

const monstURL = 'http://www.dnd5eapi.co/api/monsters/';
const spellURL = 'http://www.dnd5eapi.co/api/spells/';
const equipURL = 'http://www.dnd5eapi.co/api/equipment/';

const getEquipment = function () {
    console.log('got to getEquipment')
    return axios.get(equipURL).then(res => res.data.results);
}

const getMonsters = function () {
    console.log('got to getMonsters')
    return axios.get(monstURL).then(res => res.data.results);
}

const getSpells = function () {
    console.log('got to getSpells')
    return axios.get(spellURL).then(res => res.data.results);
}

export default {
    getEquipment,
    getMonsters,
    getSpells
}
