$(function(){
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });
    
    $("a").click(function(event){
        if(this.hash !== "") {
        event.preventDefault();

        var gato = this.hash; 

        $("html, body").animate({
            scrollTop: $(gato).offset().top 
        },200, function(){
            window.location.hash = gato; 
        });
        }
    });

    
    
});