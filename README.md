# react-github-activity
A React based github-activity component.

Inspired by [this repository](https://github.com/caseyscarborough/github-activity) I wanted to develop a github activity component that was much simpler to setup in a react project.

## Demo

## Installation

`npm install --save react-github-activity`

## Features

- Enhance your personal website with react-github-activity component that:
  - Provides visitors with quick access to your github profile
  - Displays your public activity on GitHub


## Usage

```js
<GitHubFeed
  fullName={string} // Provide Full Name as displayed on GitHub
  userName={string} // Provide User Name as displayed on Guthub
  avatarUrl={string} // Provide the avatar url of your github profile
  profileUrl={string} // provide a url to your profile
  events={array[object]} // provide array of events using the users '/events' endpoint of github api
/>
```

## Example

```js
import GitHubFeed from 'react-github-activity'

class Example extends React.Component {
  render() {
    const fullName = 'Piotr Romanowski'
    const userName = 'piotrromanowski'
    const avatarUrl = ''
    const profileUrl = ''
    const events = [/* data result from https://api.github.com/users/${userName}/events */];
    
    return (
    <GitHubFeed
      fullName={fullName} // Provide Full Name as displayed on GitHub
      userName={userName} // Provide User Name as displayed on Guthub
      avatarUrl={avatarUrl} // Provide the avatar url of your github profile
      profileUrl={profileUrl} // provide a url to your profile
      events={events} // provide array of events using the users '/events' endpoint of github api
    />
    );
  }
}
```

## License

MIT
