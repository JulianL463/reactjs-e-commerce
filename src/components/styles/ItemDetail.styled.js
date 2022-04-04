import styled from "styled-components";
import ItemDetail from "../ItemDetail";

export const StyledItemDetail = styled(ItemDetail)`
    
    max-width: 60rem;
    padding: 5px;
    margin:auto;
    
    color: 1px solid ${({theme}) => theme.colors.main};

    h2{
        font-size: 2rem;
    }

    h3{
        font-size: 1.7rem;
    }

    h5{
        font-size: 1.5rem;
    }

    .frosted{
        background-color: ${({theme}) => theme.colors.transparent.lightblue};
        backdrop-filter: blur(5px);
    }

    .detailContainer{

        display: grid;
        grid-template-rows: 1fr 1fr;
        width:100%;

        .imgsContainer{
            display:grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: 1fr 2fr 4fr 2fr;
            grid-gap: 5px;

            margin-bottom: 5px;
   
            img:first-child{
                grid-column: 1 / 5 ;
                grid-row: 1 / 4;
            }
            img{
                width:100%;
                height:100%;
                box-sizing:border-box;
                border: 1px solid ${({theme}) => theme.colors.transparent.lightblue};
            }
            
        }
        .dataContainer{
            display:grid;
            
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: 1fr 1fr 4fr 1fr;
            grid-gap: 5px;

            .itemTitle{
                grid-column: 1 / 3 ;
                width:100%;
                height:100%;

                display:flex;
                align-items:center;
                justify-content:center;
                
            }
            .itemPrice{
                width:100%;
                height:100%;

                display:flex;
                align-items:center;
                justify-content:center;
            }
            .itemCount{
                width:100%;
                height:100%;
                display:flex;
                align-items:center;
                justify-content:center;
                
                div{
                    width: 100%;
                    display: flex;
                    justify-content: space-around;
                    align-items:center;
                }
            }
            .itemDescription{
                grid-column: 1 / 3 ;
                width:100%;
                height:100%;
                
                p{
                    padding: 1rem;
                    text-align: justify;
                }
            }
            .itemCart{
                width:100%;
                height:100%;
                text-align:center;

                .addToCartIcon{
                    width:2.5rem;
                }
            }
            .itemBuy{
                width:100%;
                height:100%;
                display:flex;
                align-items:center;
                justify-content:center;
            }
        }   

        /* @media (min-width: 725px){
        grid-template-columns: repeat(2, 18rem);
        } */
        @media (min-width: 1100px){
             grid-template-columns: 1fr 1fr;
             grid-template-rows: 1fr;
             .imgsContainer{
                 margin-bottom:0;
                 margin-right: 5px;
                 width:auto;
                 max-height:40rem;
             }
             .dataContainer{
                 width:auto;
                 max-height:40rem;
             }
             
        }
    }

    .specsContainer{
        width: 100%;
        min-height: 70vh;
        margin-top: 2rem;
        ul{   
            padding:50px;
        }
    }
    
    @media (min-width: 725px){
        max-width: 80rem;
        padding: 5rem;
    }
    
`

