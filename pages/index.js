import { useState } from "react"
import { useRecoilState } from "recoil";
import { todoState } from "../recoil/atom"

export default function Home() {
  // TodoのAtomを呼び出し
  const [todoList, setTodoList] = useRecoilState(todoState)

  const [todo, setTodo] = useState("")

  const handleChange = (e) =>{
    setTodo(e.target.value)
  }

  // Todoリストを更新する
  const pushTodo = (newTodo) => {
    setTodoList([...todoList, newTodo])
    setTodo("")
  }

  return (
    <div>
      <p>todo list</p>
      <ul>
        {todoList.length && todoList.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
      <div>
        <input type="text" value={todo} onChange={handleChange} />
        <button onClick={() => pushTodo(todo)}>
          add Todo
        </button>
      </div>
    </div>
  )
}
