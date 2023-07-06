// Definimos la función del componente de botón
// en el span remplazamos _icon del alt por "vacio"
const button_component = ({ img_url, img_alt, link_url }) => {
  return `
    <a class="social_networks_button" href="${link_url}" target="_blank">
        <span class="social_network_text__span">${img_alt.replace(/_icon/g,"")}</span>
        <img src="${img_url}" alt="${img_alt}">
    </a>
        `;
};


// Definimos los botones con sus propiedades
const buttons = [
  {
    img_alt: "facebook_icon",
    img_url:"https://raw.githubusercontent.com/SamirZm2304/Scripts_module/main/images/facebook.png",
    link_url: "https://www.facebook.com/CACPEZamoraChinchipe",
  },
  {
    img_alt: "messenger_icon",
    img_url:
    "https://raw.githubusercontent.com/SamirZm2304/Scripts_module/main/images/fb.png",
    link_url: "https://m.me/370742186823788",
  },
  {
    img_alt: "instagram_icon",
    img_url:
      "https://raw.githubusercontent.com/SamirZm2304/Scripts_module/main/images/ins.png",
    link_url: "https://ig.me/m/cacpezamorachinchipe",
  },
  {
    img_alt: "WhatsApp_icon",
    img_url:
      "https://raw.githubusercontent.com/SamirZm2304/Scripts_module/main/images/wp.png",
    link_url: "https://wa.me/593985281137",
  },
];

// definimos los estilos por defecto
const DEFAULT_STYLES = `
#button_chat_social_networks {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    position: fixed;
    bottom: 0;
    left: 0;
    border-radius: 6px;
    transition: .3s all;
}

#button_chat_social_networks:hover {
  box-shadow: 4.5px 4.5px 10px  rgb(102, 102, 102);
}

#button_chat_social_networks img {
    width: 35px;
    height: 35px;
    object-fit: contain;
}

#social_networks_buttons {
    background-color: transparent;
    padding:10px;
    height:min-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    position: fixed;
    bottom: 50%;
    top:50%;
    left:20px;
    transform: translate(-50%, -50%);
    margin-left: 20px;
    padding: 10px 8px;
    transition-duration: .3s ;
    z-index: 10000000;
}

.social_network_text__span{
    background-color: white; 
    border: 1px solid #30af31; 
    padding:7px;
    border-radius: 6px 6px 6px 6px;   
    text-transform: capitalize;
    position:absolute;
    left:5px;
    top:5px;
    opacity: 0;
    letter-spacing: 2px;
    font-weight: 300;
}

#social_networks_buttons .social_networks_button:hover .social_network_text__span{
  transform: translate(40px);
  transition: .4s all;
  opacity: 1;
}

#social_networks_buttons .social_networks_button:not(:hover) .social_network_text__span {
  transform: translate(0px);
  transition: .4s all;
  opacity: 0;
}

#social_networks_buttons .social_networks_button {
    all: unset;
    cursor: pointer;
    position:relative;
    transition: .3s all;
}

#social_networks_buttons .social_networks_button:hover {
  transform: scale(1.09);
  transition: .1s all
}

#social_networks_buttons .social_networks_button img {
    width: 45px;
    height: 45px;
    object-fit: contain;
}
`;


// Obtenemos la referencia al elemento <body> del documento HTML
const body = document.querySelector("body");


// Creamos elementos HTML para el botón de apertura y el contenedor de botones
const button_open = document.createElement("button");
const buttons_container = document.createElement("section");
const styles_container = document.createElement("style");


// Establecemos atributos y contenido para los elementos creados
buttons_container.setAttribute("id", "social_networks_buttons");
button_open.setAttribute("id", "button_chat_social_networks");

//iteramos y creamos botones en el button container
buttons_container.innerHTML = buttons
  .map((button) => {
    return button_component(button);
  })
  .join("");

//agregamos los estilos ya antes definidos
styles_container.innerHTML = DEFAULT_STYLES;


// Agregamos los elementos al <body>
body.appendChild(styles_container);
body.appendChild(buttons_container);
