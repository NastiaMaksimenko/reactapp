import React from 'react'
import {render} from 'react-dom'

function Article() {
  const body = <section>body</section>
  return(
    <div classname = "hello" style={{color:'green'}}>
      <h2>title</h2>
      {body}
      <h3>creation date: {(new Date()).toDateString()}</h3>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>App Name</h1>
      <Article/>
    </div>
  )
}
render(<App/>, document.getElementById('root'))
