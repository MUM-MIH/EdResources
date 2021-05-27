      $(function() {
        if ( $( "#accordion1, #accordion2" ).length ) {
                $("#accordion1, #accordion2").accordion({
                        header: "h5",
                        collapsible: false,
                        heightStyle: "content",
                        active: 0,
                });
         }
       });
