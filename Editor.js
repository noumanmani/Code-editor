function run(){
    let html = document.getElementById("html").value
    let css = document.getElementById("css").value
    // let javascript = document.getElementById("Javascript").value
    let output = document.getElementById("output")

    output.contentDocument.body.innerHTML= html;
}

