
```markdown
---
# 📁 Complete Project Structure

This document provides a detailed overview of the Stylo Admin Pro project structure. Understanding this organization will help you navigate and customize the dashboard effectively.

---

## 🌳 Root Directory Overview

```

📦 stylo-admin-pro/
├──📂 docs/                     # Documentation (this folder)
├──📂 public/                   # Static assets
├──📂 src/                      # Source code
├──📄 package.json              # Dependencies & scripts
├──📄 package-lock.json         # Lock file for dependencies
├──📄 vite.config.js            # Build configuration
├──📄 eslint.config.js          # Code linting rules
├──📄 index.html                # HTML entry point
├──📄 README.md                 # Project overview
├──📄 .gitignore                # Git ignore rules
├──📄 structured.md             # Structure documentation
└──📄 tmp.jsx                   # Temporary file

```

---

## 📚 Documentation (`docs/`)

```

📂 docs/
├──📄 index.md                  # Documentation homepage
├──📄 installation.md           # Installation & setup guide
├──📄 theming.md                # Theme customization guide
├──📄 components.md             # UI components reference
├──📄 data-viz.md               # Data visualization guide
├──📄 deployment.md             # Deployment best practices
├──📄 add-new-page.md           # How to add new pages
├──📄 using-store.md            # State management guide
├──📄 tree.md                   # Project structure (this file)
├──📄 docs.md                   # Documentation setup
└──📄 tmp.md                    # Temporary notes

```

---

## 🌐 Public Assets (`public/`)

```

📂 public/
└──📄 vite.svg                  # Vite logo (branding)

```

---

## 🎨 Source Code (`src/`)

### **Entry Points**
```

📂 src/
├──📄 main.jsx                  # React application entry point
├──📄 App.jsx                   # Main App component
├──📄 App.css                   # Global CSS styles
├──📄 index.css                 # Additional global styles

```

### **Assets (`assets/`)**
```

📂 src/assets/
├──📄 react.svg                 # React logo
└──📄 product_img_4.png         # Sample product image

```

### **Data (`data/`)**
```

📂 src/data/
└──📄 mockDashboardData.js      # Mock data for dashboard components

```

---

## 🧩 Components (`components/`)

The heart of the application - organized by feature/module.

### **Layout Components**
```

📂 src/components/layout/
├──📄 AuthLayout.jsx            # Authentication page layout
├──📄 DashboardLayout.jsx       # Main dashboard layout
├──📄 Container.jsx             # Responsive container component
├──📄 Navbar.jsx                # Navigation bar
└──📄 index.jsx                 # Layout exports

```

### **Application Modules**
```

📂 src/components/calendar_app/   # Calendar application
├──📄 CalendarApp.jsx           # Main calendar component
├──📄 CalendarHeader.jsx        # Calendar header
├──📄 CalendadSidebar.jsx       # Calendar sidebar
├──📄 DayView.jsx               # Day view component
├──📄 WeekView.jsx              # Week view component
├──📄 MonthView.jsx             # Month view component
└──📄 EventModal.jsx            # Event creation/editing modal

📂 src/components/chat_app/      # Chat application
└──📄 ChatApp.jsx               # Main chat component

📂 src/components/email/         # Email application
├──📄 EmailApp.jsx              # Main email component
├──📄 EmailHeader.jsx           # Email header
├──📄 EmailSidebar.jsx          # Email sidebar
├──📄 EmailReadingView.jsx      # Email reading view
├──📄 ListViewEmail.jsx         # Email list view
└──📄 ComposeEmail.jsx          # Email composition

📂 src/components/todo_app/      # Todo application
├──📄 TodoApp.jsx               # Main todo component
├──📄 TodoHeader.jsx            # Todo header
└──📄 TodoSidebar.jsx           # Todo sidebar

```

### **Business Modules**
```

📂 src/components/products/      # Product management
├──📄 ProductTable.jsx          # Products table
├──📄 ProductList.jsx           # Products list
├──📄 ProductRow.jsx            # Individual product row
├──📄 ProductForm.jsx           # Product creation form
├──📄 ProductEditForm.jsx       # Product editing form
├──📄 ProductFilters.jsx        # Product filtering
├──📄 Pagination.jsx            # Pagination component
└──📄 TipTapEditor.jsx          # Rich text editor

📂 src/components/orders/        # Order management
├──📄 OrderTable.jsx            # Orders table
├──📄 OrderList.jsx             # Orders list
├──📄 OrderRow.jsx              # Individual order row
├──📄 OrderDetails.jsx          # Order details view
├──📄 OrderFilters.jsx          # Order filtering
└──📄 OrderPagination.jsx       # Order pagination

📂 src/components/users/         # User management
├──📄 UserTable.jsx             # Users table
├──📄 UserList.jsx              # Users list
├──📄 UserRow.jsx               # Individual user row
├──📄 UserForm.jsx              # User creation form
└──📄 UserFilters.jsx           # User filtering

```

### **Data Visualization (`charts/`)**
```

📂 src/components/charts/        # Chart components
├──📄 ModernPieChart.jsx        # Modern pie/donut chart
├──📄 PieChartWithPaddingAngle.jsx # Advanced pie chart
├──📄 SalesTrendChart.jsx       # Sales trend line chart
├──📄 RevenueGrowthChart.jsx    # Revenue growth chart
├──📄 TargetVsActualChart.jsx   # Target vs actual comparison
├──📄 TopProductsChart.jsx      # Top products chart
├──📄 CustomerSegmentationChart.jsx # Customer segmentation
├──📄 GradientBarChart.jsx      # Gradient bar chart
├──📄 EnhancedGradientBarChart.jsx # Enhanced bar chart
├──📄 InventoryStatusChart.jsx  # Inventory status chart
├──📄 MixedAnalyticsChart.jsx   # Mixed analytics chart
├──📄 MultiLineChart.jsx        # Multi-line chart
└──📄 ProfitMarginChart.jsx     # Profit margin chart

