# Count Items Matching a Rule

# Simplified
- Does the index contain the correct value --> ruleKey/index === ruleValue
- When we call ruleKey it will look for the key of "color" and its value "1"
 - The index position which is the value has to match the value of ruleValue.

# Sudo
- Loop through array
- Binding for counter
- If ruleKey === ruleValue count++
- use and Object to store rule {
    "type": 
    "color":
    "name":
}
- We need to check the value at the index to see if it matches values in object. If we give our object index positions it will check the value at that index position.
- rule{
    "type": 0,
    "color": 1,
    "name": 2
}



```
let array = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]


var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0
    const rule = {
        "type": 0,
        "color": 1,
        "name": 2
    }
    
    for(let i = 0; i < items.length; i++) {
        - items at index --> "type": 0 --> value of index
        - ruleValue will be checked according to the value of the index above.
        if(items[i][rule[ruleKey]] === ruleValue) {
            count++
        }
    }
    
    return count
};

console.log(countMatches(array, "type", "phone"))```