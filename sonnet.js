

   var sonnet = document.getElementById("sonnet").innerHTML
   console.log(sonnet);

   //Find and output the starting position of the word "orphans".
   var orphanWord = sonnet.indexOf("orphans");
   console.log(orphanWord);

   //Output the number of characters in the sonnet.
   var sonnetChar = sonnet.length;
   console.log(sonnetChar);

   //Replace the first occurance of the string "winter" with "yuletide".
   //var winterWord = sonnet.search("winter");
  // console.log(winterWord);

   var sonnet = sonnet.replace("winter", "yuletide");
   console.log(sonnet);

   //Replace all occurances of the string "the" with "a large".
   var sonnet = sonnet.replace(/the /gi, "a large ");
   console.log(sonnet);

   // Set the content of the sonnet div with the new string
   document.getElementById("sonnet").innerHTML = sonnet;
