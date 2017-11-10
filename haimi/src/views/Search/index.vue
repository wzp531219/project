<template>
<div class="search-page">
 <search-bar theme="white" :defaultVal="$route.params.searchVal"></search-bar>
  {{$route.params}}
</div>
</template>

<script>
  import SearchBar from '@/components/SearchBar'

  export default {
    data () {
      return {
      }
    },
    components: {
      SearchBar
    }

  }
</script>