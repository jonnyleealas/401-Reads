# Richest Customer 1672
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

# Simplification
Take an array with sub arrays.
Count elements in each sub array.
Return max number after each sub array has been summed.

1. Create a variable to that sums each item of the sub array.
2. map through the initial array.
3. use reduce to add each element of the subArrays and return.
4. Out of the sum of each item in the subArrays spread each item and return the max number with Math.max(...sumSubArrays)

var maximumWealth = function(accounts) {
   let sumSubArrays = accounts.map(subArray =>{
       return subArray.reduce((a,b)=> a+b);
   })
    return Math.max(...sumSubArrays)
};
