import React from 'react';
import { Input, Form, Icon, Checkbox, Button, Radio } from 'antd';
import { Link, useHistory } from 'react-router-dom'
import { WhiteSpace, WingBlank } from 'antd-mobile';
import { useState } from 'react';
import axios from 'axios'

import Path from './Path'
import arrow from '../assets/arrow.png'
const App = ({ form }) => {
    const [confirmDirty, setConfirmDirty] = useState(false)
    const { getFieldDecorator, validateFields } = form;
    let history = useHistory()
    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log(values);
                axios({
                    url: 'http://localhost:8000/api/register',
                    method: 'post',
                    data: values
                })
                    .then(function (response) {
                        console.log(response.status)
                        console.log(response.data)
                        if (response.status === 200) {
                            history.push('/register')
                        }
                        // if(response.data)
                        // history.push
                    })
                    .catch(function (error) {
                        console.log(error)

                    });
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
                <p style={{ color: "#fff", padding: 15 + "px" }}><Link to="/"><img src={arrow} /></Link> &nbsp;Back</p>
                <h2 className="login-h2">Register</h2>
                <p className="login-p">Come on aboard!</p>
                {/* <div className="first-dot"></div>
                <div className="second-dot"></div> */}

            </div>
            {/* <Path /> */}
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
                        {getFieldDecorator('year', {
                            rules: [{ required: true, message: 'Please select your Year!' }],
                        })(
                            <Radio.Group>
                                <Radio value="1">1</Radio>
                                <Radio value="2">2</Radio>
                                <Radio value="3">3</Radio>
                                <Radio value="4">4</Radio>

                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item label="Gender">
                        {getFieldDecorator('gender', {
                            rules: [{ required: true, message: 'Please select your gender!' }],
                        })(
                            <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item label="Is hosteler?">
                        {getFieldDecorator('is-hostler', {
                            rules: [{ required: true, message: 'Please select one of the following!' }],
                        })(
                            <Radio.Group>
                                <Radio value="yes">Yes</Radio>
                                <Radio value="no">No</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <Form.Item label="Hostel type">
                        {getFieldDecorator('hostel-type', {
                            rules: [{ required: true, message: 'Please select your hostel preference!' }],
                        })(
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
                <p style={{ textAlign: "center", fontSize: 12 + "px" }}>By signing up you are agree to the <br /><span style={{ color: "#9A9A9A", fontSize: 12 + "px" }}>Terms of Service</span></p>
            </WingBlank>
        </>
    );
}
const Register = Form.create({ name: 'normal_login' })(App);

export default Register;