        
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
                    //$(".draggable").remove();
                    
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
                console.log(el.length);
                bt.click(function () {
                $(el).remove();
                    //$(".draggable").remove();
                    console.log(el.length);
                    
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
                    //$(".draggable").remove();
                    console.log(el.length);
                    
                });
            });


            // $(".create_object").click(function () {
                
            //     var el = $('<div><p contenteditable="true" style="font-weight:bold";> InterfaceName </p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p></div>');
            //     var bt = $('<button class="delete_interface">Remove Interface</button>');
    
            //     $(el).attr({
            //         'class': 'draggable'
            //     }).draggable({containment: "#containment-wrapper", scroll: false })
            //     .resizable({minHeight: 150, minWidth: 155})
            //     .append(bt)
            //     .appendTo("#containment-wrapper");
            //     console.log(el.length);
            //     bt.click(function () {
            //     $(el).last().remove();
            //         //$(".draggable").remove();
            //         console.log(el.length);
                    
            //     });
            // });



            

        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    


















    
    /*   
        //Menu
        $( "#menu" ).menu();
        $( "#accordion" ).accordion({collapsible: true});
        
        

        //Create CLASS
        $(".create_block").click(function () {
            $('<div><p contenteditable="true" style="font-weight:bold";>ClassName</p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p><button id = "delete_block" class= "removebutton">Remove Class</button></div>').attr({
                'class': 'draggable'
            }).draggable({containment: "#containment-wrapper", scroll: false }).resizable({minHeight: 150, minWidth: 155}).appendTo("#containment-wrapper");
            //initiate draggable on every new created elements
            $( ".draggable" ).draggable("instance");
            });
    
        $(".delete_block").click(function () {
                $('<div><p contenteditable="true" style="font-weight:bold";>ClassName</p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p><button id = "delete_block" class= "removebutton">Remove Class</button></div>').attr({
                    'class': 'draggable'
                }).draggable();
                //initiate draggable on every new created elements
                //$( ".draggable" ).draggable().hide("draggable");
                $( ".draggable").remove();
            });



    //Create INTERFCAE
    var el = $('<div><p contenteditable="true" style="font-weight:bold";> InterfaceName </p><hr class="draghr"><p contenteditable="true">+ field:Type</p><hr class="draghr"><p contenteditable="true">+ methodName(type):type</p></div>');
    var bt = $('<button class="delete_interface">Remove Interface</button>');
        $(".create_interface").click(function () {
            $(el).attr({
                'class': 'draggable'
            }).draggable({containment: "#containment-wrapper", scroll: false }).resizable({minHeight: 150, minWidth: 155}).append(bt).appendTo("#containment-wrapper");
            //initiate draggable on every new created elements

            //$( ".draggable" ).draggable("instance");

            bt.click(function () {
                $( ".draggable").remove();
            });

            });

        */ 
