import React, { Component } from 'react'
import moment from 'moment'

export default class Event extends Component {
  renderTypes({ type, payload : { action, comment } }) {
    let icon;
    let actionType;
    let actionUrl = false;
    if (type === 'WatchEvent') {
      actionType = 'starred';
      icon = "octicon octicon-star dashboard-event-icon";
    } else if (type === 'PushEvent') {
      actionType = 'pushed';
      icon = "octicon octicon-git-commit dashboard-event-icon";
    } else if (type === 'IssuesEvent') {
      if (action === 'closed') {
        actionType = action;
        icon = 'octicon octicon-issue-closed dashboard-event-icon';
      } else if (action === 'opened') {
        actionType = action;
        icon = 'octicon octicon-issue-opened dashboard-event-icon';
      } else if (action === 'commented') {
        actionType = 'commented on';
        icon = 'octicon octicon-comment-discussion dashboard-event-icon'
      }
    } else if (type === 'IssueCommentEvent') {
      icon = 'octicon octicon-comment-discussion dashboard-event-icon';
      actionType = 'commented on';
      actionUrl = comment['html_url'];
    }
    return { icon, actionType, actionUrl };
  }

  render() {
    const { actor : { login },
            repo: { name, url },
          created_at } = this.props.ghEvent;

    const { icon, actionType, actionUrl } = this.renderTypes(this.props.ghEvent);

    return (
      <div style={ this.props.styles.githubEvent }>
        <span style={ this.props.styles.githubEventOcticon } className={icon}></span>
        <div style={ this.props.styles.githubTitle }>
          <a>{ login }</a> {" "}
          { actionType }
          { " " }
          <a style={ this.props.styles.ghUrl } href={ actionUrl ? actionUrl : url }> { name } </a>
        </div>
        <div style={ this.props.styles.githubTime }>
          { moment(created_at).fromNow() }
        </div>
      </div>
    );
  }
}
