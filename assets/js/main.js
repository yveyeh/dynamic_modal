// handling the popover :: displayed both on hover on the button or popover itself.
$(".pop").popover({ trigger: "manual", html: true, animation:false})
    .on("mouseenter", function () {
        var _this = this;
        $(this).popover("show");
        $(".popover").on("mouseleave", function () {
            $(_this).popover('hide');
        });
    }).on("mouseleave", function () {
        var _this = this;
        setTimeout(function () {
            if (!$(".popover:hover").length) {
                $(_this).popover("hide");
            }
        }, 300);
});

// handling addition of tabs dynamically in the create chapter modal.
$('#new_chapter').click(function() {
    $('#chapters').append(' <div class="chapter">'+
                                '<i class="fa fa-trash-o"></i>'+
                                '<button class="collapsible"> New Chapter </button>'+
                                '<div class="content">'+
                                    '<div class="form-group"><br>'+
                                        '<input type="text" class="form-control" placeholder="Enter Chapter Name" required>'+
                                    '</div>'+
                                    '<div class="form-group">'+
                                        '<input type="number" min="1" class="form-control" placeholder="Enter Chapter Volume" required>'+
                                    '</div>'+
                                    '<div class="form-group">'+
                                        '<input type="number" min="1" class="form-control" placeholder="Enter Chapter Sessions" required>'+
                                    '</div>'+
                                    '<div class="form-group" hidden>'+
                                        '<input type="text" class="form-control" value="" required>'+
                                    '</div>'+
                                '</div>'+
                            '</div>');
    $('#chapters').css('background-color', 'white');
});

// handling collapse event on every button to view non-displayed div containing form.
$('.collapsible').each(function() {
    $(document).on('click', '.collapsible', function() {
        $(this).toggleClass('active');
        if (this.nextElementSibling.style.maxHeight) {
            this.nextElementSibling.style.maxHeight = null;
        } else {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + "px";
        }
    });
});

// handling deletion of a dynamically added tab in the create chapter modal.
$(document).on('click', 'i.fa-trash-o', function() {
    $(this).parent().remove();
    let children = $('#chapters').children().length;
    if (children == 1) {
        $('#chapters:before').css({"content": "\25AE", "font-family": "FontAwesome", "position":"absolute"});
    }
});
