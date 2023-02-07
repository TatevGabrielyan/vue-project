<template>
   <div>
      <div>
      </div>
      <validation-provider
         name="Address2"
         style="  text-align: start"
         >
         <b-form-group id="example-input-group-13" label="Address 2" label-for="example-input-13" class="shipping-label address2" >
            <b-form-input
               id="example-input-13"
               name="example-input-13"
               v-model="form.address2"
               aria-describedby="input-13-live-feedback"
               class="border-0 d-inline"
               placeholder="Address 2"
               style="width: 100%!important;"
               v-on:change="getAddress2nd(form.address2)"
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
             address2: '',
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
      getAddress2nd:Function,
     
  }
};
</script>
