import React from 'react';
import { Input, Form, Icon, Checkbox, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom'
import { WhiteSpace, WingBlank } from 'antd-mobile';
import step from '../assets/step1.png'
const App = ({ form }) => {
    let history = useHistory();
    const { getFieldDecorator, validateFields } = form;

    const handleSubmit = e => {
        e.preventDefault();
        validateFields((err, values) => {
            if (!err) {
                history.push("/request-sent");
                console.log('Received values of form: ', values);
            }
        });
    };

    return (
        <>
            <img style={{ paddingLeft: 37 + "px", paddingTop: 30 + "px", paddingBottom: 20 + "px" }} src={step} />

            <WingBlank>
                <Form onSubmit={handleSubmit} style={{ padding: 30 + "px" }}>
                    <Form.Item label="Roommate 1">
                        {getFieldDecorator('Roommate1', {
                            rules: [{ required: true, message: 'Please enter your roommate name!' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Name"
                                required
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="Roommate 2">
                        {getFieldDecorator('Roommate2', {
                            rules: [{ required: true, message: 'Please enter your roommate name!' }]
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Name"
                                required
                            />
                        )}
                    </Form.Item>

                    <button className="request-btn">Send Request</button>
                </Form>
            </WingBlank>
        </>
    );
};

const ValidatedFields = Form.create({ name: 'normal_login' })(App);

export default ValidatedFields