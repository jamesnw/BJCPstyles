
function categoryCount(){
  return styles.length;
}

function categories(){
  var categories = [];
  for(var i = 0; i < styles.length; i++){
    categories.push(styles[i].category);
  }
  return categories;
}


var _styleNamesArray = false;
function styleNames(){
  if(!_styleNamesArray){
    _styleNamesArray = [];
    var stylesListLoc = stylesList();
    for(var i = 0; i < stylesListLoc.length; i++){
      _styleNamesArray.push(stylesListLoc[i].name);
    }
  } 
  return _styleNamesArray;
}

var _styleCount = false;
function styleCount(){
  if(!_styleCount){
    if(!_styleNamesArray){
      styleNames();
    }
    _styleCount = _styleArray.length;
  }
  return _styleCount;
}

// Return a list of all styles
var _stylesListArray = false;
function stylesList(){
  if(!_stylesListArray){
    _stylesListArray = [];
    for(var i = 0; i < styles.length; i++){
      subcategories = styles[i].subcategories;
      for(var j=0; j < subcategories.length; j++){
        //Some styles are nested, and have further subcategories. We just want the sub-subcategories
        if(typeof(subcategories[j].subcategories) === 'undefined'){
          _stylesListArray.push(subcategories[j]);
        } else{
          subsubcategories = subcategories[j].subcategories;
          for(var k = 0; k < subsubcategories.length; k++){
            _stylesListArray.push(subsubcategories[k]);
          }
        }
      }
    }
  } 
  return _stylesListArray;
}

function findStyleByCode(code){
  
}

function findStyleByName(name){
  
}

