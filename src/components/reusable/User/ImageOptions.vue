<template>
  <div>
    <div>
          <div class="row mt-lg-0 mt-5">
            <div class="col-lg-4 col-md-3 col-12"></div>
             <div class="col-lg-8 col-md-12 col-12 mt-2 mytabs-div client-top" id="imageOptionsTop">
            <div class="client-settings">
                <p class="text-center watermark-header text-uppercase">Client Retouching settings</p>
             </div>
               <form @submit.prevent="send()">
                   <div class="row">
                       <div class="col-lg-5 col-md-6 col-12 text-start">
                       <h5 class="text-uppercase flat-card-title">Name</h5>
                        <div class="form-group mt-3">
                            <b-form-checkbox-group
                            v-model="selected"
                            :options="options"
                            class="client-image-input client-retouching-lbl"
                            value-field="item"
                            text-field="name"
                            disabled-field="notEnabled"
                            ></b-form-checkbox-group>
                    </div>
                       </div>
                        <div class="col-lg-5 col-md-6 col-12 text-start">
                        <h5 class="text-uppercase flat-card-title">Price | $</h5>
                        <div class="form-group">
                           <div>
                               <v-select class="mb-3" v-model="selectedOptions" :options="optionsSelect" label="text">
                                    <template #selected-option="{ text }">
                                    <div style="display: flex; align-items: baseline;">
                                        <strong class="select-strong">{{ text }}</strong>
                                    </div>
                                    </template>
                                </v-select>
                                 <v-select class="mb-3" v-model="selectedOptions2" :options="optionsSelect2" label="text">
                                    <template #selected-option="{ text }">
                                    <div style="display: flex; align-items: baseline;">
                                        <strong class="select-strong">{{ text }}</strong>
                                    </div>
                                    </template>
                                </v-select>
                                  <v-select class="mb-3" v-model="selectedOptions3" :options="optionsSelect3" label="text">
                                    <template #selected-option="{ text }">
                                    <div style="display: flex; align-items: baseline;">
                                        <strong class="select-strong">{{ text }}</strong>
                                    </div>
                                    </template>
                                </v-select>
                                  <v-select class="mb-3" v-model="selectedOptions4" :options="optionsSelect4" label="text">
                                    <template #selected-option="{ text }">
                                    <div style="display: flex; align-items: baseline;">
                                        <strong class="select-strong">{{ text }}</strong>
                                    </div>
                                    </template>
                                </v-select>
                                  <v-select class="mb-3" v-model="selectedOptions5" :options="optionsSelect5" label="text">
                                    <template #selected-option="{ text }">
                                    <div style="display: flex; align-items: baseline;">
                                        <strong class="select-strong">{{ text }}</strong>
                                    </div>
                                    </template>
                                </v-select>
                            </div>
                        </div>
                       </div>
                   </div>
                    <div class="form-group">
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
          
             options: [
          { item: 'Premium Retouching', name: 'Premium Retouching' }, 
          { item: 'Teeth Whitening and Braces Removal', name: 'Teeth Whitening and Braces Removal' },
          { item: 'Stray Hair Removal', name: 'Stray Hair Removal'},
          { item: 'Braces Removal', name: 'Braces Removal'},
          { item: 'Teeth Whitening', name: 'Teeth Whitening'},
        ],
          selectedOptions:['30.00'],
            selectedOptions2:['30.00'],
            selectedOptions3:['30.00'],
            selectedOptions4:['30.00'],
            selectedOptions5:['30.00'],
        optionsSelect:[
          { value: 'a', text: '30.00' },
          { value: 'b', text: '40.00' },
          { value: 'c', text: '50.00' },
          { value: 'd', text: '60.00' },
        ],
         optionsSelect2:[
          { value: 'a', text: '30.00' },
          { value: 'b', text: '40.00' },
          { value: 'c', text: '50.00' },
          { value: 'd', text: '60.00' },
        ],
        optionsSelect3:[
          { value: 'a', text: '30.00' },
          { value: 'b', text: '40.00' },
          { value: 'c', text: '50.00' },
          { value: 'd', text: '60.00' },
        ],
         optionsSelect4:[
          { value: 'a', text: '30.00' },
          { value: 'b', text: '40.00' },
          { value: 'c', text: '50.00' },
          { value: 'd', text: '60.00' },
        ],
         optionsSelect5:[
          { value: 'a', text: '30.00' },
          { value: 'b', text: '40.00' },
          { value: 'c', text: '50.00' },
          { value: 'd', text: '60.00' },
        ],
      }

    },
    methods: {
    send() {
      let obj = {
        check_items: this.selected
      };
      let obj2 ={
          check_items2: this.selectedOptions
      }
       console.log(obj, obj2)
      	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/users/',
     		  obj,
              obj2
              
   		  })
         .then(res => {
           console.log(res.data)
         })
     
    }
  }
};
</script>
<style>
.save-permissions-btn{
    width: 10rem!important;
}
.custom-control-inline{
    display: block;
}
.client-settings{
    width: inherit;
}
.flat-card-title{
    font-size: 18px;
    color: #393939;
    font-weight: 500;
    text-indent: 2rem;
}
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
    margin-bottom: 2rem;
}
.select-strong{
    color: #223d8f;
    font-weight: 400;
    font-size: 14px;
}
.save-form{
    width: 53%;
    text-align: end;
}
.client-retouching-lbl div label{
  white-space: pre-wrap;
}
@media only screen and (max-width:768px){
  .save-form{
    width:100%;
    text-align: center;
  }
}
</style>

