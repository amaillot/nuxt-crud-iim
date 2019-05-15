<template>
  <div class="container">
    <div class="container container-products">
      <img href="http://google.com" class="img-landing" src="http://dev.meilleurs-masters.com/logo_ecole/logoiimencouleur-1548938387.png" alt="">
      <img class="img-landing-right" src="https://nuxtjs.org/meta_640.png" alt="">
      <hr>
      <h2>Fiche Produit</h2>
      <hr>
    </div>
    <div class="img-product">
     <img src="https://3dnews.ru/assets/external/illustrations/2019/05/15/987496/PS561.jpg" class="card-img-top img-product-self" alt="">
    </div>
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
      title: "Fiche produit",
    }
  }
}


</script>

<style>

.img-product{
  width: 100%;
  text-align: center;
}

.img-product-self{
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
}

.img-landing{
  max-width: 200px!important;
  margin-bottom: 20px;
}

.img-landing-right{
  max-width: 100px!important;
  float: right;
  position: relative;
  top: -10px;
}

.container-products{
  margin-top: 50px;
}

.container-products h2{
  text-align: center;
}
</style>
