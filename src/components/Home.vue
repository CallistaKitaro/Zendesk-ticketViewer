<template>
  <div class="hello">
    {{tickets}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Home',
  data () {
    return {
      tickets : null
    }
  },
  methods: {
    fetch () {
      axios.get('/getTickets').then(response => {
        console.log('response: ', response);
        // this.tickets = response.data.data
      })
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
