import React, { useState } from 'react'
//import '@/styles/gnb.css'
import 'semantic-ui-css/semantic.min.css'
import { Button, Dropdown, Menu } from 'semantic-ui-react'

export default function Gnb() {
    const [activeItem, setActiveItem] = useState('home')
    const handleItemClick = (e, { name }) => setActiveItem(name)

    return (
        <div>
        <div style={{ display:'contents', paddingTop: 10}}>
        <div style={{ content: "100px 0 0" }}>
        <div style={{ }}>
        <Menu size='huge'>
            <img src="/images/logo.png" alt="logo" />
            <h1>수강신청</h1>
            <Dropdown item text='수강신청'>
                <Dropdown.Menu>
                    <Dropdown.Item>신청</Dropdown.Item>
                    <hr></hr>
                    <Dropdown.Item>결과조회</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='수강바구니'>
                <Dropdown.Menu>
                    <Dropdown.Item>신청</Dropdown.Item>
                    <hr></hr>
                    <Dropdown.Item>결과조회</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='제한수업'>
                <Dropdown.Menu>
                    <Dropdown.Item>신청</Dropdown.Item>
                    <hr></hr>
                    <Dropdown.Item>결과조회</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='대체과목 재수강'>
                <Dropdown.Menu>
                    <Dropdown.Item>결과조회</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='수강철회'>
                <Dropdown.Menu>
                    <Dropdown.Item>신청</Dropdown.Item>
                    <hr></hr>
                    <Dropdown.Item>결과조회</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position='right'>
                <Menu.Item
                    name='202214000 홍길동'
                    active={activeItem === 'name'}
                //onClick={this.handleItemClick}
                />

                <Menu.Item>
                    <Button primary>로그아웃</Button>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
        </div>
        </div>
        </div>
        </div>
    )
}