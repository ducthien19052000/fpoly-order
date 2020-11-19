import { Button, Col, Divider, Form, Row, message } from 'antd'

import React from 'react'


const FourStep = ({ current, setCurrent, steps}) => {
  const dataLocal  = localStorage.getItem('OrderDetail');
  const orderDetail = dataLocal !== null ? JSON.parse(dataLocal) : null;
    
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 22 },
      };
      const onFinish = values => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };
      const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };
    return (
        <>
        <Row className='row-checkout-profile-user' style={{margin:0}}>
    <Col xs={24} md={12} style={{padding:'36px',borderRight:'1px solid red'}}>
       <Row style={{margin:0,textAlign:'left'}} >
           <Col span={24} >
                <h1>Thông tin khách hàng</h1>
           <Form
    {...layout}
    layout='vertical'
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
    <Form.Item className='item-form' style={{margin:0}}
        label="Họ và tên"
        name="name"
        
    >
         <p style={{fontSize:'14px',fontWeight:400}}>{orderDetail.user.name}</p>
    </Form.Item >

    <Form.Item className='item-form' style={{margin:0}}
        label="Email"
        name="email"
      
    >
        <p style={{fontSize:'14px',fontWeight:400}}>{orderDetail.user.email}</p>
    </Form.Item>

    <Form.Item className='item-form' style={{margin:0}} label='Số điện thoại'  name="phone" >
      <p style={{fontSize:'14px',fontWeight:400}}>{orderDetail.user.phone}</p>
    </Form.Item>

   
</Form>
           </Col>
       </Row>
    </Col>
    <Col  xs={24} md={12}  style={{padding:'36px'}}>
    <Row style={{margin:0,textAlign:'left'}} >
           <Col span={24} >
           <h1>Thông tin đơn hàng</h1>
           <Form
    {...layout}
    layout='vertical'
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
    <Form.Item className='item-form' style={{margin:0}}
        label="Món ăn"
        name="name"
        
    >
         <p style={{fontSize:'14px',fontWeight:400}}>Số sản phẩm</p>
    </Form.Item >

    <Form.Item className='item-form' style={{margin:0}}
        label="Chi phí"
        name="email"
      
    >
        <p style={{fontSize:'14px',fontWeight:400}}>{orderDetail.total}</p>
    </Form.Item>

    <Form.Item className='item-form' style={{margin:0}} label='Xem chi tiết đơn hàng'  name="phone" >
      <Button type='primary'>Chi tiết</Button>
    </Form.Item>

   
</Form>
         
           </Col>
       </Row>
    </Col>
</Row>
<div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button type="primary" onClick={() => message.success('Processing complete!')}>
              Thanh toán
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
        </>
    )
}

FourStep.propTypes = {

}

export default FourStep
