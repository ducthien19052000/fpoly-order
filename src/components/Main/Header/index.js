import React, { useCallback, useEffect } from 'react'
import { DownOutlined,UserOutlined } from '@ant-design/icons'
import { Input } from 'antd';
import { Layout, Menu, Dropdown,  Image } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import {Link} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import * as foodAction from  '../../../redux/Action/categoryAction'
import './index.css'
import { GOOGLE_AUTH_URL } from '../../../constants';
import { connect } from 'react-redux';



const { Search } = Input;



const Header = ({listGroup,foodAct}) => {
  const fetchEmployee= useCallback(
    () => {
        const { getDataCategory } = foodAct;
        getDataCategory();
    },
    [foodAct],
)
useEffect(() => {

    fetchEmployee();
  }, [fetchEmployee]);
  console.log(listGroup)
    const menu = (
        <Menu >
          {listGroup.map((category,index)=>(
          
             <Menu.Item key={index} >
               <Link to={`/category/${category.id}`}>
               {category.categoryName}
               </Link>
             </Menu.Item>
           
              
          ))}
         
         
        </Menu>
      );
    const { Header } = Layout;
    return (
        <Header className='header-main' >
          <div className="logo-main">
               <Image src='https://png.pngtree.com/png-clipart/20190520/original/pngtree-food-logo-designs-with-spoon-and-fork-png-image_4158238.jpg' width={50}/></div>
          <Menu theme="dark"  mode="horizontal" className='menu-main' >
               <Menu.Item key="1"> <Link to='/'> Trang chủ</Link></Menu.Item>
           
            <Menu.Item key="2"><Dropdown overlay={menu}>
          <Link to='/product' style={{background:'none',border:'none',color:'#fff'}}>
            Menu <DownOutlined />
          </Link>
        </Dropdown></Menu.Item>
            <Menu.Item key="3">Liên hệ</Menu.Item>
            
          </Menu>
          <Search placeholder="Tìm món ăn" className='search-main'  enterButton />
          <a href={GOOGLE_AUTH_URL}>
          <Avatar size="large" icon={<UserOutlined  />} style={{marginLeft:'15px'}}/>
          </a>
       
        </Header>
    )
}


const  mapStateToProps= state =>{
  return {
      
      listGroup:state.groupData.lists
      
  }
}

const mapDispatchToProps = dispatch=>{
  return{
      foodAct: bindActionCreators(foodAction,dispatch),
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
