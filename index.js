async function consumRestApi(){
    const response = await fetch("https://rest-api-web-production.up.railway.app/")

    const data = await response.json()

    console.log(data)

    data.forEach(function (post){
        // window.dataPeli = function (peli){

        //     data.map(function(peliculaa){
        //         if(peliculaa.idPeliculas == peli){
                    
        //             console.log(peliculaa.titulo +" "+peliculaa.director," ",peliculaa.presupuesto)


        //         }
        //     })
            
        // }

        const pelicula = document.createRange().createContextualFragment(/*html*/`
            <div class="pelicula-container">
                <div class="pelicula">
                    <img src="${post.portada}" alt="">
                </div>

                <h2 class="titulo">${post.titulo}</h2>

                <div class="caja">
                    <h4 class="sinopsis">${post.sinopsis}</h4>
                </div>

                <div class="detalles">
                    <p>Producida por:</p>
                    <p class="director">${post.director}</p>
                
                </div>
                <div class="container-boton">
                    <button>Mas Detalle</button>
                </div>
            </div>
        
        `)

        const main = document.querySelector(".main");

        main.append(pelicula)
        console.log(post)
    })
}


consumRestApi();
