import { DeleteFilled, EditFilled } from '@ant-design/icons';
import { Button, Col, Row, Table } from 'antd'
import Search from 'antd/lib/input/Search';
import React, { useState } from 'react'
import ModalAddEmployee from '../ModalAdd';
import './index.css'

const Food = props => {
  const [isModal, setIsModal] = useState(false);
  const handleOk = e => {
    setIsModal(false)
  };
  const handleCancel = e => {
    setIsModal(false)
  };

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
        {
            title: 'Action',
            dataIndex: '',
            with:'15%',
            key: 'x',
            render: (text, record) => <>  <>
            <Button ><DeleteFilled /></Button>
            <Button  ><EditFilled /></Button>
            
            </></>,
          },
      ];
      const data = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
        },
        {
          key: '4',
          name: 'Disabled User',
          age: 99,
          address: 'Sidney No. 1 Lake Park',
        },
      ];
      const showModal = () => {
        setIsModal(true)
      };
     
    return (
        <>
        <Row className='title-content-admin'>
            <h4 className='title-h4'>Food manager</h4>
        </Row>
        <Row className="site-layout-content-admin">
        <Col xs={24} lg={24}>
            <Row className='top-content-food'>
                <Col xs={24} lg={12} className='col-add-food'><Button size='large' onClick={showModal}>Thêm món ăn</Button></Col>
                <Col span={6}></Col>
                <Col xs={24} lg={5} className='col-search-food'><Search placeholder="input search text" size="large"  enterButton /></Col>

            </Row>
            <Row>
                <Col xs={24} lg={24}>
                <Table className='table-food-admin'
             columns={columns}
                expandable={{
                  expandedRowRender: record => <p style={{ margin: 0 }}>{record.name}</p>
    }}
    dataSource={data} />
                </Col>
           
            </Row>
        </Col>
        {isModal === true ? <ModalAddEmployee isModal={isModal} handleOk={handleOk} handleCancel={handleCancel} /> : ''}
        </Row>
      </>
    )
}

Food.propTypes = {

}

export default Food
