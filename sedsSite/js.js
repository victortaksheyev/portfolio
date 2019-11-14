// var contents = ""; // string representing the content of the file
var mapper = []; // create an empty array

var elementArr = []

function readSingleFile(e) {
    var file = e.target.files[0];
    if (!file) {
      return;
    }
    var reader = new FileReader();
    reader.onload = function(e) {
    var contents = e.target.result;
      displayContents(contents);
      createDict(); 
      parser(contents);
      createFile();
      var time = msToTime(490057);
      console.log(time);

      for (let i = 0; i < elementArr.length; i++) {
          console.log(elementArr[i]);
      }
    
    };
    reader.readAsText(file);

    
  }
  
  function displayContents(contents) {
    var element = document.getElementById('file-content');
    element.textContent = contents;
  }
  
  document.getElementById('file-input')
    .addEventListener('change', readSingleFile, false);


// populates the elementArr
function parser(contents) {
    var split = contents.split("\n");
    for (let i = 0; i < split.length; i++) {
        for (let j = 0; j < mapper.length; j++) {
            if (split[i].includes(mapper[j].value)) {
                
                initIndex = mapper[j].value.length;
                console.log(initIndex);
        
                data = split[i].substring(initIndex,  split[i].length)
                
                elementArr.push({
                    value: mapper[j].value,
                    data: data
                });
                break;
            }
        }
    }
}


// dictionary that associates values (entered by user to numbers)
function createDict() {
    // items defined in here need to be placed in most -> least specific order
    // ex) subtitle precedes title
    
    mapper.push({
        key:   1,
        value: "subtitle",
        data: ""
    });

    mapper.push({
        key:   0,
        value: "title",
        data: ""
    });

    mapper.push({
        key:   2,
        value: "image",
        data: ""
    });

    mapper.push({
        key:   3,
        value: "desc",
        data: ""
    });



}


function createFile() {
    var file = new File(["foo"], "foo.txt", {
        type: "text/plain",
      });
    
    console.log("File created");
}


function msToTime(duration) {
    var milliseconds = parseInt((duration%1000))
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}