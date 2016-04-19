import React, { Component, PropTypes } from 'react'
import FeedHeader from './head/feedHeader'
import FeedBody from './body/eventList'
import FeedFooter from './footer/footer'
import { styles } from './styles'

export default class GithubFeed extends Component {
    propTypes: {
      fullName: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      profileUrl: PropTypes.string.isRequired,
      events: PropTypes.array.isRequired
    }

    render() {
      const { fullName, userName, avatarUrl, profileUrl, events } = this.props;

      return (
        <div style={styles.githubFeed}>
          <FeedHeader
            fullName={fullName}
            userName={userName}
            avatarUrl={avatarUrl}
            profileUrl={profileUrl}
            styles={styles}
            />
          <FeedBody
            events={events}
            styles={styles}
            />
          <FeedFooter
            styles={styles}
            />
        </div>
      );
    }
}
