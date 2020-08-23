//
//  index.html
//
var cs = $(".cs")
var gtmwnaf = $(".gtmwnaf")
var fce = $(".fce")
var html = $(".html")
var js = $(".js")
var cmd = $(".cmd")
var enjs = $(".enjs")
var mtals = $(".mtals")
cs.on("click", () => { window.location.href = "/home/cs.html" })
cs.on("mouseenter", () => { cs.css("background", "#FFFFFF30") })
cs.on("mouseleave", () => { cs.css("background", "#FFFFFF15") })
gtmwnaf.on("click", () => { window.location.href = "/home/gtbp.html" })
gtmwnaf.on("mouseenter", () => { gtmwnaf.css("background", "#FFFFFF30") })
gtmwnaf.on("mouseleave", () => { gtmwnaf.css("background", "#FFFFFF15") })
fce.on("click", () => { window.location.href = "/home/cheat_engine.html" })
fce.on("mouseenter", () => { fce.css("background", "#FFFFFF30") })
fce.on("mouseleave", () => { fce.css("background", "#FFFFFF15") })
html.on("mouseenter", () => { html.css("background", "#FFFFFF30") })
html.on("mouseleave", () => { html.css("background", "#FFFFFF15") })
js.on("mouseenter", () => { js.css("background", "#FFFFFF30") })
js.on("mouseleave", () => { js.css("background", "#FFFFFF15") })
cmd.on("mouseenter", () => { cmd.css("background", "#FFFFFF30") })
cmd.on("mouseleave", () => { cmd.css("background", "#FFFFFF15") })
enjs.on("mouseenter", () => { enjs.css("background", "#FFFFFF30") })
enjs.on("mouseleave", () => { enjs.css("background", "#FFFFFF15") })
mtals.on("mouseenter", () => { mtals.css("background", "#FFFFFF30") })
mtals.on("mouseleave", () => { mtals.css("background", "#FFFFFF15") })
//
//  Language support
//
var lang = $("#lang")
lang.on("click", () => { if ($("#lang ul").css("display") == "none") { $("#lang ul").css("display", "flex") } else if ($("#lang ul").css("display") == "flex") { $("#lang ul").css("display", "none") } })
var en = $("#en")
en.on("mouseenter", () => { en.css("background", "#00000040") })
en.on("mouseleave", () => { en.css("background", "#00000020") })
var tr = $("#tr")
tr.on("mouseenter", () => { tr.css("background", "#00000040") })
tr.on("mouseleave", () => { tr.css("background", "#00000020") })
if (window.localStorage.getItem("lang") == "en") { $("#home").html("Home"); $("#us").html("About us"); $("#pr").html("Our projects") }
en.on("click", () => { window.localStorage.setItem("lang", "en"); $("#home").html("Home"); $("#us").html("About us"); $("#pr").html("Our projects") })
tr.on("click", () => { window.localStorage.setItem("lang", "tr"); $("#home").html("Ana sayfa"); $("#us").html("Hakkımızda"); $("#pr").html("Projelerimiz") })
//
//  Global
//
$("body").on("mousedown", () => { return false })
setInterval(function() { var x = Math.round( Math.random() * 255 ); var y = Math.round( Math.random() * 255 ); var z = Math.round( Math.random() * 255 ); var bg = "text-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px rgb("+x+", "+y+", "+z+"), 0 0 30px rgb("+x+", "+y+", "+z+"), 0 0 40px rgb("+x+", "+y+", "+z+"), 0 0 55px rgb("+x+", "+y+", "+z+"), 0 0 75px rgb("+x+", "+y+", "+z+");"; var element = document.getElementById("one"); element.style = bg; element.style.transform = `rotate(${Math.round(  Math.random() * 2000 )}deg)` }, 1000);
//
//  Functions
//
/* https://stackoverflow.com/questions/36639681/how-to-copy-text-from-a-div-to-clipboard */
function CopyToClipboard(containerid) {
    if (document.selection) {
      var range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(containerid));
      range.select().createTextRange();
      document.execCommand("copy");
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(containerid));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeRange(range);
    }
}
//
// Intervals
//
setInterval(() => { window.getSelection().removeAllRanges() }, 0)
