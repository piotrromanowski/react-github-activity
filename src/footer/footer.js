import React from 'react'

export default (props) => {
  return (
    <div style={ props.styles.githubFooter }>
      <p style={ props.styles.githubFooterP }>Public Activity</p>
      <a style={ props.styles.githubFooterA } href="https://github.com/piotrromanowski/react-github-activity">GitHub Activity Feed</a>
    </div>
  );
}
