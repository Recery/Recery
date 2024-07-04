class Barra_Nav
{
    constructor(color_fondo = "rgb(255, 131, 30)", class_name = "barra_nav")
    {
        this.barra = document.createElement("div");
        this.barra.classList.add(class_name);
        this.barra.style.backgroundColor = color_fondo;
    }

    add_item(item) // Tiene que ser SI O SI de tipo nodo
    {
        this.barra.appendChild(item);
    }

    get_barra(){return this.barra;}
}