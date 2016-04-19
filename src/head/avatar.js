import React from 'react'

export default (props) => {
    return (
      <div style={ props.styles.githubAvatar }>
        <img style={ props.styles.githubAvatarImg } src={ props.avatarUrl } />
      </div>
    );
}
