import React, { useCallback, useEffect, useState } from 'react'
import { Steps, Button, message, Row, Col, Input, Form, Checkbox, Select, Table, Space, Tag, Image, Divider, Radio } from 'antd';
import'./index.css'
import { Option } from 'antd/lib/mentions';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as userAction from  '../../../../redux/Action/userAction'
import { useForm } from 'antd/lib/form/Form';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourStep from './FourStep'

var order_Detail = {user: {name: '', email: ''}, total: 0};
localStorage.setItem('OrderDetail', JSON.stringify(order_Detail));

const { Step } = Steps;


const Checkout = ({userAct,user}) => {
 
    const [current, setCurrent] = React.useState(0);
    

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 22 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const steps = ['Thông tin khách hàng', 'Kiểm tra đơn hàng', 'Xác nhận & mua hàng'];
  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <FirstStep current={current} steps={steps} setCurrent={setCurrent}/>;
      case 1:
        return <SecondStep current={current} steps={steps} setCurrent={setCurrent}/>;
      default:
        return <FourStep current={current} steps={steps} setCurrent={setCurrent}/>;
    }
  }

const steps11 = [
  {
    title: 'Thông tin khách hàng',
    content: <>
         <FirstStep current={current} setCurrent={setCurrent} steps={steps}/>
    </>,
  },
  {
    title: 'Kiểm tra đơn hàng',
    content: <>
    <SecondStep current={current} setCurrent={setCurrent} steps={steps}/>
    </>,
  },
 
  {
    title: 'Xác nhận & mua hàng',
    content: <>    
    <FourStep current={current} setCurrent={setCurrent} steps={steps}/>
</>,
  },
];
    return (
        <>
        <Row className='container-main-checkout' style={{margin:'24px',width:'100%',minHeight:'80vh',justifyContent:"center"}}>
            <Col xs={24} md={22} lg={22} xl={20} style={{maxWidth:'80%'}}>
            <Steps current={current} style={{padding:0}}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} style={{padding:0}}/>
          ))}
        </Steps>
            </Col>
            <Col xs={24} md={22} lg={22} xl={20} style={{maxWidth:'80%'}}>
            <div className="steps-content">
            {getStepContent(current)}
               </div>
            
            </Col>
           
        </Row>
       
      
      
      </>
    )
}
const  mapStateToProps= state =>{
    return {
       user: state.userData.lists
        
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return{
        userAct: bindActionCreators(userAction,dispatch),
    }
}
    

export default connect(mapStateToProps,mapDispatchToProps)(Checkout)
