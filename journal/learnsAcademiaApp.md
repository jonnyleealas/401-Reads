So my function.map wasnt being called as a function. map needs an array and what we were sending in was an array. Why wasn't it reading it? Well we had to spread the state. our state was in an object, to get to the array we need to spread the state.

In an api I call I wanted to render the image. The images were in the form of an array. In order to render the image i first had to use an <img></img> tag and use src={item.image[0]} to get the values in the the index of the array. 

I also learned that apis have values I can pass into use for pagination.

I figured out how to use more material ui components. Sometimes i have to modify the way the code is written in order to combine with my code.

Also, keep breaking down the problem to find the smallest piece I can solve.