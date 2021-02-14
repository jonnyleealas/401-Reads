# if-then:
    code block runs if condition is true
        if(true){
            system.out.println("true");
        }
# if-then-else:
    one block runs if conditions is true
    another block runs if condition is false
        if(true){
            System.out.println("true");
        }else{
            System.out.println("false");
        }
# if-then-else chained:
    same as if-then but an arbitrary number of conditions
        if(true){
            System.out.println("true");
        } else if(false){
            System.out.println("false");
        } else {
            System.out.println("who knows");
        }
        
# switch
    switch block runs if condition value matches case value
        String cat ="blue"

        switch(cat){
        case "blue":
            System.out.println("blue cat");
            break;
        case "red":
            System.out.println("Red cat");
            break;
        default:
            System.out.println("Grey cat");

        }