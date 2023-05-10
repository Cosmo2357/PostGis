import {useContext, useEffect} from 'react'
import {ExampleContext, UserContext} from '../context'
import { Link } from "react-router-dom";
import axios from 'axios';

export default function About () {

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // 環境変数から API のベース URL を取得

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/v1/example`).then((res) => {
      console.log(res.data)
    })
  }, [])


  const { counter , incrementCounter} = useContext(ExampleContext);

  const onClickHandler = ()=> {
    incrementCounter()
  }

  return (
    <div>
      <h1>from context: {counter}</h1>
      <button onClick={onClickHandler} className={`bg-black h-8 w-20 rounded text-white`}>Click</button>
       <Link to="/">Home</Link>
    </div>
  );
}
