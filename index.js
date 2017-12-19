var recipes = {eggs: 3}

function updateObjectWithKeyAndValue(object,key,value){
  return object.assign({}, {[key]: value});
  
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value){
  object[key]=value;
  return object;
  
}

function deleteFromObjectByKey(object,key){
  
}

function destructivelyDeleteFromObjectByKey(object,key){
  
}