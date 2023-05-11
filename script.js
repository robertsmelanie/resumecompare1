// function performComparison() {
//   // Get the text from the input boxes
//   var jobDescription = document.getElementById("job-description-input").value;
//   var resume = document.getElementById("resume-input").value;

//   // Do the comparison here
//   // ...
// }
// function performComparison() {
//   // Get the text from the input boxes
//   var jobDescription = document.getElementById("job-description-input").value;
//   var resume = document.getElementById("resume-input").value;

//   // Split the text into words
//   var jobWords = jobDescription.split(/\W+/);
//   var resumeWords = resume.split(/\W+/);

//   // Count the keywords in each text
//   var jobKeywordCounts = {};
//   var resumeKeywordCounts = {};
//   var totalKeywords = 0;

//   for (var i = 0; i < jobWords.length; i++) {
//     var keyword = jobWords[i].toLowerCase();
//     if (keywords.indexOf(keyword) >= 0) {
//       jobKeywordCounts[keyword] = (jobKeywordCounts[keyword] || 0) + 1;
//       totalKeywords++;
//     }
//   }

//   for (var i = 0; i < resumeWords.length; i++) {
//     var keyword = resumeWords[i].toLowerCase();
//     if (keywords.indexOf(keyword) >= 0) {
//       resumeKeywordCounts[keyword] = (resumeKeywordCounts[keyword] || 0) + 1;
//       totalKeywords++;
//     }
//   }

//   // Calculate the percentages
//   var jobPercentage =
//     totalKeywords == 0
//       ? 0
//       : Math.round(
//           (Object.keys(jobKeywordCounts).length / totalKeywords) * 100
//         );
//   var resumePercentage =
//     totalKeywords == 0
//       ? 0
//       : Math.round(
//           (Object.keys(resumeKeywordCounts).length / totalKeywords) * 100
//         );

//   // Display the results
//   document.getElementById("job-keywords").innerHTML =
//     Object.keys(jobKeywordCounts).join(", ");
//   document.getElementById("resume-keywords").innerHTML =
//     Object.keys(resumeKeywordCounts).join(", ");
//   document.getElementById("job-percentage").innerHTML = jobPercentage + "%";
//   document.getElementById("resume-percentage").innerHTML =
//     resumePercentage + "%";
// }
