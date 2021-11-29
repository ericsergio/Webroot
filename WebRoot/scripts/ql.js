$(document).ready(function(){
    let imgs = ["../img/site1.png", "../img/site2.png", "../img/site3.png", "../img/code1.png", "../img/code2.png",
     "../img/code3.png", "../img/teamwork1.png", "../img/teamwork2.png", "../img/teamwork3.png", "../img/teamwork4.png"];
    for(p in imgs) {
        $('#imageContent').append(`<li class = 'd-inline-block'><img alt = 'imgAlt' src = '${imgs[p]}'/></li>`);
    }
})

/*$(document).ready(function(){
    $('img').on('click', function(){
        $(this).css[{
            "height":"",
            "width":""
        }]
    })
})*/

$(document).ready( function() {
    $('#imageContent .d-inline-block img').hover(
        function() {
            $(this).animate({ 'zoom': 1.2 }, 400);
        },
        function() {
            $(this).animate({ 'zoom': 1 }, 400);
        });
    });