```

### **Pages (`pages/`)**
```

📂 src/components/pages/         # Route pages
├──📄 CompleteDashboard.jsx     # Main dashboard page
├──📄 Analytics.jsx             # Analytics page
├──📄 Products.jsx              # Products page
├──📄 Orders.jsx                # Orders page
├──📄 Users.jsx                 # Users page
├──📄 Profile.jsx               # User profile page
├──📄 Settings.jsx              # Settings page
├──📄 Login.jsx                 # Login page
├──📄 Signup.jsx                # Signup page
└──📄 ErrorPage.jsx             # Error page (404, 500, etc.)

```

### **Authentication**
```

📄 src/components/Login.jsx      # Login component
📄src/components/Signup.jsx     # Signup component
📄src/components/ForgotPassword.jsx # Forgot password component

```

### **UI Components**
```

📂 src/components/
├──📄 Sidebar.jsx               # Main sidebar
├──📄 SidebarArrow.jsx          # Sidebar toggle arrow
├──📄 Widgets.jsx               # Dashboard widgets
└──📄 Notification&ProfileManeu.jsx # Notifications & profile menu

```

---

## 🎨 UI Library (`ui/`)

### **Theme System**
```

📂 src/ui/themes/
├──📄 index.js                  # Theme exports
├──📄 baseTheme.js              # Base theme configuration
├──📄 lightTheme.js             # Light theme
└──📄 darkTheme.js              # Dark theme

📂 src/ui/themeProvider/
├──📄 ThemeProvider.jsx         # Theme context provider
└──📄 toggleTheme.jsx           # Theme toggle utility

```

### **UI Components**
```

📂 src/ui/components/
├──📄 index.jsx                 # Component exports
├──📄 Alert.jsx                 # Alert component
├──📄 Badge.jsx                 # Badge component
├──📄 Buttons.jsx               # Button components
├──📄 Card.jsx                  # Card component
├──📄 Checkbox.jsx              # Checkbox component
├──📄 Input.jsx                 # Input field component
├──📄 InputComponentWithIcon.jsx # Input with icon
├──📄 Modal.jsx                 # Modal dialog
├──📄 Radio.jsx                 # Radio button
├──📄 SafeResponsive.jsx        # Responsive wrapper
├──📄 SelectComponent.jsx       # Select dropdown
├──📄 SelectcomponentWithLabel.jsx # Select with label
├──📄 Skeleton.jsx              # Loading skeleton
├──📄 StatusCardPro.jsx         # Status card component
├──📄 Switch.jsx                # Toggle switch
├──📄 Tabs.jsx                  # Tab component
├──📄 ToastProvider.jsx         # Toast notifications
├──📄 ToggleSwitch.jsx          # Toggle switch component
├──📄 Tooltip.jsx               # Tooltip component
└──📄 UIKitShowcase.jsx         # UI kit showcase

📂 src/ui/components/widgets/
├──📄 DashboardFilters.jsx      # Dashboard filters
├──📄 EventsCalendarWidget.jsx  # Events calendar widget
└──📄 LiveDataIndicator.jsx     # Live data indicator

```

### **Utilities**
```

📂 src/ui/utiles/
└──📄 commons.jsx               # Common utility functions

```

---

## 🗃️ State Management (`store/`)

### **Main Store**
```

📂 src/store/
├──📄 index.js                  # Zustand store setup
└──📂 slices/                   # Store slices (modular state)

```

### **Store Slices**
```

📂 src/store/slices/
├──📄 authSlice.js              # Authentication state
├──📄 productSlice.js           # Products state
├──📄 orderSlice.js             # Orders state
├──📄 userSlice.js              # Users state
├──📄 calendarSlice.js          # Calendar state
├──📄 chatSlice.js              # Chat state
├──📄 emailSlice.js             # Email state
└──📄 todoSlice.js              # Todo state

```

---

## 🪝 Custom Hooks (`hooks/`)

```

📂 src/hooks/
├──📄 useDropdown.jsx           # Dropdown functionality
├──📄 useSidebarToggle.jsx      # Sidebar toggle state
├──📄 useToast.jsx              # Toast notifications
└──📄 useViewport.jsx           # Viewport/screen size detection

```

---

```

---

📊 Summary Statistics

Item Count
Total Files 145
Total Directories 26
React Components (.jsx) 90+
JavaScript Files (.js) 15+
Markdown Files (.md) 10+
Configuration Files 8
Image Assets 2

---

🧭 Navigation Tips

1. Start Here → src/App.jsx (Main application)
2. Add New Pages → src/components/pages/
3. Modify Layout → src/components/layout/
4. Change Theme → src/ui/themes/
5. Update State → src/store/slices/
6. Add Components → src/ui/components/

---

🔗 Related Documentation

· 📋 Installation Guide
· 🎨 Theming Guide
· 🧩 Components Reference
· 📊 Data Visualization Guide
· 🚀 Deployment Guide



| ⬅️ [2. Installation Guide](installation.md) | [4.Theme Setup ](theming.md) ➡️ |

---

