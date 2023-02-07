<template>
   <div>
      <div class="row">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div" id="addCardsTop">
            <p class="watermark-header text-uppercase">Add cards</p>
         </div>
         <div class="row clientDiscount">
            <div class="col-lg-3">
            </div>
            <div class="col-lg-9" id="addCards">
               <div class="row">
                  <div class="col-lg-4">
                     <b-input-group  class="">
                        <label class="discount-type">Card Name</label>
                        <b-form-input class="modal-input-credit discount-inpt " placeholder="01/01/2022" id="inpt2"></b-form-input>
                     </b-input-group>
                  </div>
                  <div class="col-lg-4">
                     <label class="discount-type">Category</label>
                     <v-select class="select-v-type  "  v-model="selectedCategory" :options="optionsCategory" label="text" id="select1">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                  </div>
                  <div class="col-lg-4">
                     <label class="discount-type">Size</label>
                     <v-select class="select-v-type "  v-model="selectedSize" :options="optionsSize" label="text" id="select1">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                  </div>
               </div>
               <div class="row">
                  <div class="col-lg-4">
                     <b-input-group  class="">
                        <label class="discount-type">Card Description</label>
                        <b-form-textarea class="modal-input-credit discount-inpt " placeholder="" rows="4"  no-resize></b-form-textarea>
                     </b-input-group>
                  </div>
                  <div class="col-lg-4">
                     <label class="discount-type">Sub Category</label>
                     <v-select class="select-v-type"  v-model="selectedSubCat" :options="optionsSubCat" label="text">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                  </div>
                  <div class="col-lg-4">
                     <b-input-group  class="">
                        <label class="discount-type">Cost</label>
                        <b-form-input class="modal-input-credit discount-inpt " placeholder=""></b-form-input>
                     </b-input-group>
                     <b-input-group  class="mt-3">
                        <label class="discount-type">Price</label>
                        <b-form-input class="modal-input-credit discount-inpt " placeholder=""></b-form-input>
                     </b-input-group>
                  </div>
               </div>
               <Button class="text-uppercase create-btn  mt-4 save-btn">Submit</Button>
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
          selectedSize:[''],
            optionsSize:[
          { value: 'a', text: '10' },
          { value: 'b', text: '1000' },
        ],
           selectedCategory:['select'],
            optionsCategory:[
          { value: 'a', text: 'Category 1' },
          { value: 'b', text: 'Category 2' },
        ],

         selectedSubCat:[''],
            optionsSubCat:[
          { value: 'a', text: 'Sub Category 1' },
          { value: 'b', text: 'Sub Category 2' },
        ],


      }
  },


 }
</script>
<style>
    .acc-credit-type{
     color: #393939;
     font-size: 16px;
     font-weight: 600;
   
    }
    .check-border{
 border-right: 1px solid #adadad;
    }
    .border-btm{
            border-bottom: 1px solid #adadad;
    margin-top: 9px;
    }
</style>