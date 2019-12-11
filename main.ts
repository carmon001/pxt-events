scene.setBackgroundColor(8)
let cherryCake = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 f 2 2 2 f 2 2 2 2 2 . 
. 5 5 5 5 f 5 5 5 f 5 5 5 5 5 . 
. 5 5 5 5 f 5 5 5 f 5 5 f 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 f 5 5 . 
. 5 5 5 5 5 5 5 5 5 f f 5 5 5 . 
. 2 2 2 f f f f f f 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
cherryCake.setPosition(92, 63)
controller.moveSprite(cherryCake)
let messageDad = "ldzpln"
cherryCake.say(messageDad)
let cuatro = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 3 3 3 3 3 3 . . . . . 
. . . . 3 3 3 3 3 3 3 3 . . . . 
. . . b f 3 3 3 3 3 b f 3 . . . 
. . 3 4 f f 3 3 3 b f f 4 3 . . 
. . 3 4 1 f f 3 3 f f 1 4 3 . . 
. . . 3 1 7 1 3 3 1 7 1 3 . . . 
. . . 3 4 4 b 3 3 4 4 4 3 . . . 
. . . . 3 b b 3 3 4 3 3 . . . . 
. . . . . b 3 3 3 3 . . . . . . 
. . . . . . . e 2 . . . . . . . 
. . . . . . . e 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
cuatro.setPosition(16, 17)
let mushroom = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . a c c c c c a . . . . 
. . . . c c a c c c a c c . . . 
. . . c d b c c c c c b d c . . 
. . . b f d c c c c c d f b . . 
. . . c f d c c c b c d f c . . 
. . . c d d c c c b c d d c . . 
. . . c d d c c c b c d d c . . 
. . . c c 1 c c d b c 1 c c . . 
. . . a c 1 c b b b c 1 c a . . 
. . . a c 1 1 c c c 1 1 c a . . 
. . . . c d 1 1 1 1 1 d c . . . 
. . . . c c d d d d d c c . . . 
. . . . . c c c c c c c . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
mushroom.setPosition(141, 12)
let teclasdo = sprites.create(img`
. . . . . . . . . . . . . . . . 
. 9 4 4 4 4 4 4 4 4 4 4 4 4 9 . 
. 9 4 4 4 3 d 4 4 d 3 4 4 4 9 . 
. 6 4 4 4 d 5 5 5 5 d 4 4 4 6 . 
. 6 4 4 4 4 5 c c 5 4 4 4 4 6 . 
. 9 4 4 4 4 5 c c 5 4 4 4 4 9 . 
. . 4 4 4 4 5 c c 5 4 4 4 4 . . 
. . 4 4 4 d 5 5 5 5 d 4 4 4 . . 
. . 4 4 4 3 d 4 4 d 3 4 4 4 . . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . 4 4 1 1 1 1 1 1 1 1 4 4 . . 
. . 4 1 d d d d d d d d 1 4 . . 
. . 4 d 4 4 4 4 4 4 4 4 d 4 . . 
. . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
teclasdo.setPosition(21, 89)
game.onUpdateInterval(100, function () {
    teclasdo.y += controller.dy()
    teclasdo.x += controller.dx()
})
