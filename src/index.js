/*const element = document.createElement('h1')
element.innerText = 'Hello react...'
const container = document.getElementById('root')
container.appendChild(element)*/

import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import App from './components/App'

ReactDOM.render(<App/>, document.getElementById('root'))
/*const user = {
  firstName: 'Boris',
  lastName: 'Bonett',
  avatar: 'https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>Hello {getName(user)}</h1>
  }
  return <h1>Hello, Stranger.</h1>
}

const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar}/>
  </div>
)*/