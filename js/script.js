var app = new Vue({
  el: `#app`,
  data: {
    user: 'Papaya',
    contatore: 0,
    contacs: [
      {
        name: 'Emanuele',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Ciao bello de casa! 🔥🔥',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ah bello!🌟🌟',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:30',
            text: 'Tutto bene?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:30',
            text: 'Sì sì, alla grandeeeee',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:30',
            text: 'DAJEEEEEE',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:30',
            text: 'Ma senti n\'attimo, che te ricordi mica come se scrive quer cavolo de Map?',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:30',
            text: 'Guarda, per la sintassi puoi guardare su W3School 😉😉',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:30',
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
            date: '10/01/2020 15:30:55',
            text: 'ricevuto',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'inviato',
            status: 'sent'
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
            date: '10/01/2020 15:40:55',
            text: 'ricevuto',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'inviato',
            status: 'sent'
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
            date: '10/01/2020 15:30:55',
            text: 'ricevuto',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'inviato',
            status: 'sent'
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
            date: '10/01/2020 15:30:55',
            text: 'ricevuto',
            status: 'received'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'inviato3',
            status: 'sent'
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
  },
});
