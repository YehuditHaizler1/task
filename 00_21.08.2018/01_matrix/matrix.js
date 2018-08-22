
var table;
let conditions = [
    {
        name: 'upperPart',
        isValid: (i, j) => i <= j
    },
    {
        name: 'downPart',
        isValid: (i, j) => i >= j
    },
    {
        name: 'diagonals',
        isValid: (i, j) => i == 0 || i == table.children[0].children.length - 1 || j == 0 || j == table.children[0].children.length - 1
    },
    {
        name: 'border',
        isValid: (i, j) => i == 0 || j == 0 || i == table.children[0].children.length - 1 || j == table.children[0].children.length - 1
    }
];
function loadTable() {
    table = document.getElementById("table");
}
function resetBgc() {
    for (var i = 0; i < table.children[0].children.length; i++) {
        for (var j = 0; j < table.children[0].children.length; j++) {
            table.children[0].children[i].children[j].style.backgroundColor = "gray";
        }
    }
}
function setMatrix(id) {

    for (var i = 0; i < table.children[0].children.length; i++) {
        for (var j = 0; j < table.children[0].children.length; j++) {
            if (conditions[id].isValid(i, j))
                table.children[0].children[i].children[j].style.backgroundColor = "#3498db";
        }
    }

    setTimeout(() => {
        resetBgc();
    }, 1500);
}
