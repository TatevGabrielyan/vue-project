<template>
   <div id="checkout">
      <div class="">
         <div class="row">
            <div class="col-lg-4 col-md-5 d-lg-block d-md-block d-none left-sidebar">
               <div class="circle-div">
                  <div class="main-circle">
                     <div class="blue-circle">
                        <img src="../../assets/icons/white.png" alt="tricolor-icon-white">
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-5 d-lg-none d-md-none d-block imaging-center-div">
               <p class="text-uppercase imaging-center-sm imaging-signup">Professional Imaging Center</p>
               <div class="circle-div-sm">
                  <div class="main-circle-sm">
                     <div class="blue-circle-sm">
                        <img src="../../assets/icons/white.png" alt="tricolor-icon-white">
                     </div>
                  </div>
               </div>
            </div>
            <div class="col-lg-8 col-md-7 col-12">
               <div class="login container text-center">
                  <div class="m-auto tricolor-logo">
                     <img class="w-100 mt-5" src="../../assets/icons/TRICOLOR CENTER.png" alt="logo">
                  </div>
                  <div class="container mt-5">
                     <h2 class="py-5 text-uppercase thanks-header">Thank you!</h2>
                     <p class="order-process">Your order has been placed and is being processed.</p>
                  </div>
                  <div class="back-btn row ">
                     <div class="col-lg-3 col-md-6 col-12 m-auto ">
                        <router-link  to='/UserPage'>
                           <Button class="text-uppercase mt-5 login-btn " >Back to Homepage</Button>
                        </router-link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
   import Button from '../reusable/Button.vue';
   export default {
        components:{
            Button,
        },
        name:'Checkout',
   };
</script>
<style>
.thanks-header{
    font-size: 50px;
    color: #223d8f;
    font-weight: 600;
}
.order-process{
    font-size: 22px;
    color: #223d8f;
    font-weight: 600;
}
.back-btn{
    margin-top: 12rem!important;
}
@media only screen and (max-width: 769px){
.thanks-header {
    font-size: 37px;

}
}
@media only screen and (max-width: 426px){
.back-btn{
    margin-top: 4rem!important;
}
.thanks-header {
    font-size: 31px;
}
.order-process {
    font-size: 20px;
}
}
</style>