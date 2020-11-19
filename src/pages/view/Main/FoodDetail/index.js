import { DeleteTwoTone, EditTwoTone, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Badge, Button, Card, Col, Divider, Drawer, Image, InputNumber, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import {useParams} from  "react-router-dom"
import './index.css'

const FoodDetail = () => {
  const id = useParams().id;
  const [foodDetail,setFoodDetail] = useState({});
  useEffect(()=>{
    fetch(`https://website-fpoly-food.herokuapp.com/product/${id}`, {
  "method": "GET",
  "headers": new Headers({
    'Content-Type' : 'application/json',
    'Accept': '*/*'
})
})
.then(response => response.json())
.then(response => {
    setFoodDetail(response.body)
})
.catch(err => { console.log(err); 
});
   
  },[id])
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
      setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    const onChange=(value)=>{
      console.log('changed', value);
    }
    return (
        <>
            <Row className='row-food-detail-container' justify="center" style={{marginTop:'30px'}}>
            <Badge count={0}  id="myBtn" overflowCount={10}>
                      <Button shape="circle" style={{background:'none',border:'none'}} onClick={showDrawer}> <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff',margin:0 }} /></Button>
          </Badge>
                <Col span={21} style={{background:'#fff'}}>
                    <Row>
                        <Col span={8} className='col-img-food-detail'>
                        <Image  src={foodDetail.image}/>

                        </Col>
                        <Col span={11}>
                            <div className='food-detail-info'>
                                <span  className='span-name-shop'>Món ngón Fpoly</span>
                                <span  className='span-name-food-detail'> {foodDetail.productName} </span>
                            </div>
                            <h2 style={{fontSize:'1.75rem',marginTop:'20px',fontWeight:600}}> {foodDetail.productName}</h2>
                            <span className='span-id-food'>Mã sản phẩm : {foodDetail.id} </span>
                            <p><strong>{foodDetail.productName}</strong> {foodDetail.description}</p>
                        </Col>
                        <Col span={5} style={{marginTop:'30px',textAlign:"center"}}>
                           
                            <InputNumber min={1} max={foodDetail.quantity} defaultValue={3}  onChange={onChange} />
                           
                            <h3>{foodDetail.price} VNĐ</h3>
                            <Button style={{width:'90%',background:'#eb7100',marginTop:'15px'}}>Đặt món</Button>
                            </Col>

                    </Row>
                    <Row>
                        <Col span={24}>
                        <Row style={{marginLeft:'25px'}}>
                           <Col flex={4}>
                               <h4  style={{fontSize:'36px'}}>Gợi ý món ăn</h4>
                           </Col>
                           <Col flex={1} style={{textAlign:"right"}}> </Col>
                         </Row>
                         <Row style={{margin:0}}>
                        
                         <Card 
                               hoverable
                               style={{ width: '15.5%' , marginRight:'12px'}}
                               cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                               actions={[
                                <SettingOutlined key="setting" />
                                
                              ]}
                             >
                                <p  style={{fontSize:'15px'}}>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                             </Card>
                             <Card 
                               hoverable
                               style={{ width: '15.5%' , marginRight:'12px'}}
                               cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                               actions={[
                                <SettingOutlined key="setting" />
                                
                              ]}
                             >
                                <p  style={{fontSize:'15px'}}>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                             </Card>
                             <Card 
                               hoverable
                               style={{ width: '15.5%' , marginRight:'12px'}}
                               cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                               actions={[
                                <SettingOutlined key="setting" />
                                
                              ]}
                             >
                                <p  style={{fontSize:'15px'}}>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                             </Card>
                             <Card 
                               hoverable
                               style={{ width: '15.5%' , marginRight:'12px'}}
                               cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                               actions={[
                                <SettingOutlined key="setting" />
                                
                              ]}
                             >
                                <p  style={{fontSize:'15px'}}>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                             </Card>
                             <Card 
                               hoverable
                               style={{ width: '15.5%' , marginRight:'12px'}}
                               cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                               actions={[
                                <SettingOutlined key="setting" />
                                
                              ]}
                             >
                                <p  style={{fontSize:'15px'}}>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                             </Card>
                             <Card 
                               hoverable
                               style={{ width: '15.5%' , marginRight:'12px'}}
                               cover={<img alt="example"  src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png" />}
                               actions={[
                                <SettingOutlined key="setting" />
                                
                              ]}
                             >
                                <p  style={{fontSize:'15px'}}>GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN</p>
                             </Card>
                     
                         </Row>
                        </Col>
                    </Row>
                </Col>
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
                          <Row style={{}} className='row-itemFood-cart`'>
                            <Col span={6} style={{padding:'5px'}}>
                                    <Image src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png"/>
                                </Col>
                                    <Col span={18}> 
                                    <Row>
                                      <Col span={14}>
                                      <span style={{fontSize:16,fontWeight:500}} >GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN x1</span>
                                      </Col>
                                      <Col span={10}>
                                      <span style={{fontSize:16,fontWeight:500}} >350.000 VNĐ</span>
                                      </Col>
                                   
                                    </Row>
                                      <Row> 
                                        <Col span ={16}>
                                       <span>Số lượng : 1</span>
                                        
                                          </Col>
                                          <Col span={8}>
                                            <Row>
                                              <Col span={12}>
                                              <Button style={{background:'none',border:'none'}}> <EditTwoTone /></Button>
                                              </Col>
                                              <Col span={12}>
                                              <Button  style={{background:'none',border:'none'}}> <DeleteTwoTone /></Button>
                                              </Col>
                                          
                                            
                                            </Row>
                                          
                                          </Col>

                                      </Row>
                                     </Col>
                                   
                                </Row>
                                <Divider style={{margin:'12px 0'}} />
                            <Row className='row-price-cart' style={{padding:'12px'}}>
                                <Col span={8}>
                                    <h3 style={{margin:0}}>Tổng giá</h3>
                                </Col>
                                <Col span={16} style={{textAlign:'right'}}>
                                <h3 style={{margin:0}}>350.000 VNĐ</h3>
                                </Col>
                            </Row>
                         </Col>
                           
                   
      </Drawer>
            </Row>
        </>
    )
}

export default FoodDetail
