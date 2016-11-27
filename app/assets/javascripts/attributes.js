$( document ).ready(function() {
 var i = 1;
 $('#addAttribute').on('click',function(e){
   i +=1
   $( "#sidebar" ).append('<div class="input-block"><input class="attributeName" placeholder="Attribute name"><div class="record"></div><div class="recording">Recording</div></div>');
 })
})