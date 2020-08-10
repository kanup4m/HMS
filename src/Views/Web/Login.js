import React from 'react';
import { Input, Form, Icon, Checkbox, Button, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import { WhiteSpace, WingBlank } from 'antd-mobile';
const validateFields = ({ form }) => {
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
            {/* <div className="login-web-bg">

                <h2 className="login-h2">Welcome</h2>
                <p className="login-p" >Log in to continue</p>
            </div>
            <WingBlank className="login-web">
                <Form onSubmit={handleSubmit} className="login-form">

                    <Form.Item label="Username">
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                                className="form-field"
                                required
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="Password">
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }]
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                className="form-field"
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
        </button><br />
                        <p style={{ textAlign: "center", color: "#9A9A9A" }}> Don't have an account Signup</p>
                    </Form.Item>
                </Form>
            </WingBlank> */}

            {/* */}
            <div className="web-nav">
                <h1 className="web-book">Book My Hostel</h1>
            </div>
            <div className="web-login-div">
                <Row >
                    <Col span={12}>
                        <div className="login-web-bg">
                            <h2 className="web-login-h2">Welcome!</h2>
                            <p className="web-login-p" >Log in to continue</p>
                        </div>
                    </Col>
                    <Col span={12} >
                        <h1 style={{ textDecoration: "underline" }}>SIGN IN</h1>
                        <WingBlank >
                            <Form onSubmit={handleSubmit} className="login-web">

                                <Form.Item>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: 'Please input your username!' }]
                                    })(
                                        <Input
                                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                            placeholder="Enter your Username"
                                            className="form-field"
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
                                            className="form-field"
                                            required
                                        />
                                    )}
                                </Form.Item>
                                <Form.Item>
                                    {getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true
                                    })(<Checkbox>Remember me</Checkbox>)}
                                    <br />
                                    <br />
                                    <button className="login-btn-web" style={{ width: "100%" }}>
                                        LOGIN
        </button>
                                    <p style={{ textAlign: "center", color: "#9A9A9A" }}> Don't have an account? &nbsp;  <Link to="/register" style={{ color: "#6E51EA" }} >Sign up</Link></p>
                                </Form.Item>
                            </Form>
                        </WingBlank>
                    </Col>

                </Row>
            </div>
        </>
    );
}

const Login = Form.create({ name: 'normal_login' })(validateFields);

export default Login