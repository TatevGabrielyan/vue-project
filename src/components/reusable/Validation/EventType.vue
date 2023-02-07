<template>
    <div>
       <div>
       </div>
       <validation-provider
          name="Event type"
          :rules="{ required: true, min: 3 }"
          v-slot="validationContext"
          >
          <b-form-group id="example-input-group-1" label="Event type" label-for="example-input-1" class="shipping-label form-labels pl-2 text-start username-label">
             <b-form-input
                id="example-input-1"
                name="example-input-1"
                v-model="form.eventtype"
                :state="getValidationState(validationContext)"
                aria-describedby="input-1-live-feedback"
                v-on:change="getEventType(form.eventtype)"
                placeholder="Event type"
                ></b-form-input>
             <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
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
              eventtype: '',
      
            },
            events: [],
            loading: false,
            updateSubmit: false,
       }
   },

      methods: {
         getValidationState({ dirty, validated, valid = null }) {
          return dirty || validated ? valid : null;
        },
      },
   props:{
       getEventType:Function,
      
   }
 };
 </script>
 