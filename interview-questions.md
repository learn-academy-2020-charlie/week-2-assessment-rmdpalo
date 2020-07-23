# ASSESSMENT 2: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. Why would you use the method super()?

  Your answer:
  the super() method allows us to more quickly create class extensions without repeatedly entering constructors that would be used throughout all of them.

  Researched answer:
  you would use the super method to access and call on functions from an object's parent.


2. What is a virtual DOM?

  Your answer:
  A virtual DOM (Document Object Model) off the top of my head, I think it's the model in which browsers see our data.

  Researched answer:
  In React every DOM object has a corresponding "virtual DOM" that has the same properties but does not have the power to directly change what's on the screen. 


3. When creating a basic (stateless) class component in React, what are the necessary elements needed to display "Hello World" in the browser?

  Your answer:
  Not sure if I'm interpreting the question properly but I think we need everything we want to return in the component in one div, and we also need the usual class elements like constructors and methods.

  Researched answer:
  To be honest, it's really hard to grasp what I'm reading when I'm researching this topic. It says that for stateless class components in react, we can't use life cycle hooks and since there's no state we can't dynamically change what's in the component. So based on that I think the NECESSARY elements would be, the class itself, it's constructors, methods, render, and return(s). Inside it we would have a single div with the header tag or p tag depending on what you want containing the string Hello World.


4. What is JSX?

  Your answer:
  In simple terms it's a slightly different version of HTML used inside React Components.

  Researched answer:
  JSX stands for JavaScript XML it allows us to write HTML in React, making it easier to write and add in React as well, there are slight differences in syntax such as adding inline styles and adding comments but for the most part it's the same.


5. What is state in React?

  Your answer: State is dynamic storage within the components so that the user doesn't have to refresh the page every time something changes (i.e. someone clicks a like button)

  Researched answer:
  In React, "state" is an object in an app that can change. Each component can maintain its own state, which lives in "this"



6. STRETCH: What is hoisting in JavaScript?

  Your answer: 
  I don't really know what hoisting is with what I know before doing research.

  Researched answer:
  Hoisting is JS's behavior where they move any variable declarations up to the top of the current scope, so if I were to use a variable before declaring it (within the scope) it SHOULD work, based on what I read at least.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- React lifecycle methods:
  Each component in React has a lifecycle which you can monitor and manipulate during its three main phases: Mounting, Updating, and Unmounting.

- event.preventDefault()
  this tells the user that if the event does not get explicitly handled, the default action should not be taken normally as it would. 

- DOM events 
  JavaScript can be executed when an event occurs, like when a user clicks on an HTML element. These are DOM events.

- React props
  props in react are arbitrary inputs in components.

- onChange
  the onChange event in React detects when the value of an input element changes. Js allows us to listen to an input's change in value by providing the attribute onChange.
