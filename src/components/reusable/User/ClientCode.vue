<template>
   <div>
      <div class="row">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div client-top  pt-lg-0 pt-5">
            <p class="watermark-header text-uppercase">Client code</p>
         </div>
      <div class="row clientDiscount mt-lg-5 mt-0">
           <div class="col-lg-3">
         </div>
         <div class="col-lg-9">
           <div class="row justify-content-center">
            <div class="col-lg-4 col-md-4 col-12 pr-lg-4 pr-md-4 pr-0">
                <label class="text-start credit-modal-header p-0 m-0 d-block">Name</label>
                 <b-input-group  class="mt-2">
                        <b-form-input class="modal-input-credit discount-inpt" placeholder=""></b-form-input>
                     </b-input-group>
            </div>
            <div class="col-lg-4  col-md-4 col-12 pr-lg-4 pr-md-4 pr-0">
                <label class="text-start credit-modal-header p-0 m-0 d-block">Price</label>
                 <b-input-group  class="mt-2">
                        
                        <b-form-input class="modal-input-credit discount-inpt" placeholder=""></b-form-input>
                     </b-input-group>
            </div>
           </div>
           <div class="row justify-content-center">
            <div class="col-lg-4  col-md-4 col-12 pr-lg-4 pr-md-4 pr-0">
                <label class="text-start credit-modal-header p-0 m-0 d-block">Code</label>
                 <b-input-group  class="mt-2">
                        <b-form-input class="modal-input-credit discount-inpt" placeholder="from 4 to 6 numbers"></b-form-input>
                     </b-input-group>
            </div>
            <div class="col-lg-4  col-md-4 col-12 pr-lg-4 pr-md-4 pr-0">
                <label class="text-start credit-modal-header p-0 m-0 d-block">Price URL</label>
                 <b-input-group  class="mt-2">
                        
                        <b-form-input class="modal-input-credit discount-inpt" placeholder=""></b-form-input>
                     </b-input-group>
            </div>
            <div class="col-8  col-md-8 col-12 pr-lg-4 pr-md-4 pr-0">
                 <label class="text-start credit-modal-header p-0 m-0 d-block">Payment Description</label>
                 <b-input-group  class="mt-2">
                        <b-form-input class="modal-input-credit discount-inpt" placeholder=""></b-form-input>
                     </b-input-group>
            </div>
           </div>
                <Button class="text-uppercase create-btn  mt-4 save-btn">Save</Button>
         </div>
      </div>
      </div>
   </div>
</template>

<script>
 import Button from '../Button.vue';

 export default{
      components:{
            Button,
      },



 }
</script>
