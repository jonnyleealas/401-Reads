# Getters and Setters
When accessing an objects methods or change and mutate from the outside we can use getters and setters.

let person = {
    name: "jonny",
    lastNames: "lee",
    get fullNames(){
        return `${this.name}`
    },
    // we always give setters a value to take input
    set fullNames(value){
        let parts = value.split(" ")
        this.name = value[0]
        this.lastName = value[1]
    }
}