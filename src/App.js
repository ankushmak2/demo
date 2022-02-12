import './index.css';
import './App.css';
import React from 'react'
import { useEffect,useState } from 'react';
export const App = () => {
  const [load, setload]= useState(true);
  const[data, setdata]= useState([]);
  const names = ['Bruce', 'Clark', 'Diana']

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
.then(res=>res.json()).then(res=>{setdata(res);setload(false)}


// load +1
)}, [])
 console.log(data)
 //console.log(data[2])

// const ids= data.map((e) => {
//   return (e)
// })
//var name = data[1];
//console.log(name)
 
  return (
    <div> 
      <div>calculator</div>
      <table>
        <tbody>
  <tr>
    <th>UserName</th>
    <th>Company Name</th>
    <th>PostLink</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>

  </tbody>
</table>

<div>
  {data.map(e => <h2>{e.address.city
}</h2>)}
      </div>
</div>

  )
}


export default App;
