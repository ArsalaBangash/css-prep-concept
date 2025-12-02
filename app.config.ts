// app.config.ts
export default defineAppConfig({
  ui: {
    primary: 'neutral',
    gray: 'neutral'
  },
  header: {
    links: [
      { label: 'Syllabus', to: '/syllabus' },
      { label: 'Resources', to: '/resources' },
      { label: 'Roadmap', to: '/roadmap' },
      { label: 'Current Affairs', to: '/current-affairs' },
      { label: 'Community', to: '/community' }
    ]
  },
  footer: {
    links: [
      { label: 'About', to: '/about' },
      { label: 'Contact', to: '/contact' },
      { label: 'FAQ', to: '/faq' }
    ],
    socials: [
      { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/css-prep-pakistan' },
      { label: 'YouTube', icon: 'i-simple-icons-youtube', to: 'https://youtube.com/@csspreppakistan' },
      { label: 'Twitter', icon: 'i-simple-icons-x', to: 'https://twitter.com/csspreppk' }
    ]
  }
})