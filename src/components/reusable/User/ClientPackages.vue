<template>
   <div>
      <div>
         <div class="row mt-lg-0 mt-5">
            <div class="col-lg-5 col-md-3 col-12"></div>
            <div class="col-lg-7 col-md-12 col-12 mt-2 mytabs-div client-top" id="clientPackagesTop">
               <div class="client-settings">
                  <p class="text-center watermark-header text-uppercase">Guest Packages</p>
               </div>
               <form @submit.prevent="send()" class="text-start">
                  <div class="row">
                     <div class="col-lg-5 col-md-6 col-sm-12">
                        <input class="select-all" type="checkbox" v-model="checkAll" id="selectAllCheckbox3">
                        <label  class="text-uppercase selected-all-label" for="selectAllCheckbox3">
                        Test
                        </label>
                        <div class="form-group mt-3 selected-form ">
                           <b-form-checkbox-group
                              v-model="selected"
                              :options="options"
                              value-field="item"
                              text-field="name"
                              disabled-field="notEnabled"
                              ></b-form-checkbox-group>
                        </div>
                     </div>
                     <div class="col-lg-5 col-md-6 col-sm-12">
                        <input class="select-all" type="checkbox" v-model="checkAll2nd" id="selectAllCheckbox4">
                        <label  class="text-uppercase selected-all-label" for="selectAllCheckbox4">
                        School A
                        </label>
                        <div class="form-group mt-3 selected-form ">
                           <b-form-checkbox-group
                              v-model="selected2nd"
                              :options="options2nd"
                              value-field="item2nd"
                              text-field="name"
                              disabled-field="notEnabled"
                              ></b-form-checkbox-group>
                        </div>
                     </div>
                  </div>
                  <div class="form-group save-form">
                     <Button class="text-uppercase create-btn mt-3 save-permissions-btn">Save</Button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
 import axios from 'axios'

import Button from "../Button.vue";

export default {
  components:{
    Button
},
 data() {
      return {

            selected: [],
            selected2nd: [],

             options: [
          { item: '0', name: 'Test' }, 
          { item: '1', name: 'Test 2' },
          { item: '2', name: 'Test 02'},
          { item: '3', name: 'Test tooltip package'},
          { item: '4', name: 'Test big'},


        ],
         options2nd: [
          { item2nd: '0', name: 'Package A' }, 
          { item2nd: '1', name: 'Package B' },
          { item2nd: '2', name: 'Digital Download'},
        ],
  
      }

    },
    methods: {
    send() {
      let obj = {
        check_items: this.selected
      };
      let obj2nd = {
        check_items2nd: this.selected2nd
      };
       console.log(obj, obj2nd)
      	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/users/',
     		  obj,
              obj2nd
              
   		  })
         .then(res => {
           console.log(res.data)
         })
     
    }
  },
   computed: {
        checkAll: {
            get: function () {
                return this.options ? this.selected.length == this.options.length : false;
            },
            set: function (value) {
                var selected = [];
                if (value) {
                    this.options.forEach(function (options) {
                        selected.push(options.item);
                    });
                }
                this.selected = selected;
            }
        },
         checkAll2nd: {
            get: function () {
                return this.options2nd ? this.selected2nd.length == this.options2nd.length : false;
            },
            set: function (value) {
                var selected2nd = [];
                if (value) {
                    this.options2nd.forEach(function (options2nd) {
                        selected2nd.push(options2nd.item2nd);
                    });
                }
                this.selected2nd = selected2nd;
            }
        }
    }
};
</script>
