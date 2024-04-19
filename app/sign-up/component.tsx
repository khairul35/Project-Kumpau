'use client';

import { Button, Card, Col, Divider, Form, Input, Row } from "antd";

const Component = () => {
    return (
        <div>
            <Card style={{
                    width: '400px',
                    margin: 'auto',
                    marginTop: '5vh',
                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                    minHeight: '420px',
                }}>
                <h4 className="text-center">Sign Up</h4>
                <Divider />
                <Form
                    name="wrap"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    labelWrap
                    colon={false}
                    variant="filled"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please enter your username!' }]}
                    >
                        <Input placeholder="Username.." />
                    </Form.Item>
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please enter your name!' }]}
                    >
                        <Input placeholder="Name.." />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{ required: true, message: 'Please enter your email!' }]}
                    >
                        <Input placeholder="Email.." />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please enter your password!' }]}
                    >
                        <Input.Password placeholder="Password.." />
                    </Form.Item>
                    <Button type="primary" htmlType="submit" className="w-full mt-4">
                        Login
                    </Button>
                    <p className="text-center mt-2">
                        Already have an account? <a href="/register">Login</a>
                    </p>
                </Form>
            </Card>
        </div>
    );
};
export default Component;