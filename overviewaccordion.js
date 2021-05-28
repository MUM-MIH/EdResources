// directs the function to work once the page has loaded.
window.onload=function(){	
	if (/section/.test(window.location.href)) {
        document.getElementById('hiddenoverview').style.display = 'none';
      }

	if ( $( "#accordion" ).length ) {
                $("#accordion").accordion({
                        header: "h5",
                        collapsible: false,
                        heightStyle: "content",
                        active: 0,
                });
         }
};
