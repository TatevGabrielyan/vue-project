<template>
   <div>
      <div>
      </div>
      <validation-provider
         name="Email"
         rules="required|email"
         v-slot="validationContext"
         >
         <b-form-input
            id="example-input-2"
            name="example-input-2"
            v-model="form.email"
            :state="getValidationState(validationContext)"
            aria-describedby="input-2-live-feedback"
            v-on:change="getEmail(form.email)"
            placeholder="Enter your email address"
            class="border-0 email-client"
            style="width: 100%!important; outline: none; margin: 0.5rem 0rem;height: 40px; border-radius:10px!important"
            ></b-form-input>
         <b-form-invalid-feedback id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
      </validation-provider>
   </div>
</template>
<script>

export default {
  name:'Child',
  
  data(){
      return{
         form: {
             id: '',
             email:''
           },
           users: [],
           loading: false,
           updateSubmit: false,
      }
  },
   mounted(){
      //  this.load();
     },
     methods: {
        getValidationState({ dirty, validated, valid = null }) {
         return dirty || validated ? valid : null;
       },

     },
  props:{
      getEmail:Function,
  }
};
</script>
<style> 
   label:after {
      content: "*";
      color: #fc0000;
      padding-left: 0.5rem;
   }
   .form-labels{
          font-size: 20px;
         line-height: 30px;
         color: #393939;
         font-weight: 500;
         font-family: "Montserrat";
   }
   .form-control{
      border: none!important;
      width:96%!important;
      outline: none;
      border-radius: 10px!important;
      font-size: 20px;
      color: #9f9f9f;
      font-weight: 400;
      font-family: "Montserrat";
      height: 40px;
      border: none;
      border-radius: 10px;
      filter: drop-shadow(0 0 8.5px rgba(159,159,159,0.33));
      background-color: #ffffff;
      padding: 1.5rem!important;
   }
   .form-control:focus{
      box-shadow: none!important;
   }
   #example-input-group-2__BV_label_{
      margin: 0;
   }
   @media only screen and (max-width:426px){
      .form-control{
         width: 100%!important;
      }
      .select-client {
    width: 96%!important;
      }
      .add-btn-div{
             margin-left: -3rem;
      }
   }
</style>