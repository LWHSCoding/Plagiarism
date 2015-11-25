/*Goal of code --> 
take a text string as input --> 
cut out all crap words --> 
run synonym dictionary through it --> 
find the "key" words (think we can just do IBM Watson on this, we can dive into this though if we want to make it ourselves) --> 
find which sentences have the "key" words --> 

*/



  

        //alert("we made it"); //Testing that the button worked. 

    
      console.log("Analysis");
//var dict;
//var dict = JSON.parse(data);
      var dict = {"the":674995,
"of":382789,
"and":309944,
"to":262081,
"in":228363,
"a":201571,
"that":114463,
"is":119475,
"for":97260,
"it":73433,
"as":79321,
"was":79212,
"with":78107,
"i":66346,
"in":33,
"a":31,
"is":16,
"it":11,
"not":66248,
"on":65676,
"be":63772,
"he":58469,
"her":05,
"by":58024,
"are":5398,
"this":41060,
"or":46559,
"his":4475,
"you":49328,
"from":45701,
"at":43861,
"have":39675,
"an":39237,
"and":81,
"but":32037,
"had":32688,
"they":32866,
"which":31894,
"we":38911,
"her":28347,
"their":27213,
"were":23532,
"all":23304,
"she":25572,
"can":23777,
"if":27905,
"there":26612,
"when":27479,
"has":24815};
      var words = "Here I am going to list a few important sentences. In these sentences I'm going to have important words. Steve Jobs is an important individual to the American economy. Some sentences are going to be more important than others. These sentences will have numbers: 24.22. ";
      var data=[];
      var labels=[];
      var wordArray = words.split(" ");

      for (var i = 0; i < wordArray.length; i++) {
    var num = dict[wordArray[i]];
          
          if(num!=undefined && num <30000){
          data.push(num);
              labels.push(wordArray[i]);
          }
          
//          console.log(data);
    //Do something
}
      var chartData = { labels: labels, datasets:[
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data:data
        }]};

     window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(chartData, {
			responsive: true
		});
	}
        //Added two test words to the string. 
        //Am putting those words into the HTML so I can see the dictionary 


        
    