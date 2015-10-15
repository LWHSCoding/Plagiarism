# Plagiarism
Plagiarism detector for Lick 
<br>
<b>How it works</b>
<ul>Upload document</ul>
<ul>Run IBM Watson API to pull out all main ideas </ul>
<ul>Search each of those main ideas on Google </ul>
<ul>Pull top x results and parse them </ul>
<ul>Compare string overlap between parse page and corresponding text around the main concept </ul>
<ul>Create an algorithm to give a statistical model of overlap that outputs a rating </ul>
<ul>If the rating is above a certain threshold notify the uploader and give them the corresponding link to have them look over it </ul>
