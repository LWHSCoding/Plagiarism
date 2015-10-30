Ideas to detect plagiarism:

PLEASE ADD/EDIT THIS


-Unevenness of style:
</br>(some very sophisticated sentences followed by some amateurish ones). This can be detected by rating each word with commonness (an integer - apis for this). (i.e. 'the' = 1st used word, 'benevolent' = nth used word). Find stark contrasts excluding common words like 'a' 'the' etc. 


-Web Crawling: Limited by internet speeds — perhaps there could be an offline trunk of essays from these sites to quickly scan through?
</br>Substring Matching
Crawl popular essay sites/ other sources online. 
</br>+Quickly check substrings for copy/paste plagiarism. 
</br>+Replace words in sentences with synonyms from the thesaurus and check for similarities. 
(While checking using the previous 2 methods, allow for not completely verbatim matching. I.e. if a few words are different, still raise a red flag) 
</br>+Check for sentence structure differences - i.e. if the student took a sentence/idea and shifted around the words. This might be accomplished with identifying verb/noun/etc in the sentence and comparing. (what thing (noun) did what (verb) and how (adjective)).
</br>+Bag of words - Compare word frequency of student’s essay to these essays (https://en.wikipedia.org/wiki/Bag-of-words_model - see the diagram at the top for a great explanation). We’ll probably have to use a library or api for this.
</br>+Word Frequency using aspell. We could use this website http://app.aspell.net/lookup-freq?words=hi%0D%0A  But we would probably have to build our own or figure out how there's works we can download it at http://wordlist.aspell.net/ 

-Profile Comparison (stylometry): Probably an SQL database and server will be required for this.
Build a profile on each student throughout the year by storing their previous essays. Analyze these previous essays and compare it to the submitted one and check for inconsistencies in writing style/syntax/etc. 
</br>Bag of words
</br>Use word frequency to compare to student’s previous essays (https://en.wikipedia.org/wiki/Bag-of-words_model - see the diagram at the top for a great explanation). We’ll probably have to use a library or api for this.
</br>*Markov chains
</br>Build markov chains from student’s previous work. Run the new essay through the program, and rank the probability that the student would use each word (after the other/in context) based on their previous work. This is how autocorrect works. (https://en.wikipedia.org/wiki/Markov_chain and http://www.in-vacua.com/markov_text.html)


-SMMRY.com:
</br>We have 10,000 free api requests because we’re educational. They have a terrific algorithm for extracting main ideas and this may be a good idea just to get a “second opinion.” (In addition to our own algorithm).
