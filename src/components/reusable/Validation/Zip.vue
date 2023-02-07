<template>
   <div>
      <div>
      </div>
      <validation-provider
         name="Zip code"
         :rules="{ required: true, min: 3 }"
         v-slot="validationContext"
         style="  text-align: start"
         >
         <b-form-group id="example-input-group-25" label="Zip code" class="shipping-label state-label text-nowrap" label-for="example-input-25" >
            <b-form-input
               type="number"
               id="example-input-25"
               name="example-input-25"
               v-model="form.zip"
               aria-describedby="input-25-live-feedback"
               class="border-0  d-inline"
               :state="getValidationState(validationContext)"
               placeholder="Zip code"
               style="width: 100%!important;"
               v-on:change="getZip(form.zip)"
               ></b-form-input>
            <b-form-invalid-feedback id="input-25-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
         </b-form-group>
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
             zip: '',
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
      getZip:Function,
     
  }
};
</script>
