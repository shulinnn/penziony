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
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [590, 890],
          fotky: [
            'pokoje/agape/2/P4230649.jpg',
            'pokoje/agape/2/P4230653.jpg',
            'pokoje/agape/2/P4230655.jpg',
          ],
        },
        3: {
          id: 3,
          title: 'Pokoj č.3 - Dvoulůžkový',
          tags: ['Rádio,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [690, 890],
          fotky: [
            'pokoje/agape/3/P4240850.jpg',
            'pokoje/agape/3/P4240851.jpg',
            'pokoje/agape/3/P4240854.jpg',
            'pokoje/agape/3/P4240856.jpg',
            'pokoje/agape/3/P4240857.jpg',
          ],
        },
        4: {
          id: 4,
          title: 'Pokoj č.4 - Jednolůžkový',
          tags: ['Radio,', 'Koupelna a WC'],
          roomType: 1,
          ceny: [590],
          fotky: [
            'pokoje/agape/4/IMG_5747.jpg',
            'pokoje/agape/4/IMG_5748.jpg',
            'pokoje/agape/4/IMG_5749.jpg',
          ],
        },
        5: {
          id: 5,
          title: 'Pokoj č.5 - Dvoulůžkový',
          tags: ['Radio,', 'Koupelna a WC'],
          roomType: 2,
          ceny: ['690', '990'],
          fotky: [
            'pokoje/agape/5/P4240800.jpg',
            'pokoje/agape/5/P4240802.jpg',
            'pokoje/agape/5/P4240803.jpg',
            'pokoje/agape/5/P4240804.jpg',
            'pokoje/agape/5/P4240805.jpg',
            'pokoje/agape/5/P4240806.jpg',
          ],
        },
        6: {
          id: 6,
          title: 'Pokoj č.6 - Dvoulůžkový',
          tags: ['Radio,', 'Koupelna a WC'],
          roomType: 2,
          ceny: ['690', '890'],
          fotky: [
            'pokoje/agape/6/AnyConv.com__P1010673_0.jpg',
            'pokoje/agape/6/AnyConv.com__P1010676.jpg',
          ],
        },
        7: {
          id: 7,
          title: 'Pokoj č.7 - Dvoulůžkový',
          tags: ['Radio,', 'Koupelna a WC'],
          roomType: 2,
          ceny: ['690', '890'],
          fotky: [
            'pokoje/agape/7/P1010673_0.jpg',
            'pokoje/agape/7/P4240812.jpg',
          ],
        },
        8: {
          id: 8,
          title: 'Pokoj č.8 - Dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: ['690', '990'],
          fotky: [
            'pokoje/agape/8/P4230668.jpg',
            'pokoje/agape/8/P4230669.jpg',
            'pokoje/agape/8/P4230671.jpg',
          ],
        },
        9: {
          id: 9,
          title: 'Pokoj č.9 - Čtyřlůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 4,
          ceny: ['1090', '1790'],
          fotky: [
            'pokoje/agape/9/P4240832.jpg',
            'pokoje/agape/9/P4240834.jpg',
            'pokoje/agape/9/P4240836.jpg',
            'pokoje/agape/9/P4240837.jpg',
            'pokoje/agape/9/P4240838.jpg',
            'pokoje/agape/9/P4240839.jpg',
          ],
        },
        10: {
          id: 10,
          title: 'Pokoj č.10 - Dvoulůžkový',
          tags: ['Balkón,', 'Radio,', 'Koupelna a WC'],
          roomType: 2,
          ceny: ['1090', '1790'],
          fotky: [
            'pokoje/agape/10/P4240841.jpg',
            'pokoje/agape/10/P4240842.jpg',
            'pokoje/agape/10/P4240843.jpg',
            'pokoje/agape/10/P4240844.jpg',
            'pokoje/agape/10/P4240845.jpg',
            'pokoje/agape/10/P4240848.jpg',
          ],
        },
        11: {
          id: 11,
          title: 'Pokoj č. 11 apartmán - dvoulůžkový',
          tags: [
            'TV,',
            'Radio,',
            'Koupelna a WC,',
            'Lednice',
            'Přistýlka 590 Kč',
          ],
          roomType: 2,
          ceny: ['990', '1290'],
          fotky: [
            'pokoje/agape/11/P4230675.jpg',
            'pokoje/agape/11/P4230677.jpg',
            'pokoje/agape/11/P4230679.jpg',
            'pokoje/agape/11/P4230680.jpg',
            'pokoje/agape/11/P4230681.jpg',
            'pokoje/agape/11/P4230682.jpg',
          ],
        },
        12: {
          id: 12,
          title: 'Pokoj č. 12 - třílůžkový',
          tags: ['TV,', 'Radio,', 'Koupelna a WC'],
          roomType: 3,
          ceny: ['690', '980', '1390'],
          fotky: [
            'pokoje/agape/12/P4240825.jpg',
            'pokoje/agape/12/P4240828.jpg',
            'pokoje/agape/12/P4240829.jpg',
          ],
        },
        13: {
          id: 13,
          title: 'Pokoj č. 13 - jednolůžkový',
          tags: ['Radio,', 'Společná koupelna a WC'],
          roomType: 1,
          ceny: ['490'],
          fotky: [
            'pokoje/agape/13/P4240819.jpg',
            'pokoje/agape/13/P4240820.jpg',
            'pokoje/agape/13/P4240821.jpg',
          ],
        },
      },
      Jecminek: {
        1: {
          id: 1,
          title: 'Pokoj č.1 - dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [690, 990],
          fotky: [
            'pokoje/jecminek/1/P1211976.jpg',
            'pokoje/jecminek/1/P1211977.jpg',
            'pokoje/jecminek/1/P1212.jpg',
            'pokoje/jecminek/1/P1211980.jpg',
            'pokoje/jecminek/1/P1211981.jpg',
          ],
        },
        2: {
          id: 2,
          title: 'Pokoj č.2 - dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [690, 990],
          fotky: [
            'pokoje/jecminek/2/IMG_0403_0.png',
            'pokoje/jecminek/2/IMG_0404_0.png',
            'pokoje/jecminek/2/IMG_0405_0.png',
            'pokoje/jecminek/2/IMG_0406_1.png',
          ],
        },
        3: {
          id: 3,
          title: 'Pokoj č.3 - dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [690, 990],
          fotky: [
            'pokoje/jecminek/3/IMG_0408.png',
            'pokoje/jecminek/3/IMG_0409.png',
            'pokoje/jecminek/3/IMG_0410.png',
            'pokoje/jecminek/3/IMG_0411.png',
          ],
        },
        4: {
          id: 4,
          title: 'Pokoj č.4 - dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [690, 990],
          fotky: [
            'pokoje/jecminek/4/IMG_0413.png',
            'pokoje/jecminek/4/IMG_0414.png',
            'pokoje/jecminek/4/IMG_0415.png',
          ],
        },
        5: {
          id: 5,
          title: 'Pokoj č.5 - dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [690, 990],
          fotky: [
            'pokoje/jecminek/5/IMG_0418.png',
            'pokoje/jecminek/5/IMG_0421.png',
            'pokoje/jecminek/5/IMG_0422.png',
          ],
        },
      },
      Jecminek2: {
        1: {
          id: 1,
          title: 'Pokoj č.1 - Dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [690, 990],
          fotky: [
            'pokoje/jecminek2/1/P5132074.jpg',
            'pokoje/jecminek2/1/P5132075.jpg',
            'pokoje/jecminek2/1/P5132076.jpg'
          ],
        },
        2: {
          id: 2,
          title: 'Pokoj č.2 - Jednolůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 1,
          ceny: [690],
          fotky: [
            'pokoje/jecminek2/2/P5132082.jpg',
            'pokoje/jecminek2/2/P5132083.jpg',
            'pokoje/jecminek2/2/P5132084.jpg'
          ],
        },
        3: {
          id: 3,
          title: 'Pokoj č.3 - Dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [690,990],
          fotky: [
            'pokoje/jecminek2/3/IMG_0397_0.png',
            'pokoje/jecminek2/3/IMG_0400.png',
            'pokoje/jecminek2/3/IMG_0401.png'
          ],
        },
        4: {
          id: 4,
          title: 'Pokoj č.4 - Jednolůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 1,
          ceny: [690],
          fotky: [
            'pokoje/jecminek2/4/IMG_0394.png',
            'pokoje/jecminek2/4/IMG_0395_0.png',
            'pokoje/jecminek2/4/IMG_0396.png'
          ],
        },
        5: {
          id: 5,
          title: 'Pokoj č.5 - Dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC'],
          roomType: 2,
          ceny: [690,990],
          fotky: [
            'pokoje/jecminek2/5/P5132097_0.jpg',
            'pokoje/jecminek2/5/P5132098.jpg',
            'pokoje/jecminek2/5/P5132101.jpg'
          ],
        },
        6: {
          id: 6,
          title: 'Pokoj č.6 - Jednolůžkový',
          tags: ['TV,', 'Koupelna a WC,','Na společné chodbě'],
          roomType: 1,
          ceny: [450],
          fotky: [
            'pokoje/jecminek2/6/IMG_0380.png',
            'pokoje/jecminek2/6/IMG_0381.jpg'
          ],
        },
        7: {
          id: 7,
          title: 'Pokoj č.7 - Dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC,','Na společné chodbě'],
          roomType: 2,
          ceny: [590,790],
          fotky: [
            'pokoje/jecminek2/7/IMG_0383.png',
            'pokoje/jecminek2/7/IMG_0385.png'
          ],
        },
        8: {
          id: 8,
          title: 'Pokoj č.8 - Dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC,','Na společné chodbě'],
          roomType: 2,
          ceny: [590,790],
          fotky: [
            'pokoje/jecminek2/8/IMG_0389.png',
            'pokoje/jecminek2/8/IMG_0390.png'
          ],
        },
        9: {
          id: 9,
          title: 'Pokoj č.9 - Dvoulůžkový',
          tags: ['TV,', 'Koupelna a WC,','Na společné chodbě,','Balkón'],
          roomType: 2,
          ceny: [590,790],
          fotky: [
            'pokoje/jecminek2/9/jecminek9_0.jpg',
            'pokoje/jecminek2/9/jecminek9-1.png',
            'pokoje/jecminek2/9/jecminek9-2.jpg'
          ],
        },
      },
    },
    info: {
      oteviraciDoba: '10:00 - 18:00',
      telefon: ['734 727 373','603 194 233'],
      email: 'rezervace@penzionyluhacovice.cz',
    },
  },
  mutations: {},
  actions: {},
  modules: {},
})
