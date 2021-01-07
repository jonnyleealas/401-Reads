# Things needed when using responder system
- Feedback/Highlight
    - shows user what is handling touch and what will happen when released.
- Cancel
    - Allows actions to be canceled. 
    - Help user experiment and interact without fear of making mistakes.
# TouchableHiglight and Touchable
- A view can become a responder by implementing the correct negotiation methods. 
    - View.props.onStartShouldSetResponder: (evt) => true, - Does this view want to become responder on the start of a touch?
    -View.props.onMoveShouldSetResponder: (evt) => true, - Called for every touch move on the View when it is not the responder: does this view want to "claim" touch    responsiveness?