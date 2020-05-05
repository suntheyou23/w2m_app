$(function() {
    $(".change").on("click", function() {
        var w, m = "";

        w = $("#w_box").val();

        for (var i=0; i<(w.match( /w|W/g ) || [] ).length; i++) {
            m += 'm';
        }


    
        $("#w_box").val(m);
    }); 
});