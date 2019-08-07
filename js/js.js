// search algo
function search() {
    let input = document.getElementById('searchBox').value;
    input = input.toLowerCase();

    let container = document.getElementById('homeCenter');
    let icons = container.getElementsByClassName('frame');

    for (let i = 0; i < icons.length; i++) {
        let metadataTag = icons[i].getElementsByClassName('metadata');
        let data = metadataTag.item(0).innerHTML;
        let words = data.split(',');

        let found = false;
        for (let j = 0; j < words.length; j++) {
            if (words[j].indexOf(input) != -1) {
                found = true;
                break;
            }
        }
        if (!found) {
            icons[i].setAttribute("style", "display: none");
        } else {
            icons[i].setAttribute("style", "display: inline");
        }

        if (input == "") {
            icons[i].setAttribute("style", "display: inline");

        }
    }
}


