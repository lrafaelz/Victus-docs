export default {
  lang: 'pt-BR',
  lastUpdated: true,
  locales: {
    root: {
      label: 'Português',
      lang: 'pt-BR',
      title: 'Victus docs',
      description: 'Documentação do projeto Victus Exergame'
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Victus docs',
      description: 'Victus Exergame project documentation'
    }
  },
  title: 'Victus docs',
  themeConfig: {
    logo: '/assets/VICTUS1a.png',
    lastUpdated: {
      text: 'Atualizado em',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
        forceLocale: true
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lrafaelz' },

    ],
    nav: [
      { text: 'Sensoriamento', link: '/sensoriamento/' },
      { text: 'Milestones', link: '/milestones/' },
      { text: 'Equipe', link: '/ourTeam/' },
    ],
    footer: {
      message: 'Victus Exergame',
    }
  }
}