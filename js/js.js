// search algo
function search() {
    let input = document.getElementById('searchBox').value;
    input = input.toLowerCase();

    let sections = document.getElementsByClassName('projectSection');

    for (let s = 0; s < sections.length; s++) {
        let icons = sections[s].getElementsByClassName('frame');
        let visible = 0;

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

            if (input == "") {
                found = true;
            }

            if (found) {
                icons[i].removeAttribute("style");
                visible++;
            } else {
                icons[i].setAttribute("style", "display: none");
            }
        }

        // drop the whole section, heading and all, when nothing in it matches
        if (visible == 0 && input != "") {
            sections[s].setAttribute("style", "display: none");
        } else {
            sections[s].removeAttribute("style");
        }
    }
}

// a section only shows its "nothing here yet" note while it has no cards
document.addEventListener('DOMContentLoaded', function () {
    let sections = document.getElementsByClassName('projectSection');

    for (let s = 0; s < sections.length; s++) {
        let note = sections[s].getElementsByClassName('sectionEmpty').item(0);
        if (note != null && sections[s].getElementsByClassName('frame').length > 0) {
            note.setAttribute("style", "display: none");
        }
    }
});
