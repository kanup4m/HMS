import React from 'react';
import { Input, Form, Icon, Checkbox, Button, Radio } from 'antd';
import { Link, useHistory } from 'react-router-dom'
import { WhiteSpace, WingBlank } from 'antd-mobile';
import step from '../assets/step1.png'
import left from '../assets/left.png'
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
                    <Form.Item label="Want single room?">
                        {getFieldDecorator('single room', {
                            rules: [{ required: true, message: 'Please select your Year!' }],
                        })(
                            <Radio.Group>
                                <Radio value="yes">Yes</Radio>
                                <Radio value="no">No</Radio>
                            </Radio.Group>,
                        )}
                    </Form.Item>
                    <hr />
                    <button className="request-btn"><img src={left} /></button>
                </Form>
            </WingBlank>
        </>
    );
};

const ValidatedFields = Form.create({ name: 'normal_login' })(App);

export default ValidatedFields