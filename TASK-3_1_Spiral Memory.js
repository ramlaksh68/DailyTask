
function getSpiralShortestPath(inp){
       var distance=0;
      
       with(Math){
               while (inp>(4*pow(distance, 2) + distance*4)){
               distance = distance + 1
               }
               let topLeft = 4*pow(distance, 2) , topRight = topLeft - distance*2,
               bottomLeft = topLeft + distance*2     , bottomRight = topLeft + distance*4;
               let x,y=0;
   
               if (inp<=topRight){
                    x = distance;
                    y = distance - (topRight-inp);
               }
               else if (inp>topRight&&inp<=topLeft){
                    x = (-1*distance) + (topLeft-inp);
                    y = distance;
               }
               else if (inp>topLeft&&inp<=bottomLeft){
                    x = (-1*distance);
                    y = distance - (inp-topLeft);
               }
               else{
                    x = (-1*distance) + (bottomRight-inp);
                    y = (-1*distance);
               }
   
                   result= (abs(x)+abs(y))-1;
       }
       console.log(" Distance = ",result)
   
   }


   getSpiralShortestPath(12344); ////// Pass Input Here