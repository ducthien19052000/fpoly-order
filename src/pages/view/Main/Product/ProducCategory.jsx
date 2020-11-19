

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
import Item from 'antd/lib/list/Item'
import ProductCategory from './ProducCategory.jsx'
import ProductItem from './ProductItem'
import { Link } from 'react-router-dom'
import Loading from '../../../../components/Loading'
function ProducCategory({foodAct,category,litsFoot,listGroup,cart}) {
  const [product,setProduct] = useState([]);

    const fetchFood= useCallback(
        () => {
            
            const { getDataGroup } = foodAct;
            console.log(category.id)
        getDataGroup(category.id)

        },
        [foodAct,listGroup],
    )
    useEffect(() => {
       
            fetchFood()
       
        
      }, [fetchFood]);

    
      useEffect(()=>{
          fetch(`https://website-fpoly-food.herokuapp.com/product/?productName=&status=&size=4&page=0&previous_page=0&categoryId=${category.id}`, {
        "method": "GET",
        "headers": new Headers({
          'Content-Type' : 'application/json',
          'Accept': '*/*'
      })
      })
      .then(response => response.json())
      .then(response => {
          console.log(response)
          setProduct(response.body.content)
      })
      .catch(err => { console.log(err); 
      });
         
        },[category.id])
if(litsFoot){
    // console.log(litsFoot)
}
  return (
    
    <div>
      {!category&&<Loading/>}
      {category&&
      <Row className="row-food-all" style={{ margin: '0 0 20px 0' }}>
      <Col span={24}>
        <Row>
          <Col flex={4}>
            <h4 className="name-cate-food">{category.categoryName}</h4>
          </Col>
          <Col flex={1} style={{ textAlign: "right" }}>
            {" "}
            <Link to={`/category/${category.id}`} className="btn-see-more">Xem thêm</Link>
          </Col>
        </Row>
        <Row style={{ margin:'0' }}>
         
          {product.map((item,index)=>(
            <ProductItem product={item} key={index}/>
          ))} 
      
          
         </Row>
      </Col>
    </Row>}
    </div>
  );
}


const  mapStateToProps= state =>{
    // console.log(state.foodData.lists)
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
export default connect(mapStateToProps,mapDispatchToProps)(ProducCategory)

