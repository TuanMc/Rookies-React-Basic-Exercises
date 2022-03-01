Q1. What is the difference between the React’s function components and class components?

- Function components: 
	+ A functional component is just a plain JavaScript function that accepts props as an argument and returns a React element
	+ There is no render method used in functional components
	+ Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI
	+ React lifecycle methods cannot be used in functional components
	+ Hooks can be easily used in functional components
	+ Constructors are not used 

- Class components:
	+ A class component requires you to extend from React. Component and create a render function which returns a React element
	+ It must have the render() method returning HTML
	+ Also known as Stateful components because they implement logic and state
	+ React lifecycle methods can be used inside class components 
	+ It requires different syntax inside a class component to implement hooks
	+ Constructor are used as it needs to store state

Q2. What is the component state?
	- Local variable of component
	- Use setState() to update component’s states
	- Page will be re-rendered when state changed
