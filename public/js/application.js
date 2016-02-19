$(document).ready(function () {


    // intercept delete button
    $("#todos").on("click", '#delete_link', function(e) {  
        e.preventDefault();
        alert("CLICK")
        var $uri = $(this).attr('href');

        // ajax request starts
        var ajaxRequest = $.ajax({
          url: $uri,
          type: 'DELETE'
        });
        // ajax request ends

      //ajax success response
      ajaxRequest.done(function(serverResponse, status, jqXHR) {
        var strThis = $('#delete_link').parent();
        
        var todo_id = "#todo_" + serverResponse.todo_id
        console.log(todo_id);
        $(todo_id).remove();

// console.log('==========================')
// console.log(serverResponse)
// console.log($uri)
// console.log($(this).parent());
// console.log($(this));
// console.log('==========================')



      });



      });
    // intercept delete button
    
    // intercept new form
    $('#new_todo').on('submit', function(e) {
        e.preventDefault();
        var $uri = $(this).attr('action');
        var $data = $(this).serialize();

        // ajax request starts
        var ajaxRequest = $.ajax({
          url: $uri,
          type: 'POST',
          data: $data
        });
        // ajax request ends

      //ajax success response
      ajaxRequest.done(function(serverResponse, status, jqXHR) {
        var task = serverResponse.task;
        var id = serverResponse.id;
        console.log(task);
        console.log(id);
        $('#todos').append("<li id='todo_" + id + "'>" +
          "(" + id + ") - " + task + " - <a href='/todos/" + id + "' id='delete_link'>Delete</a></li>");

      
      });




    });
    // intercept new form





});
