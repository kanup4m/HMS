import React from 'react';
import { Input, Form, Icon, Checkbox, Button } from 'antd';
import { Link } from 'react-router-dom'
import { WhiteSpace, WingBlank } from 'antd-mobile';
const App = ({ form }) => {
    const { getFieldDecorator, validateFields } = form;

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    return (
        <>
            <div className="abcd">
                <h2>Welcome</h2>
                <p>Log in to continue</p>
                <div className="first-dot"></div>
                <div className="second-dot"></div>

            </div>
            <WingBlank>
                <Form onSubmit={handleSubmit} className="login-form">
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                required
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                required
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true
                        })(<Checkbox>Remember me</Checkbox>)}

                        <button className="login-btn">
                            Log in
        </button>
                        Don't have an account <Link to="/register" >Sign up</Link>
                    </Form.Item>
                </Form>
            </WingBlank>
        </>
    );
};

const ValidatedFields = Form.create({ name: 'normal_login' })(App);

export default ValidatedFields