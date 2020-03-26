import React, { Component } from "react";
import authService from "./api-authorization/AuthorizeService";
import { NavMenu } from "./NavMenu";
import { Grid, Image, Form } from "semantic-ui-react";
import "./Profile.css";
export class Profile extends Component {
  static displayName = Profile.name;

  constructor(props) {
    super(props);
    this.state = { forecasts: [], loading: true };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <NavMenu />
        <div class="overlay"></div>
        <div class="container">
          <Grid>
            <Grid.Column width="10">
              <div class="ui cards">
                <div class="ui blue fluid card">
                  <div class="content">
                    <div class="header">Posts</div>
                    <br />
                    <Form>
                      <Form.TextArea placeholder="Tell us more about you..." />
                      <Form.Button>Send</Form.Button>
                    </Form>
                  </div>
                </div>
              </div>
            </Grid.Column>
            <Grid.Column width="5">
              <div class="ui cards">
                <div class="ui blue fluid card">
                  <div class="content">
                    <div class="header">Friends</div>
                  </div>
                </div>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
