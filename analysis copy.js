/*Goal of code --> 
take a text string as input --> 
cut out all crap words --> 
run synonym dictionary through it --> 
find the "key" words (think we can just do IBM Watson on this, we can dive into this though if we want to make it ourselves) --> 
find which sentences have the "key" words --> 

*/



  

        //alert("we made it"); //Testing that the button worked. 

    
      console.log("Analysis");

var file = require('file.json');
var dict = JSON.parse(file);
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


        
    