/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 ```
var ParkingSystem = function(big, medium, small) {
        this.big = big;
        this.medium = medium;
        this.small = small;  
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    if(carType == 1){
        if(this.big > 0){
            this.big--;
            return true;
        } else {return false};
    }
    
    if(carType == 2){
        if(this.medium > 0){
            this.medium--;
            return true;
        } else {return false};
    }
    
    if(carType == 3){
        if(this.small > 0){
            this.small--;
            return true;
        } else {return false};
    }
     return false;
};
```
/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

 # Simpler Version Using object
```
 let ParkingSystem = function(big, medium, small){
     this.capacities = {
         1:big,
         2: medium,
         3: small,
     }
 }

ParkingSystem.prototype.addCar = function(carType){
     if(this.capacities[carType]===0)
         return false;
         this.capacities[carType]--;
         return true
 }

 ```