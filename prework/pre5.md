# Jonathon Lee  
# Class 401
# Code challenges

# How to capitalize the first letter in an array while keeping the rest of the letters the same.

const toTitleCase = (arr) =>{
  return arr.map(str=>{
    return str[0].toUpperCase() + str.slice(1)
  })
}

# 
We start by creating a function. This function is called toTitleCase. After that we create a function that takes in an arr. In this case (arr). We then need a return statement. The return statement will have us using the method map to arr.
- Map loops through an array starting at index 0. In this case we've named the index postion str. 
- After nameing the index postion map will be starting the loop from we can then start capitalizing the strings.
- We start with returning str.
- We can then use toUpperCase to start captializing. toUpperCase will capitalize everthing unless we give it an index position to start from.
- The index position of the str will be [0] meaning the first letter. We write that like this : arr[0].toUpperCase().
- Right now what we have is only the first letter capitalized. That is all we have. Next we need to tell the computer to add the following letter the the capitalized first letter.
- To do this we can use a method called splice. Splice cuts the string starting at a position we give it. In this case we will give it position (1) of the str. This will tell it to cut everthing after position [0]
- To combine the capitalized letter and the spliced letters we add a + sign.
- The complete sentence will look like this : arr[0].toUppercase()+ arr.splice(1)
- We are done.