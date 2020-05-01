
$(document).ready(function(){
    
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    };
    if (mm < 10) {
        mm = '0' + mm;
    };
    var oggi = (dd + '/' + mm + '/' + yyyy);

    $('#date').text(oggi);
 
    $('.action-button, .standard-button').mouseover(function(){
        $(this).children('div').removeClass().addClass('animate');
    });
    $('.action-button, .standard-button').mouseleave(function(){
        $(this).children('div').removeClass().addClass('turnback');
    });
    $('.action-button, .standard-button').click(function(){
        $(this).removeClass('show').addClass('hidden');
        $('.back-button').removeClass('hidden').addClass('show');
        // qui parte il gioco
        $('.central-section').removeClass('hidden').addClass('show');
        
        $('.box').show();
        $('.box.scroll').hide();
        $('.gameArea').children('h6').text('');
        $('.header-right').removeClass('show').addClass('hidden');
        

    });
    $('.back-button').mouseover(function () {
        $(this).children('div').removeClass().addClass('animate');
    });
    $('.back-button').mouseleave(function () {
        $(this).children('div').removeClass().addClass('turnback');
    });
    $('.back-button').click(function () {
        $(this).removeClass('show').addClass('hidden');
        $('.action-button, .standard-button').removeClass('hidden standard-button').addClass('action-button show');
        $('.central-section').removeClass('show').addClass('hidden');
    });

    $('#submit').click(function(){
        var username = $('#username').val();
        $('.box').hide();
        $('.box.scroll').show().removeClass('hidden').addClass('show');
        $('.gameArea').children('h6').text(username);
        $('.header-right').removeClass('hidden').addClass('show');
    });

    
    
    $(function () {
        var posizione = '';
        $(".draggable").draggable({
            revert: "invalid",
            snap: ".ui-widget-header",
            drag: function (event) {
                posizione = $(this).attr('position');                
            }
        });
        $(".droppable").droppable({
            classes: {
                "ui-droppable-active": "ui-state-active",
                "ui-droppable-hover": "ui-state-hover"
            },
            drop: function (event, ui) {
                var lunghezza = $('#sortable div.long').length;                
                if (lunghezza < 3) {
                    console.log(lunghezza);
                    var newgendre = 'long ' + posizione;
                    var box = 'littleBox ' + posizione;
                    $(this).removeClass().addClass(newgendre);
                    $(this).children().removeClass().addClass(box);
                    var stringa = '[position="' + posizione + '"]';
                    $(document).find(stringa).remove();
                }
                if (lunghezza == 2) {
                    $('.box-container').empty();
                }
            }
        });

        $(function () {
            $("#sortable").sortable();
            // $("#sortable").disableSelection();
        });
    });

});