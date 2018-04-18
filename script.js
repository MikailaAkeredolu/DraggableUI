        
    //Menu
    $( "#menu" ).menu();
    $( "#accordion" ).accordion({collapsible: true});

            $(".createClass").click(function () {

                var el = $('<div style="border:solid 2px #ccc";><p contenteditable="true" style="font-weight:bold";> ClassName </p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p></div>');
                var bt = $('<button class="deleteClass" style="position:absolute; top:0; right:0;" >X</button>');
    
                $(el).attr({
                    'class': 'draggable'
                }).draggable({containment: "#containment-wrapper", scroll: false, stack: el })
                .resizable({minHeight: 150, minWidth: 155})
                .appendTo("#containment-wrapper")
                .append(bt)
                .css({position: 'absolute'})
                bt.click(function () {
                $(el).remove();    
                });
            });



            $(".createInterface").click(function () {
                
                var el = $('<div style="border:solid 2px #ccc";><p contenteditable="true" style="font-weight:bold";> InterfaceName </p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p></div>');
                var bt = $('<button class="deleteClass" style="position:absolute; top:0; right:0;" >X</button>');
    
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
                
                var el = $('<div style="border:solid 2px #ccc";><p contenteditable="true" style="font-weight:bold";> ObjectName </p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p></div>');
                var bt = $('<button class="deleteClass" style="position:absolute; top:0; right:0;" >X</button>');
    
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