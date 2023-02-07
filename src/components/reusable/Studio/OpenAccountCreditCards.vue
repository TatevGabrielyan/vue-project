<template>
   <div>
      <div class="row">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div" id="openAccCreditCardsTop">
            <p class="watermark-header text-uppercase">OPEN ACCOUNT CREDIT CARDS</p>
           <div class="w-50 m-auto">
             <v-select class="select-v-type "  v-model="selectedOrderLimit" :options="optionsOrderLimit" label="text" id="select1">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
           </div>
         </div>
      <div class="row clientDiscount">
           <div class="col-lg-3">
         </div>
         <div class="col-lg-8" id="openAccCreditCards">    
            <div class="row">
                <div class="col-lg-4 acc-credit-type pr-0">
                    <div class="check-border">CHECK TYPE</div>
                    <div class="border-btm"></div>
                    <div class="py-4">
                        <p class="py-4">Bill Weekly</p>
                        <p class="pl-3 py-4">Bill Bi Weekly</p>
                        <p class="py-4">Bill Monthly</p>
                    </div>
                </div>
                <div class="col-lg-4 acc-credit-type pr-0 pl-0">
                    <div class="check-border">STARTING DATE</div>
                       <div class="border-btm"></div>
                       <div class="py-2">
                          <b-input-group  class="py-4 w-50 m-auto">
                        <b-form-input class="modal-input-credit discount-inpt " placeholder="01/01/2022" id="inpt2"></b-form-input>
                     </b-input-group>
                       <b-input-group  class="py-4 w-50 m-auto ">
                       
                        <b-form-input class="modal-input-credit discount-inpt" placeholder="01/01/2022" id="inpt2"></b-form-input>
                     </b-input-group>
                       <b-input-group  class="py-4 w-50 m-auto">
                    
                        <b-form-input class="modal-input-credit discount-inpt" placeholder="01/01/2022" id="inpt2"></b-form-input>
                     </b-input-group>
                       </div>
                </div>
                <div class="col-lg-4 acc-credit-type pl-0">LAST PROCESSED DATE
                    <div class="border-btm"></div>
                    <div class="py-2">
                        <v-select class="select-v-type mt-4 mb-5"  v-model="selectedDate1" :options="optionsDate1" label="text" id="select1">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                     <v-select class="select-v-type mt-4 mb-5"  v-model="selectedDate2" :options="optionsDate2" label="text" id="select2">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                     <v-select class="select-v-type mt-4"  v-model="selectedDate3" :options="optionsDate3" label="text" id="select3">
                        <template #selected-option="{ text }" class="w-100">
                           <div class="w-100">
                              <strong class="select-strong w-100 selecting-credit" >{{ text }}</strong>
                           </div>
                        </template>
                     </v-select>
                    </div>
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
          selectedOrderLimit:['Select'],
            optionsOrderLimit:[
          { value: 'a', text: '10' },
          { value: 'b', text: '1000' },
        ],
           selectedDate1:['M (After 7 PM)'],
            optionsDate1:[
          { value: 'a', text: 'M (After 7 PM)' },
          { value: 'b', text: 'M (After 6 PM)' },
        ],

         selectedDate2:['M (After 7 PM)'],
            optionsDate2:[
          { value: 'a', text: 'M (After 7 PM)' },
          { value: 'b', text: 'M (After 6 PM)' },
        ],

         selectedDate3:['Day 1'],
            optionsDate3:[
          { value: 'a', text: 'Day 1' },
          { value: 'b', text: 'Day 2' },
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