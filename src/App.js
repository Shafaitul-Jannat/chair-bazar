
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
        </div>


      </div>

    </div >

  );
}

export default App;
