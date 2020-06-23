window.addEventListener("DOMContentLoaded",() => {
    const body = document.querySelector('body');

    function recursy(element) {
        element.childNodes.forEach(node => {

            // if(node.nodeName === "#text") {
            //     return;
            // } else {
            //     console.log(node);
            //     recursy(node);
            // }

            if(node.nodeName.match(/^H\d/)) {
                console.log(node);
            } else {
                recursy(node);
            }
        });
    }
    recursy(body);
});
