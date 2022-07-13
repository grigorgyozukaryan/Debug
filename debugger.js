const arr1 = [50,10,10,20,30,34]
const arr3 =[]
const arr2 =[1,64,31,5,6,4,]


const x = spread(arr1,arr3)
console.log(x);

function spread(arrSpred,arrPush){
  
  for(i = 0; i < arrSpred.length; i++){
      arrPush.push(arrSpred[i])
  }
  return arrPush
  }


  