import {useContext} from 'react'
import {ExampleContext} from '../context'
import { Link } from "react-router-dom";
export interface AboutProps {
}

export default function About (props: AboutProps) {
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
