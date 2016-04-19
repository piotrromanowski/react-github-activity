import React from 'react'
import {render} from 'react-dom'

import Component from '../../src'

let Demo = React.createClass({
  render() {

    const eventList = [{
"id": "3889022637",
"type": "WatchEvent",
"actor": {
"id": 5794815,
"login": "piotrromanowski",
"gravatar_id": "",
"url": "https://api.github.com/users/piotrromanowski",
"avatar_url": "https://avatars.githubusercontent.com/u/5794815?"
},
"repo": {
"id": 42841092,
"name": "andrewngu/sound-redux",
"url": "https://api.github.com/repos/andrewngu/sound-redux"
},
"payload": {
"action": "started"
},
"public": true,
"created_at": "2016-04-14T14:22:35Z"
},
{
"id": "3880483468",
"type": "WatchEvent",
"actor": {
"id": 5794815,
"login": "piotrromanowski",
"gravatar_id": "",
"url": "https://api.github.com/users/piotrromanowski",
"avatar_url": "https://avatars.githubusercontent.com/u/5794815?"
},
"repo": {
"id": 2269353,
"name": "desandro/imagesloaded",
"url": "https://api.github.com/repos/desandro/imagesloaded"
},
"payload": {
"action": "started"
},
"public": true,
"created_at": "2016-04-12T22:21:45Z"
}];

    return (<div>
      <h1>react-github-activity Demo</h1>
      <Component events={eventList} fullName='Piotr Romanowski' userName='piotrromanowski' avatarUrl='https://avatars0.githubusercontent.com/u/5794815?v=3&s=460'/>
    </div>);
  }
})

render(<Demo/>, document.querySelector('#demo'))
