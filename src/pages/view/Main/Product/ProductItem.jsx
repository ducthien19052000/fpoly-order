import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
import Loading from "../../../../components/Loading";

function ProductItem({ product }) {
  console.log(product);
  return (
    <>
    {product.length===0&&<Loading/>}
    {product&&  <Col
        xs={24}
        lg={6}
        className="col-product-item"
        onMouseOver={() => console.log("a")}
      >
        <div className="product-item-wrap">
          <Row
            className="row-header-product-item"
            style={{ backgroundImage: `url(${product.image})`, margin: 0 }}
          >
            {/* <Image src={product.image} /> */}
          </Row>
          <Row className="row-bot-product-item" style={{ margin: 0 }}>
            <span className="span-product-name-item">
              {product.productName}
            </span>
            <span>{product.price}</span>
          </Row>
        </div>
      
      </Col>
}
    </>
  );
}

export default ProductItem;
