<template>
    <div>
       <div class="row">
          <div class="col-lg-5 col-md-3 col-12"></div>
          <div class="col-lg-5 col-md-6 col-12 mytabs-div" id="addPackageTop">
             <p class="watermark-header text-uppercase">Create Package</p>
          </div>
       <div class="row clientDiscount">
            <div class="col-lg-3">
          </div>
          <div class="col-lg-9 mt-lg-0 mt-md-3 mt-3" id="addPackage">  
            <div class="text-end">
                <button class="text-uppercase add-delete-category" v-b-modal.modal-package-category>Add or delete package category name</button> 
            </div> 
            <div class="create-folder-modal">
               <b-modal id="modal-package-category" size="lg" scrollable  centered title="Add/delete package category name">
                  <div>
                     <p class="credit-modal-header p-0 m-0">New Name</p>
                     <b-input-group  class="mt-2">
                        <b-form-input placeholder="Type here..."></b-form-input>
                     </b-input-group>
                     <div class="text-center">
                        <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal finish px-5 mt-4" @click="$bvModal.hide('modal-package-category')">Save</button>
                        
                        
                     </div>
                     <p class="credit-modal-header p-0 m-0">Package Category List</p>
                     <b-input-group  class="mt-2">
                        <b-form-input class="modal-input-credit" placeholder="Package Name 1"></b-form-input>
                        <b-input-group-append>
                          <span class="btn p-0 package-cat-btn">
                            <b-button class="pt-2">
                              <img src="../../../assets/icons/minus.png" alt="minus" class="w-75">
                           </b-button>
                          </span>
                        </b-input-group-append>
                     </b-input-group>
                     <b-input-group  class="mt-3">
                        <b-form-input class="modal-input-credit" placeholder="Package Name 2"></b-form-input>
                        <b-input-group-append>
                          <span class="btn p-0 package-cat-btn">
                            <b-button class="pt-2">
                              <img src="../../../assets/icons/minus.png" alt="minus" class="w-75">
                           </b-button>
                          </span>
                        </b-input-group-append>
                     </b-input-group>
                  </div>
               </b-modal>
            </div>
             <div class="row justify-content-center">
                <div class="col-lg-4">
                       <label class="discount-type">Package Category</label>
                      <v-select class="select-v-type  "  v-model="selectedCategory" :options="optionsCategory" label="text" id="select1">
                         <template #selected-option="{ text }" class="w-100">
                            <div class="w-100">
                               <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                            </div>
                         </template>
                      </v-select>
                 </div>
                 <div class="col-lg-4">
                       <label class="discount-type">Pose</label>
                      <v-select class="select-v-type  "  v-model="selectedPose" :options="optionsPose" label="text" id="selectPose">
                         <template #selected-option="{ text }" class="w-100">
                            <div class="w-100">
                               <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                            </div>
                         </template>
                      </v-select>
                 </div>              
             </div>
             <div class="row justify-content-center">
                 <div class="col-lg-4"> 
                      <b-input-group  class="">
                            <label class="discount-type">Package Name</label>
                         <b-form-input class="modal-input-credit discount-inpt " placeholder="" id="packageName"></b-form-input>
                      </b-input-group> 
                 </div>
                 <div class="col-lg-4">
                       <label class="discount-type">Count Templates Which Can Order</label>
                      <v-select class="select-v-type" v-model="selectedCountOfTemplates" :options="optionsCountOfTemplates"  label="text" id="select1">
                         <template #selected-option="{ text }" class="w-100">
                            <div class="w-100">
                               <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                            </div>
                         </template>
                      </v-select>
                 </div>
             </div>
             <div class="row justify-content-center">
                <div class="col-lg-4">
                   <b-input-group  class="">
                            <label class="discount-type">Package Description</label>
                         <b-form-textarea class="modal-input-credit discount-inpt " placeholder="" rows="4"  no-resize></b-form-textarea>
                      </b-input-group> 
                      <label class="discount-type mt-3">Special Offer</label>
                      <v-select class="select-v-type" v-model="selectedOffer" :options="optionsOffer"  label="text" id="select1">
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
                         <b-form-input class="modal-input-credit discount-inpt " placeholder="" id="cost"></b-form-input>
                      </b-input-group> 
                
                      <div class="mt-2">
                        <b-input-group  class="">
                            <label class="discount-type">Selling Price</label>
                         <b-form-input class="modal-input-credit discount-inpt " placeholder="" id="sellingPrice"></b-form-input>
                      </b-input-group> 
                      </div>
                </div>
              
             </div>
            <div>
                <Button class="text-uppercase create-btn  mt-4 save-btn">Package photo</Button>
            </div>
             <div>
                 <Button class="text-uppercase create-btn  mt-4 save-btn">Save</Button>
            </div>
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
 
          selectedOffer:[''],
             optionsOffer:[
           { value: 'a', text: 'Offer 1' },
           { value: 'b', text: 'Offer 2' },
         ],
 
         selectedPose:['Unlimited'],
             optionsPose:[
           { value: 'a', text: 'Pose 1' },
           { value: 'b', text: 'Pose 2' },
         ],
         selectedCountOfTemplates:['Unlimited'],
         optionsCountOfTemplates:[
           { value: 'a', text: '1' },
           { value: 'b', text: '10' },
         ],
       }
   },
 
 
  }
 </script>
<style>
.add-delete-category{
    background-color: #223D8F;
    color: #fff;
    padding: 5px 15px;
    border-radius: 10px;
    font-size: 14px;
    border: 2px solid #223D8F;
    font-weight: 700;
}
.add-delete-category:hover{
    background-color: #fff;
    color: #223D8F!important;
}
.package-cat-btn{
    border: 1px solid #223D8F!important; 
    z-index: 10!important; 
    border-radius: 10px!important; 
    background-color:#fff!important
}
</style>