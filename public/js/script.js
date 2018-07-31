$(document).ready(function(){


    $(".devour").on("submit", function(event){
        event.preventDefault();
        var burgerId = $(this).children("#input").val();
        
        $.ajax({
            url: "/api/burgers/" + burgerId, 
            method: "PUT",
            data: {
                "devoured": "1"
            }
        }).then(function(res){
            location.reload()
        })
    });
    console.log("Before suggest");

    
    $(".suggest").on("click", function(event){
        event.preventDefault();
        var newBurger = $("#burg").val().trim();
        console.log(newBurger)
        $.ajax({
            url: "/api/burgers",
            type: "POST", 
            data: {"burger_name": $("#burg").val().trim(),
            "devoured": "0"
        }
        }).then(function(res){
            location.reload()
        });
     console.log("After suggest")   

    });
});