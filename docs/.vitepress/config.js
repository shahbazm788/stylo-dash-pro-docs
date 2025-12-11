// docs/.vitepress/config.js

export default {
  title: 'Stylo Admin Pro Docs', // Yahan title change kar sakte hain
  description: 'Here you will see full docs about packege',
  
  themeConfig: {
    nav: [
      { text: 'Dashboard Demo', link: 'https://stylo-dash-pro.vercel.app/' } // Yahan apni live site ka link daalen
    ],
    
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: '1. Introduction & Overview', link: '/index' },
          { text: '2. Installation Guide', link: '/installation' },
          { text: '3. Theming & Customization', link: '/theming' }
        ]
      },
      {
        text: 'Development & Structure',
        items: [
          { text: '4. Add New Page', link: '/add-new-page' },
          { text: '5. Add & Customise  Components', link: '/components' },
          { text: '6. Data Visualization (Charts)', link: '/data-viz' }
        ]
      },
      {
        text: 'Advanced Topics',
        items: [
          { text: '7. Zustand Store (State Management)', link: '/using-store' },
          { text: '8. Deployment & Build Process', link: '/deployment' }
        ]
      },
    ],
  },
}
