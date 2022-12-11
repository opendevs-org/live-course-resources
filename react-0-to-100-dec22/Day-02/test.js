export function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

export const opendevsTeam = ['Ajay', 'Alok', 'Mihir']

const message = () => {
    const name = "Jesse";
    const age = 40;
    return name + ' is ' + age + ' years old.';
};

export default message;

// Named Export
// Default Export -> Only one from a file