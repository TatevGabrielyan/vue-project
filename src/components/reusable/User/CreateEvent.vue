<template>
    <div>
       <div class="row">
          <div class="col-lg-5 col-md-3 col-12"></div>
          <div class="col-lg-5 col-md-6 col-12 mytabs-div  client-top">
             <p class="watermark-header text-uppercase">Create Guest</p>
             <div class="create-folder-modal">
                <b-modal id="modal-createEvent" size="lg" scrollable  centered title="Create event">
                   <div class="shipping-label">
                    <label  class="text-capitalize mb-3  shared-label">Select Client</label>
                              <v-select class="mb-3 select-contact selected-options sel-opt " v-model="selectedClient" :options="optionsClient" label="text">
                                       <template #selected-option="{ text }">
                                          <div style="display: flex; align-items: baseline;">
                                             <strong class=" select-payment ">{{ text }}</strong>
                                          </div>
                                       </template>
                                    </v-select> 
                   </div>
                   <div class="shipping-label">
                    <label  class="text-capitalize mb-3  " >Select Photographer</label>
                              <v-select class="mb-3 select-contact selected-options sel-opt" v-model="selectedPhotographer" :options="optionsPhotographer" label="text">
                                       <template #selected-option="{ text }">
                                          <div style="display: flex; align-items: baseline;">
                                             <strong class=" select-payment">{{ text }}</strong>
                                          </div>
                                       </template>
                                    </v-select> 
                   </div>
                   <div class="row">
                     <div class="col-6">
                        <EventName :getEvent="getEventName" class="validation-component event-name"/>
                     </div>
                     <div class="col-6">
                        <EventType :getEvent="getEventType" class="validation-component event-name"/>
                     </div>
                     
                     <div class="text-center">
                        <DatePicker class="inline-block h-full text-start client-calendar" v-model="date"  mode="dateTime" :minute-increment="5">
                    <template v-slot="{ inputValue, togglePopover }">
                    <div class="flex items-center calendar-div m-auto">
                        <button
                        class="p-2 bg-blue-100 border border-blue-200 hover:bg-blue-200 text-blue-600 rounded-l focus:bg-blue-500 focus:text-white focus:border-blue-500 focus:outline-none"
                        @click="togglePopover()"
                        >
                        <img src="../../../assets/icons/calendar.png" alt="">
                        </button>
                        <input
                        :value="inputValue"
                        class="bg-white text-gray-700 w-full py-1 px-2 appearance-none border rounded-r focus:outline-none focus:border-blue-500"
                        readonly
                        />
                        
                    </div>
                    </template>
                </DatePicker>
                <button type="submit" variant="primary" class="text-uppercase login-btn save-next-modal finish px-5 mt-4" @click="$bvModal.hide('modal-createEvent')">Save</button>
                     </div>
                   </div>
                </b-modal>
             </div>
          </div>
       </div>
    </div>
 </template>
 <script>
  import Button from '../Button.vue';
 import { extend } from "vee-validate";
 import { required } from "vee-validate/dist/rules";
import EventName from '../Validation/EventName.vue';
import EventType from '../Validation/EventType.vue';
import Calendar from 'v-calendar/lib/components/calendar.umd';
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

 extend("required", {
   ...required,
   message: "Field is required"
 });
 
 extend("exact_length", {
   params: ["length", "message"],
   validate(val, { length, message }) {
     if (val.length !== Number(length))
       return message;
 
       return true;
   }
 });
 
  export default{
       components:{
         Button,
         EventName,
         EventType,
         Calendar,
         DatePicker
      },
  
   data(){
      let date = new Date();
    date.setMinutes(0, 0, 0);
       return{
         date,
            form: {
              id: '',
              eventname:'',
              eventtype:'',   
            },
            isSeperate: false,
            users: [],
            selectedClient:['Select'],
             optionsClient:[
           { value: 'a', text: 'a' },
           { value: 'b', text: 'b' },
           { value: 'c', text: 'c' },
           { value: 'd', text: 'd' },
 
         ],
            selectedPhotographer:['Select'],
             optionsPhotographer:[
           { value: 'a', text: 'a' },
           { value: 'b', text: 'b' },
           { value: 'c', text: 'c' },
           { value: 'd', text: 'd' },
 
         ],
         typesSelected:[]
       }
   },
    methods: {
         getValidationState({ dirty, validated, valid = null }) {
          return dirty || validated ? valid : null;
        },
         getEventName(eventname){
             this.form.eventname = eventname;
         },
          getEventType(eventtype){
             this.form.eventtype = eventtype;
         },
              add(){
            axios({
                method: 'post',
              //   url: 'http://localhost:3000/clientInformation/',  should add new url
                data: this.form
              })
          .then(res => {
            this.load()
            this.form.eventname ='',
            this.form.eventtype =''
          })
              
        },
    },
  }
 </script>
<style>
   .event-name span div div input{
      width:100%!important
   }
   .sel-opt{
      display:contents
   }
</style>