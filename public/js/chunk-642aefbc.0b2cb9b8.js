(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-642aefbc"],{"1cdf":function(t,s,e){"use strict";var i=e("ffcc"),a=e.n(i);a.a},bbef:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container col-md-7"},[e("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",variant:t.mensaje.color},on:{dismissed:function(s){t.dismissCountDown=0},"dismiss-count-down":t.countDownChanged}},[t._v(t._s(t.mensaje.texto))]),e("form",{staticClass:" card mt-4",on:{submit:function(s){return s.preventDefault(),t.Agregar()}}},[e("h3",{staticClass:"title card-header"},[t._v("Crear tu Smoothie")]),e("div",{staticClass:"card-body"},[e("div",{staticClass:"input-group mt-2 "},[t._m(0),e("div",{staticClass:"col-md-7"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.smoothies.name,expression:"smoothies.name"}],staticClass:"form-control",attrs:{type:"text",id:"",placeholder:"",required:""},domProps:{value:t.smoothies.name},on:{input:function(s){s.target.composing||t.$set(t.smoothies,"name",s.target.value)}}})])]),e("div",{staticClass:"input-group "},[t._m(1),e("div",{staticClass:"col-md-5 "},[e("select",{ref:"listfruits",staticClass:"form-control"},t._l(t.fruits,(function(s,i){return e("option",{key:i,attrs:{name:"fruta"}},[t._v(" "+t._s(s.name)+" - "+t._s(s.value)+" ")])})),0)]),e("v-btn",{staticClass:"btn btn-primary my-2 mr-4",attrs:{name:"agrega mt-1"},on:{click:function(s){return t.agregarFruta(t.$refs.listfruits.value)}}},[e("i",{staticClass:"fas fa-plus"})])],1),e("h4",{staticClass:"my-3"},[t._v("Frutas:")]),e("div",{staticClass:"input-group mt-2 col-md-12"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.smoothies.fruits,expression:"smoothies.fruits"}],staticClass:"form-control",attrs:{name:"",id:"",disabled:"",cols:"30",rows:"5"},domProps:{value:t.smoothies.fruits},on:{input:function(s){s.target.composing||t.$set(t.smoothies,"fruits",s.target.value)}}})]),e("div",{staticClass:"input-group mt-2"},[t._m(2),e("select",{directives:[{name:"model",rawName:"v-model",value:t.smoothies.liquid,expression:"smoothies.liquid"}],staticClass:"form-control",attrs:{required:""},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.smoothies,"liquid",s.target.multiple?e:e[0])}}},t._l(t.liquids,(function(s){return e("option",[t._v(t._s(s.name)+" - "+t._s(s.value)+" ")])})),0)]),e("div",{staticClass:"input-group mt-2"},[t._m(3),e("select",{directives:[{name:"model",rawName:"v-model",value:t.smoothies.protein,expression:"smoothies.protein "}],staticClass:"form-control",attrs:{required:""},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.$set(t.smoothies,"protein",s.target.multiple?e:e[0])}}},t._l(t.proteins,(function(s){return e("option",[t._v(t._s(s.name))])})),0)]),e("div",{staticClass:"input-group mt-2"},[t._m(4),e("input",{directives:[{name:"model",rawName:"v-model",value:t.smoothies.taste,expression:"smoothies.taste"}],staticClass:"form-control",attrs:{max:"100",min:"0",type:"number",required:""},domProps:{value:t.smoothies.taste},on:{input:function(s){s.target.composing||t.$set(t.smoothies,"taste",s.target.value)}}})]),e("v-btn",{staticClass:"success my-5 mx-5",attrs:{type:"submit"}},[t._v("Crear Smoothie "),e("i",{staticClass:"fas fa-check-circle"})]),e("b-button",{staticClass:"warning my-5 ",on:{click:t.limpiar}},[t._v("Limpiar "),e("i",{staticClass:"fas fa-trash"})])],1)])],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-md-5"},[e("h4",[t._v("Nombre:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-md-5 mt-2"},[e("h4",[t._v("Agregar frutas:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-md-5"},[e("h4",[t._v("Selecciona Liquido:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-md-5"},[e("h4",[t._v("Selecciona proteina:")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"col-md-5"},[e("h4",[t._v("Selecciona sabor:")])])}],o=(e("c975"),e("b0c0"),{data:function(){return{dismissSecs:8,dismissCountDown:0,mensaje:{color:"",texto:""},fruits:[{name:"Watermelon",value:6},{name:"Strawberry",value:5},{name:"Pineapple",value:8},{name:"Orange",value:10},{name:"Kiwi",value:7},{name:"Banana ",value:9},{name:"Limes",value:4}],liquids:[{name:"Leche",value:4},{name:"Agua",value:0},{name:"Agua de coco",value:2},{name:"Leche de soya",value:3},{name:"Leche de almendras",value:1}],proteins:[{name:"Vainilla"},{name:"Chocolate"},{name:"Coco"},{name:"Caramelo"},{name:"Sin sabor"}],smoothies:{name:"",fruits:"",liquid:"",protein:"",heart:0,taste:100}}},methods:{alerta:function(t,s){this.mensaje.color=t,this.mensaje.texto=s,this.showAlert()},Agregar:function(){var t=this;this.smoothies.heart+=parseInt(this.smoothies.liquid.substring(this.smoothies.liquid.indexOf("- ")+2)),this.smoothies.liquid=this.smoothies.liquid.substring(0,this.smoothies.liquid.indexOf("-")),this.axios.post("/nuevo",this.smoothies).then((function(s){t.alerta("success","Smoothie creado"),t.limpiar()})).catch((function(s){t.alerta("danger","Error al crear smoothie ")}))},countDownChanged:function(t){this.countDownChanged=t},showAlert:function(){this.dismissCountDown=this.dismissSecs},agregarFruta:function(t){""===this.smoothies.fruits?this.smoothies.fruits=t.substring(0,t.indexOf("-")):this.smoothies.fruits=this.smoothies.fruits+", "+t.substring(0,t.indexOf("-")),this.smoothies.heart+=parseInt(t.substring(t.indexOf("- ")+2))},limpiar:function(){this.smoothies.name="",this.smoothies.fruits="",this.smoothies.fruits="",this.smoothies.heart=0,this.smoothies.taste=100}},computed:{}}),n=o,r=(e("1cdf"),e("2877")),l=e("6544"),m=e.n(l),u=e("8336"),c=Object(r["a"])(n,i,a,!1,null,null,null);s["default"]=c.exports;m()(c,{VBtn:u["a"]})},ffcc:function(t,s,e){}}]);
//# sourceMappingURL=chunk-642aefbc.0b2cb9b8.js.map