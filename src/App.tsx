import { useEffect, useRef, useState } from "react";
import { Idol } from "./types";

interface ITodo {
  id: number;
  title: string;
  content: string;
  completed: boolean;
}

const App = () => {
  // useState 사용시 가능하면 초기값을 주자
  const [text, setText] = useState("");
  const [name, setName] = useState<string>("");
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [member, setMember] = useState<string[]>([]);
  const [info, setInfo] = useState<null>(null);
  const [age, setAge] = useState<number>(0);
  const [user, setUser] = useState<{ name: string; age: number }>({
    name: "",
    age: 0,
  });
  const [idol, setIdol] = useState<Idol>({ name: "", age: 0 });
  // 할일 서비스를 위한 state
  const [todos, setTodos] = useState<ITodo[]>([]);
  // useRef 로 변수 보관하기
  const idCount = useRef(0);

  // (e:any) 타입 체크 안하고 그냥 js 처럼 쓰겠다
  // const handleChange = (e: { target : { value:string}}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const handleAdd = () => {
    console.log(text);
    const tempTodo: ITodo = {
      id: idCount.current++,
      title: text,
      content: "",
      completed: false,
    };
    setTodos([...todos, tempTodo]);
    setText("");
  };
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <h1>Todo Service</h1>
      <div>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>할일 등록</button>
      </div>
    </div>
  );
};

export default App;
