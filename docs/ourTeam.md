---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/lrafaelz.png',
    name: 'Rafael Luz',
    title: 'Criador',
    links: [
      { icon: 'github', link: 'https://github.com/lrafaelz' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/lrafaelz/' }
    ]
  },
  {
    avatar: 'https://www.github.com/TANADOSVV.png',
    name: 'Vitor Moreira',
    title: 'Desenvolvedor',
    links: [
      { icon: 'github', link: 'https://www.github.com/TANADOSVV' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/vitor-moreira-7b7b3b1b7/' }
    ]
  },
  {
    avatar: 'https://www.github.com/juliosaracol.png',
    name: 'Julio Saracol',
    title: 'Orientador',
    links: [
      { icon: 'github', link: 'https://www.github.com/juliosaracol' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/julio-saracol-7b7b3b1b7/' }
    ]
  }
]

const exmembers = [
  {
    avatar: 'https://www.github.com/username.png',
    name: 'Nome Sobrenome',
    title: 'Cargo',
    links: [
      { icon: 'github', link: 'https://github.com'},
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/maurício-realan-arrieira-08b4aa14a' }
    ]
  }
]
    

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Nossa equipe 
    </template>
    <template #lead>
     O desenvolvimento do Victus Exergame é orientado por uma equipe relacionada ao grupo GIMM,
     alguns dos membros escolheram ser apresentados abaixo.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
    <VPTeamPageSection>
      <template #title>Ex membros</template>
      <template #lead>Membros que atuaram no início do desenvolvimento da ferramenta</template>
      <template #members>
        <VPTeamMembers :members="exmembers" />
      </template>
    </VPTeamPageSection>
</VPTeamPage>
