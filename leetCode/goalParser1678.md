# Goal Parser Interpretation
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.

# Simplified
- Find "G" and += "G"
- Find "()" and += "o"
- Find "al" and += "al"


# Code 
- Create empty string binding 
- Loop through command string
- If "G" add "G" to string
- If "(" then see if the next thing is ")", if it is str += "o"
- Else add "al"
- Return str
```
var interpret = function(command) {
    str = ""
    for(let i = 0; i < command.length; i++){
      if(command[i] == "G"){
        str += "G"
      } else if(command[i]== "("){
        if(command[i+1]== ")") {
          str += "o"
        } else { str += "al"}
      }
    }
    return str
};
```