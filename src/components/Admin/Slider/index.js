import React, { useState } from 'react'
import { Col, Layout, Menu, Row } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  } from '@ant-design/icons';
  import './index.css'
import { Link } from 'react-router-dom';

  
 

const Slider = () => {
    const {   Sider } = Layout;
    const { SubMenu } = Menu;
    const [collapsed,setCollapsed] = useState(false)
   
    
    const  toggle = () => {
       setCollapsed(!collapsed)
      };
    
    return (
        <>
              <Sider  className='slider-admin' collapsible collapsed={collapsed} onCollapse={toggle} >
          <Row className="top-sider" ><Col className='logo' span={24}>Logo</Col>  
        
         
            </Row> 
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
                <Link>
                Dashboard
                </Link>
                
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
                <Link to='/admin/'>
                Sản phẩm
                </Link>
              
            </Menu.Item>
            <Menu.Item key="3" icon={<FileOutlined />}>
            <Link to='/admin/customer' >
            Khách hàng
                </Link>
              
            </Menu.Item> 
            <Menu.Item key="4" icon={<FileOutlined />}>
            <Link>
            Đơn hàng
                </Link>
              
            </Menu.Item>
          </Menu>
        </Sider> 
        </>
    )
}

export default Slider
