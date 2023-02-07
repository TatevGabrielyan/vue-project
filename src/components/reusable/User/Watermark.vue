<template>
   <div>
      <div class="row mt-lg-0 mt-5">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div  client-top" id="clientWatermark">
            <form @submit.prevent="send()">
               <div class="row">
                  <div class="form-group">
                     <div>
                        <div class="text-center">
                           <p class="watermark-header text-uppercase">Watermark</p>
                           <span class="choose-watermark">Choose default watermark for client</span>
                        </div>
                        <v-select class="mb-3 watermark-select selected-options" v-model="selectedOptions" :options="optionsSelect" label="text">
                           <template #selected-option="{ text }">
                              <div style="display: flex; align-items: baseline;">
                                 <strong class="select-strong">{{ text }}</strong>
                              </div>
                           </template>
                        </v-select>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</template>

<script>
 import axios from 'axios'
export default {

 data() {
      return {
            selectedOptions:['None'],
        optionsSelect:[
          { value: 'a', text: 'None' },
          { value: 'b', text: 'Logo' },
        ],
      
      }
 },
   methods: {
    send() {
      let obj3 ={
          check_items3: this.selectedOptions
      }
       console.log(obj3)
      	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/users/',
          obj3
              
   		  })
         .then(res => {
           console.log(res.data)
         })
    }
  }
 }
</script>
<style>
  .watermark-header{
      font-size: 18px;
      color: #393939;
      font-weight: 600;
      font-family: "Montserrat";
  }
  .choose-watermark{
      font-size: 18px;
      line-height: 30px;
      color: #393939;
      font-weight: 500;
      margin-right: 2rem;
  }
  .vs--searchable{
      border-radius: 10px;
      background-color: #ffffff;
  }
  .vs__dropdown-toggle{
    padding: 1rem!important;
        height: 49px;
  }
  #vs1__combobox, .vs__dropdown-toggle{
      border: none!important;
  }

  #vs1__listbox{
      border-radius: 0px 0px 10px 10px;
      background-color: #ffffff; 
      margin-top: -1rem;
      z-index: -1;
  }
  .vs3__listbox{
    filter: none;
  }
  :focus-visible {
      outline: none!important;
  }
  .vs--searchable .vs__dropdown-menu{
      border-radius:10px;
      background-color: #ffffff;
      border: none;
      z-index: 10000!important;
      position: relative;

  }
  .vs--searchable{
      z-index: 1000;
      filter: drop-shadow(0 0 8.5px rgba(159,159,159,0.33));
      width: 100%!important;
  }
  .vs3__listbox{
    padding: 0;
  }
  .custom-checkbox{
    white-space: pre;
  }
  .mytabs-div{
    position: relative;
    top: -5rem;
  }
  .watermark-select{
    width: 65%!important;
    margin: auto;
  }
  .vs__actions svg{
    background-image: url('../../../assets/icons/down-up.png');
    content: ''!important;
    fill: none;
    height: 23px;
    width: 12px;
  }
  @media only screen and (max-width:768px){
    .mytabs-div{
    top: 0!important
  }
  }
</style>