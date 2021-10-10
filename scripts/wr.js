$(document).ready(function(){
    var contentText = ['This is the w3c page dedicated to defining web application standards, the public \
                    as well as the w3c\'s full time staff come togethor as an international community to collaborate as the \
                    internet evolves', 
                    'The XMLHttpRequest API definition organized as an easy to read outline', 
                    'A basic C# reference from Loyola University with an easy to navigate UI', 
                    'A frequently updated HTML specification outline, helpful to keep up with \
                    the ever evolving face of the internet',
                    'Apache Web Server specifications that is very usefull for configuration, security and \
                    much more'];
    var importanceText = ['link1Importance', 'link2Importance', 'link3Importance', 'link4Importance', 'link5Importance']
    var audienceText = ['link1AudienceText', 'link2AudienceText', 'link3AudienceText', 'link4AudienceText', 'link5AudienceText']
    var useText = ['link1UseText', 'link2UseText', 'link3UseText', 'link4UseText', 'link5UseText'];
    var ratingVal = ['link1Rating', 'link2Rating', 'link3Rating', 'link4Rating', 'link5Rating'];
    var linkContentArr = [contentText, importanceText, audienceText, useText, ratingVal];
    //var listItems = $('ol').children();
    var counter = 0;
    $('ol li').each(function(){
        var sublist = `list${counter}`
        $(this).append(`<ul class="${sublist}"></ul>`);
        counter+=1;
        for(var p in linkContentArr){
            $(`.${sublist}`).append(`<li>${linkContentArr[p][counter - 1]}</li>`)
        }
    })
});
$(document).ready(function(){
    $('ul').hide();
    $('ol li').on("mouseover", function(){
        $(this).children().show();
        $(this).children().attr('class', 'current');
        $
    })
});

    $(document).ready(function(){
    $('.container-fluid').css({"margin":"5%"});
});
