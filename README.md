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
