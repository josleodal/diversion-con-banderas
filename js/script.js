
// bandera del país, la capital, 
//la población y el lado de la carretera donde se circula



const getCountries =async()=>{

    try{
        const response= await fetch('https://restcountries.com/v3/all');
        if(!response.ok){

            throw new Error('Ha surgido un error imprevisto')

        }

        const data = await response.json();
        data.sort( compare );
        console.log(data)


        return data


    }
    catch(error){

        console.log('error al obtener los datos', error)
    }


}

//////////////////////////
const template=(countries)=>{


   

    countries.forEach(pais=> {
       
       

        
        const countries_list =document.getElementById('countries-list')
        let templatePais =`

        <div id='banderaYnombre' class='v'>
        <div id='bandera'>
        
            <img src='${pais.flags[1]}' alt ='${pais.name.official}'/></div>
        
            <div id='nombre'>${pais.name.official}</div>
            
            
           
            <div id='datos'>
            
                <div>Capital: ${pais.capital}</div>
                <div>Población: ${pais.population}</div>
                <div>Lado de conducir: ${pais.car.side}</div>
            </div>
           
            
        </div>` 

        countries_list.innerHTML+=templatePais;



 
        


        
    });

  
};
    

    








///////////////////////////
getCountries().then((data)=>template(data))
//getCountries().then((data)=>template2(data))



///////////////////////////////////



function compare( a, b ) {
    if ( a.name.official < b.name.official ){
      return -1;
    }
    if ( a.name.official > b.name.official ){
      return 1;
    }
    return 0;
  }
  

  ////////////////////////////////////
