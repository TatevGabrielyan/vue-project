<template>
    <div>
       <div class="row">
          <div class="col-lg-5 col-md-3 col-12"></div>
          <div class="col-lg-5 col-md-6 col-12 mytabs-div client-top" id="loginTop">
             <p class="watermark-header text-uppercase">Login page</p>
          </div>
          <div class="col-lg-3">
          </div>
          <div class="col-lg-9 text-start" id="login">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-12">
                    <p class="discount-type">Your logo</p>
                    <div class="your-logo-div">
                        <b-img v-if="hasImage" :src="imageSrc" class="mb-3 w-100  p-3" fluid block rounded></b-img>
                        <img  src="../../../assets/icons/Group 93.png" class="mb-3 w-100 p-3">
                    </div>
             </div>
             <div class="col-lg-3 col-md-6 col-12">
                <b-form @submit.stop.prevent="onSubmit">
                    <div class="d-flex mb-3">
                        <b-form-file v-model="image" placeholder="Choose an image" class="w-auto flex-grow-1"></b-form-file>
                        <b-button v-if="hasImage" variant="danger" class="ml-3" @click="clearImage">x</b-button>
                    </div>
                    </b-form>
                 <p class="discount-type mt-5">Background color</p>
                 <button type="btn" class="text-capitalize upload-btn bg-color"></button>
                
             </div>
             <div class="col-lg-2">
                <div class="">
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
             <div class="col-lg-4 col-md-4 col-12">
                <label class="discount-type">Name</label>
                                <b-input-group  class="">
                                    <b-form-input class="modal-input-credit discount-inpt link-input" placeholder="https://quick.studiseye/example" id="name"></b-form-input>
                                </b-input-group>
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
  const base64Encode = data =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
  export default{
       components:{
             Button,
       },
   data() {
       return {
        image: null,
      imageSrc: null,
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
  },

  clearImage() {
      this.image = null;
    },

    onSubmit() {
      if (!this.image) {
        alert("Please select an image.");
        return;
      }

      alert("Form submitted!");
    }
   },
   computed: {
    hasImage() {
      return !!this.image;
    }
  },
  watch: {
    image(newValue, oldValue) {
      if (newValue !== oldValue) {
        if (newValue) {
          base64Encode(newValue)
            .then(value => {
              this.imageSrc = value;
            })
            .catch(() => {
              this.imageSrc = null;
            });
        } else {
          this.imageSrc = null;
        }
      }
    }
  },
  }
 </script>
<style>
    .your-logo-div{
        width: 175px;
        height: 175px;
        filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
        background: white;
        border-radius: 15px;
        overflow: hidden;
    }
    .your-logo-div img{
        height: 175px;
        object-fit: cover;
    }
    .bg-color{
        height: 31.2px;
        background: #639EA5;
        border: 1px solid #639EA5;
    }
    .link-input::placeholder {
    opacity: 1;
    color: #223D8F!important;
}
 .custom-file-label span{
    display:none
 }
 .custom-file-label{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #223d8f;
    background-color: #fff;
    border: none;
    border-radius: 0.25rem;
    width: 175px;
 }
 .custom-file-label::after{
    content: 'Upload Logo'!important;
    background: #223d8f!important;
    color: #fff!important;
    border-radius: 10px;
    width: 175px;
    text-align: center;
    font-weight: 700;
 }
 .excel-checkbox div label::after{
    width: 25px;
    height: 25px;
 }

</style>