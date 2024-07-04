function get_img(img_src, class_name = "fast_img")
{
    var img = document.createElement("img");
    img.src = img_src;
    img.classList.add(class_name);

    return img;
}

function get_text(text, class_name = "fast_text")
{
    var texto = document.createElement("p");
    texto.textContent = text;
    texto.classList.add(class_name);

    return texto;
}

function get_div(class_name = "fast_div")
{
    var div = document.createElement("div");
    div.classList.add(class_name);

    return div;
}

function add_link_click(item /*SI O SI de tipo NODO*/, link)
{
    item.addEventListener("click", function()
    {
        window.location.href = link;
    });
}