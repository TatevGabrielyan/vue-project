<template class="container">
  <div class="row">
  <b-navbar toggleable="lg" type="dark" class=" py-0">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="text-uppercase pl-3">Album</b-nav-item>
        <b-nav-item-dropdown text="Book" class="text-uppercase pl-3" toggle-class="text-white" right >
          <b-dropdown-item href="#">Book 1</b-dropdown-item>
          <b-dropdown-item href="#">Book 2</b-dropdown-item>
          <b-dropdown-item href="#">Book 3</b-dropdown-item>
          <b-dropdown-item href="#">Book 4</b-dropdown-item>
        </b-nav-item-dropdown>
         <b-nav-item-dropdown text="Business Cards" class="text-uppercase pl-3"  toggle-class="text-white" right>
          <b-dropdown-item href="#">Business Card 1</b-dropdown-item>
          <b-dropdown-item href="#">Business Card 2</b-dropdown-item>
          <b-dropdown-item href="#">Business Card 3</b-dropdown-item>
          <b-dropdown-item href="#">Business Card 4</b-dropdown-item>
        </b-nav-item-dropdown>
         <b-nav-item-dropdown text="Cards" class="text-uppercase pl-3"  toggle-class="text-white" right>
          <b-dropdown-item href="#">Card 1</b-dropdown-item>
          <b-dropdown-item href="#">Card 2</b-dropdown-item>
          <b-dropdown-item href="#">Card 3</b-dropdown-item>
          <b-dropdown-item href="#">Card 4</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#" class="text-uppercase pl-3" >Magnet</b-nav-item>
          <b-nav-item-dropdown text="Print" class="text-uppercase pl-3"   toggle-class="text-white" right>
          <b-dropdown-item href="#">Print 1</b-dropdown-item>
          <b-dropdown-item href="#">Print 2</b-dropdown-item>
          <b-dropdown-item href="#">Print 3</b-dropdown-item>
          <b-dropdown-item href="#">Print 4</b-dropdown-item>
        </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Reports" class="text-uppercase pl-3" toggle-class="text-white" right>
          <b-dropdown-item href="#">Report 1</b-dropdown-item>
          <b-dropdown-item href="#">Report 2</b-dropdown-item>
          <b-dropdown-item href="#">Report 3</b-dropdown-item>
          <b-dropdown-item href="#">Report 4</b-dropdown-item>
        </b-nav-item-dropdown>
          <b-nav-item-dropdown text="Email templates" class="text-uppercase pl-3" toggle-class="text-white" right>
          <b-dropdown-item href="#">Email template 1</b-dropdown-item>
          <b-dropdown-item href="#">Email template 2</b-dropdown-item>
          <b-dropdown-item href="#">Email template 3</b-dropdown-item>
          <b-dropdown-item href="#">Email template 4</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<style>
    nav{
        background-color: #223d8f;
        z-index: 10000;
    }
    .nav-link, .nav-item{
        font-size: 13.8px;
        line-height: 20px;
        color: #ffffff!important;
        font-weight: 500;
        padding-right: 2rem;
    }
    .navbar-collapse{
      padding: 0.5rem 0rem;
    }
    
    .logo img{
    top: -3rem;
    z-index: 100000;
    position: relative;
        width: 80%;
}
    .user-hover{
   
    width: 245px;

    filter: drop-shadow(0px 3px 3.5px rgba(0,0,0,0.16));
    background-color: #ffffff;
    padding-top: 0.5rem;
    padding-bottom: 2rem;
    }
    .user-img img{
    border-radius: 10px;
    background-color: #adadad;
    }
    .user-name{
      color: black;
      font-weight: 600;
    }
    .logout, .profile{
      line-height: 20px;
      color: #adadad;
      font-weight: 400;
      font-family: "Montserrat";
    }
     .profile:hover, .logout:hover{
    color: #393939;
    font-weight: 400;
           line-height: 20px;
    }
    .btn-secondary:hover, .btn-secondary {
    background-color: transparent!important;
    border-color: transparent!important;
}
  #button-2:active{
    background-color: transparent!important;
    border-color: transparent
  }
  .navbar-toggler {
    width: inherit;
    text-align: end;
    border: none;
  }
  .navbar-toggler:focus{
    border: none;
    box-shadow: none;
  }
  #nav-collapse{
    background-color: #223D8F;
  }
  @media screen and (max-width:1160px){
   .nav-link, .nav-item{
     font-size: 12px;
   }
  }
  @media screen and (max-width:991px){
    .logo img {
    top: -2.3rem;
    }
  }
</style>