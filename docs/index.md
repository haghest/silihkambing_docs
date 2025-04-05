---
title: Silih-Silih Kambing
description: "Dokumentasi animasi Silih-Silih Kambing"
---
# Silih-Silih Kambing

Dokumentasi animasi Silih-silih Kambing
![Silih-Silih Kambing](/title.jpg)

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
    {
    avatar: '/agus.png',
    name: 'Agus Hendrawan',
    links: [
     { icon: 'instagram', link: 'https://www.instagram.com/mahendraagus131/' },
    ]
  },
  {
    avatar: '/haga.png',
    name: 'Haghest Sidarta',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/haghest/' },
    ]
  },
  {
    avatar: '/yogi.png',
    name: 'Yogi Winatha',
    links: [
      { icon: 'instagram', link: 'https://www.instagram.com/yogiwinathaa/' },
    ]
  },
]
</script>

## Tim :metal:
<VPTeamMembers size="small" :members="members" />