import React, { Component } from 'react'
import GitHubIcon from './ghIcon'
import ProfileDetails from './profileDetails'
import Avatar from './avatar'

export default class FeedHeader extends Component {
  render() {
    return (
      <div style={this.props.styles.githubHeaderOuter} className="github-header-outer">
        <div style={this.props.styles.githubHeader} className="github-header">
          <GitHubIcon styles={this.props.styles} />
          <ProfileDetails
            fullName={ this.props.fullName }
            userName={ this.props.userName }
            profileUrl={ this.props.profileUrl }
            avatarUrl={ this.props.avatarUrl }
            styles={this.props.styles}
            />
          <Avatar
            avatarUrl={ this.props.avatarUrl }
            styles={this.props.styles}
            />
        </div>
      </div>
    );
  }
}
