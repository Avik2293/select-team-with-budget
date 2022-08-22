
// Team Selection. 

let playerList = document.getElementsByTagName('li');

function setThisPlayer(event) {
    if (playerList.length >= 5) {

        alert('Players cant be more than Five.');
    }
    else {
        const playerName = event.parentNode.children[1].innerText;
        const node = document.createElement("li");
        const textnode = document.createTextNode(playerName);
        node.appendChild(textnode);
        document.getElementById("player-list").appendChild(node);

        event.parentNode.children[2].disabled = true;
        event.parentNode.children[2].style.backgroundColor = 'gray';
    }
}
