function search() {
    let input = document.getElementById('searchBox').value;
    input = input.toLowerCase();
    

    let container = document.getElementById('homeCenter');
    let icons = container.getElementsByClassName('frame');


    for (let i = 0; i < icons.length; i++) {
        let metadataTag = icons[i].getElementsByClassName('metadata');
        console.log(metadataTag);
        if (metadataTag) {
            let metadata = metadataTag.textContent;
            console.log(metadata);
        }
        
        
        
    }
    // let metadata = container.getElementsByTagName('span')[0];
    
    // console.log(icons.length);

}

// if input is empty, display all of the boxes