# 2d Array
A 2d array is an array that has an array inside of it. The arrays that we access 
like this index[index of main arra][index of array inside of it];
Or another way of looking at it is:
    - first value represents a row and the second represents a column.
    - second way of thinking is that the first value represents which subarray to access from the main array and the second value represents which element of the subarray is accessed.

# Initializing
Normally we have to define an array size. With 2d arrays its a bit diferent. With 2d arrays we have to declare the number of elements in the array and also the number of elements in the sub array. This can be thought of as number or rows and columns.
- Ex: int [][] intArray2;
      intArray2 = new int[2][4]; // two rows and 4 columns
      result: [0,0,0,0]
              [0,0,0,0]

              # Float values
              - float is a data type in java
# Initializer list
A way of initializing an array and assigning values at the same time.

# Modify an array
storedArray[5]= 1; // 1 will be the new value of index 5 in the array 

# Nested loops
for(int a = 0; a < letterBlock.length; a++) {
    for(int b = 0; b < letterBlock[a].length; b++) {
        System.out.print("Accessed: " + letterBlock[a][b] + "\t");
    }
    System.out.println();
}

- a is the index of the outer array and the outer array loop
- b is the index of the inner array and the inner loop.
- letterBlock.length is the length of the outer array
- letterBlock[a] takes goes in the inner looper of the inner arrays and looks at the index of the outer loop. At each outer looper index show me that length.

or 

Within the nested for loop, we can see ;that each of the subarray elements are being accessed by useing the outer loop index ofot the outer array, and the inner loop index for ;the subbarrray.

# Columns and rows in an array
String[][] matrix = {{"[0][0]", "[0][1]", "[0][2]"}, 
                     {"[1][0]", "[1][1]", "[1][2]"},
                     {"[2][0]", "[2][1]", "[2][2]"},
                     {"[3][0]", "[3][1]", "[3][2]"}};
- To get the number of rows we use matrix.length
- To get the number of columns we use matrix[0].length

# Row major and column major order

# Accessing Indexes in  matrix
Every time we add a nested array to an array we can access it by adding [] brackets.
To access david we have to write the command as such on line 55.
'''
let array = [[[["jonny", [["david"]]]]]];
array[0][0][0][1][0][0]

'''