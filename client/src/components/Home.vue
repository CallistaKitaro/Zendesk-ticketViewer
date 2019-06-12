<template>
  <div class="hello">

    <div v-if="loading">
      <spinner id="spinner" size="massive"></spinner>
    </div>

    <div v-else>
      <div class="tickets-view" v-if="tickets">
        <div class="ticket-lists align-top" :class="[ticketDetail ? 'd-inline-block w-left' : '']">
          <viewList :tickets="tickets"/>
        </div>

        <div v-if="ticketDetail" class="ticket-detail align-top" :class="[ticketDetail ? 'd-inline-block w-right' : '']">
          <viewDetail :ticketDetail="ticketDetail"/>
        </div>
      </div>

      <div v-else>
        <error :errorType="errorType"/>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
import spinner from 'vue-simple-spinner'
import error from './ErrorPage'
import viewList from './ViewList'
import viewDetail from './ViewDetail'

export default {
  name: 'Home',
  components: {
    spinner,
    viewList,
    viewDetail,
    error
  },
  data () {
    return {
      loading: false,
      errorType : null,
      tickets : null,
      ticketDetail: null,
    }
  },
  methods: {
    // Request backend to make GET request from Zendesk and return results
    fetch () {
      axios.get('http://localhost:5000/api').then(response => {

        // Check result sent from backend
        // GET request from Zendesk is successful
        if(response.data.status === 200){
          this.tickets = response.data.data
        }

        // GET request from Zendesk fails
        else{
          this.errorType = response.data
        }
      })
      
      // Error from backend issue
      .catch(err => {
        this.errorType = {
          "zendesk" : false,
          "status" : err.response.status,
          "statusText" : err.response.statusText,
        }
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

#spinner{
  margin-top : 200px;
}
.tickets-view{
  width: 100%
}
.w-left{
  width: 55%
}
.w-right{
  width: 44%
}

.capitalize{
  text-transform: lowercase;
  display: inline-block;
}
.capitalize::first-letter{
  text-transform: uppercase;
}

</style>
