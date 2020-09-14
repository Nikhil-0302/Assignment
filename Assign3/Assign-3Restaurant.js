

class restaurantManager{
    constructor(arobj){
       this.restaurantList = arobj;
    }
    printAllRestaurantNames() {
        this.restaurantList.forEach((list) => console.log(list.name));
    }
    filterRestaurantByCity(cityname){
        return this.restaurantList.filter((list) => list.city === `${cityname}`);
    }

}

class objary {
    constructor(name, address, city){
        this.name = name;
        this.address = address;
        this.city = city;

    }
}

var obj1 =new objary('Brewsky', 'E-city', 'Bangalore');
var obj2 =new objary('Chatzz', 'Worli', 'Mumbai');
var obj3 =new objary('Taj', 'Dawos', 'Mumbai');
var obj4 =new objary('Humming Tree', 'Brigade Rd', 'Bangalore');

var arydata = [obj1,obj2,obj3,obj4];
var restobj = new restaurantManager(arydata);
console.log(restobj);
console.log("Restaurant Names");
restobj.printAllRestaurantNames();

console.log("Filter by City");
console.log(restobj.filterRestaurantByCity("i"));
console.log(restobj.filterRestaurantByCity("Bangalore"));
console.log(restobj.filterRestaurantByCity("Mumbai"));