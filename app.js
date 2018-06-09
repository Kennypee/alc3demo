$('.alert-btn').click(function(){

  // var name = $('.text-input').val();
  // alert(name)
  $('#p').text('Loading...');

  // $.ajax({

  //   type: "GET",
  //   url: "https://api.meetup.com/2/member/self/?key=481b146e303554502f3d32c3ae44",
  //   success: function(data){
  //     $('#p').text(JSON.stringify(data));

  //     var Person = data.name;
  //     $('#h').text(Person);


  //   },
  //   dataType: "jsonp",
  //   error:   $('#p').text('there was an error...'),

  // });


  $.ajax({
    type: "GET",
    url: "https://www.reddit.com/r/aww/search.json?q=puppy$restrict_sr=true",
    success: function(response){

      for(i=0; i<response.data.children.length; i++){

        var puppies = "<img src = '"+response.data.children[0].data.preview.images[0].source.url+"'/>"

         $('#p').html(puppies);
      }

    }
  });
  

});



$('#body').click(function(){


})