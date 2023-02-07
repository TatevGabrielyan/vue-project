<template>
  <button class="button">
    <slot/>
  </button>
</template>

<script>
  export default {}
</script>

<style scoped>
  .button {
     color: #ffffff;
            font-weight: bold;
            font-family: "Montserrat";
            border: 2px solid #223d8f;
            font-size: 13px;
            /* padding: 1rem 3rem; */
            height: 50px;
            border-radius: 10px;
            background-color: #223d8f;
            width: -webkit-fill-available;
  }
  .button:hover {
     background-color:#fff;
        color: #223d8f;
  }
  @media only screen and (max-width:768px) {
      .button{
                /* padding: 1rem 1rem; */
      }
  }
</style>