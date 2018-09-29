class Convertidor{
    convertidor(medidaAuto, mediaor, unidadNueva, tipoLT) {
    
        switch (tipoLT) {
            case "L":
            if (mediaor == "m" && unidadNueva == "cm"){
                medidaAuto = medidaAuto * 100;
            }else if(mediaor == "km" && unidadNueva == "m"){
                medidaAuto = medidaAuto *1000;
            }else(mediaor == "ft" && unidadNueva == "m")
                medidaAuto = medidaAuto *0.3048;
            
            
        
                break;
            case "T":
            if (tipo == "T") {
                if(mediaor == "C" && unidadNueva == "F"){
                    medidaAuto = ((9/2)*medidaAuto)+32;
                }else if(mediaor == "K" && unidadNueva == "C"){
                    medidaAuto = medidaAuto - 273.15;
                    medidaAuto = (medidaAuto*1.8)+32;
                }else if(mediaor == "K" && unidadNueva == "C"){
                    medidaAuto = medidaAuto - 273.15;
                }
            }
                break;
            default:
                console.log("sayounara");
                break;
        }
    }  
}
var Convertidor0 = new Convertidor();
