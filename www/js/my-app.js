// Dom7  palte-pipe-forging-fitting-tube-pressure bolting-structural
serviceIdx=0;
materialIdx=1;
plateIdx=2;
pipeIdx=3;
forgeIdx=4;
fittingIdx=5;
tubeIdx=6;
pboltIdx=7;
sboltIdx=8;

const materials=[[
'Cryogenic Service','Cryogenic Service','Cryogenic Service','Low Temperature Service','Low Temperature Service','Low Temperature Service','Low Temperature Service','Low Temperature Service','Intermediate Temperature Service','Intermediate Temperature Service','Intermediate Temperature Service','Intermediate Temperature Service','Intermediate Temperature Service','Intermediate Temperature Service','High Temperature Service','High Temperature Service','High Temperature Service','High Temperature Service'],
['Stainless Steel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','Stainless Steel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','9 Nickel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','3.5 Nickel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','2.5 Nickel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','Carbon Steel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','Carbon Steel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','Carbon Steel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','Carbon Steel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','Carbon Steel <a class="link popover-open" href="#" data-popover=".popover-note4">(Note 4)</a>','1 Cr - 0.5 Mo','1.25 Cr - 0.5 Mo','2.25 Cr - 1 Mo','3 Cr - 1 Mo','Stainless Steel','Incoloy','Stainless Steel (SS 310)','Inconel'],
['SA 240 Type304, 304L, 316, 316L, 347','SA 240 Type304, 304L, 316, 316L, 347','SA 353','SA 203 Gr.D or E','SA 203 Gr.A or B','SA 516 All Gr. <a class="link popover-open" href="#" data-popover=".popover-note5">(Note 5)</a>','SA 516 All Gr.','SA 516 All Gr.','SA 516 All Gr. SA 285 Gr.C, Max. Thk. 0.75in.</br>SA 515 Gr.55,60,65, Max. Thk. 1.5in.','SA 516 All Gr. SA 285 Gr.C, Max. Thk. 0.75in.</br>SA 515 Gr.55,60,65, Max. Thk. 1.5in.','SA 387 Gr. 12 Cl. 1','SA 387 Gr. 11 Cl. 2','SA 387 Gr. 22 Cl. 1','SA 387 Gr. 21','SA 240 Type304, 316, 321, 347, (347 is prefered)','SB 424','SA 240 Type 310S, 310H','SB 443'],
['SA 312 Gr. TP, 304, 304L, 316, 316L , 347','SA 312 Gr. TP, 304, 304L, 316, 316L , 347','SA 333 Gr.8','SA 333 Gr.3','SA 333 Gr.3','SA 333 Gr.6','SA 333 Gr.6 or 1','SA 106 Gr.B','SA 106 Gr.B','SA 106 Gr.B','SA 335 Gr.P12','SA 335 Gr.P11','SA 335 Gr.P22','SA 335 Gr.P22','SA 312 Gr. TP304H, 316H, 321H, 347H','SB 423','SA 312 Gr. TP310S, 310H','SB 444'],
['SA 182 Gr. F304, 304L, 316, 316L, 347','SA 182 Gr. F304, 304L, 316, 316L, 347','SA 522','SA 350 Gr. LF3 Cl. 1,2','SA 350 Gr. LF3 Cl. 1,2','SA 350 Gr. LF2 Cl. 1','SA 350 Gr. LF1','SA 350 Gr. LF2 Cl. 2','SA 105 </br> SA 266 Gr. 2 <a class="link popover-open" href="#" data-popover=".popover-note6">(Note 6)</a>','SA 105 </br> SA 266 Gr. 2 <a class="link popover-open" href="#" data-popover=".popover-note6">(Note 6)</a>','SA 182 Gr. F12','SA 182 Gr. F11','SA 182 Gr. F22','SA 182 Gr. F22','SA 182 Gr. F304H, 316H, 321H, 347H','SB 425','SA 182 Gr. F310, F310H','SB 446'],
['SA 403 Gr. WP 304, 304L, 316, 316L, 347','SA 403 Gr. WP 304, 304L, 316, 316L, 347','SA 420 Gr. WPL8','SA 420 Gr. WPL3','SA 420 Gr. WPL3','SA 420 Gr. WPL6','SA 420 Gr. WPL6','SA 234 Gr. WPB','SA 234 Gr. WPB','SA 234 Gr. WPB','SA 234 Gr. WP12','SA 234 Gr. WP11 Cl. 1','SA 234 Gr. WP22','SA 234 Gr. WP22','SA 403 Gr. 347H','SB 366','SA 403 Gr. 310S','SB 366'],
['SA 213 Gr. TP 304, 304L, 316, 316L, 347','SA 213 Gr. TP 304, 304L, 316, 316L, 347','SA 334 Gr. 8','SA 334 Gr. 3','SA 334 Gr. 3','SA 334 Gr. 6 </br> SA 179','SA 179','SA 179 </br> SA 210','SA 179 </br> SA 210','SA 179 </br> SA 210','SA 213 Gr. T12','SA 213 Gr. T11','SA 213 Gr. T22','SA 213 Gr. T22','SA 213 Gr. TP304H','Incoloy Tube','SA 213 Gr. TP 310S, 310H','Inconel Tube'],
['Bolts: SA 320 Gr. B8 strain hardened </br>Nuts: SA 194 Gr. 8','Bolts: SA 193 Gr.  B8</br>Nuts: SA 194 Gr. 8','Bolts: SA 193 Gr.  B8 </br>Nuts: SA 194 Gr. 8','Bolts: SA 320 Gr.  L7</br>Nuts: SA 194 Gr. 4L','Bolts: SA 320 Gr.  L7</br>Nuts: SA 194 Gr. 4L','Bolts: SA 320 Gr.  L7</br>Nuts: SA 194 Gr. 4','Bolts: SA 193 Gr.  B7</br>Nuts: SA 194 Gr. 4','Bolts: SA 320 Gr.  L7</br>Nuts: SA 194 Gr. 2H','Bolts: SA 320 Gr.  L7</br>Nuts: SA 194 Gr. 2H','Bolts: SA 320 Gr.  L7</br>Nuts: SA 194 Gr. 2H','Bolts: SA 320 Gr.  L7</br>Nuts: SA 194 Gr. 2H','Bolts: SA 320 Gr.  L7</br>Nuts: SA 194 Gr. 2H','Bolts: SA 193 Gr.  B5</br>Nuts: SA 194 Gr. 3','Bolts: SA 193 Gr.  B5</br>Nuts: SA 194 Gr. 3','Bolts: SA 193 Gr.  B8</br>Nuts: SA 194 Gr. 8','Bolts: SA 193 Gr.  B8</br>Nuts: SA 194 Gr. 8','SS 310','Inconel'],
['Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','A 307 Gr. A</br>A 193 Gr. B7</br>A 325</br>A 490</br>Shape: A36','A 307 Gr. A</br>A 193 Gr. B7</br>A 325</br>A 490</br>Shape: A36','A 307 Gr. A</br>A 193 Gr. B7</br>A 325</br>A 490</br>Shape: A36','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts','Same as pressure bolts']];

 
var $$ = Dom7;

