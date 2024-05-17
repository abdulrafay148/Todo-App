import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [txt, settxt] = useState('Abc');
  const [txtlist, setxtlist] = useState<string[]>([]);

  const del = (i: number) => {
    const newList = [...txtlist];
    newList.splice(i, 1);
    setxtlist(newList);
  };

  const edi = (index: number) => { 
    const newtxt = prompt("Enter your new text");
    if (newtxt !== null) {
      const newlist = [...txtlist];
      newlist[index] = newtxt;
      setxtlist(newlist);
    }
  };

  const addText = () => {
    setxtlist([...txtlist, txt]);
    settxt('');
  };

  const deleteAll = () => {
    setxtlist([]);
  };

  return (
    <center>
    <div className="App">
      <h1>Todo App</h1>
      {/* <h4 id='h'>{txt}</h4> */}
      <input 
      value={txt}
        type="text" 
        id='inp1' 
        onChange={(e) => {
          settxt(e.target.value);
          console.log(e.target.value);
        }}
      />
      <button 
        id='but1' 
        className='add' 
        onClick={addText}
      >
        Add
      </button>
      <button 
        id='but2' 
        className='del' 
        onClick={deleteAll}
      >
        Delete All
      </button>
      {txtlist.map((x, i) => (
        <div key={i} className='item'>
          <span className='sp'>{x}</span>
          <button onClick={() => del(i)} className='del'>Delete</button>
          <button onClick={() => edi(i)} className='edi'>Edit</button>
        </div>
      ))}

    </div>
    </center>
  );
}

export default App;
