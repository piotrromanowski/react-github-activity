# react-github-activity

A React based github-activity component.

Inspired by [this repository](https://github.com/caseyscarborough/github-activity) and [this repo that extended it further](https://github.com/piotrromanowski/react-github-activity). I wanted to develop a github activity component that was much simpler to setup in a react project, and which was ALSO responsive to different **MOBILE DEVICE** sizes..

It is recommended to pass the client ID and Secret when using the github API to prevent encountering the limit. learn more [here](https://developer.github.com/v3/#oauth2-keysecret)

## Demo

See the project in action on [my website](https://davidplopez.com)

![](http://i.imgur.com/M9ntwJS.png)

## Installation

`npm install --save react-github-activity-mobile`

## Dependencies

Insert an octicons.css file in your html file to load the icons.

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.min.css"
/>
```

## Features

Enhance your personal website with react-github-activity component that:

- Provides visitors with quick access to your github profile
- Displays your public activity on GitHub

## Usage

```js
<GitHubFeed
  fullName={string} // Provide Full Name as displayed on GitHub
  userName={string} // Provide User Name as displayed on Guthub
  avatarUrl={string} // Provide the avatar url of your github profile
  profileUrl={string} // optional: provide a url to your profile. default -> https://github.com/${userName}
  events={array[object]} // provide array of events using the users '/events' endpoint of github api
/>
```

## Example

```js
import GitHubFeed from "react-github-activity";

class Example extends React.Component {
  render() {
    const fullName = "David Lopez";
    const userName = "lopezdp";
    const avatarUrl = "";
    const events = [
      /* data result from https://api.github.com/users/${userName}/events */
    ];

    return (
      <GitHubFeed
        fullName={fullName} // Provide Full Name as displayed on GitHub
        userName={userName} // Provide User Name as displayed on Guthub
        avatarUrl={avatarUrl} // Provide the avatar url of your github profile
        events={events} // provide array of events using the users '/events' endpoint of github api
      />
    );
  }
}
```

## License

MIT
