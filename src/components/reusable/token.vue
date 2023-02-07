<script>
    export default{
         getToken() {
	let token =  $cookies.get('token');
	   if ( token != null){
            return token;
        }else{
        return false
        };

  },
   getStudioId() {
	let studio_id =  $cookies.get('studio_id');
	   if ( studio_id != null){
            return studio_id;
        }else{
        return false
        };

  },
    }
</script>