import React from 'react';




const Profissionais = () => {

    require("./Produtos.css");

    //Código Javascript
    const profissionais = [
        { nome: "Mini donuts",
          preco: 4.00,
          imagem: "https://www.dicasdemulher.com.br/wp-content/uploads/2018/04/donuts-2.jpg"
        },
        { nome: "Donuts de café",
        preco: 6.00,
        imagem: "https://www.dicasdemulher.com.br/wp-content/uploads/2018/04/donuts-12.jpg"
        },
        { nome: "Donuts de doce de leite",
        preco: 5.00,
        imagem: "https://www.dicasdemulher.com.br/wp-content/uploads/2018/04/donuts-20.jpg"
        },
        { nome: "Donuts de chocolate",
        preco: 5.00,
        imagem: "https://www.dicasdemulher.com.br/wp-content/uploads/2018/04/donuts-4.jpg"
        },
        { nome: "Donuts rosa",
        preco: 5.00,
        imagem: "https://www.dicasdemulher.com.br/wp-content/uploads/2018/04/donuts-6.jpeg"
    },
    ];
    
    return( 

        
        <div>


            <h1>Novos produtos na loja</h1>
            <p>Conheça os produtos que acabaram de chegar</p>


            {
                //Aqui inicia o JavaScript
                
                produtos.map( produto => {
                return (

            <div className="produto">
                <img src={produto.imagem}/>
                <h2>{produto.nome}</h2>
                <p> R$ {produto.preco}</p>
                <button onClick={ () =>adiciona_item(quantidade_itens+1)}>Comprar</button>
            </div>

                )
                
                } ) 
            }

            

        </div>
    );



}
export default Profissionais;