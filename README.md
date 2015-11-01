# Plagiarism
Plagiarism detector for Lick 
<br>
<b>How it works</b>
<ul>
<li>Upload document</li>
<li>Run IBM Watson API to pull out all main ideas </li>
<li>Search each of those main ideas on Google </li>
<li>Pull top x results and parse them </li>
<li>Compare string overlap between parse page and corresponding text around the main concept </li>
<li>Create an algorithm to give a statistical model of overlap that outputs a rating </li>
<li>If the rating is above a certain threshold notify the uploader and give them the corresponding link to have them look over it </li>
</ul>
<b>Jobs Pre Monday 11/2</b>
<ul> 
<li> Kevin - Research grade government algorithm </li>
<li> Sam - Look into WA API and figure out how to implement </li>
<li> Adam - Psudo code the algorithm </li>
<li> Alex - finish analysis.js </li>
</ul>

<hr />

<b>Writing Grade Level</b>
<i>Kevin</i>
The Flesch-Kincaid method is probably the most convenient. It's what the US military uses as a standard writing assessment. The Flesch readability test is good and I think we should definitely use it.

<br />

There are really four methods: Flesch-Kincaid, Gunning-Fog, Coleman-Liau, and SMOG. They all have their drawbacks and advantages, but they all greatly varied. I plugged in an engineering report and got around 10 for two of them and 12 for the other two. I plugged in an english paper and got drastically different results..I think we should do all four since it's more data. We just need to be cognizant of the huge variation between various texts.

<hr />

Drawbacks
<ul>
  <li>Gunning-Fog method requires only about 100 words</li>
  <li>Coleman-Liau method uses letters per 100 words and sentences per 100 words</li>
  <li>SMOG only works with at least 30 sentences</li>
</ul>