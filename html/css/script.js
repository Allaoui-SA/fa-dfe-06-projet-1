$(function() {

    var track
    $("#submit-content").click(function(e) {
        $(".order").find("a").css("font-weight", "normal");
        e.preventDefault();
        var track = $("#search-content").val();
        $.ajax({
            url: 'https://api.deezer.com/search?q='+track+'&output=jsonp',
            type: 'GET',
            jsonp: "callback",
            dataType : "jsonp",
            success : function(response){
                $(".recherche-liste").find("div.d-flex-icone").replaceWith("<div class=\"d-flex-icone\"></div>")
                for(i=0; ; i++) {
                    $(".recherche-liste").find("div.d-flex-icone").append("<div class=\"d-flex-track\"><img src=\"" + response.data[i]["album"]["cover_medium"] + "\" alt=\"\"><div><p class=\"song-title\">"+ response.data[i]["title_short"]+"</p><p class=\"artist-album\">" + response.data[i]["artist"]["name"] + " / "+ response.data[i]["album"]["title"] + "</p><audio controls><source src=\""+ response.data[i]["preview"] +"\" type=\"audio/mp3\"></audio><p><img class=\"icone\" src=\"images/like-red.png\" alt=\"\"></p></div></div>");    
                }
            }
        });
    });
    $(".order").find("a").click(function()  {
        $(".order").find("a").css("font-weight", "normal");
        $(this).css("font-weight", "bold");
    });
    $(".album").click(function(e)  {
        e.preventDefault();
        var track = $("#search-content").val();
        $.ajax({
            url: 'https://api.deezer.com/search?q='+track+'&order=ALBUM_ASC&output=jsonp',
            type: 'GET',
            jsonp: "callback",
            dataType : "jsonp",
            success : function(response){
                $(".recherche-liste").find("div.d-flex-icone").replaceWith("<div class=\"d-flex-icone\"></div>")
                for(i=0; ; i++) {
                    $(".recherche-liste").find("div.d-flex-icone").append("<div class=\"d-flex-track\"><img src=\"" + response.data[i]["album"]["cover_medium"] + "\" alt=\"\"><div><p class=\"song-title\">"+ response.data[i]["title_short"]+"</p><p class=\"artist-album\">" + response.data[i]["artist"]["name"] + " / "+ response.data[i]["album"]["title"] + "</p><audio controls><source src=\""+ response.data[i]["preview"] +"\" type=\"audio/mp3\"></audio><p><img class=\"icone\" src=\"images/like-red.png\" alt=\"\"></p></div></div>");    
                }
            }
        });
    });
    $(".artiste").click(function(e)  {
        e.preventDefault();
        var track = $("#search-content").val();
        $.ajax({
            url: 'https://api.deezer.com/search?q='+track+'&order=ARTIST_ASC&output=jsonp',
            type: 'GET',
            jsonp: "callback",
            dataType : "jsonp",
            success : function(response){
                $(".recherche-liste").find("div.d-flex-icone").replaceWith("<div class=\"d-flex-icone\"></div>")
                for(i=0; ; i++) {
                    $(".recherche-liste").find("div.d-flex-icone").append("<div class=\"d-flex-track\"><img src=\"" + response.data[i]["album"]["cover_medium"] + "\" alt=\"\"><div><p class=\"song-title\">"+ response.data[i]["title_short"]+"</p><p class=\"artist-album\">" + response.data[i]["artist"]["name"] + " / "+ response.data[i]["album"]["title"] + "</p><audio controls><source src=\""+ response.data[i]["preview"] +"\" type=\"audio/mp3\"></audio><p><img class=\"icone\" src=\"images/like-red.png\" alt=\"\"></p></div></div>");    
                }
            }
        });
    });
    $(".titre").click(function(e)  {
        e.preventDefault();
        var track = $("#search-content").val();
        $.ajax({
            url: 'https://api.deezer.com/search?q='+track+'&order=TRACK_ASC&output=jsonp',
            type: 'GET',
            jsonp: "callback",
            dataType : "jsonp",
            success : function(response){
                $(".recherche-liste").find("div.d-flex-icone").replaceWith("<div class=\"d-flex-icone\"></div>")
                for(i=0; ; i++) {
                    $(".recherche-liste").find("div.d-flex-icone").append("<div class=\"d-flex-track\"><img src=\"" + response.data[i]["album"]["cover_medium"] + "\" alt=\"\"><div><p class=\"song-title\">"+ response.data[i]["title_short"]+"</p><p class=\"artist-album\">" + response.data[i]["artist"]["name"] + " / "+ response.data[i]["album"]["title"] + "</p><audio controls><source src=\""+ response.data[i]["preview"] +"\" type=\"audio/mp3\"></audio><p><img class=\"icone\" src=\"images/like-red.png\" alt=\"\"></p></div></div>");    
                }
            }
        });
    });
    $(".pop").click(function(e)  {
        e.preventDefault();
        var track = $("#search-content").val();
        $.ajax({
            url: 'https://api.deezer.com/search?q='+track+'&order=RATING_ASC&output=jsonp',
            type: 'GET',
            jsonp: "callback",
            dataType : "jsonp",
            success : function(response){
                $(".recherche-liste").find("div.d-flex-icone").replaceWith("<div class=\"d-flex-icone\"></div>")
                for(i=0; ; i++) {
                    $(".recherche-liste").find("div.d-flex-icone").append("<div class=\"d-flex-track\"><img src=\"" + response.data[i]["album"]["cover_medium"] + "\" alt=\"\"><div><p class=\"song-title\">"+ response.data[i]["title_short"]+"</p><p class=\"artist-album\">" + response.data[i]["artist"]["name"] + " / "+ response.data[i]["album"]["title"] + "</p><audio controls><source src=\""+ response.data[i]["preview"] +"\" type=\"audio/mp3\"></audio><p><img class=\"icone\" src=\"images/like-red.png\" alt=\"\"></p></div></div>");    
                }
            }
        });
    });
    $(".rang").click(function(e)  {
        e.preventDefault();
        var track = $("#search-content").val();
        $.ajax({
            url: 'https://api.deezer.com/search?q='+track+'&order=RANKING_ASC&output=jsonp',
            type: 'GET',
            jsonp: "callback",
            dataType : "jsonp",
            success : function(response){
                $(".recherche-liste").find("div.d-flex-icone").replaceWith("<div class=\"d-flex-icone\"></div>")
                for(i=0; ; i++) {
                    $(".recherche-liste").find("div.d-flex-icone").append("<div class=\"d-flex-track\"><img src=\"" + response.data[i]["album"]["cover_medium"] + "\" alt=\"\"><div><p class=\"song-title\">"+ response.data[i]["title_short"]+"</p><p class=\"artist-album\">" + response.data[i]["artist"]["name"] + " / "+ response.data[i]["album"]["title"] + "</p><audio controls><source src=\""+ response.data[i]["preview"] +"\" type=\"audio/mp3\"></audio><p><img class=\"icone\" src=\"images/like-red.png\" alt=\"\"></p></div></div>");    
                }
            }
        });
    });
    $(".d-flex-track").find("img.icone").click(function() {
        $(this).toggleClass("liked");
    });

    
});