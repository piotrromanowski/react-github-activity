import React, { Component } from 'react'
import GithubEvent from './event'

export default class EventList extends Component {
  renderEvents() {
    return this.props.events.map(ghevent => {
      return <GithubEvent key={ghevent.id} styles={this.props.styles} ghEvent={ghevent} />
    })
  }

  render() {
    return (
      <div style={ this.props.styles.githubFeedlistOuter }>
        <div style={ this.props.styles.githubFeedlist }>
          <div style={ this.props.styles.githubFeedlistInner }>
            { this.renderEvents() }
          </div>
        </div>
      </div>
    );
  }
}
