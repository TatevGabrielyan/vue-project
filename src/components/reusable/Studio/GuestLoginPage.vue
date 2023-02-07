<template>
    <div>
       <div class="row">
          <div class="col-lg-5 col-md-3 col-12"></div>
          <div class="col-lg-5 col-md-6 col-12 mytabs-div  client-top" id="guestLoginTop">
             <p class="watermark-header text-uppercase">Guest login page settings</p>
          </div>
          <div class="col-lg-3">
          </div>
          <div class="col-lg-9 text-start" id="guestLogin">
            <div class="row">
             <div class="col-lg-4 col-md-4 col-12">
                <label class="discount-type">Name</label>
                                <b-input-group  class="">
                                    <b-form-input class="modal-input-credit discount-inpt " placeholder="" id="name"></b-form-input>
                                </b-input-group>
                                <label class="discount-type">Title</label>
                                <b-input-group  class="">
                                    <b-form-input class="modal-input-credit discount-inpt " placeholder="" id="title"></b-form-input>
                                </b-input-group>
                                <label class="discount-type">Description</label>
                                <b-input-group  class="">
                                    <b-form-input class="modal-input-credit discount-inpt " placeholder="" id="desc"></b-form-input>
                                </b-input-group>
                
             </div>
             <div class="col-lg-3">
                <p class="discount-type">Logo Image</p>
                <div class="mt-5">
                    <p class="discount-type">Background</p>

                <div class="form-group mt-3 selected-form ">
                            <b-form-checkbox-group
                               v-model="selected"
                               :options="options"
                               value-field="item"
                               text-field="name"
                               disabled-field="notEnabled"
                               class="excel-checkbox"
                               @change="changeMethod"
                               ></b-form-checkbox-group>
                         </div>
                </div>
             </div>
             <div class="col-lg-3 col-md-6 col-12">
                 <div class=""><button type="btn" class="text-capitalize upload-btn hover-btns">Upload Logo</button></div>
                 <div class="mt-5">
                    <div class="mt-3"><button type="btn" class="text-capitalize upload-btn hover-btns">Upload Image</button></div> 
                    <div class="mt-3"><button type="btn" class="text-capitalize upload-btn hover-btns">Choose color</button></div> 
                 </div>
             </div>
            </div>
           <div class="text-center mt-4">
            <Button class="text-uppercase create-btn mt-3 save-permissions-btn">Save</Button>
           </div>
          </div>
       </div>
    </div>
 </template>
 <script>
  import Button from '../Button.vue';
  export default{
       components:{
             Button,
       },
   data() {
       return {
 
             selected: [],
              options: [
           { item: '0', name: 'Image', checked:false }, 
           { item: '1', name: 'Color', checked:false },
           { item: '2', name: 'None',  checked:false },
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
     },
     changeMethod(){
        if(this.selected.length>1){
            this.selected.shift()
        }
  }
   },
  
  }
 </script>
<style>
.excel-checkbox div{
  display: block;
}
</style>