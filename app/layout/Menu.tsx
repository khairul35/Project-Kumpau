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
                MenuItems.map((e: { key: string, label: string }) => {
                    return (
                        <MenuItem
                            key={e.key}
                        >
                            <Link href={e.key}>
                                {e.label}
                            </Link>
                        </MenuItem>
                    );
                })
            }
            <MenuItem>
            </MenuItem>
        </Menu>
    );
}
