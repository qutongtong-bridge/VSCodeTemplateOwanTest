# VS Code 开发容器模板 - 效客户总览仪表板

基于 VS Code 开发容器的项目模板，包含 Vue3 和 React 两个版本的业务管理仪表板。

## 🚀 主要功能

### 仪表板功能
- 数据统计卡片（代理商数、门店数量、业务员数量、促销员数量）
- 中国地图可视化展示代理商分布
- 工单管理列表
- 用户信息展示

### Vue3 版本特色功能
- **收发单据管理系统** - 完整的单据管理功能
- 支持产品搜索和单号搜索
- 单据的增删改查操作
- ECharts 集成的高级地图可视化

## 📁 项目结构

```
.
├── .devcontainer/       # VS Code 开发容器配置
├── react-dashboard/     # React 版本仪表板
│   ├── src/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── index.js
│   └── package.json
│
├── vue3-dashboard/      # Vue 3 版本仪表板
│   ├── src/
│   │   ├── components/
│   │   │   └── document/  # 收发单据管理组件
│   │   ├── App.vue
│   │   └── main.js
│   ├── document.html    # 收发单据独立页面
│   └── package.json
│
└── images/             # 设计参考图片
```

## 🛠️ 快速开始

### 前置要求
- Docker 和 VS Code 已安装
- VS Code Remote - Containers 扩展

### 开发环境设置
1. 在 VS Code 中打开项目
2. 点击左下角 "Reopen in Container"
3. 等待容器构建完成

### 运行 React 仪表板
```bash
cd react-dashboard
npm install
npm start
```
访问 http://localhost:3000

### 运行 Vue3 仪表板
```bash
cd vue3-dashboard
npm install
npm run dev
```
- 主仪表板：http://localhost:3001
- 收发单据管理：http://localhost:3001/document.html

## 🔧 技术栈

- **React 版本**: React 18 + Create React App
- **Vue 版本**: Vue 3 + Vite + ECharts
- **开发环境**: Node.js v18 + Claude Code CLI
- **MCP 集成**: Playwright, Filesystem, Mayar API

## 📋 组件说明

### 通用组件
1. **Header**: 顶部导航栏，显示标题和用户信息
2. **StatsCards**: 统计数据卡片组件
3. **ChinaMap**: 中国地图组件
4. **WorkOrderList**: 工单列表组件

### Vue3 专属组件
- **DocumentManagement**: 收发单据管理主组件
- **DocumentForm**: 单据表单组件
- **PrintPreview**: 打印预览组件

## 🔌 已集成的 MCP 服务器

- **Playwright MCP** - 浏览器自动化
- **Filesystem MCP** - 文件系统访问
- **Mayar MCP** - API 管理工具

## 📝 注意事项

- 地图组件在 React 中使用简化 SVG，Vue3 中使用 ECharts
- 数据目前为静态 Mock 数据，生产环境需接入实际 API
- 收发单据功能仅在 Vue3 版本中实现

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License