$(document).ready(function(){
    var contentText = ['This is the w3c page dedicated to defining web application standards, the public \
                    as well as the w3c\'s full time staff come togethor as an international community to \
                     collaborate as the internet evolves', 
                    'The XMLHttpRequest API definition organized as an easy to read outline', 
                    'A basic C# reference from Loyola University with an easy to navigate UI', 
                    'A frequently updated HTML specification outline, helpful to keep up with \
                    the ever evolving face of the internet',
                    'Apache Web Server specifications that is very usefull for configuration, security and \
                    much more'];
    var importanceText = ['This resource allows the public as well as full time dedicated staffers to collaborate \
                        and standardize the web making the web safer and more accessible', 
                        'This resource provides developers with an Ajax reference', 
                        'This resource provides students with a C# resource', 
                        'This resource provides users with the latest HTML standards and specifications', 
                        'For server configuration information and much more']
    var audienceText = ['The target audience for this resource is the general public with an emphasis on the \
                         developer community', 
                        'Audience for this resource is Ajax developers', 
                        'Audience for this resource is C# Students',
                        'Audience for this resource is web developers', 
                        'Audience for this resource is web developers and system admins']
    var useText = ['Used as a reference or learning tool',
                    'Useful as a reference for HTTP requests',
                    'A basic C# Reference that is easy to navigate', 
                    'Useful to stay up to date on HTML updates and standards', 
                    'Useful as a Apache configuration reference'];
    var ratingVal = ['link1Rating', 'link2Rating', 'link3Rating', 'link4Rating', 'link5Rating'];
    
    var linkContentArr = [contentText, importanceText, audienceText, useText, ratingVal];
    //var listItems = $('ol').children();
    var counter = 0;
    $('ol li').each(function(){
        var sublist = `list${counter}`;
        //var sublist = `sublist`;
        $(this).append(`<ul class="${sublist}" id=subList></ul>`);
        counter+=1;
        for(var p in linkContentArr){
            $(`.${sublist}`).append(`<li>${linkContentArr[p][counter - 1]}</li>`)
        }
    })
});
$(document).ready(function(){
    //put the links here so that I could reuse this function for a mobile version
    //while having the hover functionality
    var linkLocations = [`https://www.w3.org/standards/`,
    `https://xhr.spec.whatwg.org/`,
    `http://anh.cs.luc.edu/170/notes/CSharpHtml/genindex.html`, 
    `https://html.spec.whatwg.org/multipage/`,
    `http://httpd.apache.org/docs/2.4/` ];
    $('ul').hide();
    $('ol li').hover(function(){
        $(this).children().fadeIn(600);
        $(this).css({'text-decoration':'underline'})
        $(this).click(function(){
            var path=linkLocations[$(this).index()];
            window.location.href=path;
        });
    },function(){
        $(this).css({'text-decoration':'none'})
        $(this).children().last().hide();
        console.log($(this).children().last());
    });
});
    $(document).ready(function(){
    $('.container-fluid').css({"margin":"5%"});
    //$('.topList').css({"display":"grid"})
                        
});
