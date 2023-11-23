// https://towardsdatascience.com/quickly-extract-all-links-from-a-web-page-using-javascript-and-the-browser-console-49bb6f48127b
var w = window.open("");
w.document.write("<table><thead><th>Name<th>Links<tbody>");
for(var x of document.querySelectorAll("a"))
w.document.write( "<tr><td>"+ x.textContent + "<td>"+x.href);
