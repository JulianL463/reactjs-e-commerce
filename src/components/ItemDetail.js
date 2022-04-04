import React from 'react'
import { FaMinus, FaPlus, FaCartArrowDown} from "react-icons/fa";

const ItemDetail = ({className, item}) => {

    const {id, title, prodImg, price, description, stock} = item;

    return (
        <div className={className}>
            <div className='detailContainer'>
                <div className='imgsContainer'>
                    <img src={prodImg} alt="" />
                    <img src={prodImg} alt="" />
                    <img src={prodImg} alt="" />
                    <img src={prodImg} alt="" />
                    <img src={prodImg} alt="" />
                </div>
                <div className='dataContainer'>
                    <div className='itemTitle frosted'><h2>{title}</h2></div>
                    <div className='itemPrice frosted'><h3>${price}</h3></div>
                    <div className='itemCount frosted'>
                        {/*cambiar por ItemCount*/}
                        <div>
                            <FaMinus />
                            <h5>1</h5>
                            <FaPlus />
                        </div>
                    </div>
                    <div className='itemDescription frosted'>
                        <p>{description}</p>
                    </div>
                    <div className='itemCart frosted'><FaCartArrowDown className='addToCartIcon' size='100%'/></div>
                    <div className='itemBuy frosted'><h3>COMPRAR</h3></div>
                </div>
            </div>
            <div className='specsContainer frosted'>
                <ul>
                    <li>Especificaciones:</li>
                    <li>14" 2560 × 1600 resolution, LCD display with 120Hz refresh rate, 100% sRGB.</li>
                    <li>CPU: 11th Gen Intel® Core™ i7-11390H Processor, 3.4 GHz 4 cores, Turbo up to 5.0 GHz;  
                            11th Gen Intel® Core™ i5-11320H Processor, 3.2 GHz 4 cores, Turbo up to 4.5 GHz</li>
                    <li>GPU: Intel® Iris® Xe Graphics ( Integrated/On-Board Graphics );
                            NVIDIA® GeForce® MX450 ( Discrete Graphics )</li>
                    <li>16GB DDR4 RAM, 512GB PCIe SSD;</li>
                    <li>WiFi: 2×2 Wi-Fi, Support 802.11ax (Wi-Fi6) network protocol</li>
                    <li>Operating system: Windows 10 The original system of this laptop was Windwos 10 Home.</li>
                    <li>USB-C interface × 1, supports charging and data transmission</li>
                    <li>USB 3.2 Gen1 port × 1</li>
                </ul>
            </div>
        </div>
    )
}

export default ItemDetail