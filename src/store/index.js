import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pokoje: {
      Agape: {
        2: {
          id: 2,
          title: 'Pokoj č.2 - Dvoulůžkový',
          tags: ['tv', 'kwc'],
          roomType: 2,
          ceny: [590, 890],
          fotky: ['pokoje/agape/2/P4230649.jpg', 'pokoje/agape/2/P4230653.jpg', 'pokoje/agape/2/P4230655.jpg']
        },
        3: {
          id: 3,
          title: 'Pokoj č.3 - Dvoulůžkový',
          tags: ['Rádio', 'KWC'],
          roomType: 2,
          ceny: [690, 890],
          fotky: ['pokoje/agape/3/P4240850.jpg', 'pokoje/agape/3/P4240851.jpg', 'pokoje/agape/3/P4240854.jpg', 'pokoje/agape/3/P4240856.jpg', 'pokoje/agape/3/P4240857.jpg']
        },
        4: {
          id: 4,
          title: 'Pokoj č.4 - Jednolůžkový',
          tags: ['Radio', 'KWC'],
          roomType: 1,
          ceny: [590],
          fotky: ['pokoje/agape/4/IMG_5747.jpg', 'pokoje/agape/4/IMG_5748.jpg', 'pokoje/agape/4/IMG_5749.jpg']
        },
        5: {
          id: 5,
          title: 'Pokoj č.5 - Dvoulůžkový',
          tags: ['Radio', 'KWC'],
          roomType: 2,
          ceny: ['690','990'],
          fotky: ['pokoje/agape/5/P4240800.jpg', 'pokoje/agape/5/P4240802.jpg', 'pokoje/agape/5/P4240803.jpg', 'pokoje/agape/5/P4240804.jpg', 'pokoje/agape/5/P4240805.jpg', 'pokoje/agape/5/P4240806.jpg']
        },
        6: {
          id: 6,
          title: 'Pokoj č.6 - Dvoulůžkový',
          tags: ['Radio', 'KWC'],
          roomType: 2,
          ceny: ['690','890'],
          fotky: ['pokoje/agape/6/AnyConv.com__P1010673_0.jpg', 'pokoje/agape/6/AnyConv.com__P1010676.jpg']
        },
        7: {
          id: 7,
          title: 'Pokoj č.7 - Dvoulůžkový',
          tags: ['Radio', 'KWC'],
          roomType: 2,
          ceny: ['690','890'],
          fotky: ['pokoje/agape/7/P1010673_0.jpg', 'pokoje/agape/7/P4240812.jpg']
        },
        8: {
          id: 8,
          title: 'Pokoj č.8 - Dvoulůžkový',
          tags: ['TV', 'KWC'],
          roomType: 2,
          ceny: ['690','990'],
          fotky: ['pokoje/agape/8/P4230668.jpg', 'pokoje/agape/8/P4230669.jpg','pokoje/agape/8/P4230671.jpg']
        },
        9: {
          id: 9,
          title: 'Pokoj č.9 - Čtyřlůžkový',
          tags: ['TV', 'KWC'],
          roomType: 4,
          ceny: ['1090','1790'],
          fotky: ['pokoje/agape/9/P4240832.jpg', 'pokoje/agape/9/P4240834.jpg','pokoje/agape/9/P4240836.jpg','pokoje/agape/9/P4240837.jpg','pokoje/agape/9/P4240838.jpg','pokoje/agape/9/P4240839.jpg']
        },
      },
    },
    info: {
      oteviraciDoba: '10:00 - 18:00',
      telefon: '333 333 333',
      email: 'rezervace@penzionyluhacovice.cz'
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
