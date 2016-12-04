import React from 'react'
import { Form, Input } from 'antd'
const FormItem = Form.Item
import './form.css'

export const textInput = ({ input, label, placeholder, type, meta: { touched, error }, ...custom }) => (
  <FormItem className='formItem'>
    <label className='formItemLabel'>{label}</label>
    <Input
      className='formItemInput'
      type={type}
      placeholder={placeholder}
      {...input}
    />
    {touched && error && <span>{error}</span>}
  </FormItem>
)
