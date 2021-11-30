import React from 'react';
import { useDispatch, useSelector } from "react-redux";
// Epl api
// https://gist.github.com/akeaswaran/b48b02f1c94f873c6655e7129910fc3b

function App() {
  const dispatch = useDispatch()
  const store = useSelector(state => state);
  console.log( store )
  return (
    <div>
        !!ads
    </div>    
  );
}

export default App;
