<template>
   <div>
      <div class="row mt-lg-0 mt-5">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div client-top">
            <form @submit.prevent="send()">
               <div class="row">
                  <div class="form-group">
                     <div>
                        <div class="text-center">
                           <p class="watermark-header text-uppercase">Choose your default product</p>
                        </div>
                      <div>
                          <label for="select-event" class="text-start should-select watermark-select">Category</label>   
                        <v-select  class="mb-3 watermark-select " v-model="selectedCategory" :options="optionsCategory" label="text">
                           <template #selected-option="{ text }">
                              <div style="display: flex; align-items: baseline;">
                                 <strong class="select-strong">{{ text }}</strong>
                              </div>
                           </template>
                        </v-select>
                      </div>
                       
                     </div>
                      <div>
                             <label for="select-event" class="text-start sub-cat watermark-select">Sub Category</label>   
                        <v-select class="mb-3 watermark-select" v-model="selectedSubCategory" :options="optionsSubCategory" label="text">
                           <template #selected-option="{ text }">
                              <div style="display: flex; align-items: baseline;">
                                 <strong class="select-strong">{{ text }}</strong>
                              </div>
                           </template>
                        </v-select>
                        <Button class="text-uppercase create-btn mt-3 save-btn">Save</Button>
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
import Button from '../Button.vue'

export default {
    data() {
        return {
            selectedCategory: ["Category 1"],
            optionsCategory: [
                { value: "a", text: "Category 1" },
                { value: "b", text: "category 2" },
            ],
            selectedSubCategory: ["Sub Category 2"],
            optionsSubCategory: [
                { value: "a", text: "Sub Category 1" },
                { value: "b", text: "Sub Category 2" },
            ],
        };
    },
    methods: {
        send() {
            let obj3 = {
                check_items3: this.selectedCategory
            };
            console.log(obj3);
            axios({
                method: "post",
                url: "http://localhost:3000/users/",
                obj3
            })
                .then(res => {
                console.log(res.data);
            });
        }
    },
    components: { Button }
}
</script>
<style>
   .save-btn{
      color: #ffffff;
      font-weight: bold;
      font-family: "Montserrat";
      border: 2px solid #223d8f;
      font-size: 13px;
      height: 50px;
      border-radius: 10px;
      background-color: #223d8f;
      width: -webkit-fill-available;
      width: 11rem!important;
   }
   .sub-cat{
      text-indent: 1.3rem;
    font-size: 15px;
    color: #393939;
    font-weight: 500;
   }
</style>