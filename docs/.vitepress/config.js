// docs/.vitepress/config.js

export default {
  title: 'Stylo Admin Pro Docs',
  description: 'Here you will see full docs about packege',
  
  themeConfig: {
    nav: [
      { text: 'Dashboard Demo', link: 'https://stylo-dash-pro.vercel.app/' } 
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: '1. Introduction & Overview', link: '/index' },
          { text: '2. Folder Structure & Overview', link: '/tree' },
          { text: '3. Installation Guide', link: '/installation' },
          { text: '4. Theming & Customization', link: '/theming' }
        ]
      },
      {
        text: 'Development & Structure',
        items: [
          { text: '5. Add New Page', link: '/add-new-page' },
          { text: '6. Add & Customise  Components', link: '/components' },
          { text: '7. Data Visualization (Charts)', link: '/data-viz' }
        ]
      },
      {
        text: 'Advanced Topics',
        items: [
          { text: '8. Zustand Store (State Management)', link: '/using-store' },
          { text: '9. Deployment & Build Process', link: '/deployment' }
        ]
      },
    ],
  },
}
