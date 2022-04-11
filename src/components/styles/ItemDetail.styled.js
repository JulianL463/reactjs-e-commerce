import styled from "styled-components";
import ItemDetail from "../ItemDetail";

export const StyledItemDetail = styled(ItemDetail)`
    
    max-width: 60rem;
    padding: 5px;
    margin:auto;
    
    color: 1px solid ${({ theme }) => theme.colors.main};

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
        background-color: ${({ theme }) => theme.colors.transparent.lightblue};
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
                background-color:black;
                box-sizing:border-box;
                border: 1px solid ${({ theme }) => theme.colors.transparent.lightblue};
            }
            
        }
        .dataContainer{
            display:grid;
            
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 4fr 1fr;
            grid-gap: 5px;

            .itemTitle{
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

                text-decoration: none;

                margin: 0;
                button{
                    cursor: pointer;
                    width: 100%;
                    height: 100%;

                    font-family: 'Saira Condensed','Inria Sans', 'Times New Roman', sans-serif, -apple-system, BlinkMacSystemFont;//'Saira Condensed',
                    font-size: 2rem;
                    letter-spacing: 0.2rem;
                   

                    border: none;
                    color: ${({ theme }) => theme.colors.main};
                    background:none;
                    
                    &:active{
                        font-size: 1.9rem;
                    }
                }
                
            }
        }   

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
    
`

