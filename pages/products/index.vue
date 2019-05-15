<template>
  <div>
    <div class="container">
      <h2>Liste des produits</h2>
      <hr>
      <div class="row">
        <div class="col-md-3 mb-md-3" v-for="product in products" :key="product.id">
          <div class="card">
            <img src="http://placehold.it/400x300" class="card-img-top" alt="">
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
      <div class="row">
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
    <form @submit="formSubmit" v-if="showAddProduct">
      <strong>Name:</strong>
      <input type="text" class="form-control" v-model="name">
      <strong>Price:</strong>
      <input type="number" class="form-control" v-model="price">
      <strong>Description:</strong>
      <textarea class="form-control" v-model="description"></textarea>

      <button class="btn btn-success">Submit</button>
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
        title: "Le Store de ouf",
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

<style></style>
