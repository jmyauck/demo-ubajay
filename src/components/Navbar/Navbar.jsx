/* import { Menu } from 'antd';
import { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
import { Multifamiliares } from '../../pages/ViviendasMultifamiliares/ViviendasMultifamiliares'
import { render } from 'less';


const items = [
    {
        label: 'Navigation One',
        key: 'mail',
        id: '1',
        element: <Multifamiliares/>
        
    },
    {
        label: 'Navigation Two',
        key: 'app',
        id: '2'
    },
    {
        label: 'Navigation Three - Submenu',
        key: 'SubMenu',
        id: '3',
        
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



export default Navbar; */

import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


export const CustomNavbar=()=> {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='#'>Nosotros</Nav.Link>
            <Nav.Link href='#'>Contacto</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href='/section/viviendas-multifamiliares'>multi</NavDropdown.Item>
              <NavDropdown.Item href='/section/viviendas-unifamiliares'>uni</NavDropdown.Item>
              <NavDropdown.Item href='/section/desarrollo-urbano'>desarrollo</NavDropdown.Item>
              <NavDropdown.Item href='/section/obras-civiles'>obras</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;