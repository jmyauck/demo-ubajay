import { Menu } from 'antd';
import { useState } from 'react';
import './Navbar.css';

const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        
    },
    {
        label: 'Navigation Two',
        key: 'app',
        
        disabled: true,
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        key: 'setting:1',
                    },
                    {
                        label: 'Option 2',
                        key: 'setting:2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                        key: 'setting:3',
                    },
                    {
                        label: 'Option 4',
                        key: 'setting:4',
                    },
                ],
            },
        ],
    },
    {
        label: 'Navigation Four - Link',      
        key: 'alipay',
    },
];

export const Navbar = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <div className='navbar-style'>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} className="navbar-style"/>
        </div>
    )
};



export default Navbar;
