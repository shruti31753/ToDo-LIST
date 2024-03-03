// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'

// function App() {

//   return (
//     <>
//       {/* <h1 className='text-3xl font-bold underline'> hello ritik katiyar</h1>
//       <div className='App'>
//         <h1>{name}</h1>

//       </div> */}
//       <h1 className="text-3xl font-bold underline">
//       ToDo List App
//     </h1>
//     <form>
//       <input type='text/'><button>Save</button></input>
//     </form>
//     { <div class="flex flex-col">
//   <div class="basis-1/4">01</div>
//   <div class="basis-1/4">02</div>
//   <div class="basis-1/2">03</div> }
// </div>

//     </>
//   )
// }

// export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import { useState } from 'react';

function App() {
  let [todolist,setTodolist]=useState([])
   
  let saveToDoList=(event)=>{
    
    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalDoList=[...todolist, toname]
      setTodolist(finalDoList)
    }
    else{
      alert("ToDo Name Already Exist");
    }
    event.preventDefault();
  }
  let list=todolist.map((value, index)=>{

    return(
      <ToDoListItems value={value} key={index} indexNumber={index}
      todolist={todolist}
      setTodolist={setTodolist}
      />
    )
  })
  return (
    <div className='App'>
      {/* <h1 className='text-3xl font-bold underline'> hello ritik katiyar</h1>
      <div className='App'>
        <h1>{name}</h1>

      </div> */}
      <h1 className="text-3xl font-bold underline">
      ToDo List 
    </h1>
    <form onSubmit={saveToDoList}>
      <input type='text' name='toname'/><button>Save</button>
    </form>
    <div className='outerDiv'>
    <ul>
      {list}
    </ul>
    </div>
    {/* <div class="flex flex-col">
  <div class="basis-1/4">01</div>
  <div class="basis-1/4">02</div>
  <div class="basis-1/2">03</div>
</div> */}

    </div>
  )
}

export default App;

function ToDoListItems({value, indexNumber, todolist, setTodolist}){
  let [status, setStatus]=useState(false)
  let deleteRow=()=>{
    //alert(indexNumber);
    let finalData=todolist.filter((v, i)=>i!=indexNumber)
    setTodolist(finalData)
  }
  let checkStatus=()=>{
    setStatus(!status)
  }
  return(
    <li className={(status)? 'completetodo': ' '}onClick={checkStatus}>{indexNumber+1}{ value}<span onClick={deleteRow}>&times;</span></li>
  )
}