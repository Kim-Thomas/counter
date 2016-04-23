window.transform_number = function(selector, speed, mode) {
    selector.addClass('counter');
    var number_array = selector.html().replace(/ /g, '').split('');
    var new_html = "";
    number_array.forEach(function(current, index) {
        if(parseInt(current) === parseInt(current, 10)) { }
        else {
            number_array.splice(index, 1);
        }
    });
    number_array.forEach(function(current, index) {
        new_html = new_html + "<span class='dig' data-dig='"+(index + 1)+"'>"+current+"</span>";
    });   
    selector.html(new_html);
    counter(selector, speed, mode);
}

window.counter = function(counter, speed, mode) {
    var dig_count = 0;
    counter.find('.dig').each(function() {
        if(mode == 'fixed_width') {
            $(this).css('opacity', 0);    
        }
        if(mode == 'flex') {
            $(this).hide();   
        }
        dig_count += 1;
    });

    var i = dig_count;
    function f() {
        var $current_dig = counter.find('.dig[data-dig='+i+']');
        if(mode == 'fixed_width') {
            $current_dig.animate({'opacity': 1}, speed);    
        }
        if(mode == 'flex') {
            $current_dig.fadeIn(speed);  
        }
        var current_dig_val = $current_dig.html();
        $current_dig.html(0);

        var k = 0;
        function g() {
            $current_dig.html(parseInt($current_dig.html()) + 1);
            k++;
            if( k < 9 ){
                setTimeout( g, speed/5 );
            }  
            if( k == 9 ){
                $current_dig.html(parseInt(current_dig_val));
            }
        }
        g();

        i--;
        if( i >= 1 ){
            setTimeout( f, speed );
        }
    }
    f();
}