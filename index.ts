
//Klasser
class Person {
    //constructor körs när ett nytt objekt skapas med new
    //inkapsling med protected så att parametrar bara är synliga i Person och dess child-classes
    constructor(
        protected name: string, 
        protected address: string, 
        protected phone: string) {
    }
    skrivUt(): string{
        return `Namn: ${this.name}, Adress: ${this.address}, Telefonnummer: ${this.phone}`;
    }
}

class Student extends Person {
    constructor(
        name: string, 
        adress: string, 
        phone: string, 
        protected klass: string, 
        protected program: string)
        {
            super(name, adress, phone) 
          //Child(Student) tar emot 5 argument men dessa 3 skickas till constructor i parent(Person)
    }
    override skrivUt(): string {
        return `${super.skrivUt()}, Klass: ${this.klass}, Program: ${this.program}`;
    }
}

class Lärare extends Person {
    constructor(
        name: string, 
        adress: string, 
        phone: string, 
        protected ämne: string, 
        protected kurs: string)
        {
            super(name, adress, phone)
    }
    override skrivUt(): string {
        return `${super.skrivUt()}, Ämne: ${this.ämne}, Kurs: ${this.kurs}`;
    }
}
//Objekt
const lärare1 = new Lärare(
    "Claes Claesson", 
    "Alvesta", 
    "070088552", 
    "Matematik", 
    "Ma2c");

const elev1 = new Student(
    "Lisa Svensson", 
    "Sollefteå", 
    "0751122334", 
    "El-26", 
    "El- och energi");

console.log(lärare1.skrivUt());
console.log(elev1.skrivUt());
/*
Klassen, Person, ska ha egenskaperna Namn, Adress och Telefonnummer, och metoden skrivUt.

Klassen, Student, ärver klassen Person, men har även egenskaperna, klass och program. 
Klassen, Lärare, ärver klassen Person, men har även egenskaperna, ämne och kurs. 
Alla klasser ska dessutom ha konstruktorer.

Skapa sedan ett objekt av typen Lärare och ett objekt av typen Student och skriv ut 
objektens egenskaper.*/

