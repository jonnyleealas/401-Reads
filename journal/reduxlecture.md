# Redux
- Global cloud
- Provided at the top
- opt-in
- massive rerender are not an issue.
- organized
- consistent api
- good for data
- good if we need plenty of rendering
- good for shopping carts

# State manegment
- State
- Reducer
    ```
    arr.reduce( (acc, val, index)=>{
        return whatever <--- return is the acc also known as the next state
    }, 3) <--- this is initial value or state

    last state = the accumulator that is returned at the end.
    ```
    - actions
    ```
    action into the reducer
    using a dispatcher
    ex: dispatch an action and receive a state
    ```

    # Actions
    - always an object
    - they usually have two properties
    ```
    type- all UPPERCASE LETTERS
    and 
    payload - can be some new name
    ```
    - we tell redux to dispatch the action called changer
    ```
    dispatch(changer, 'allie')
    this goes into Reducer(action)---> action is the type and the payload type: 'changename', payload: newName.
    - when type is changename the make a name is the payload.
    - components will dispatch actions
    ```

    <index>
        <app>
        
            
        
        </app>
    
    </index>