'use client'

import { Button, Col, Menu, Row } from 'antd';
import Link from 'next/link';
import { MenuItems } from './MenuItem';

export default function NavMenu() {
    return (
        <div style={{ width: '100%' }}>
            <Row>
                <Col xl={4} lg={6} md={0} sm={0} xs={0}>
                    <div
                        style={{color: '#fff', fontWeight: 'bold', marginRight: '50px' }}
                    >
                        PROJECT KUMPAU
                    </div>
                </Col>
                <Col xl={16} lg={12} md={12} sm={2} xs={2}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['port']}
                        style={{ flex: 1, minWidth: 0 }}
                    >
                        {
                            MenuItems.map((e: { key: string, label: string }, index: number) => {
                                return (
                                    <Menu.Item
                                        key={e.key || index}
                                    >
                                        <Link href={e.key}>
                                            {e.label}
                                        </Link>
                                    </Menu.Item>
                                );
                            })
                        }
                    </Menu>
                </Col>
                <Col xl={4} lg={6} md={12} sm={22} xs={22} className='text-right'>
                    <Link href={'/sign-up'}>
                        <Button type="primary">Sign Up</Button>
                    </Link>{' '}
                    <Link href={'/login'}>
                        <Button type="primary">Login</Button>
                    </Link>
                </Col>
            </Row>
        </div>
    );
}
