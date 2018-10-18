import React from "react";
import { List } from "semantic-ui-react";

const LoginForm = () => {
  <List divided relaxed>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI</List.Header>
        <List.Description as="a">Updated 10 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI-Docs</List.Header>
        <List.Description as="a">Updated 22 mins ago</List.Description>
      </List.Content>
    </List.Item>
    <List.Item>
      <List.Icon name="github" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header as="a">Semantic-Org/Semantic-UI-Meteor</List.Header>
        <List.Description as="a">Updated 34 mins ago</List.Description>
      </List.Content>
    </List.Item>
  </List>;
  return (
    <div role="list" class="ui divided relaxed list">
      <div role="listitem" class="item">
        <i aria-hidden="true" class="github large icon middle aligned" />
        <div class="content">
          <a class="header">Semantic-Org/Semantic-UI</a>
          <a class="description">Updated 10 mins ago</a>
        </div>
      </div>
      <div role="listitem" class="item">
        <i aria-hidden="true" class="github large icon middle aligned" />
        <div class="content">
          <a class="header">Semantic-Org/Semantic-UI-Docs</a>
          <a class="description">Updated 22 mins ago</a>
        </div>
      </div>
      <div role="listitem" class="item">
        <i aria-hidden="true" class="github large icon middle aligned" />
        <div class="content">
          <a class="header">Semantic-Org/Semantic-UI-Meteor</a>
          <a class="description">Updated 34 mins ago</a>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
