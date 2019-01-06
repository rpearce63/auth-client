import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

export class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push("/feature");
    });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <fieldset>
          <label htmlFor="">Email</label>
          <Field name="email" type="text" component="input" />
        </fieldset>
        <fieldset>
          <label htmlFor="">Password</label>
          <Field name="password" type="password" component="input" />
        </fieldset>
        <div>{this.props.errorMessage && this.props.errorMessage.signup}</div>
        <button>Sign Up!</button>
      </form>
    );
  }
}

export default compose(
  connect(
    state => ({ errorMessage: state.auth.errorMessage }),
    actions
  ),
  reduxForm({ form: "signup" })
)(Signup);
