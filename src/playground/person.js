const isAdult = (age) => age >= 18;
const canDrink = (age) => age >= 16;
const isSenior = (age) => age >= 67;

export { canDrink, isSenior as default,isAdult };
