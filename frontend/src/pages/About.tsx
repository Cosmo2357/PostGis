import { useContext } from 'react'
import { ExampleContext } from '../context'
import { Link } from "react-router-dom";
import axios from 'axios';
import {
  useQuery,
} from '@tanstack/react-query'


export default function About() {


  const { data, isSuccess, isLoading, error } = useQuery({
     queryKey:['example'],
    queryFn: () => axios(`${import.meta.env.VITE_API_BASE_URL}/api/v1/example`).then(res => res.data),
    staleTime: 300000, // 5 分間
    onError: (error) => {
      console.log(error)
    }
  })


  const { counter, incrementCounter } = useContext(ExampleContext);

  const onClickHandler = () => incrementCounter()

  if (isLoading) return 'Loading...'

  if(error) return 'An error has occurred: ' + error
  return (
    <div>
      <h1>from context: {counter}</h1>
      <div>{isSuccess && data.map((item: any, index: number) => {
        return (
          <div key={index}>
            <h1>{item.name}</h1>
            <p>{item.email}</p>
          </div>
        )
      })

      }
      </div>
      <button onClick={onClickHandler} className={`bg-black h-8 w-20 rounded text-white`}>Click</button>
      <Link to="/">Home</Link>
    </div>
  );
}
