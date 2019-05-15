<template>
  <div>
    <div class="container container-products">
      <img href="http://google.com" class="img-landing" src="http://dev.meilleurs-masters.com/logo_ecole/logoiimencouleur-1548938387.png" alt="">
      <img class="img-landing-right" src="https://nuxtjs.org/meta_640.png" alt="">
    <hr>
      <h2>Liste des produits</h2>
      <hr>
      <div class="row">
        <div class="col-md-3 mb-md-3" v-for="product in products" :key="product.id">
          <div class="card">
            <img src="https://3dnews.ru/assets/external/illustrations/2019/05/15/987496/PS561.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{product.name}}</h5>
              <p class="card-text">{{product.price}}€</p>
              <nuxt-link :to="{name: 'products-id', params: { id: product.id } }" class="btn btn-primary">Voir le produit</nuxt-link>
              <button v-on:click="deleteData(product.id)" class="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="row zone-button-add">
        <div class="col-md-12">
          <button  type="button" class="btn btn-secondary" data-toggle="modal" data-target="#newModal" v-on:click="toggleAddProduct()">Ajouter un nouveau produit</button>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="addModal" tabindex="-1" role="dialog" aria-labelledby="addModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="addModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
    <form class="form-add-product" @submit="formSubmit" v-if="showAddProduct">
      <strong>Nom :</strong>
      <input type="text" class="form-control" v-model="name">
      <strong>Prix :</strong>
      <input type="number" class="form-control" v-model="price">
      <strong>Description :</strong>
      <textarea class="form-control" v-model="description"></textarea>

      <button class="btn btn-success">Valider</button>
    </form>
  </div>
</template>

<script>
import axios from "~/plugins/axios";
const apiUrl = "http://localhost:3001/";

export default {
    async asyncData({ params }) {
      const { data } = await axios.get(`/products`);

      return {
        currentProduct: null,
        products: data
      }
    },
    data() {
      return {
        currentProduct: null,
        products: [],
        name: null,
        description: null,
        price: null,
        showAddProduct: false
      }
    },
    head() {
      return {
        title: "Liste des produits",
      }
    },
    methods: {
      deleteData: function(id) {
        axios.delete(apiUrl + "products/" + id)
          .then(response => {
            this.products = this.products.filter(obj => { return obj.id !== id ? obj : "" })
          });
      },
      formSubmit(e) {
        e.preventDefault();
        //let currentObj = this;
        axios.post(apiUrl + "products", {
          name: this.name,
          description: this.description,
          price: this.price
        }).then(response => { this.products.push(response.data) })
      },
      toggleAddProduct() {
        this.showAddProduct = !this.showAddProduct;
        console.log(this.showAddProduct);
      }
    },
}

</script>

<style>

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

  .zone-button-add{
    text-align: center;
  }

  .form-add-product{
    width: 87%;
    margin: 0 auto;
  }

  .img-landing{
    max-width: 300px;
  }

  .form-control{
    margin-bottom: 10px;
    margin-top: 10px;
  }

</style>
