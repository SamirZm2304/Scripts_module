const button_component = ({ img_url, img_alt, link_url }) => {
  return `
    <a class="social_networks_button" href="${link_url}" target="_blank">
        <img src="${img_url}" alt="${img_alt}">
    </a>
        `;
};

// const button_open = `<button`

const buttons = [
  {
    img_alt: "facebook_icon",
    img_url:
      "https://raw.githubusercontent.com/SamirZm2304/Scripts_module/main/images/fb.png",
    link_url: "https://m.me/103926132361200",
  },
  {
    img_alt: "instagram_icon",
    img_url:
      "https://raw.githubusercontent.com/SamirZm2304/Scripts_module/main/images/ins.png",
    link_url: "https://ig.me/m/cooperativaluchacampesina",
  },
  {
    img_alt: "WhatsApp_icon",
    img_url:
      "https://raw.githubusercontent.com/SamirZm2304/Scripts_module/main/images/wp.png",
    link_url: "https://wa.me/593990950119",
  },
];

const DEFAULT_STYLES = `
p{
  font-size: 16px;
  font-weight: 600;
}
#button_chat_social_networks {
    all: unset;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    position: fixed;
    bottom: 0;
    left: 0;
    margin-left: 20px;
    margin-bottom: 25px;
    border-radius: 6px;
    padding: 3.5px 15px;
    box-shadow: 4px 4px 10px  #636363;
    z-index: 10000000;
}

#button_chat_social_networks:hover #social_networks_buttons {
    transform: scale(1);
}

#button_chat_social_networks img {
    width: 35px;
    height: 35px;
    object-fit: contain;
}

#social_networks_buttons {
    transition-duration: 500ms;
    overflow: hidden;
    position: fixed;
    bottom: 55px;
    left: 5px;
    margin-left: 20px;
    margin-bottom: 30px;
    padding: 10px 8px;
    border-radius: 15px;
    box-shadow: 2px 2px 10px -2px #636363;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    transform: scale(0);
}

#social_networks_buttons .social_networks_button {
    all: unset;
    cursor: pointer;
    transition-duration: 300ms;
}

#social_networks_buttons .social_networks_button:hover {
    transform: scale(1.03);
    filter: drop-shadow(2px 2px 5px #455b57);
}

#social_networks_buttons .social_networks_button img {
    width: 45px;
    height: 45px;
    object-fit: contain;
}
`;

const body = document.querySelector("body");
const button_open = document.createElement("button");
const buttons_container = document.createElement("section");
const styles_container = document.createElement("style");

buttons_container.setAttribute("id", "social_networks_buttons");
button_open.setAttribute("id", "button_chat_social_networks");
button_open.innerHTML = `
<img src="https://raw.githubusercontent.com/SamirZm2304/Scripts_module/main/images/chat.png" alt="open_buttons_chat">
    <p>Escríbenos</p> 
</img>

`;
buttons_container.innerHTML = buttons
  .map((button) => {
    return button_component(button);
  })
  .join("");
styles_container.innerHTML = DEFAULT_STYLES;

body.appendChild(button_open);
body.appendChild(styles_container);
button_open.appendChild(buttons_container);
