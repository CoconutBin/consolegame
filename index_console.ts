let worldArray = [[
    '_','_','_','_','_'
],
[
    '_','_','_','_','_'
],
[
    '_','_','_','_','_'
],
[
    '_','_','_','_','_'
],
[
    '_','_','_','_','_'
]]

const worldWidth = worldArray[0].length
const worldHeight = worldArray.length
const show = document.getElementById('show')

let tile = '_'

class Item {
    constructor(sprite, x, y){
        this.sprite = sprite
        this.x = x
        this.y = y
    }
    sprite
    x
    y
}
let character = new Item(
    'o',
    Math.floor(Math.random()*worldWidth),
    Math.floor(Math.random()*worldHeight)
)
let treasure = new Item(
    "X",
    Math.floor(Math.random()*worldWidth),
    Math.floor(Math.random()*worldHeight)
)

function display(item){
    worldArray[item.y][item.x] = item.sprite
}
display(character)
display(treasure)


function setTile(newTile){
    tile = newTile
    worldArray = worldArray.map(input => input.map(input => newTile))
    return worldArray
}

function coords(x, y){
 return worldArray[x][y]
}

console.log(showmap())
console.log("Enter one of these options:\nnorth(), south(), east(), west()")

function showmap(){
    let map = ""
    for(let members of worldArray){
    map += members.join(' ') + '\n'
    }
    return map
}

function north() {
    worldArray[character.y][character.x] = tile
    character.y = (character.y - 1 + worldHeight) % worldHeight
    worldArray[character.y][character.x] = character.sprite
    console.log(showmap())
    checkWin()
}

function south() {
    worldArray[character.y][character.x] = tile
    character.y = (character.y + 1) % worldHeight
    worldArray[character.y][character.x] = character.sprite
    console.log(showmap())
    checkWin()
}

function east() {
    worldArray[character.y][character.x] = tile
    character.x = (character.x + 1) % worldWidth
    worldArray[character.y][character.x] = character.sprite
    console.log(showmap())
    checkWin()
}

function west() {
    worldArray[character.y][character.x] = tile
    character.x = (character.x - 1 + worldWidth) % worldWidth
    worldArray[character.y][character.x] = character.sprite
    console.log(showmap())
    checkWin()
}

function checkWin(){
if(character.x == treasure.x && character.y == treasure.y){
    console.log('You win!, refresh the page to replay!')
}
}

