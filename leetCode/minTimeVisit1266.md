# Min Time Visit

# Simplified

# Tutorial
https://youtu.be/vO2v6Angyog

# Code

```
    
var minTimeToVisitAllPoints = function(points) {
    let counter = 0;
    
    for(let i = 1; i < points.length; i++){
        
        let p1 = points[i-1]
        let p2 = points[i]
        
        let dx = Math.abs(p1[0]-p2[0])
        let dy = Math.abs(p1[1]-p2[1])
        
       counter+= Math.max(dx, dy)   
    }
    return counter  
};
```