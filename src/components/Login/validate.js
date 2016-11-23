export function validate(values) {
  const errors = {}

  // email validation
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  // password validation
  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more'
  } else if (values.password.length > 15) {
    errors.password = 'Sorry, password must be less than 16 characters'
  }

  return errors
}

export function warn(values) {
  const warnings = {}
  if (values.password === 'password') {
    warnings.password = 'Your password doesn\'t look secure'
  }
  return warnings
}
