<template>
   <div>
      <div class="row mt-lg-0 mt-5">
         <div class="col-lg-5 col-md-3 col-12"></div>
         <div class="col-lg-5 col-md-6 col-12 mytabs-div  client-top">
            <form @submit.prevent="send()">
               <div class="row">
                  <div class="form-group">
                     <div>
                        <div class="text-center">
                           <p class="watermark-header text-uppercase">Guest / Student login page settings</p>
                        </div>
                      <div>
                          <label for="select-event" class="text-start sub-cat watermark-select text-capitalize">Select Page type</label>   
                        <v-select  class="mb-3 watermark-select " v-model="selectedPageType" :options="optionsPageType" label="text">
                           <template #selected-option="{ text }">
                              <div style="display: flex; align-items: baseline;">
                                 <strong class="select-strong">{{ text }}</strong>
                              </div>
                           </template>
                        </v-select>
                      </div>
                     </div>
                        <Button class="text-uppercase create-btn mt-3 save-btn">Save</Button>
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
            selectedPageType: ["Select"],
            optionsPageType: [
                { value: "a", text: "Type 1" },
                { value: "b", text: "Type 2" },
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
