if (/section/.test(window.location.href)) {
        document.getElementById('hiddenoverview').style.display = 'none';
      }

      jQuery(function() {
        if ( $( "#accordion" ).length >0 ) {
                $("#accordion").accordion({
                        header: "h5",
                        collapsible: false,
                        heightStyle: "content",
                        active: 0,
                });
         }
       });
