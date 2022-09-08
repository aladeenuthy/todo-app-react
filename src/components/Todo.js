function Todo({todoName, isCompleted, id, toggleIsCompleted}) {
 console.log(isCompleted)
  return (
    <div className="todo" style={{display: "flex"}}>
     <input type="checkbox" checked={isCompleted} onChange={()=> toggleIsCompleted(id)}  />
     <p className={isCompleted ?"completed": ""}>{todoName}</p>
    </div>
  );
}

export default Todo;
