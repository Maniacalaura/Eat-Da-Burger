$(document).ready(function(){


    $(".devour").on("submit", function(event){
        event.preventDefault();
        var burgerId = $(this).children("#input").val();
        console.log(burgerId);
        
        $.ajax({
            url: "/api/burgers/" + burgerId, 
            method: "PUT",
            data: {
                "devoured": "1"
            }
        }).then(function(res){
            console.log("test: ", res);
            location.reload()
        })
    });

    $.ajax({
        
    })



});