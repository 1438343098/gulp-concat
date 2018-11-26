	 function myKeyPress(myEvent) {
        var k;
        if (window.event)
            k = myEvent.keyCode;     //IE
        else
            k = myEvent.which;     //firefox

        if ((k == 46) || (k == 8) || (k == 109) || (k == 190) || (k == 110)|| (k >= 48 && k <= 57) || (k >= 96 && k <= 105) || (k >= 37 && k <= 40))
        { 
        	console.log('--------')
        }
        else if (k == 13) {
            if (window.event)
                myEvent.keyCode = 9;
            else
                myEvent.which = 9;
        }
        else {
            //window.event.returnValue = false;
            if (document.all)
                myEvent.returnValue = false; //ie
            else
                myEvent.preventDefault(); //ff
        }
    }
	 
	 function mykeyUp(obj)
	 {
	 	if(obj.value !=''&& obj.value.substr(0,1) == '.'){  
	 		obj.value="";
	 	};	
		obj.value = obj.value.replace(/[^\d]/g,""); 
		obj.value = obj.value.replace(/\.{2,}/g,".");
	}	