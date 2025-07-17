import React, { useState } from 'react';
import { Card, Table, Button, Input, Space, Form, Select, message } from 'antd';
import { PlusOutlined, UnorderedListOutlined } from '@ant-design/icons';

const ProductGroup = () => {
  const [form] = Form.useForm();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [pageSize, setPageSize] = useState(20);

  // 模拟数据
  const [data] = useState([
    // 如果需要显示示例数据，可以取消下面的注释
    // {
    //   key: '1',
    //   groupCode: 'GRP001',
    //   groupName: '基础参数组',
    //   productCategory: '电子产品',
    //   remark: '包含产品基本信息'
    // },
    // {
    //   key: '2', 
    //   groupCode: 'GRP002',
    //   groupName: '规格参数组',
    //   productCategory: '家用电器',
    //   remark: '包含产品规格信息'
    // }
  ]);

  const columns = [
    {
      title: '参数组编号',
      dataIndex: 'groupCode',
      key: 'groupCode',
      width: '25%',
    },
    {
      title: '参数组名',
      dataIndex: 'groupName', 
      key: 'groupName',
      width: '25%',
    },
    {
      title: '产品类别',
      dataIndex: 'productCategory',
      key: 'productCategory',
      width: '25%',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
      width: '25%',
    },
  ];

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSearch = () => {
    const values = form.getFieldsValue();
    message.info(`搜索: ${JSON.stringify(values)}`);
  };

  const handleAdd = () => {
    message.info('新增参数组');
  };

  const handleBatchDelete = () => {
    if (selectedRowKeys.length === 0) {
      message.warning('请先选择要删除的项目');
      return;
    }
    message.info(`批量删除 ${selectedRowKeys.length} 项`);
  };

  const handleShowItems = () => {
    message.info('显示项功能');
  };

  return (
    <Card>
      <Space direction="vertical" size="middle" style={{ display: 'flex', width: '100%' }}>
        {/* 搜索栏 */}
        <Form
          form={form}
          layout="inline"
          style={{ marginBottom: 16 }}
        >
          <Form.Item name="groupCode" style={{ width: 300 }}>
            <Input placeholder="参数组编号" />
          </Form.Item>
          <Form.Item name="groupName" style={{ width: 300 }}>
            <Input placeholder="参数组名" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" onClick={handleSearch}>
              搜索
            </Button>
          </Form.Item>
          <Form.Item style={{ marginLeft: 'auto' }}>
            <Space>
              <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
                新增
              </Button>
              <Button icon={<UnorderedListOutlined />} onClick={handleShowItems}>
                显示项
              </Button>
            </Space>
          </Form.Item>
        </Form>

        {/* 表格 */}
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{
            total: data.length,
            pageSize: pageSize,
            showSizeChanger: true,
            showQuickJumper: true,
            pageSizeOptions: ['20', '50', '100'],
            onShowSizeChange: (current, size) => setPageSize(size),
            showTotal: (total) => (
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span>共 {total} 条</span>
                <Select
                  value={pageSize}
                  onChange={setPageSize}
                  style={{ width: 100 }}
                  options={[
                    { value: 20, label: '20条/页' },
                    { value: 50, label: '50条/页' },
                    { value: 100, label: '100条/页' },
                  ]}
                />
                <span>前往 <Input style={{ width: 50, margin: '0 4px' }} /> 页</span>
              </div>
            ),
          }}
          locale={{
            emptyText: '暂无数据'
          }}
        />

        {/* 底部操作栏 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button 
            danger 
            onClick={handleBatchDelete}
            disabled={selectedRowKeys.length === 0}
          >
            批量删除
          </Button>
        </div>
      </Space>
    </Card>
  );
};

export default ProductGroup;