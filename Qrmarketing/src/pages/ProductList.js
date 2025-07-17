import React, { useState } from 'react';
import { Card, Table, Button, Input, Space, Tag, Dropdown, message } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, MoreOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Search } = Input;

const ProductList = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const data = [
    {
      key: '1',
      categoryCode: 'PRD_T_202507001',
      categoryName: '类人猿',
      createTime: '2025/07/01 18:13:29',
      updateTime: '2025/07/01 18:13:29',
    },
  ];

  const columns = [
    {
      title: '类别编号',
      dataIndex: 'categoryCode',
      key: 'categoryCode',
    },
    {
      title: '类别名称',
      dataIndex: 'categoryName',
      key: 'categoryName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
    },
    {
      title: '更新时间',
      dataIndex: 'updateTime',
      key: 'updateTime',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: 'delete',
                label: '批量删除',
                icon: <DeleteOutlined />,
                danger: true,
              },
            ],
            onClick: handleMenuClick,
          }}
          trigger={['click']}
        >
          <Button type="text" icon={<MoreOutlined />} />
        </Dropdown>
      ),
    },
  ];

  const handleMenuClick = (e) => {
    if (e.key === 'delete') {
      message.info('删除功能待实现');
    }
  };

  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleSearch = (value) => {
    setSearchText(value);
    message.info(`搜索: ${value}`);
  };

  const handleAdd = () => {
    message.info('新增产品类别');
  };

  const handleBatchEdit = () => {
    if (selectedRowKeys.length === 0) {
      message.warning('请先选择要编辑的项目');
      return;
    }
    message.info('批量编辑功能待实现');
  };

  return (
    <Card>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Space>
            <Tag color="blue">产品类别</Tag>
            <span>产生码规则</span>
            <Tag>产品类别</Tag>
          </Space>
          <Space>
            <Search
              placeholder="类别名称"
              onSearch={handleSearch}
              style={{ width: 200 }}
            />
            <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
              新增
            </Button>
            <Button icon={<EditOutlined />} onClick={handleBatchEdit}>
              编辑
            </Button>
          </Space>
        </div>
        
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          pagination={{
            total: data.length,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total) => `共 ${total} 条`,
          }}
        />
      </Space>
    </Card>
  );
};

export default ProductList;