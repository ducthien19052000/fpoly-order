import React, { useCallback, useEffect, useState } from 'react'
import {  Row, Image, Card, Badge, Button, Col, Drawer, Divider, Spin, notification, Alert } from 'antd';
import {bindActionCreators} from 'redux'
import * as foodAction from  '../../../../redux/Action/index'
import { connect } from 'react-redux';
import {addToCart,removeToCart} from '../../../../redux/Action/cartAction'
import confirm from 'antd/lib/modal/confirm';
import './index.css'
import {Link} from 'react-router-dom'
import { DeleteTwoTone, EditTwoTone, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons';


const Home = ({foodAct,litsFoot,listGroup,AddToCart,cart,onDeletePrToCart}) => {
 
       

  const { Meta } = Card;
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
 console.log(litsFoot)
    const fetchEmployee= useCallback(
        () => {
            const { getData } = foodAct;
            getData();
        },
        [foodAct],
    )
    useEffect(() => {
    
        fetchEmployee();
      }, [fetchEmployee]);
    
      const newProduct = litsFoot.slice(litsFoot.length-6,litsFoot.length)
    console.log(litsFoot)
      const onAddToCart=(product,quantity)=>{
   
        confirm({
          title: 'Bạn muốn thêm sản phẩm vào giỏ hàng?',
      
          content: `Sản phẩm :${product.productName} x ${quantity}`,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            AddToCart(product,quantity)
            notification['success']({
              message: '',
              duration: 2,
              description:
                'Thêm sản phẩm thành công',
            });
          },
          onCancel() {

          },
        });
       
      }
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
   //showTotalCart
   const showQuantity=(cart)=>{
      var quantity= 0;
      if(cart.length>0){
        for(var i=0;i<cart.length;i++){
          quantity+=cart[i].quantity;
        
        }
        return quantity;
       
      }

   }

   //deleteCart
   const onHandleRemoveCart=(product)=>{
    onDeletePrToCart(product);
   
}

     if(newProduct.length===0){
         return( <Spin tip="Loading...">
         <Alert
           message="Thông báo"
           description="Đang tải dữ liệu vui lòng chờ."
           type="info"
         />
       </Spin>)
     }
     else{
    return (
        <>
    
        <>
        
             <Row>
                  <Badge count={showQuantity(cart)}  id="myBtn" overflowCount={10}>
                      <Button shape="circle" style={{background:'none',border:'none'}} onClick={showDrawer}> <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff',margin:0 }} /></Button>
          </Badge>
         
                 
          <div className="carousel-home" style={{margin:'0 auto'}}  >
              
         
          
          <Image disabled style={{width:'100%'}}  src="https://rawcdn.githack.com/0967517236/imag-datn/0fc6d18e91b5f33324b6a1824756dece21d71b8e/img-carousel-home.JPG"/>
        
        
      </div>
          
        </Row >
      
          <div className="site-layout-background-main-home" >
        
            <Row  style={{marginLeft:'35px'}}>
             <Row style={{width:'100%',display:"block"}}>
               <h2 style={{float:"left"}} >Món ngon</h2>
               <Link to='/product' type="button" className="ant-btn ant-btn-dashed" style={{float: 'right', marginRight: '30px',  background: '#3ac5c9'}}><span>Xem chi tiết</span></Link>
             </Row>
                <Row className='row-food-home'>
                    {newProduct.map((food,index)=>(
                               
                             
                                 <Card
                               className='item-food'
                               style={{ width: '15.5%' , marginRight:'12px'}}
                                  cover={<img src={food.image}/>}
                                  actions={[
                                    <Link to={`/food/${food.id}`}><SearchOutlined /></Link>,
                                    <ShoppingCartOutlined key='cart'  onClick={()=>onAddToCart(food,1)}/>
                                 
                                  ]}
                                >
                                   <Meta
                      title={food.productName}
                      description={`${food.price} VNĐ `}     />

                      </Card>
                             
                    )
)}
             
                </Row>
                <Drawer
        title="Giỏ hàng"
        placement="right"
        width={370}
        onClose={onClose}
        visible={visible}
      >
                         <Col span={24}>
                       
                         <Row style={{backgroundColor:'rgb(238, 238, 238)',minHeight:'30px',padding : '10px 16px'}}>
                                <span style={{fontSize:'16px', fontWeight:500,color :'#16161d'}} >Số món</span>
                         </Row>
                         {cart.map((cartItem,index)=>(
                           <>
                            <Row style={{}} className='row-itemFood-cart`'>
                            <Col span={6} style={{padding:'5px'}}>
                                    <Image src={cartItem.product.image}/>
                                </Col>
                                    <Col span={18}> 
                                    <Row>
                                      <Col span={12}>
                                  <span style={{fontSize:16,fontWeight:500}} >{cartItem.product.productName} x { cartItem.quantity}</span>
                                      </Col>
                                      <Col span={2}></Col>
                                      <Col span={10}>
                                 <span style={{fontSize:16,fontWeight:500}} >{cartItem.product.price} VNĐ</span>
                                      </Col>
                                   
                                    </Row>
                                      <Row> 
                                        <Col span ={16}>
                                      
                                        
                                          </Col>
                                          <Col span={8}>
                                            <Row>
                                              <Col span={12}>
                                              <Button style={{background:'none',border:'none'}}> <EditTwoTone /></Button>
                                              </Col>
                                              <Col span={12}>
                                              <Button  style={{background:'none',border:'none'}} onClick={()=>onHandleRemoveCart(cartItem.product)}> <DeleteTwoTone /></Button>
                                              </Col>
                                          
                                            
                                            </Row>
                                          
                                          </Col>

                                      </Row>
                                     </Col>
                                   
                                </Row>
                                <Divider style={{margin:'12px 0'}} /></>
                         ))}
                            <Row className='row-price-cart' style={{padding:'12px'}}>
                                <Col span={8}>
                                    <h3 style={{margin:0}}>Tổng giá</h3>
                                </Col>
                                <Col span={16} style={{textAlign:'right'}}>
                                <h3 style={{margin:0}}>{showTotal(cart)} VNĐ </h3>
                                </Col>
                            </Row>
                            <Row>
                              <Link to='/checkout' type='primary'> Tiến hành đặt hàng</Link>
                            </Row>
                         </Col>
                           
                   
      </Drawer>
            </Row > 
            
          </div>
          </>

        </>
    )
                                }
}

const  mapStateToProps= state =>{
    return {
        litsFoot: state.foodData.lists,
        listGroup:state.groupData.lists,
        cart :state.cartData
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        foodAct: bindActionCreators(foodAction,dispatch),
        
        AddToCart:(product,quantity)=>{
          dispatch(addToCart(product,quantity))
        },
        onDeletePrToCart:(product)=>{
          dispatch(removeToCart(product))
        }

    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
