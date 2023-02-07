<template>
  <div>
    <div>
          <div class="row mt-lg-0 mt-5">
            <div class="col-lg-5 col-md-3 col-12"></div>
             <div class="col-lg-4 col-md-12 col-12 mt-2 mytabs-div client-top" id="guestOrderPermissionsTop">
            <div class="">
                <p class="text-center watermark-header text-uppercase" >Guest order permissions</p>
             </div>
               <form @submit.prevent="send()" class="text-start">
                        <input class="select-all" type="checkbox" v-model="checkAll" id="selectAllCheckbox6">
                        <label  class="text-uppercase selected-all-label select-prod-label" for="selectAllCheckbox6">
                            Select Products which can't order
                        </label>
                        <div class="form-group mt-3 selected-form ">
                            <b-form-checkbox-group
                            v-model="selected"
                            :options="options"
                            class=""
                            value-field="item"
                            text-field="name"
                            disabled-field="notEnabled"
                            ></b-form-checkbox-group>
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
             options: [
          { item: '0', name: 'Gallery' }, 
          { item: '1', name: 'Packages' },
          { item: '2', name: 'Cards'},
        ],
      }
    },
    methods: {
    send() {
      let obj = {
        check_items: this.selected
      };
       console.log(obj)
      	axios({
     		  method: 'post',
     		  url: 'http://localhost:3000/users/',
     		  obj
              
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
        }
    }
};
</script>
<style>
    input[type=checkbox] {
         position: relative;
	       cursor: pointer;
    }
    input[type=checkbox]:before {
         content: "";
         display: block;
         position: absolute;
         top: 0;
         left: 0;
         width: 25px;
         height: 25px;
         border-radius: 3px;
         background-color: #ffffff;
         border: 0.5px solid #DDDDDD;
}
    input[type=checkbox]:checked:after {
        content: "";
        width: 25px;
        height: 25px;
        position: absolute;
        content: '\2713';
        color: #223D8F;
        background-color: white;
        border-radius: 3px;
        border: 1px solid #DDDDDD;
        padding-left: 0.5rem;
}
.selected-all-label{
    padding-left: 1.5rem;
    position: relative;
    top: 0.5rem;
    font-size: 19px;
    line-height: 10px;
    color: #393939;
    font-weight: 500;
}
@media only screen and (max-width:500px){
    .select-prod-label{
    top: -1rem;
    line-height: inherit;
    font-size: 17px;
}
}
</style>

