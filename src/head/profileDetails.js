import React from 'react';

export default (props) => {
    return (
      <a href={ props.profileUrl } style={ props.styles.githubProfile }>
        <div style={ props.styles.githubFullname }>
            { props.fullName }
        </div>
        <div style={ props.styles.githubUsername }>
            { props.userName }
        </div>
      </a>
    );  
}
