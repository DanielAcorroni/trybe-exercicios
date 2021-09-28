const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = callback => console.log(callback)

doingThings(wakeUp())
doingThings(breakfast())
doingThings(sleep())