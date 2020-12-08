Requirements:

- Starting bankroll
    * prop
    * context
    * input
_ rol the dice
    * roll 2
    * add em up
- check the total and change balance
    * win or lose
    * if balance <= 0 no rolling for you

```
javascript architecture
<context>
 s:bankRoll
<app>

    f:checkWin
        C: changeBankRoll
    <dice>
     s: d1
     s: d2
     s: total
     f: roll
        - calls checkwin Prop
     prop: App.checkwin
      <span>d1,d2, total</span>
        <button>roll<button>
    </dice>
    <bankRoll>
   <context.bankRoll>
     span-> bankroll
    </context.bankRoll>
    </bankRoll>
</app>
</context>     
```
# To use a function from context
- wrap the component in context.whateverFunctionYouWantToUse

# when creating a createContext
- will need a context.provider to wrap around what you are rendering
- what you are wrapping is {props.children}
- we also need to add a hook at import to use {useContext}
```
import React, {useState} from 'react'

export const GameContext = React.createContext();

function GameContextProvider(props){

const [bankRoll, setBankRoll] = useState(0)

const ctx = {
bankRoll,
setBankRoll
}
  return(
<GameContext.Provider value={ctx}>
{props.children}
</GameContext.Provider>
 )
}

export default GameContextProvider;
```