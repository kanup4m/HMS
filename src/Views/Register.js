import React from 'react';
import { Input, Form, Icon, Checkbox, Button, Radio } from 'antd';
import { Link } from 'react-router-dom'
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { useState } from 'react';
const App = ({ form }) => {
    const [confirmDirty, setConfirmDirty] = useState(false)
    const { getFieldDecorator, validateFields } = form;

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    const compareToFirstPassword = (rule, value, callback) => {
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    const validateToNextPassword = (rule, value, callback) => {
        if (value && confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    const handleConfirmBlur = e => {
        const { value } = e.target;
        setConfirmDirty(confirmDirty || !!value)
    };

    return (
        <>
            <div className="abcd">
                Back
                <h2>Register</h2>
                <p>Come on aboard!</p>
                <div className="first-dot"></div>
                <div className="second-dot"></div>

            </div>
            <WingBlank>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item label="E-mail">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ],
                        })(<Input />)}
                    </Form.Item>
                    <Form.Item label="Password" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                {
                                    validator: validateToNextPassword,
                                },
                            ],
                        })(<Input.Password />)}
                    </Form.Item>
                    <Form.Item label="Confirm Password" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                {
                                    validator: compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item label="Phone Number">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: 'Please input your phone number!' }],
                        })(<Input style={{ width: '100%' }} />)}
                    </Form.Item>
                    <Form.Item label="Year">
                        {getFieldDecorator('year')(
                            <Radio.Group>
                                <Radio value="1">1</Radio>
                                <Radio value="2">2</Radio>
                                <Radio value="3">3</Radio>
                                <Radio value="4">4</Radio>

                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item label="Gender">
                        {getFieldDecorator('gender')(
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item label="Is hosteler?">
                        {getFieldDecorator('is-hostler')(
                            <Radio.Group>
                                <Radio value="yes">Yes</Radio>
                                <Radio value="no">No</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item label="Hostel type">
                        {getFieldDecorator('hostel-type')(
                            <Radio.Group>
                                <Radio value="bh">BH</Radio>
                                <Radio value="ish">ISH</Radio>
                                <Radio value="gh">GH</Radio>

                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <button className="login-btn">
                        Register
        </button>

                </Form>
                <p>By signing up you are agree to the Terms of Service</p>
            </WingBlank>
        </>
    );
}
const Register = Form.create({ name: 'normal_login' })(App);

export default Register;