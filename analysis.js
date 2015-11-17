/*Goal of code --> 
take a text string as input --> 
cut out all crap words --> 
run synonym dictionary through it --> 
find the "key" words (think we can just do IBM Watson on this, we can dive into this though if we want to make it ourselves) --> 
find which sentences have the "key" words --> 

*/
  function analysis() {

        //alert("we made it"); //Testing that the button worked. 

        function word(word, value) {
                this.word = word;
                this.value = value;

            }
        
      

            //Creating an object to store my dictionary of words in. Will replace with a real dictionary later but didn't find anything good right now. 

        var one = new word("Economy", .71);
        var two = new word("America", .52);
        
          for (var key in word) {
            console.log("hi" + word[key]);
        }

        //Added two test words to the string. 
        document.getElementById("demo").innerHTML =
            "Word 1:" + one.word + one.value + " Word Two:" + two.word + two.value;
        //Am putting those words into the HTML so I can see the dictionary 

        var words = "Here I am going to list a few important sentences. In these sentences I'm going to have important words. Steve Jobs is an important individual to the American economy. Some sentences are going to be more important than others. These sentences will have numbers: 24.22. "
        
        var savewords;
        savewords = words;
        //Create a new variable that saves the words so when we loop through them all again we have a fresh non-currupt string
        
        words = words.toLowerCase();
        //Make everything lower case so the replace function doesn't miss anything
            //Switched the word with a space, don't just delete
        words = words.replace(" the ", " ");
        words = words.replace(" a ", " ");
        words = words.replace(" an ", " ");
        words = words.replace(" at ", " ");
        words = words.replace(" who ", " ");
        words = words.replace(" when ", " ");
        words = words.replace(" why ", " ");
        words = words.replace(" there ", " ");
        words = words.replace(" these ", " ");
        words = words.replace(" when ", " ");
        words = words.replace(" it ", " ");
        words = words.replace(" to ", " ");
        words = words.replace(" for ", " ");
        words = words.replace(" the ", " ");
        words = words.replace(" nor ", " ");
        words = words.replace(" or ", " ");
        words = words.replace(" but ", " ");
        words = words.replace(" yet ", " ");
        words = words.replace(" was ", " ");
        words = words.replace(" he ", " ");
        words = words.replace(" him ", " ");
        words = words.replace(" her ", " ");
        words = words.replace(" and ", " ");
        words = words.replace(" of ", " ");
        words = words.replace(" than ", " ");
        words = words.replace(" then ", " ");
        words = words.replace(" few ", " ");
        words = words.replace(" we ", " ");
        words = words.replace(" they ", " ");
        words = words.replace(" us ", " ");
        words = words.replace(" them ", " ");
        words = words.replace(" i'm ", " ");
        words = words.replace(" am ", " ");
        words = words.replace(" to ", " ");
        words = words.replace(" i ", " ");
        //        sentences = words.replace(/([.?!])\s*(?=[A-Z])/, "$1|").split("|");
        //
        //           document.getElementById("demo").innerHTML =
        //            sentences;
        //        
        //        for (var i = 2; i < sentences.length; i++) {
        //            temp = sentences[i - 1].replace(/([.?!])\s*(?=[A-Z])/, "$1|").split("|");
        //            sentences.push(temp);
        //            alert(sentences.length);
        //            alert("hi");
        //        }
        //

        //My regex expression to break the words apart 

        var sentenceArray = [];
        var splitSentences = function () {

            var pattern = /(.+?([A-Z].)[\.|\?](?:['")\\\s]?)+?\s?)/igm,
                match;
            var ol = document.getElementById("result");
            while ((match = pattern.exec(words)) != null) {
                if (match.index === pattern.lastIndex) {
                    pattern.lastIndex++;
                    
                }
                sentenceArray.push(li);
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(match[0]));
                ol.appendChild(li);
                //li = document.getElementById("demo3");
                console.log(match[0]);
            }

        }();
        
        var sentenceWords = [];
        
        for (var i = 0; i < sentenceArray.length; i++){
            sentenceArray[i].replace("<li>", "");
            console.log(sentenceArray[i]);
            sentenceWords = sentenceArray[i].split(" ");
            for (var j = 0; j < sentenceWords.length; j++){
                
               // if (sentenceWords[j] 
            }
        }
        
    }