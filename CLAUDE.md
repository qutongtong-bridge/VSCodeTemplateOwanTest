# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This repository contains **dual dashboard implementations** (React and Vue 3) for a Chinese business management system (效客户总览仪表板). Both implementations show the same dashboard UI with different frontend frameworks.

## Development Environment Setup

The repository uses VS Code devcontainers with:
- Node.js v18
- Claude Code CLI
- Playwright MCP integration

## Common Commands

### React Dashboard (port 3000)
```bash
cd react-dashboard
npm install
npm start        # Start development server
npm build        # Production build
npm test         # Run tests (no tests implemented yet)
```

### Vue 3 Dashboard (port 3001)
```bash
cd vue3-dashboard
npm install
npm run dev      # Start development server (Vite)
npm run build    # Production build
npm run preview  # Preview production build
```

## Architecture Notes

### Project Structure
```
├── react-dashboard/     # React implementation (Create React App)
│   └── src/
│       ├── App.jsx     # Main app component
│       ├── components/ # UI components
│       └── data/      # Mock data files
└── vue3-dashboard/     # Vue 3 implementation (Vite)
    └── src/
        ├── App.vue    # Main app component
        ├── components/# UI components (includes document management)
        └── data/      # Mock data files
```

### Shared Component Architecture
Both implementations follow the same component structure:
- `Header` - Navigation bar with user menu
- `StatsCards` - Key business metrics display
- `ChinaMap` - Interactive China map visualization (ECharts in Vue)
- `WorkOrderList` - Work order data table

### Key Technical Decisions

**React Dashboard:**
- Built with Create React App (no TypeScript)
- Basic ESLint configuration via react-app preset
- CSS modules for styling

**Vue Dashboard:**
- Built with Vite for faster development
- ECharts integration for advanced visualizations
- Puppeteer-core for screenshot functionality
- Additional document management components

### Data Management
Currently using static mock data in both projects:
- Customer data (`mockData.js`)
- Work order data (`workOrderData.js`)
- Map visualization data

### Development Tips

1. **When modifying components:** Check both React and Vue implementations to maintain feature parity
2. **For new features:** Consider implementing in both frameworks unless specifically requested otherwise
3. **Chinese UI:** All user-facing text is in Chinese - maintain localization consistency
4. **Port conflicts:** React runs on 3000, Vue on 3001 to allow simultaneous development

## Future Implementation Notes

The codebase is set up as a template and needs:
- API integration to replace mock data
- Authentication system implementation
- Test suite setup (Jest for React, Vitest for Vue recommended)
- Production deployment configuration
- Environment variable management