import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import MainLayout from './components/MainLayout';
import ProductList from './pages/ProductList';
import ProductGroup from './pages/ProductGroup';
import ProductCategory from './pages/ProductCategory';
import ProductManagement from './pages/ProductManagement';
import './styles/App.css';

function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="products" element={<ProductList />} />
            <Route path="product-groups" element={<ProductGroup />} />
            <Route path="product-categories" element={<ProductCategory />} />
            <Route path="product-management" element={<ProductManagement />} />
          </Route>
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App;