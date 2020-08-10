import React from 'react';
import { Input, Form, Icon, Checkbox, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom'
import { WhiteSpace, WingBlank } from 'antd-mobile';
import axios from 'axios'
import Path from './Path'
const App = ({ form }) => {
    let history = useHistory()
    const { getFieldDecorator, validateFields } = form;

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                console.log(values);
                axios({
                    url: 'http://localhost:8000/api/login',
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

    return (
        <>
            <div className="abcd">
                <h2 className="login-h2">Welcome!</h2>
                <p className="login-p" >Log in to continue</p>

            </div>
            {/* <div class="wave-container">
                <div style={{ backgroundColor: "red" }}>
                    <h1>Hello, world!</h1>
                    <p>Check out my awesome waves!</p>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#6E51EA" fill-opacity="1" d="M0,320L60,304C120,288,240,256,360,250.7C480,245,600,267,720,245.3C840,224,960,160,1080,117.3C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
                </svg>

            </div> */}
            {/* <div style={{ overflow: 'hidden' }}>
                fghjkl
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fillOpacity={1} d="M0,320L60,304C120,288,240,256,360,250.7C480,245,600,267,720,245.3C840,224,960,160,1080,117.3C1200,75,1320,53,1380,42.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
                </svg>
            </div> */}


            {/* <div style={{ height: '100px', }}><svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '40%', width: '100%' }}> <path d="M0,100 C150,200 350,0 500,100 L500,00 L0,0 Z" style={{ stroke: 'none', fill: '#6E51EA' }} /></svg></div> */}




            <br />
            {/* <svg style={{ width: '100%', height: '100%', display: "block" }}>
                <path className="a" d="M-1133,1141v183.457s120.034,64.446,222.487-40.486c56.247-57.607,105.022-78.857,137.884-86.377h0v-56.936Z" transform="translate(1136 -1139.66)" />
            </svg> */}


            <WingBlank>
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
                        <Checkbox>Remember me</Checkbox>
                        <br />
                        <br />

                        <button className="login-btn">
                            Log in
        </button>
                        {/* <p style={{ textAlign: "center", color: "#9A9A9A" }}> Don't have an account <Link to="/register" style={{ color: "#6E51EA" }} >Sign up</Link></p> */}
                    </Form.Item>
                </Form>
            </WingBlank>
        </>
    );
};

const ValidatedFields = Form.create({ name: 'normal_login' })(App);

export default ValidatedFields