import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Col, Form, Input, Row, Select, Button, message } from 'antd';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import { Option } from 'antd/lib/mentions';
import * as userAction from  '../../../../redux/Action/userAction'

const FirstStep = ({user,userAct, current, setCurrent, steps}) => {
  const dataLocal  = localStorage.getItem('OrderDetail');
  const orderDetail = dataLocal !== null ? JSON.parse(dataLocal) : null; 

    const [form] = Form.useForm();
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 22 },
      };
      const onFinish = (values) => {
        console.log('Success:', values);
        orderDetail.user = values.user;
        localStorage.setItem('OrderDetail', JSON.stringify(orderDetail));
        next();
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    const fetchEmployee= useCallback(
        () => {
            const { getData} = userAct;
            getData();
        },
        [userAct],
    )
    useEffect(() => {
    
        fetchEmployee();
    
      }, [fetchEmployee]);
      if(user){
          console.log(user)
         
      }
      form.setFieldsValue({ user: user })
      const next = () => {
        setCurrent(current + 1);
      };
    
      const prev = () => {
        setCurrent(current - 1);
      };
    return (<>
        <Row className='row-checkout-profile-user' style={{margin:0}}>
        <Col xs={24} md={12} style={{padding:'36px',borderRight:'1px solid red'}}>
           <Row style={{margin:0,textAlign:'left'}} >
               <Col span={24} >
                    <h1>Thông tin khách hàng</h1>
               <Form form={form}
        {...layout}
        layout='vertical'
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
        <Form.Item className='item-form' style={{margin:0}}
            label="Họ và tên"
            name={['user', 'name']}
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input className='input-checkout' span={24}/>
        </Form.Item >

        <Form.Item className='item-form' style={{margin:0}}
            label="Email"
            name={['user', 'email']}
            rules={[{ required: true }]}
        >
            <Input className='input-checkout' />
        </Form.Item>

        <Form.Item className='item-form' style={{margin:0}} label='Số điện thoại'  name={['user', 'phone']}>
           <Input className='input-checkout'/>
        </Form.Item>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" htmlType="submit">
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

       
</Form>
               </Col>
           </Row>
        </Col>
        <Col  xs={24} md={12}  style={{padding:'36px'}}>
        <Row style={{margin:0,textAlign:'left'}} >
               <Col span={24} >
                    <h1>Địa chỉ giao hàng</h1>
               <Form
        {...layout}
        layout='vertical'
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        >
        <Form.Item className='item-form' style={{margin:0}}
            label="Tỉnh/ Thành phố"
            name="name"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Select>
            <Option value="jack">Jack</Option>
                 <Option value="lucy">Lucy</Option>
            </Select>
            
        </Form.Item >

        <Form.Item className='item-form' style={{margin:0}}
            label="Quận/huyện"
            name="email"
            rules={[{ required: true }]}
        >
           <Select>
            <Option value="jack">Jack</Option>
                 <Option value="lucy">Lucy</Option>
            </Select>
        </Form.Item>

        <Form.Item className='item-form' style={{margin:0}} label='Phường/Xã'  name="phone" >
        <Select>
            <Option value="jack">Jack</Option>
                 <Option value="lucy">Lucy</Option>
            </Select>
        </Form.Item>

        <Form.Item className='item-form' style={{margin:0}} label='Địa chỉ cụ thể'  name="phone" >
        <Input/>
        </Form.Item>
        <Form.Item className='item-form' style={{margin:0}} label='Ghi chú thêm khi giao hàng (nếu có)'  name="phone" >
        <Input/>
        </Form.Item>
         </Form>
               </Col>
           </Row>
        </Col>
    </Row>
    
    </>
    )
}

FirstStep.propTypes = {

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

export default connect(mapStateToProps,mapDispatchToProps)(FirstStep)
