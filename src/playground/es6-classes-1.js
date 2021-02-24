class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi. I am ${ this.name } (${ this.age }).`
    }
    getDescription() {
        return `${ this.name } is ${ this.age} year${this.age !== 1 ? 's' : ''} old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }
    getDescription() {
        let description = super.getDescription()
        if (this.hasMajor()) {
            description += ` Their major is ${ this.major }.`
        }
        return description
    }
    hasMajor() {
        return !!this.major
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let greeting = super.getGreeting()
        if (this.hasHomeLocation()) {
            greeting += ` Home location is ${ this.homeLocation }.`
        }
        return greeting
    }
    hasHomeLocation() {
        return !!this.homeLocation
    }
}

const me = new Student('Dominik Alexander', 1, 'Computer Science')
console.log(me.getDescription())

const other = new Traveler('Pipo', 18, 'Cologne')
console.log(other.getGreeting())