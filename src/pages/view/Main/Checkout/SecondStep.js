import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Button, Col, Divider, Row, Table, message } from 'antd';
import React from 'react'
import { connect } from 'react-redux';

const SecondStep = ({cart, current, setCurrent, steps}) => {
  const dataLocal  = localStorage.getItem('OrderDetail');
  const orderDetail = dataLocal !== null ? JSON.parse(dataLocal) : null; 
      ///showTotalPrice
      const showTotal=(ct)=>{
          
        var total=0;
      if(ct.length>0){
        for(var i=0;i<ct.length;i++){
          total+=(ct[i].product.price )* ct[i].quantity;
        
        }
        return total;
       
      }
   }
   const intoMoney=(product)=>{
    var total = 0;
    
        total= product.product.price * product.quantity
        return total;
        
    
    
   }
    const columns = [
        {
          title: '',
          dataIndex: 'product',
          key: 'image',
          render: text => <img src={text.image}style={{width:'120px'}} />
        },
      {
        title: 'Tên món ăn',
        dataIndex: 'product',
        key: 'name',
        render: text => <a style={{color:'red'}}>{text.productName}</a>,
      },
      {
        title: 'Số lượng',
        dataIndex: 'quantity',
        key: 'age',
      },
      {
        title: 'Ghi chú',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Thành tiền',
        key: 'tạ',
        render:(text,record)=>(
           
            <span>{intoMoney(record)} VNĐ</span>
        )
           
      
        
       
        
      },
      {
        title: '',
        key: 'action',
        render: (text, record) => (
          < >
             <Button ><DeleteFilled /></Button>
              <Button  ><EditFilled /></Button>
          </>
        ),
      },
    ];

    const next = () => {
      orderDetail.total=showTotal(cart);
      setCurrent(current + 1);
      localStorage.setItem('OrderDetail', JSON.stringify(orderDetail));
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
  
    return (<>
        <Row className='row-checkout-profile-user' style={{margin:0}}>
            <Col xs={24} lg={18} style={{background:'#fff',padding:'0 8px'}}> 
            <Table pagination={false} style={{width:'100%'}} columns={columns} dataSource={cart} />
            </Col>
            <Col xs={24} lg={6} style={{background:'#fff',padding:'0 8px'}}>
                <Row className='header-method' style={{margin:0}}>
                       <h4 style={{fontSize:'1.25rem',fontWeight:600}}>Phương thức thanh toán</h4>
                </Row>
                <Row>
                    
                </Row>
            </Col>
    
     <Divider/>
     <Row style={{width:'100%'}}>
         <Col xs={24} lg={12}  style={{textAlign:'left'}}> <span style={{fontSize:'18px',fontWeight:'500'}}>Tổng chi phí</span></Col>
         <Col xs={24} lg={12} style={{textAlign:'right'}}><span style={{fontSize:'18px',fontWeight:'500'}}> {showTotal(cart)} VNĐ</span></Col>
     </Row>
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
const  mapStateToProps= state =>{
    return {
        
        cart :state.cartData
    }
}

export default connect(mapStateToProps,null)(SecondStep)
