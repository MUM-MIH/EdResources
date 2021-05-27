      window.onload = (function() {
        if ( $( "#accordion" ).length ) {
                $("#accordion").accordion({
                        header: "h5",
                        collapsible: false,
                        heightStyle: "content",
                        active: 0,
                });
         }
       });
