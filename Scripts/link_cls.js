class Link
{
    constructor(nombre, link, icon_src, color, bright = false)
    {
        this.boton = document.createElement("div");
        this.boton.classList.add("boton_link");

        if (bright)
            this.boton.classList.add("bright");
        else
            this.boton.classList.add("not_bright");

        this.set_icon(icon_src); // Primero va el ícono!!!
        this.set_nombre(nombre, bright); // Y después el nombre
        this.set_link(link);
        this.set_color(color);
    }

    set_nombre(nombre, bright_text)
    {
        var texto = document.createElement("p");
        texto.textContent = nombre;

        if (bright_text)
            texto.classList.add("bright");
        else
            texto.classList.add("not_bright");

        this.boton.appendChild(texto);
    }

    set_link(link)
    {
        this.boton.addEventListener("click", function()
        {
            window.location.href = link;
        });
    }

    set_icon(icon_src)
    {
        if (icon_src === "") return;
        
        var img = document.createElement("img");
        img.src = icon_src;

        this.boton.appendChild(img);
    }

    set_color(color)
    {
        this.boton.style.backgroundColor = color;
    }

    get_link(){return this.boton;}
}