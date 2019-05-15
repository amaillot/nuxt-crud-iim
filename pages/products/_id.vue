<template>
  <div class="container">
    <h2>{{currentProduct.name}}</h2>
    <p>{{currentProduct.description}}</p>
  </div>
</template>

<script>
import axios from "~/plugins/axios";

export default {
  async asyncData({ params }) {
    const { data } = await axios.get(`/products/${params.id}`);

    return {
      currentProduct: data,
    }
  },
  data() {
    return {
      currentProduct: null,
    }
  },
  head() {
    return {
      title: "Le Store",
    }
  }
}


</script>

<style>

</style>
