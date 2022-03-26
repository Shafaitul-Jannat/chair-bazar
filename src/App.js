
import './App.css';
import Shop from './components/Shop/Shop'


function App() {
  return (
    <div className="App">
      <h1>Welcome to Chair Bazar</h1>
      <Shop></Shop>
      <div className='Ques-Ans'>
        <div className='ques'>
          <h4>How react works?</h4>
          <p>React.js is an accessible Js package that is used to create single-page apps' ui. For web and mobile apps, it's utilized to manage the view layer. If there are numerous state changes, React does not commit them sequentially. React, on the other hand, walks through its virtual DOM, makes a list of the modifications that need to be applied to the real DOM, and afterwards performs everything in one go. We can also make reused UI components with React.</p>
        </div>
        <div className='ques'>
          <h4>Props vs State</h4>
          Props: It is now a standard that Props, also known as Properties, shall not be modified. Components inherit props from their parent that should not be changed within the component. Data travels from the parent to the child in React and React Native.Props are used to create a single component that may be utilized in multiple places throughout an app. The properties can be set by the parent that is calling the component, which may be different in each location.
          State:A component's state is internal, whereas props are passed to it. In React/React Native, state is utilized to maintain track of information within components. State can be utilized whenever there is data that will change within a component. The interaction of users with components is an excellent example of how state works. Clicking buttons, checking boxes, filling out forms, and other forms of user interaction are all instances of how state might be used within a component.
        </div>


      </div>

    </div >

  );
}

export default App;
