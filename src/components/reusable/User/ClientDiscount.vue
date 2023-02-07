<template>
   <div>
      <div class="row mt-lg-0 mt-5">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div client-top" id="discountTop">
            <p class="watermark-header text-uppercase">Clients Discount</p>
         </div>
      <div class="row ">
           <div class="col-lg-3">
         </div>
         <div class="col-lg-9 " id="clientDiscount">
            <p class="text-uppercase text-start p-0 clients-credit">Select discount for client</p>
           <div class="d-flex justify-content-around flex-wrap">
             <button class="text-uppercase create-btn px-5 mt-3 save-btn text-nowrap" id="order-btn"  @click="order()">per order</button>
             <button class="text-uppercase create-btn px-5 mt-3 save-btn" id="multiple" @click="multiple()">Multiple</button>
           </div>
           <div>
             <table id="clientTable" class="mt-1 w-100">
               <thead>
                  <tr class="client-tr" style="width:239px">
                     <th class="text-uppercase client-th" style="width:239px!important">For gallery</th>
                     <th class="text-uppercase client-th" style="width:239px!important">For packages</th>
                     <th class="text-uppercase client-th cards-th" style="width:239px!important">For cards</th>
                     <th class="text-uppercase client-th" style="width:239px!important">For all</th>
                  </tr>
               </thead>
                  <tbody>
               <tr>
                   <td>
                        <label class="discount-type">Discount Type</label>
                     <v-select class="select-v-type "  v-model="selectedDiscountTypeGallery" :options="optionsDiscountTypeGallery" label="text" id="select1">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                      <b-input-group  class="mt-2">
                        <label class="credit-modal-header p-0 m-0">Discount</label>
                        <b-form-input class="modal-input-credit discount-inpt" placeholder="0" id="inpt1"></b-form-input>
                     </b-input-group>
                  </td>
                     <td>
                        <label class="discount-type">Discount Type</label>
                     <v-select class="select-v-type "  v-model="selectedDiscountTypePackages" :options="optionsDiscountTypePackages" label="text1" id="select2">
                        <template #selected-option="{ text1 }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text1 }}</strong>
                           </div>
                        </template>
                     </v-select>
                      <b-input-group  class="mt-2">
                        <label class="credit-modal-header p-0 m-0">Discount</label>
                        <b-form-input class="modal-input-credit discount-inpt" placeholder="0" id="inpt2"></b-form-input>
                     </b-input-group>
                  </td>
                     <td>
                        <label class="discount-type">Discount Type</label>
                     <v-select class="select-v-type "  v-model="selectedDiscountTypeCards" :options="optionsDiscountTypeCards" label="text" id="select3">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                      <b-input-group  class="mt-2">
                        <label class="credit-modal-header p-0 m-0">Discount</label>
                        <b-form-input class="modal-input-credit discount-inpt" placeholder="0" id="inpt3"></b-form-input>
                     </b-input-group>
                  </td>
                     <td>
                        <label class="discount-type">Discount Type</label>
                     <v-select class="select-v-type "  v-model="selectedDiscountTypeAll" :options="optionsDiscountTypeAll" label="text" id="select1">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                      <b-input-group  class="mt-2">
                        <label class="credit-modal-header p-0 m-0">Discount</label>
                        <b-form-input class="modal-input-credit discount-inpt" placeholder="0" id="inpt1"></b-form-input>
                     </b-input-group>
                  </td>
               
               </tr>
            </tbody>
            </table>
           </div>
                         <Button class="text-uppercase create-btn  mt-4 save-btn">Save</Button>
         </div>
      </div>
      </div>
   </div>
</template>

<script>
 import Button from '../Button.vue';
 import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

 export default{
      components:{
            Button,
      },
 mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
        setTimeout(() => {
               $("#clientTable").DataTable({
            lengthMenu: [
              [5,10, 25, 50, -1],
              [5,10, 25, 50, "All"],
            ],
        fixedColumns: true,
             responsive: true,
            pageLength: 25,
            scrollX: true,
             scrollY:        380,
              scrollCollapse: true,
              fixedHeader:           {
            header: true,
            footer: true
        },
            language: {
               search: "_INPUT_",
               searchPlaceholder: "Search here...",
              "lengthMenu": "_MENU_Show  entries",
                paginate: {
                  next: '>', 
                  previous: '<' 
                }
              },
          });
        });
      });
  },
  data(){
      return{
           selectedDiscountTypeGallery:['Select'],
            optionsDiscountTypeGallery:[
          { value: 'a', text: 'Percentage' },
          { value: 'b', text: 'Markup % above cost' },
        ],

         selectedDiscountTypePackages:['Select'],
            optionsDiscountTypePackages:[
          { value: 'a', text1: 'Percentage' },
          { value: 'b', text1: 'Markup % above cost' },
        ],

         selectedDiscountTypeCards:['Select'],
            optionsDiscountTypeCards:[
          { value: 'a', text: 'Percentage' },
          { value: 'b', text: 'Markup % above cost' },
        ],

         selectedDiscountTypeAll:['Select'],
            optionsDiscountTypeAll:[
          { value: 'a', text: 'Percentage' },
          { value: 'b', text: 'Markup % above cost' },
        ],
      }
  },
  methods:{
   order(){
      document.getElementById('order-btn').classList.add('order-btn');
      document.getElementById('multiple').classList.remove('order-btn');
      let readonly1  = document.getElementById('inpt1');
      let readonly2  = document.getElementById('inpt2');
      let readonly3  = document.getElementById('inpt3');
      let readonlySelect1  = document.getElementById('select1');
      let readonlySelect2  = document.getElementById('select2');
      let readonlySelect3  = document.getElementById('select3');
      readonly1.removeAttribute('readonly');
      readonly2.removeAttribute ('readonly');
      readonly3.removeAttribute ('readonly');
      readonlySelect1.classList.remove('disabled');
      readonlySelect2.classList.remove('disabled');
      readonlySelect3.classList.remove('disabled');
   },
   multiple(){
      document.getElementById('order-btn').classList.remove('order-btn');
      document.getElementById('multiple').classList.add('order-btn');
      let readonly1  = document.getElementById('inpt1');
      let readonly2  = document.getElementById('inpt2');
      let readonly3  = document.getElementById('inpt3');
      let readonlySelect1  = document.getElementById('select1');
      let readonlySelect2  = document.getElementById('select2');
      let readonlySelect3  = document.getElementById('select3');
      readonly1.setAttribute('readonly', true);
      readonly2.setAttribute('readonly', true);
      readonly3.setAttribute('readonly', true);
      console.log(readonlySelect1);
      readonlySelect1.classList.add('disabled');
      readonlySelect2.classList.add('disabled');
      readonlySelect3.classList.add('disabled');
   }
  },

 }
</script>
<style>
.client-tr, .client-th{
   width: 270px!important;
}
.clientDiscount{
    margin-top: -5rem!important;
}
#clientTable_length, #clientTable_info, #clientTable_paginate{
   display: none;
}
#clientTable_wrapper{
   margin-top: 2rem;
}
#clientTable{
       width: inherit;
}
.discount-type{
   width: -webkit-fill-available;
    text-align: start;
    text-indent: 1.3rem;
}
.order-btn{
   background-color: #223d8f!important;
   color: #fff!important;
}
.disabled {
       pointer-events:none;
       color: #bfcbd9;
       cursor: not-allowed;
       background-image: none;
       background-color: #eef1f6;
       border-color: #d1dbe5;   
     }
     .discount-inpt{
          border-radius: 10px!important;
     }
   #clientTable  thead tr th:nth-last-child(2){
    width: 255px!important;
}

</style>