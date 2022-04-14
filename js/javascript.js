
function positions(firstPlace,secondPlace,lastPlace){

        if (secondPlace == "Daniel"){
            let ass      = firstPlace
            firstPlace   = secondPlace
            secondPlace  = ass
             console.log(firstPlace,secondPlace,lastPlace)}

           else if("Daniel" == lastPlace){
            let ass         = secondPlace
            secondPlace     = lastPlace
            lastPlace       = ass
            console.log (firstPlace,secondPlace,lastPlace)
           }
           else{console.log (firstPlace,secondPlace,lastPlace)}
           
        }      

 positions("Miguel","Daniel","Rafael")
   