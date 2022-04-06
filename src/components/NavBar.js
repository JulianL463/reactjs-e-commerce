import React from "react";
import { Nav, StyledBurger, StyledCartWidget } from "./styles/NavBar.styled";
import { NavLink, Link } from "react-router-dom";


const NavBar = () => {
    return(
        <Nav>
                <Link to='/' className="logoLink"><img src='https://iili.io/MN1zqN.png' alt=""/></Link>
                <ul>
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="categories/tablets">Tablets</NavLink></li>
                    <li><NavLink to="categories/notebooks">Notebooks</NavLink></li>
                    <li><NavLink to="categories/pc">PC de escritorio</NavLink></li>
                </ul>
                <StyledCartWidget/>
                <StyledBurger />
        </Nav>
    )
}

export default NavBar;

// https://iili.io/MN1I1I.png   //background
// https://iili.io/MN1zqN.png   //Logo


// https://iili.io/MN1R7n.png  //ipad Pro
// https://iili.io/MN1AdX.png  //mac Air
// https://iili.io/MN1Tgt.png  // xiaomi notebook
// https://iili.io/MN17mG.png  //Lenovo Notebook
// https://iili.io/MN15es.png  //Pc 1
// https://iili.io/MN1aIf.png  //Pc 2
// https://iili.io/MN1cX4.png  //Pc 3
// https://iili.io/MN1lLl.png  //Tablet Samgung
// https://iili.io/MN11B2.png  //Tablet xiaomi

// [
//     {
//        "id":1,
//        "category":"notebooks",
//        "title":"Xiaomi Mi Pro i7",
//        "prodImg":"https://iili.io/MN1Tgt.png",
//        "description":"El nuevo equipo de Xiaomi destaca especialmente por su prometedora pantalla OLED con resolución 3.5K (no llega a 4K por poco), pero también por sus procesadores de alto rendimiento que además puedes combinar hasta con una RTX 3050 Ti para darle a estos equipos un toque gaming más que decente.",
//        "price":109000,
//        "stock":10
//     },
//     {
//        "id":2,
//        "category":"notebooks",
//        "title":"Lenovo ideapad 3 AMD R5",
//        "prodImg":"https://iili.io/MN17mG.png",
//        "description":"IdeaPad 3 tiene el precio de una notebook de uso diario, pero con un diseño extraordinario. Este equipo supera ampliamente las expectativas gracias a su procesador AMD Ryzen 5 ,ram 8gb y ssd 256gb. Los bordes delgados en ambos lados aprovechan al máximo la pantalla de la IdeaPad 3 de 15.6” y le dan a la Notebook un aspecto limpio y contemporáneo.",
//        "price":130999,
//        "stock":10
//     },
//     {
//        "id":3,
//        "category":"notebooks",
//        "title":"Apple Macbook Air 2020 M1,",
//        "prodImg":"https://iili.io/MN1AdX.png",
//        "description":"La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos.",
//        "price":192500,
//        "stock":10
//     },
//     {
//        "id":4,
//        "category":"pc",
//        "title":"Pc Armada Intel I3 RAM 8Gb SSD 240GB",
//        "prodImg":"https://iili.io/MN15es.png",
//        "description":"Pc armada con procesador Intel Core i3, memoria ram Kingston de 8gb, disco solido de 240gb y gabinete con fuente de 450W.",
//        "price":52999,
//        "stock":10
//     },
//     {
//        "id":5,
//        "category":"pc",
//        "title":"Pc Gamer Amd Ryzen 5 4650g 8gb",
//        "prodImg":"https://iili.io/MN1aIf.png",
//        "description":"Pc armada con procesador AMD Ryzen 5 4650g, memoria ram Kingston de 8gb, disco solido de 240gb y gabinete con fuente de 500W.",
//        "price":74999,
//        "stock":10
//     },
//     {
//        "id":6,
//        "category":"pc",
//        "title":"Pc Gamer Ryzen 5 RAM 16Gb RX580",
//        "prodImg":"https://iili.io/MN1cX4.png",
//        "description":"Pc armada con procesador AMD Ryzen 5 5600X, placa de video Radeon RX580 8gb, memoria ram Kingston de 16gb, disco solido de 240gb y gabinete con fuente Sentey de 600W.",
//        "price":52999,
//        "stock":10
//     },
//     {
//        "id":7,
//        "category":"tablets",
//        "title":"Tablet Samsung Galaxy Tab S6",
//        "prodImg":"https://iili.io/MN1lLl.png",
//        "description":"Esta tablet Samsung es la compañera ideal, con capacidad de sobra para cada una de tus actividades. El diseño delgado, compacto y portátil, con facilidad para sostener en una mano, lo convierte en una combinación perfecta de rendimiento y versatilidad.",
//        "price":79999,
//        "stock":10
//     },
//     {
//        "id":8,
//        "category":"tablets",
//        "title":"Apple iPad Pro de 12.9\" 128GB ",
//        "prodImg":"https://iili.io/MN1R7n.png",
//        "description":"El iPad Pro con el chip M1 de Apple tiene un rendimiento fuera de serie y una batería que te acompaña todo el día.(2) La impresionante pantalla Liquid Retina XDR de 12,9 pulgadas es perfecta para ver y editar fotos y videos HDR.(1) La cámara frontal con Encuadre Centrado te mantendrá automáticamente en el centro de la imagen durante las videollamadas.",
//        "price":229990,
//        "stock":10
//     },
//     {
//        "id":9,
//        "category":"tablets",
//        "title":"Tablet Xiaomi Pad 5 11\" 128GB",
//        "prodImg":"https://iili.io/MN11B2.png",
//        "description":"Esta tablet es ideal para cada una de tus actividades: editar fotos, documentos, navegar por internet y ¡mucho más! Su diseño delgado, compacto y portátil es la combinación perfecta de rendimiento y versatilidad.",
//        "price":94999,
//        "stock":10
//     }
//  ]