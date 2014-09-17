$( document ).ready(function() {

    //CREATE NEW ELEMENT
    $(document).on('click', '.controls > .create', function(){
        var Object = prompt ('Select a new element name', 'Subchild');
        var Parent = $(this).parent().parent();
        if(Object !== null){
            Parent.children('ul').children('li:last-child').after('<hr><li><span class="text">'+ Object +'</span><span class="edit"><span class="add">Add</span><span class="rename">Rename</span><span class="remove">Remove</span></span></li>');
            if(Parent.children('.general').children('li').length == 0){
                Parent.children('ul').html('<hr><li><span class="text">'+ Object +'</span><span class="edit"><span class="add">Add</span><span class="rename">Rename</span><span class="remove">Remove</span></span></li>');
            }
        }
    });

    //ADD NEW OBJECT
    $(document).on('click', '.submenu > .edit > .add', function(){
        var Object = prompt ('Select a new object name', 'Subchild');
        var Parent = $(this).parent().parent();
        if(Object !== null){
            Parent.has('ul').children('ul').children('li:last-child').after('<hr><li><span class="text">'+ Object +'</span><span class="edit"><span class="add">Add</span><span class="rename">Rename</span><span class="remove">Remove</span></span></li>');
        }
    });

    //ADD NEW BRANCH OF OBJECTS
    $(document).on('click', '.add:not(.submenu > .edit > .add)', function(){
        var Object = prompt ('Select a new object name', 'Subchild');
        var Parent = $(this).parent().parent();
        if(Object !== null){
            Parent.children('span:last-child').after('<ul class="sub"><hr><li><span class="text">'+ Object +'</span><span class="edit"><span class="add">Add</span><span class="rename">Rename</span><span class="remove">Remove</span></span></li></ul>');
            Parent.addClass('submenu');
        }
    });

    //OBJECT RENAME FUNCTION
    $(document).on('click','.rename', function(){
        var Old = $(this).parent().parent().children('.text').text()
        var Name = prompt ('Select a new object name', Old);
        $(this).parent().parent().children('.text').text(Name);

        if($(this).parent().parent().children('.text').text() == ''){
            $(this).parent().parent().children('.text').text(Old);
        }
    });

    //REMOVE OBJECTS AND BRANCHES
    $(document).on('click', '.remove', function(){
        $(this).parent().parent().fadeOut(1000, function(){
            $(this).prev('hr').remove();
            $(this).remove();
        });
        var Parent = $(this).parent().parent().parent();
        if(Parent.children('li').length == 1){
            Parent.parent().removeClass('submenu');
            Parent.not('.general').remove();
        }
    });

    //CLOSE AND OPEN BRANCHES
    $(document).on('click', '.submenu > .text', function(){
        $(this).parent().children().children('li').slideToggle();
        $(this).parent().children().children('hr').slideToggle();
        $(this).parent().children('.edit').children('.add').fadeToggle();
        $(this).parent().has('ul').toggleClass('active');
    });
});
