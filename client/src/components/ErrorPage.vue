<template>
  <div class="error">
    <div v-if="errorType.zendesk">
      API request to Zendesk cannot be completed.
    </div>
    <div v-else>
      API request to Backend cannot be completed.
    </div>
    
    <div>
      {{ errorType.status }}
      {{ errorType.statusText }}
    </div>
  </div>
</template>

<script>

export default {
  name: 'ErrorPage',
  props: {
    errorType: Object
  }
}
</script>

<style>
.error{
  margin-top: 100px;
}
</style>
