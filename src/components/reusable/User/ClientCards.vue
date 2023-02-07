<template>
   <div>
      <div>
         <div class="row mt-lg-0 mt-5">
            <div class="col-lg-5 col-md-3 col-12"></div>
            <div class="col-lg-7 col-md-12 col-12 mt-2 mytabs-div client-top" id="clientCardsTop">
               <div class="client-settings">
                  <p class="text-center watermark-header text-uppercase">Client cards</p>
               </div>
               <form @submit.prevent="send()" class="text-start">
                  <div class="row">
                     <div class="col-lg-5 col-md-6 col-sm-12">
                        <input class="select-all" type="checkbox" v-model="checkAll" id="selectAllCheckbox1">
                        <label  class="text-uppercase selected-all-label" for="selectAllCheckbox1">
                        Flat Cards
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
                        <input class="select-all" type="checkbox" v-model="checkAll2nd" id="selectAllCheckbox2">
                        <label  class="text-uppercase selected-all-label" for="selectAllCheckbox2">
                        Photo cards
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
          { item: '0', name: 'Test Cards' }, 
          { item: '1', name: '2 images card' },
          { item: '2', name: 'Hanukkah'},
          { item: '3', name: '5x4'},
        ],
         options2nd: [ 
          { item2nd: '1', name: 'Test 2' },
          { item2nd: '2', name: 'Test 3'},
          { item2nd: '3', name: 'Test 4'},
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
<style scoped>
.custom-control label span{
    font-size: 18px;
    color: #393939;
    font-weight: 400;
    margin-left: 1rem;
    position: relative;
    top: -2px;
}
.custom-control label:before{
    width: 25px;
    height: 25px;
    border-radius: 3px;
    background-color: #ffffff;
    border: 0.5px solid #DDDDDD;
}
.custom-control-label::after {
   position: absolute;
    display: block;
    width: 25px;
    height: 25px;
    content: "";
    left: -1.5rem;
    background: no-repeat 50%/50% 50%;
    padding-left: 0.2rem;

}
.custom-checkbox .custom-control-input:checked~.custom-control-label::after {
    background-image: none;
    content: '\2713';
    color: #223D8F;
    background-color: white;
    border-radius: 3px;
    border: 1px solid #DDDDDD;
}
.custom-control-input:focus~.custom-control-label::before {
    box-shadow: none;
}
.custom-control-input:focus:not(:checked)~.custom-control-label::before {
    border-color: #DDDDDD;
}
.custom-control-input:not(:disabled):active~.custom-control-label::before {
    background-color: #fff;
    border-color: #DDDDDD;
}
.client-image-input> .custom-control{
    margin-bottom: 3rem;
}
</style>