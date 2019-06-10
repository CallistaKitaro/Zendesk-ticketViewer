<template>
  <div class="hello">
    hello here
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      // info: {
      //   "ticket": {
      //     "subject":  "My printer is on fire!",
      //     "comment":  { "body": "The smoke is very colorful." },
      //     "priority": "urgent"
      //   }
      // }
    }
  },
  methods: {
    fetch () {
      axios.get('/getTickets').then(response => {
        console.log(response)
      })
      // axios.get('/api/v2/tickets.json').then(response => {
      //   console.log(response)
      // })
    }
  },
  created () {
    this.fetch()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
