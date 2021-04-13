namespace SpriteKind {
    export const Level = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(-1)
    orange.startEffect(effects.smiles, 100)
})
let lvl3: Sprite = null
let projectile: Sprite = null
let orange: Sprite = null
scene.setBackgroundColor(15)
orange = sprites.create(img`
    . . . . . . 7 7 . . . . . . . . 
    . . . . . . . 7 . . . . . . . . 
    . . . . 4 4 4 7 4 4 4 . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . . 4 4 4 4 4 4 4 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(orange)
orange.setStayInScreen(true)
info.setScore(1000)
let lvl1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    2 . . . 2 . . . . 2 . 2 . . . . 
    2 . . . 2 . . . . 2 . 2 . . . . 
    2 . . . . 2 . . 2 . . 2 . . . . 
    2 . . . . 2 . . 2 . . 2 2 . . . 
    2 2 2 . . . 2 2 . . . . 2 2 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Level)
lvl1.setPosition(124, 19)
for (let index = 0; index < 20; index++) {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, randint(-50, 50), randint(-50, 50))
    pause(500)
}
lvl1.destroy(effects.spray, 500)
let lvl2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 5 5 5 5 . . . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . . . 5 5 . . . . . . 
    . . . . . . . . 5 5 . . . . . . 
    . . . . . . . . 5 . . . . . . . 
    . . . . . . 5 5 5 . . . . . . . 
    . . . . . 5 5 . . . . . . . . . 
    . . . . 5 5 . . . . . . . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Level)
lvl2.setPosition(124, 19)
pause(5000)
for (let index = 0; index < 35; index++) {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 7 7 7 7 . . . . . . . 
        . . . . . 7 . . 7 . . . . . . . 
        . . . . 7 . . . . 7 . . . . . . 
        . . . 7 . . . . . . 7 . . . . . 
        . . . 7 . . . . . . 7 . . . . . 
        . . 7 . . . . . . . . 7 . . . . 
        . . 7 . . . . . . . . 7 . . . . 
        . 2 2 2 2 . . . . . 2 2 2 2 . . 
        2 2 2 1 1 2 . . . 2 2 2 1 1 2 . 
        2 2 2 2 1 2 . . . 2 2 2 2 1 2 . 
        2 e 2 2 2 2 . . . 2 e 2 2 2 2 . 
        . 2 e 2 2 . . . . . 2 e 2 2 . . 
        . . e 2 . . . . . . . e 2 . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-76, 76), randint(-50, 50))
    pause(420)
}
lvl2.destroy(effects.fire, 500)
lvl3.setPosition(124, 19)
lvl3 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . . . . 7 . . . . . 
    . . . . . . . . . . 7 . . . . . 
    . . . . . . . . . . 7 . . . . . 
    . . . . . . 7 7 7 7 7 . . . . . 
    . . . . . . . . . . 7 . . . . . 
    . . . . . . . . . . 7 . . . . . 
    . . . . . . . . . . 7 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Level)
pause(5000)
for (let index = 0; index < 45; index++) {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . 7 . . . . . . . . 
        . . . . . 7 . 7 . 7 . . . . . . 
        . . . . . . 7 7 7 . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 2 2 2 1 1 2 . . . . . 
        . . . 2 2 2 2 2 2 1 1 2 . . . . 
        . . 2 2 2 2 2 2 2 2 1 1 2 . . . 
        . . 2 e 2 2 2 2 2 2 2 1 2 . . . 
        . . 2 e e 2 2 2 2 2 2 2 2 . . . 
        . . . 2 e e 2 2 2 2 2 2 . . . . 
        . . . . 2 e 2 2 2 2 2 . . . . . 
        . . . . . 2 e 2 2 2 . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-90, 90), randint(-50, 50))
    pause(350)
}
lvl3.destroy(effects.confetti, 500)
let lvl4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . 8 8 . . . . . . . . 
    . . . . . 8 . 8 . . . . . . . . 
    . . . . 8 . . 8 . . . . . . . . 
    . . . 8 . . . 8 . . . . . . . . 
    . . 8 8 8 8 8 8 8 . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . 8 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
lvl4.setPosition(124, 19)
pause(5000)
for (let index = 0; index < 60; index++) {
    projectile = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 1 1 5 . . . . . . 
        . . . . 5 5 5 5 1 1 5 . . . . . 
        . . . 5 5 5 5 5 5 1 1 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 1 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . 5 e e 5 5 5 5 5 5 . . . . 
        . . . . 5 e e 5 5 5 5 . . . . . 
        . . . . . 5 e e 5 5 . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . . . 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-90, 90), randint(-50, 50))
    pause(200)
}
game.over(true, effects.confetti)
