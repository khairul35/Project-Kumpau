'use client'

import { Menu } from 'antd';
import MenuItem from 'antd/es/menu/MenuItem';
import Link from 'next/link';
import { MenuItems } from './MenuItem';

export default function NavMenu() {
    return (
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
            <MenuItem>
            </MenuItem>
        </Menu>
    );
}
