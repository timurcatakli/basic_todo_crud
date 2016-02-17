$(document).ready(function () {


    // intercept delete button
    $('#delete_div').on('submit', '#delete_form', function(e) {
        e.preventDefault();
        // var $voteUri = $(this).attr('href');
        // var $voteButton = $(this);
        var $uri = $(this).attr('action');
        var $data = $(this).serialize();
        console.log($uri);


        // ajax request starts
        var ajaxRequest = $.ajax({
          url: $uri,
          type: 'POST'
          data: $data
        });
        // ajax request ends





      });
    // intercept delete button




});
