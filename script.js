        
    //Menu
    $( "#menu" ).menu();
    $( "#accordion" ).accordion({collapsible: true});

            $(".createClass").click(function () {

                var el = $('<div><p contenteditable="true" style="font-weight:bold";> ClassName </p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p></div>');
                var bt = $('<button class="deleteClass">Remove Class</button>');
    
                $(el).attr({
                    'class': 'draggable'
                }).draggable({containment: "#containment-wrapper", scroll: false, stack: "el" })
                .resizable({minHeight: 150, minWidth: 155})
                .append(bt)
                .css({position: 'absolute'})
                .appendTo("#containment-wrapper")
                bt.click(function () {
                $(el).remove();    
                });
            });



            $(".createInterface").click(function () {
                
                var el = $('<div><p contenteditable="true" style="font-weight:bold";> InterfaceName </p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p></div>');
                var bt = $('<button class="deleteInterface">Remove Interface</button>');
    
                $(el).attr({
                    'class': 'draggable'
                }).draggable({containment: "#containment-wrapper", scroll: false })
                .resizable({minHeight: 150, minWidth: 155})
                .append(bt)
                .css({position: 'absolute'})
                .appendTo("#containment-wrapper");
                bt.click(function () {
                $(el).remove();
                });
            });


            $(".createObject").click(function () {
                
                var el = $('<div><p contenteditable="true" style="font-weight:bold";> ObjectName </p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p></div>');
                var bt = $('<button class="deleteObject">Remove Object</button>');
    
                $(el).attr({
                    'class': 'draggable'
                }).draggable({containment: "#containment-wrapper", scroll: false })
                .resizable({minHeight: 150, minWidth: 155})
                .append(bt)
                .css({position: 'absolute'})
                .appendTo("#containment-wrapper");
                bt.click(function () {
                $(el).remove();
                });
            });