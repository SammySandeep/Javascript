function Hero(name, level){
    this.name = name
    this.level = level
}

function Warrior(name, level, weapon){
    Hero.call(this, name, level)
    this.weapon = weapon
}

function Healer(name, level, spell){
    Hero.call(this, name, level)
    this.spell = spell
}

Hero.prototype.greet = function(){
    return `${this.name} Hello`
}

Warrior.prototype.attack = function(){
    return `${this.name} attacks with the ${this.weapon}`
}

Healer.prototype.heal = function(){
    return `${this.name} casts ${this.spell}`
}

Warrior.prototype = Object.create(Hero.prototype)
Healer.prototype = Object.create(Hero.prototype)

const hero1 = new Warrior('Bjorn', 1, 'axe')
const hero2 = new Healer('Kanin', 2, 'cure')

console.log(hero1.greet())  //  Bjorn Hello
