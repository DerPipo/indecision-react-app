const obj = {
    name: 'Vikram',
    getName() {
        return this.name
    }
}

const getName = obj.getName.bind(obj) // bind is needed to remain the context of the function
// const getName = obj.getName.bind({name: 'Pipo'}) // funktioniert ebenfalls

console.log(getName())