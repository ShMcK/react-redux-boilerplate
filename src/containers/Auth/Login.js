import React from 'react'
import { Form, Input, Button } from 'antd'
import { email, password } from './validate'
import { formItemLayout, tailFormItemLayout } from './formLayout'

const LoginForm = ({ form }) => {
  const { getFieldDecorator } = form
  return (
    <section className='auth'>
      <h3 className='authTitle'>Login</h3>
      <Form horizontal className='loginForm'>

        <Form.Item {...formItemLayout} label="E-mail" hasFeedback>
          {getFieldDecorator('email', email)(
            <Input />
          )}
        </Form.Item>

        <Form.Item {...formItemLayout} label="Password" hasFeedback>
          {getFieldDecorator('password', password)(
            <Input type="password" />
          )}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">Login</Button>
        </Form.Item>

      </Form>
    </section>
  )
}

export default Form.create()(LoginForm)
