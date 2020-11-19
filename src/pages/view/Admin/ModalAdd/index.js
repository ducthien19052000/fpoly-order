import { Modal, Select, Upload } from 'antd';
import { Form, Input, InputNumber, Button } from 'antd';
import React, { useRef, useState } from 'react';


const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        'date': '${label} is not validate date!',
        'number': '${label} is not a validate number!',
    },
    number: {
        'range': '${label} must be between ${min} and ${max}',
    },
};
const ModalAddEmployee = ({ isModal, handleOk, handleCancel ,AddEmployee}) => {
    const [fileList, setFileList] = useState([
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ]);
    
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList);
      };
    
      const onPreview = async file => {
        let src = file.url;
        if (!src) {
          src = await new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
      };
    const formRef = useRef(null);
 
    const onFinish = user => {
        console.log(user.user);
        AddEmployee(user.user);
        if (formRef.current) {
            formRef.current.resetFields()
        }
    };
    return (
        <Modal
            title="Add Food"
            visible={isModal}
            onOk={handleOk}
            onCancel={handleCancel}
            width={1000}
            footer={null}
        >
            <Form  {...layout}  ref={formRef} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'image']} label="Image" rules={[{ type: 'date' }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item name={['user', 'group-food']} label="Group food" rules={[{ required: true }]}>
                            <Select>
                        <Select.Option value="demo">Demo</Select.Option>
                    </Select>
                </Form.Item>
              
                        <Form.Item name={['user', 'image']} label="Image" >
                        <Upload
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 5 && '+ Upload'}
                        </Upload>
                        </Form.Item>
                      
                <Form.Item name={['user', 'prices']} label="Price" rules={[{type: 'number'}]}>
                    <InputNumber className="w-100" />
                </Form.Item>
                <Form.Item name={['user', 'description']} label="Description" rules={[{ type: 'date' }]}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item className="mt-3 " wrapperCol={{ ...layout.wrapperCol, offset: 4 }}>
                    <Button type="primary" htmlType="submit">
                        Add Food
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default ModalAddEmployee;
