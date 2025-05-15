# E-Bank Morocco - Project Architecture

## Project Structure

```
e-bank/
├── src/
│   ├── components/
│   │   ├── Layout.js         # Main layout wrapper
│   │   ├── Navbar.js         # Navigation bar with Moroccan flag
│   │   ├── Footer.js         # Site footer
│   │   ├── MoroccanFlag.js   # SVG flag component
│   │   └── styles/           # Shared styles
│   ├── pages/
│   │   ├── Login.js         # Authentication
│   │   ├── Signup.js        # User registration
│   │   ├── Dashboard.js     # Main dashboard
│   │   ├── AccountManagement.js
│   │   ├── FundManagement.js
│   │   └── Trading.js
│   └── App.js               # Main application component
```

## Color Scheme
- Primary (Red): #ad1d24 (Navbar)
- Secondary (Green): #006233 (Moroccan flag green)
- Background: #f8f9fa
- Paper: #ffffff

## Features
1. Authentication System
   - Login/Signup
   - Protected Routes
   - Session Management

2. Banking Features
   - Account Management
   - Fund Transfers
   - Investment Tools
   - Trading Platform

3. UI Components
   - Responsive Design
   - Material-UI Integration
   - Custom Theming
   - Bilingual Support (English/Arabic)

## Routing Structure
- / -> Dashboard
- /login -> Authentication
- /signup -> Registration
- /account-management -> Account Overview
- /fund-management -> Fund Operations
- /trading -> Trading Platform

## State Management
- React useState for local state
- Protected routes using React Router
- Theme customization with Material-UI

## Styling
- Material-UI components
- Custom theme configuration
- Responsive layout design
- Mobile-first approach
