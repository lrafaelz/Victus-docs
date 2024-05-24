import { defineConfig } from "vitepress"

export default defineConfig({
  lang: 'pt-BR',
  lastUpdated: true,
  locales: {
    '/': {
      lang: 'pt-BR',
      title: 'Victus docs',
      description: 'Documentação do projeto Victus Exergame'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Victus docs',
      description: 'Victus Exergame project documentation'
    }
  },
  themeConfig: {
    localeLinks: {
      text: '',
      items: [
        { text: 'Português', link: '/' },
        { text: 'English', link: '/en/' }
      ]
    },
    nav: [
      { text: 'Sensoriamento', link: '/sensoriamento/' },
      { text: 'Milestones', link: '/milestones/' },
      { text: 'Sobre', link: '/sobre/' },
      { text: 'Github', link: '/github/' }
    ],
  }
})
  