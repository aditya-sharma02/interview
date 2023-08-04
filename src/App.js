import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./store/slice/todoslice";


function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.todo)
  const [state, setstate] = useState("")
  const handlechange = (e) => {
    setstate(e.target.value);
  }
  const submit = (e) => {
    e.preventDefault()
    // console.log(state)
    dispatch(addTodo(state))
    setstate("")
  }
  const deleteelem = (id) => {
    dispatch(deleteTodo(id))
  }
  return (
    <>
      
      <form>
        <input onChange={handlechange} value={state} type="text" placeholder="data" required />
        <button onClick={submit}>submit</button>
      </form>


      {
        data.map((elem, id) => {
          return (
            <div key={id}>
              <span onClick={()=>deleteelem(elem.time)}> {elem.data} </span> 
            </div>
          )
        })
      }
    </>
  );
}

export default App;
