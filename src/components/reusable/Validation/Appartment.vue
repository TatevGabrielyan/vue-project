<template>
   <div>
      <div>
      </div>
      <validation-provider
         name="Appartment number"
         class="text-start"
         >
         <b-form-group id="example-input-group-13" label="Appartment number" label-for="example-input-13" class="shipping-label address2 appartment-label" >
            <b-form-input
               id="example-input-13"
               name="example-input-13"
               type="number"
               v-model="form.appNumber"
               aria-describedby="input-14-live-feedback"
               class="border-0 d-inline"
               placeholder="Appartment number"
               style="width: 100%!important;"
               v-on:change="getAppNumber(form.appNumber)"
               ></b-form-input>
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
             appNumber: '',
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
      getAppNumber:Function,
     
  }
};
</script>
<style>
   .appartment-label label{
      white-space: nowrap;
   }
</style>