// Init App
var myApp = new Framework7({
    id: 'io.framework7.testapp',
    root: '#app',
    theme: 'md'
});


// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function(e) {

    // Get page data from event data
    var page = e.detail.page;
    console.log('1');
    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }

})


document.addEventListener("DOMContentLoaded", function(event) {
	
	$('#desTemp').on('change',function(){
		temp=$('#desTemp').val();
		if (temp!=''){
			var tempnew=temp;
			if (temp>=817) tempnew=817;
			var tempScaled=.51-((tempnew*1+254)/(2*1071));
			cardColor=HSVtoRGB(tempScaled,.7,1);
			rgbcolor='rgb('+cardColor.r+','+cardColor.g+','+cardColor.b+')';
			$('#serviceCard').css('background',rgbcolor);
		category=0;
		if(temp>=-254 && temp<=-196){
			category=[1];
		}
		else if(temp>=-195 && temp<=-102){
			category=[2,3];
		}
		else if(temp>=-101 && temp<=-60){
			category=[4];
		}
		else if(temp>=-59 && temp<=-47){
			category=[5];
		}
		else if(temp>=-46 && temp<=-30){
			category=[6];
		}
		else if(temp>=-29 && temp<=-16){
			category=[7];
		}
		else if(temp>=-15 && temp<=0){
			category=[8];
		}
		else if(temp>=1 && temp<=16){
			category=[9];
		}
		else if(temp>=17 && temp<=400){
			category=[10];
		}
		else if(temp>=401 && temp<=538){
			category=[11,12];
		}
		else if(temp>=539 && temp<=593){
			category=[13,14];
		}
		else if(temp>=594 && temp<=816){
			category=[15,16];
		}
		else if(temp>=817 && temp<=1500){
			category=[17,18];
		}
		else{
			category=[-1];
		}
		if (category.length==1) {
			category=category[0];
			if(category!=-1){
			$('#serviceType').html(materials[serviceIdx][category-1]);
			$('#materialType').html(materials[materialIdx][category-1]);
			$('#plateMat').html(materials[plateIdx][category-1]);
			$('#pipeMat').html(materials[pipeIdx][category-1]);
			$('#forgeMat').html(materials[forgeIdx][category-1]);
			$('#fittingMat').html(materials[fittingIdx][category-1]);
			$('#tubeMat').html(materials[tubeIdx][category-1]);
			$('#pboltMat').html(materials[pboltIdx][category-1]);
			$('#sboltMat').html(materials[sboltIdx][category-1]);
			}else{
			$('#serviceCard').css('background','#FFFFFF');
			$('#serviceType').html('<p class="invalidInp"> Invalid input or Out of range. </p>');
			$('#materialType').html('<p class="invalidInp"> Invalid input or Out of range. </p>');
			$('#plateMat').html('<p class="invalidInp"> Invalid input or Out of range. </p>');
			$('#pipeMat').html('<p class="invalidInp"> Invalid input or Out of range. </p>');
			$('#forgeMat').html('<p class="invalidInp"> Invalid input or Out of range. </p>');
			$('#fittingMat').html('<p class="invalidInp"> Invalid input or Out of range. </p>');
			$('#tubeMat').html('<p class="invalidInp"> Invalid input or Out of range. </p>');
			$('#pboltMat').html('<p class="invalidInp"> Invalid input or Out of range. </p>');
			$('#sboltMat').html('<p class="invalidInp"> Invalid input or Out of range. </p>');
			}
		}
		else{
			category=category[0];
			HTMLel=['#serviceType','#materialType','#plateMat','#pipeMat','#forgeMat','#fittingMat','#tubeMat','#pboltMat','#sboltMat'];
			materialIndex=[serviceIdx, materialIdx, plateIdx,pipeIdx,forgeIdx,fittingIdx,tubeIdx,pboltIdx,sboltIdx];
			for (i=0; i<HTMLel.length;i++){
			if (materials[materialIndex[i]][category-1] != materials[materialIndex[i]][category]){
				$(HTMLel[i]).html(materials[materialIndex[i]][category-1]+'</br>'+materials[materialIndex[i]][category]);
			}else{
				$(HTMLel[i]).html(materials[materialIndex[i]][category-1]);
			}
			}
		}
	}else{
			$('#serviceType').html('');
			$('#materialType').html('');
			$('#plateMat').html('');
			$('#pipeMat').html('');
			$('#forgeMat').html('');
			$('#fittingMat').html('');
			$('#tubeMat').html('');
			$('#pboltMat').html('');
			$('#sboltMat').html('');
	}
	});
	
    $$('#infoBtn').on('click', function() {
        //document.getElementById('greenSlider').value=200;
        myApp.dialog.create({
            title: 'Info',
            verticalButtons: false,
            cssClass: 'appdialog',
            buttons: [{
                    text: 'OK',
                    onClick: function() {

                    },
                }
            ],
            on: {
                open: function(d) {
                    var els = d.$el.find('.range-slider');
                    for (var i = 0; i < els.length; i++) {
                        els[i].value = 200;
                        myApp.range.create({
                            el: els[i],
                            on: {
                                change: function(r) {
                                    //console.log(r.getValue());
                                }
                            }
                        });

                    }

                }
            },
            content: document.getElementById('infoHTML').innerHTML,
        }).open();
        var color = $('#colorPickerInput').wheelColorPicker('getColor');
        myApp.range.setValue('#redSlider', Math.round(color.r * 255));
        myApp.range.setValue('#greenSlider', Math.round(color.g * 255));
        myApp.range.setValue('#blueSlider', Math.round(color.b * 255));
    });

});

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}
