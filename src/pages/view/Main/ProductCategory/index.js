import { DeleteTwoTone, EditTwoTone, ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Card, Col, Image, Row, Select } from 'antd'
import Search from 'antd/lib/input/Search'
import React, { useCallback, useEffect, useState } from 'react'
import {bindActionCreators} from 'redux'
import * as categoryAction from '../../../../redux/Action/categoryAction'
import { connect } from 'react-redux';
import {addToCart,removeToCart} from '../../../../redux/Action/cartAction'
import * as foodAction from  '../../../../redux/Action/index'
import './index.css'
import { useParams } from 'react-router-dom'

const { Option } = Select;

const Category = ({foodAct,categoryAct,litsFoot,listGroup,cart}) => {
        let {id} = useParams();
        const [nameCate,setNameCate] = useState('')
    console.log(id)
      const fetchCategory= useCallback(
        () => {
            const { getDataCategory } = categoryAct;
            getDataCategory();
        },
        [],
    )
    useEffect(() => {
    
        fetchCategory();
      }, []);
  
        const fetchFood= useCallback(
            () => {
                
                const { getDataGroup } = foodAct;
          
                getDataGroup(id)
            
            },
            [id],
        )
        
        useEffect(() => {
           
                fetchFood()
           
            
          }, [fetchFood]);
      console.log(litsFoot)
          useEffect(()=>{
      
            fetch(`https://website-fpoly-food.herokuapp.com/category/${id}`)
            .then(res => res.json())
            .then(res => {
                if(res.error) {
                    throw(res.error);
                }
                
                setNameCate(res.body.categoryName)
                
                return res;
            })
            .catch(error => {
               
            })
          },[id])
       
    return (
        <>
            <Row className='container-main-product' >
                <Col span={22} style={{margin:'0 auto'}}>
                <Row className='content-food'>
                    <h2>Các loại {nameCate}</h2>  
                </Row>
                <Row style={{background:'#eeeeee'}}>
                <Col span={8}>
                    <Row style={{margin:'20px'}}>
                    <Col span={18} push={6}>
                    <Select defaultValue="Tất cả" style={{ width: 120 }}>
                        {listGroup.map((category,index)=>(
                            <Option value={category.categoryName} key={index}>{category.categoryName}</Option>
                        ))}
                        
                        
                </Select>
                    </Col>
                    <Col span={6} pull={18}>
                        Danh mục
                    </Col>
                    </Row>
                </Col>
                    <Col span={8} offset={8}>
                        <Row style={{margin:'20px'}}>
                        
                            <Col span={16} offset={8}>
                            <Col>
                            <Search placeholder="input search food"  enterButton />

                            </Col>
                            </Col>
                            
                        </Row>
                    
                    </Col>
                </Row>
                
                <Row >
                 <Col span={16} className='menu-food-col'>
                    
                         <Row className='row-food-all' style={{margin:0}} >
                         <Col span={24}>
                        
                           <Row style={{margin:0}}>
                              
                               {litsFoot.map((food,index)=>(
                                    <Col xs={24} lg={5} style={{margin:'5px'}}>
                                 <Card key={index}
                                
                                 cover={<img alt="example"  src={food.image} />}
                                 actions={[
                                     <ShoppingCartOutlined />
                                
                                 ]}
                             >
                                   <p>{food.productName}</p>
                             </Card>
                             </Col>
                               ))}
                             
                        
                        
                           </Row>
                         </Col>
                       </Row>
                 
                  
                  </Col>
                  <Col span={8}>
                      <Row className='row-show-cart' style={{margin:0}}>
                      
                         <Col span={24}>
                         <div style={{position: 'absolute', top: '-20px', right: '10px', backgroundColor: 'rgb(235, 113, 0)', borderRadius: '50px', width: '80px', height: '80px', border: '12px solid white', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><ShoppingCartOutlined   /></div>
                         <Row style={{background:'white',height:50,paddingTop:'10px'}}>
                                <h2>Số món</h2>
                            </Row>
                            <Row>
                                <Col span={6} style={{padding:'5px'}}>
                                    <Image src="https://dashboard-api.flyfood.vn/system/product_images/2494/image.png"/>
                                </Col>
                                <Col span={18}>
                                <Row style={{margin:0}}>
                                    <Col span={12}> <span style={{fontSize:16,fontWeight:500}} >GÀ BÓ XÔI 3 MÀU ÔM TRỨNG NON HẠT SEN x1</span> </Col>
                                    <Col span ={12}>
                                        <Row style={{margin:0}}>
                                        <span style={{fontSize:16,fontWeight:500}} >350.000 VNĐ</span>
                                        </Row>
                                        <Row  style={{margin:0}}>
                                                <Button style={{background:'none',border:'none'}}> <EditTwoTone /></Button>
                                                <Button  style={{background:'none',border:'none'}}> <DeleteTwoTone /></Button>
                                        </Row>
                                        
                                          </Col>
                                </Row>
                                    </Col>

                            </Row>
                            <Row className='row-price-cart'>
                                <Col span={8}>
                                    <h3>Tổng giá</h3>
                                </Col>
                                <Col span={16}></Col>
                            </Row>
                         </Col>
                           
                      </Row>
                  </Col>
                </Row>
                </Col>
                
            </Row>
          
        </>
    )
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
        categoryAct: bindActionCreators(categoryAction,dispatch),

        AddToCart:(product,quantity)=>{
            dispatch(addToCart(product,quantity))
          },
          onDeletePrToCart:(product)=>{
            dispatch(removeToCart(product))
          }
    }
    
  }
export default connect(mapStateToProps,mapDispatchToProps)(Category)
