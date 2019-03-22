/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  //узнаем длинну массива
  var lengthmas=preferences.length
  var k=0;
  var buffer=[];
  //чистим массив от повторов
  for(var i=0; i<lengthmas; i++){
    
    var a=preferences[i+1]-preferences[i];
    var b=preferences[i]-preferences[i+2];
    if (a==1 && b==1){
      
      cleanpreferences[k]=sortpreferences[i];
      k++;
      }
    else if (i==b4) {
        cleanpreferences[k]=sortpreferences[i];
        k++;
        }     
    }

  var lengthsortmas=cleanpreferences.length 
  var triangles=0;
  for(var j=0; j<lengthsortmas; j++){
    
    var c=cleanpreferences[j];
    var d=cleanpreferences[j+1];
    var e=cleanpreferences[j-1];
    var h=cleanpreferences[j+2];
    var g1=d-c;
    var g2=h-d;
    
    if (g1==1 && g2==1){
      triangles++;
      j=j+2;
        
      }
      
    }
  
    
  //var triangles=result1/3;

  return triangles;
  }
  //функия сортировки массива как чисел
  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  