<template>
  <div class="hello">

    <div v-if="loading">
      <spinner id="spinner" size="massive"></spinner>
    </div>

    <div v-else>
      <div v-if="tickets">
        {{tickets}}
      </div>

      <div v-else>
        <error />
      </div>
    </div>

    
  </div>
</template>

<script>
import axios from 'axios'
import spinner from 'vue-simple-spinner'
import error from './ErrorPage'

export default {
  name: 'Home',
  components: {
    spinner,
    error
  },
  data () {
    return {
      loading: false,
      tickets : null,
      errorType : null
    }
  },
  methods: {
    // Request backend to make GET request from Zendesk and return results
    fetch () {
      axios.get('/api').then(response => {
        // Check result sent from backend
        // GET request from Zendesk is successful
        if(response.data.status === 200){
          this.tickets = response.data.data
        }
        // GET request from Zendesk fails
        else{
          console.log();
        }
      })
      // Error from backend issue
      .catch(err => {
        console.log( err.response.status );
        console.log( err.response.statusText );
      })
      // Stop loading spinner
      .finally(() => {
        this.loading = false
      })
    }
  },
  created () {
    this.loading = true
    this.fetch()
  }
}
</script>

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
