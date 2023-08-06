/*
Just draw a border round the document.body.
*/
// document.body.style.border = "5px solid red";
from_url = window.location.href;
short_code = from_url.split("=")[1];

window.location = "ext+container:name=" + short_code + "&url=" + from_url;
