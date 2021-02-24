import { CardState } from "./card.js";


export function renderEasy(state) {
    return renderTableEasy(state.table);
}

export function renderHard(state) {
    return renderTableHard(state.table);
}


function renderTableEasy(table) {
    return table.map(renderRowEasy).join("");
}

function renderTableHard(table) {
    return table.map(renderRowHard).join("");
}

function renderRowEasy(row){
    return row.map(renderCardEasy).join("");
}

function renderRowHard(row){
    return row.map(renderCardHard).join("");
}

function renderCardEasy(card) {
    let cardName = (card.number + card.color + card.shape).toString();
    if (card.state === CardState.UNSELECTED){
        return `
            <div class = "card">
                <div class = "card-face">
                    <img class = "card-img ${cardName}" src="icons/easy/${cardName}.svg">
                </div>
            </div>
        `;
    }
}

function renderCardHard(card) {
    let cardName = (card.number + card.pattern + card.color + card.shape).toString();
    if (card.state === CardState.UNSELECTED){
        return `
            <div class = "card">
                <div class = "card-face">
                    <img class = "card-img ${cardName}" src="icons/hard/${cardName}.svg">
                </div>
            </div>
        `;
    }
}