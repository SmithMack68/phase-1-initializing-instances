// Write your code hereo practice OOP concepts, let's create 3 classes that use constructor methods. These constructors will assign properties based on initial parameters.

//Create a class for Breakfast. 
//Breakfast will have a constructor with a food and a drink.
//Create a class for Lunch. 
//Lunch will have a constructor with a salad, a soup, and a drink.
//Create a class for Dinner. 
//Since dinner is a little bit fancier, Dinner will have a constructor with salad, soup, entree, and dessert. Initialize dessert as a private property by prefixing its name with the hash symbol (#).

class Breakfast{
    constructor(food, drink){
        this.food = food
        this.drink =drink
    }
}
new Breakfast('Scrambled','Coffee')

class Lunch{
    constructor(salad, soup, drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}new Lunch ('Caesar', 'Tomato', 'Coke')


class Dinner {
        #dessert;
        constructor(salad, soup, entree, dessert){
            this.salad = salad
            this.soup = soup
            this.entree = entree
            this.#dessert = dessert
        }
    }

new Dinner('Mixed Greens', 'Pumpkin', 'Lamb', 'Chocolate Mousse')