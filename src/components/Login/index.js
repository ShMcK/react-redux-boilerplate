import React, { Component, PropTypes } from 'react'
import Button from 'react-bootstrap/lib/Button'
import FormGroup from 'react-bootstrap/lib/FormGroup'
import ControlLabel from 'react-bootstrap/lib/ControlLabel'
import FormControl from 'react-bootstrap/lib/FormControl'
import { Field, reduxForm } from 'redux-form'
import { validate, warn } from './validate'

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <ControlLabel>{label}</ControlLabel>
    <FormGroup>
      <FormControl {...input} placeholder={label} type={type} />
      <br />
      {touched
        && ((error && <span style={{ color: 'red' }}>{error}</span>)
          || (warning && <span style={{ color: 'goldenrod' }}>{warning}</span>))}
    </FormGroup>
  </div>
)

class Login extends Component {
  onSubmit(values) {
    console.log(values)
  }
  render() {
    const { handleSubmit } = this.props
    return (
      <div>
        <h3>Login</h3>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field name="email" component={renderField} type="text" label="Email" />
          <Field name="password" component={renderField} type="password" label="Password" />
          <br />
          <Button type="submit" bsStyle="primary" bsSize="large">Submit</Button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'login',
  validate,
  warn
})(Login)
