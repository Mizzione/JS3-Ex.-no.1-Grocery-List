window.onload = function onload() {

    const mainDiv = document.getElementById("main");
    let stringHTML = "";

    function capLetter(str) {
        const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
        return capitalized;
    }

    let groceryList = {
            'meats': ['fish', 'chicken', 'pork', 'beef'],
            'soaps and shampoo' : ['head n shoulders', 'safeguard', 'dove', 'rejoice'],
            'vegetables': ['carrots', 'petchay', 'talong', 'sitaw'],
            'canned goods': ['corned beef', 'sardines', 'spam', 'beef loaf']
        }
    
    ;

    for (let key in groceryList) {
        stringHTML += `
        <article class="needs">
            <div class="nextRow">
                <div class="column">
                    <h1>${capLetter(key)}</h1>
        `;
        for (let value of groceryList[key]) {
            stringHTML += `
                    <input type="checkbox" name="${value}" id="${value}" value="{capLetter(value)}"/>
                    <label for="${value}">${capLetter(value)}</label>
                    <br>

            `;
        }
        stringHTML += `
                </div>
            </div>
        </article>
        `;
    }

    mainDiv.innerHTML = stringHTML;
}