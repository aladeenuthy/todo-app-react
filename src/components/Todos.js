import {useRef, useState } from "react";
import BorderBottom from "./BorderBottom";
import Todo from "./Todo";

function Todos() {
  const todoRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [todos, setTodos] = useState([])
  function addTodo(){
    if(todoRef.current.value.length > 0){
      const newTodo = {id: new Date().getTime().toString(), todoName: todoRef.current.value, isCompleted: false};
        setTodos(prevTodos=>{
      return [ newTodo, ...prevTodos];
    });
    todoRef.current.value  = '';
    }
  }
  function toggleIsCompleted(id){
    setTodos(prevTodos=>{
      return prevTodos.map((todo)=>{
        return todo.id === id ? {...todo, isCompleted: !todo.isCompleted}: todo
      });
      
    })
  }
  function getTodosByCurrentIndex(){
    if (currentIndex === 0){
      return todos.map((todo)=>{
        return <Todo {...todo} key={todo.id} toggleIsCompleted= {toggleIsCompleted} />
      });
    }else if(currentIndex === 1){
      const activeTodos = todos.filter(function(todo){
        return !todo.isCompleted;
      })
      return activeTodos.map((todo)=>{
        return <Todo {...todo} key={todo.id} toggleIsCompleted= {toggleIsCompleted} />
      });
    }else{
      const completedTodos = todos.filter(function(todo){
        return todo.isCompleted;
      })
      return completedTodos.map((todo)=>{
        return <Todo {...todo} key={todo.id} toggleIsCompleted= {toggleIsCompleted} />
      });
    }
  }
  return (
    <div className="todos">
      <div className="categories">
        <div onClick={()=>setCurrentIndex(0)}>
          <p>All</p>
          {currentIndex === 0 && <BorderBottom/>}
          </div>
        <div onClick={()=>setCurrentIndex(1)}>
          <p>Active</p>
          {currentIndex === 1 && <BorderBottom/>}
        </div>
        <div onClick={()=>setCurrentIndex(2)}>
          <p>Completed</p>
          {currentIndex ===2 && <BorderBottom/>}
        </div>
      </div>
      <div className="input-container">
        <input placeholder="add todo" ref={todoRef}/>
        <button onClick={addTodo}>
          Add
        </button>
      </div>
      {getTodosByCurrentIndex()}
    </div>
  );
}

export default Todos;
