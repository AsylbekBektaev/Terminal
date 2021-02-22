/*
document.addEventListener('DOMContentLoaded', () => {
    let links = document.querySelectorAll('a');

    if (links && links.length) {
        let length = links.length;
        for (let i = 0; i < length; i++) {
            let link = links[i];

            link.addEventListener('click', (event) => {
                let target = event.target;

                while (target.tagName !== 'A') {
                    target = target.parentNode;
                }

                return false;
            });
        }
    }
});
*/
