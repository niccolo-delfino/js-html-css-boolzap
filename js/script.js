var app = new Vue({
  el: `#app`,
  data: {
    user: 'Papaya',
    contatore: 0,
    nuovoText: '',
    searchName: '',
    contacs: [
      {
        name: 'Emanuele',
        visible: false,
        messages: [
          {
            time: '15:30',
            text: 'Ciao bello de casa! 🔥🔥',
            status: 'received'
          },
          {
            time: '15:32',
            text: 'Ah bello!🌟🌟',
            status: 'sent'
          },
          {
            time: '15:32',
            text: 'Tutto bene?',
            status: 'sent'
          },
          {
            time: '15:50',
            text: 'Sì sì, alla grandeeeee',
            status: 'received'
          },
          {
            time: '15:50',
            text: 'DAJEEEEEE',
            status: 'received'
          },
          {
            time: '15:50',
            text: 'Ma senti n\'attimo, che te ricordi mica come se scrive quer cavolo de Map?',
            status: 'received'
          },
          {
            time: '15:50',
            text: 'Guarda, per la sintassi puoi guardare su W3School 😉😉',
            status: 'sent'
          },
          {
            time: '15:50',
            text: '...... 😡😡😡',
            status: 'received'
          },
        ],
        //fine array messaggi
      },
      //fine oggetto
      {
        name: 'Cristiano',
        visible: false,
        messages: [
          {
            time: '15:30',
            text: 'Oh Papaya, hai visto che bella la nuova Volvo?',
            status: 'received'
          },
          {
            time: '15:32',
            text: 'We Cri! aspè, vado a vedere',
            status: 'sent'
          },
          {
            time: '15:37',
            text: 'Ma... Ma che è sta cafonata? \nSembra un bidone dell\'umido!',
            status: 'sent'
          },
          {
            time: '15:40',
            text: '....ma io ti rimuovo dai contatti',
            status: 'received'
          },
        ],
      //fine array messaggi
      },
      //fine oggetto
      {
        name: 'Davide',
        visible: false,
        messages: [
          {
            time: '15:40',
            text: 'BELLA PAPAYAAAAAAAA',
            status: 'received'
          },
          {
            time: '15:50',
            text: 'Ciao Dave 😂😂😂',
            status: 'sent'
          },
          {
            time: '15:51',
            text: 'Come va? \n Oh ma ti ricordi che finito il corso mi devi offrire un\'aperitivo?🎉',
            status: 'received'
          },
          {
            time: '16:05',
            text: 'Papaya?',
            status: 'received'
          },
          {
            time: '17:40',
            text: 'Oh Papayaaaaaaaaaaaaaaaaaaaaa',
            status: 'received'
          },
          {
            time: '21:07',
            text: '....',
            status: 'received'
          },
        ],
        //fine array messaggi
      },
      //fine oggetto
      {
        name: 'Giacomo',
        visible: false,
        messages: [
          {
            time: '15:30',
            text: 'Bella! \n Partitina ad Age?',
            status: 'received'
          },
          {
            time: '15:32',
            text: 'Dammi un attimo che pusho e vengo 👌',
            status: 'sent'
          },
          {
            time: '15:35',
            text: 'Esercizio finito? \neeeeeeeeezzz',
            status: 'received'
          },
          {
            time: '15:36',
            text: 'Vinciamo su Age? \neeeeeeeeezzz',
            status: 'received'
          },
        ],
        //fine array messaggi
      },
      //fine oggetto
      {
        name: 'Yuri',
        visible: false,
        messages: [
          {
            time: '15:30',
            text: 'Oh ma tu sei riuscito a finire sto cavolo di snack?!',
            status: 'received'
          },
          {
            time: '15:31',
            text: 'Sì sì e tu?',
            status: 'sent'
          },
          {
            time: '15:33',
            text: 'IO NO! \n come diavolo hai fatto?',
            status: 'received'
          },
          {
            time: '15:36',
            text: 'Ah boh, non ne ho la più pallida idea😂😂😂😂',
            status: 'sent'
          },
          {
            time: '15:38',
            text: 'Va bene, grazie, allora adesso spacco tutto...😡',
            status: 'received'
          },
        ],
        //fine array messaggi
      },
      //fine oggetto


    ],
    // fine array contatti

  },
  created(){

  },

  methods: {
    cambio(index){
      this.contatore = index;
    },
    addText(){
      setTimeout(() => {
        this.contacs[this.contatore].messages.push({
          time: moment().lang("it").format('LT'),
          text: '*L\'utente ha abbandonato la chat*',
          status: 'received'
        });
      }, 2000);
      if (this.nuovoText.length > 0) {
        this.contacs[this.contatore].messages.push({
          time: moment().lang("it").format('LT'),
          text: this.nuovoText,
          status: 'sent'
        });
      }
      this.nuovoText = ''
    },

    search(){
      this.contacs.forEach((element) => {
        if (element.name.includes(this.searchName)) {
          element.visible = true;
        };
        console.log(element.visible);
        this.searchName = '';
      });

    },

  },
});
