function Orientation(id) {
    this.id = id;
};

Orientation.ScreenOrientation = new Orientation(getOrientation());

function getOrientation() {
    var o = screen.orientation.type;
    var orien = o.replace('-primary','');
    if(orien === 'portrait') {
        return 0;
    } else {
        return 1;
    }
};
//window.onload = getOrientation();

$(window).on("orientationchange", function(event){
    //$('.col-sm-12').html('<h2>Contact</h2>');
    var names = ['portrait', 'landscape'];
    //Orientation.prototype.newOrientation = new Orientation(getOrientation());
    Orientation.ScreenOrientation = new Orientation(getOrientation());
    $( "#orientation" ).text( "This device is in " + names[Orientation.ScreenOrientation.id] + " mode!" );
});