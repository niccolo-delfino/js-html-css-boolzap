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
        visible: true,
        messages: [
          {
            time: '15:30',
            text: 'Ciao bello de casa! 🔥🔥',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:32',
            text: 'Ah bello!🌟🌟',
            status: 'sent',
            dropdown: 'none'
          },
          {
            time: '15:32',
            text: 'Tutto bene?',
            status: 'sent',
            dropdown: 'none'
          },
          {
            time: '15:50',
            text: 'Sì sì, alla grandeeeee',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:50',
            text: 'DAJEEEEEE',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:50',
            text: 'Ma senti n\'attimo, che te ricordi mica come se scrive quer cavolo de Map?',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:50',
            text: 'Guarda, per la sintassi puoi guardare su W3School 😉😉',
            status: 'sent',
            dropdown: 'none'
          },
          {
            time: '15:50',
            text: '...... 😡😡😡',
            status: 'received',
            dropdown: 'none'
          },
        ],
        //fine array messaggi
      },
      //fine oggetto
      {
        name: 'Cristiano',
        visible: true,
        messages: [
          {
            time: '15:30',
            text: 'Oh Papaya, hai visto che bella la nuova Volvo?',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:32',
            text: 'We Cri! aspè, vado a vedere',
            status: 'sent',
            dropdown: 'none'
          },
          {
            time: '15:37',
            text: 'Ma... Ma che è sta cafonata? \nSembra un bidone dell\'umido!',
            status: 'sent',
            dropdown: 'none'
          },
          {
            time: '15:40',
            text: '....ma io ti rimuovo dai contatti',
            status: 'received',
            dropdown: 'none'
          },
        ],
      //fine array messaggi
      },
      //fine oggetto
      {
        name: 'Davide',
        visible: true,
        messages: [
          {
            time: '15:40',
            text: 'BELLA PAPAYAAAAAAAA',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:50',
            text: 'Ciao Dave 😂😂😂',
            status: 'sent',
            dropdown: 'none'
          },
          {
            time: '15:51',
            text: 'Come va? \n Oh ma ti ricordi che finito il corso mi devi offrire un\'aperitivo?🎉',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '16:05',
            text: 'Papaya?',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '17:40',
            text: 'Oh Papayaaaaaaaaaaaaaaaaaaaaa',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '21:07',
            text: '....',
            status: 'received',
            dropdown: 'none'
          },
        ],
        //fine array messaggi
      },
      //fine oggetto
      {
        name: 'Giacomo',
        visible: true,
        messages: [
          {
            time: '15:30',
            text: 'Bella! \n Partitina ad Age?',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:32',
            text: 'Dammi un attimo che pusho e vengo 👌',
            status: 'sent',
            dropdown: 'none'
          },
          {
            time: '15:35',
            text: 'Esercizio finito? \neeeeeeeeezzz',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:36',
            text: 'Vinciamo su Age? \neeeeeeeeezzz',
            status: 'received',
            dropdown: 'none'
          },
        ],
        //fine array messaggi
      },
      //fine oggetto
      {
        name: 'Yuri',
        visible: true,
        messages: [
          {
            time: '15:30',
            text: 'Oh ma tu sei riuscito a finire sto cavolo di snack?!',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:31',
            text: 'Sì sì e tu?',
            status: 'sent',
            dropdown: 'none'
          },
          {
            time: '15:33',
            text: 'IO NO! \n come diavolo hai fatto?',
            status: 'received',
            dropdown: 'none'
          },
          {
            time: '15:36',
            text: 'Ah boh, non ne ho la più pallida idea😂😂😂😂',
            status: 'sent',
            dropdown: 'none'
          },
          {
            time: '15:38',
            text: 'Va bene, grazie, allora adesso spacco tutto...😡',
            status: 'received',
            dropdown: 'none'
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
          time: moment().locale('it').format('LT'),
          text: '*L\'utente ha abbandonato la chat*',
          status: 'received',
          dropdown: 'none'
        });
      }, 2000);
      if (this.nuovoText.length > 0) {
        this.contacs[this.contatore].messages.push({
          time: moment().locale('it').format('LT'),
          text: this.nuovoText,
          status: 'sent',
          dropdown: 'none'
        });
      }
      this.nuovoText = ''
    },
    search(){
      this.contacs.forEach((element) => {
        if (!element.name.toLowerCase().includes(this.searchName.toLowerCase())) {
          element.visible = false;
        }else {
          element.visible = true;
        }
        console.log(this.searchName);
        console.log(element.name);
        console.log(element.visible);

      });

    },

    cancellaMessaggio(index){
      this.contacs[this.contatore].messages.splice(index, 1);
      console.log(this.contacs[this.contatore].messages);
    },

    toggle(index){

      if ( this.contacs[this.contatore].messages[index].dropdown == 'none') {
        this.contacs[this.contatore].messages[index].dropdown = 'active';
      }else {
        this.contacs[this.contatore].messages[index].dropdown = 'none';
      }


    },
  },
});
