(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{244:function(t,r,e){"use strict";var n=e(250),c=e.n(n);r.a=c.a.create({baseURL:"http://localhost:3001/"})},247:function(t,r,e){var content=e(277);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(46).default)("0a1f5ee6",content,!0,{sourceMap:!1})},276:function(t,r,e){"use strict";var n=e(247);e.n(n).a},277:function(t,r,e){(t.exports=e(45)(!1)).push([t.i,".img-product{width:100%;text-align:center}.img-product-self{max-width:500px;margin:0 auto;text-align:center}.img-landing{max-width:200px!important;margin-bottom:20px}.img-landing-right{max-width:100px!important;float:right;position:relative;top:-10px}.container-products{margin-top:50px}.container-products h2{text-align:center}",""])},283:function(t,r,e){"use strict";e.r(r);e(82);var n=e(22),c=e(244),o={asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(r){var e,n,data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.params,t.next=3,c.a.get("/products/".concat(e.id));case 3:return n=t.sent,data=n.data,t.abrupt("return",{currentProduct:data});case 6:case"end":return t.stop()}},t)}));return function(r){return t.apply(this,arguments)}}(),data:function(){return{currentProduct:null}},head:function(){return{title:"Fiche produit"}}},l=(e(276),e(40)),component=Object(l.a)(o,function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v(t._s(t.currentProduct.name))]),t._v(" "),e("p",[t._v(t._s(t.currentProduct.description))])])},[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"container container-products"},[r("img",{staticClass:"img-landing",attrs:{href:"http://google.com",src:"http://dev.meilleurs-masters.com/logo_ecole/logoiimencouleur-1548938387.png",alt:""}}),this._v(" "),r("img",{staticClass:"img-landing-right",attrs:{src:"https://nuxtjs.org/meta_640.png",alt:""}}),this._v(" "),r("hr"),this._v(" "),r("h2",[this._v("Fiche Produit")]),this._v(" "),r("hr")])},function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"img-product"},[r("img",{staticClass:"card-img-top img-product-self",attrs:{src:"https://3dnews.ru/assets/external/illustrations/2019/05/15/987496/PS561.jpg",alt:""}})])}],!1,null,null,null);r.default=component.exports}}]);