var resolutionsData = {
  "resolution": "Learn to play Ping pong",
  "steps": [
    {
      January: "learn rules"
    },
    {
      February: "buy paddle"
    },
    {
      March: "attend meet ups"
    }
  ],
  "priority": "Medium high"
}

// Grab the HTML from the appropriate <script> tag
var entryHTML = $("#resolution-partial").html();

// Use handlebars to compile it into a template
var entryTemplate = Handlebars.compile(entryHTML);

// Render the resulting HTML by passing the data to the template
var entryOutput = entryTemplate(resolutionsData);

console.log(entryOutput);

// Now take the final, compiled HTML and inject it into your DOM
$("#resolutionOutput").append(entryOutput);