/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  //узнаем длинну массива
  var lengthmas=preferences.length;
  var k=0;
  var buffer=[];
  var triangles=0;

  for(var i=0; i<lengthmas; i++){
    var a=preferences[i];
    var b=preferences[a-1];
    var c=preferences[b-1];
    k++;
 
    if(c-1==i && a!==b){
     triangles++;
     delete preferences[i];
     delete preferences[a-1];
     delete preferences[b-1];
    
    }
    
  }
  return triangles;

}

