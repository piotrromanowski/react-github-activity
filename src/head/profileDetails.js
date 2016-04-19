import React from 'react';

export default (props) => {
    const profileUrl = props.profileUrl ? props.profileUrl : `https://github.com/${props.userName}`
    return (
      <a href={ profileUrl } style={ props.styles.githubProfile }>
        <div style={ props.styles.githubFullname }>
            { props.fullName }
        </div>
        <div style={ props.styles.githubUsername }>
            { props.userName }
        </div>
      </a>
    );
}
