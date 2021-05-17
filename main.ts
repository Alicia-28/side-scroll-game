enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Flying
}
function walk_left () {
    walk_l = animation.createAnimation(ActionKind.Walking, 150)
    walk_l.addAnimationFrame(img`
        . . . f f f . . . f f f . . . . 
        . . . f 4 4 . . . 4 4 f . . . . 
        . . . f 4 d f f f d 4 f . . . . 
        . . . . . f 4 4 4 f . . . . . . 
        . . . . f 1 1 4 1 1 f . . . . . 
        . . . . f e 1 4 e 1 f . . . . . 
        . . . . f 4 4 3 4 4 f . . . . . 
        . . . . f 4 4 4 4 4 f . . . . . 
        . . . . . f 4 e 4 f . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 . 4 4 4 . 4 . . . . . 
        . . . . f . 4 4 4 . f . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . f 4 . 4 . . . . . . . 
        . . . . f 4 4 . 4 f . . . . . . 
        . . . . . . . . 4 4 f . . . . . 
        `)
    walk_l.addAnimationFrame(img`
        . . . f f f . . . f f f . . . . 
        . . . f 4 4 . . . 4 4 f . . . . 
        . . . f 4 d f f f d 4 f . . . . 
        . . . . . f 4 4 4 f . . . . . . 
        . . . . f 1 1 4 1 1 f . . . . . 
        . . . . f e 1 4 e 1 f . . . . . 
        . . . . f 4 4 3 4 4 f . . . . . 
        . . . . f 4 4 4 4 4 f . . . . . 
        . . . . . f 4 e 4 f . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 . 4 4 4 . 4 . . . . . 
        . . . . f . 4 4 4 . f . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 . 4 f . . . . . . 
        . . . . . f 4 . 4 4 f . . . . . 
        . . . . f 4 4 . . . . . . . . . 
        `)
    animation.setAction(Mr_Rat, ActionKind.Walking)
    animation.attachAnimation(Mr_Rat, walk_l)
}
function fly () {
    if (Seagull.isHittingTile(CollisionDirection.Right)) {
        Seagull.setVelocity(-75, 0)
    } else if (Seagull.isHittingTile(CollisionDirection.Left)) {
        Seagull.setVelocity(75, 0)
    }
}
function jump () {
    Mr_Rat.ay += 0
}
function win_or_lose () {
    if (Mr_Rat.tileKindAt(TileDirection.Left, assets.tile`tile8`)) {
        game.over(true)
    } else if (Seagull.overlapsWith(Mr_Rat)) {
        game.over(false)
    }
}
function walk_right () {
    walk_r = animation.createAnimation(ActionKind.Walking, 150)
    walk_r.addAnimationFrame(img`
        . . . f f f . . . f f f . . . . 
        . . . f 4 4 . . . 4 4 f . . . . 
        . . . f 4 d f f f d 4 f . . . . 
        . . . . . f 4 4 4 f . . . . . . 
        . . . . f 1 1 4 1 1 f . . . . . 
        . . . . f 1 e 4 1 e f . . . . . 
        . . . . f 4 4 3 4 4 f . . . . . 
        . . . . f 4 4 4 4 4 f . . . . . 
        . . . . . f 4 e 4 f . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 . 4 4 4 . 4 . . . . . 
        . . . . f . 4 4 4 . f . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 . 4 f . . . . . . 
        . . . . . f 4 . 4 4 f . . . . . 
        . . . . f 4 4 . . . . . . . . . 
        `)
    walk_r.addAnimationFrame(img`
        . . . f f f . . . f f f . . . . 
        . . . f 4 4 . . . 4 4 f . . . . 
        . . . f 4 d f f f d 4 f . . . . 
        . . . . . f 4 4 4 f . . . . . . 
        . . . . f 1 1 4 1 1 f . . . . . 
        . . . . f 1 e 4 1 e f . . . . . 
        . . . . f 4 4 3 4 4 f . . . . . 
        . . . . f 4 4 4 4 4 f . . . . . 
        . . . . . f 4 e 4 f . . . . . . 
        . . . . 4 4 4 4 4 4 4 . . . . . 
        . . . . 4 . 4 4 4 . 4 . . . . . 
        . . . . f . 4 4 4 . f . . . . . 
        . . . . . . 4 4 4 . . . . . . . 
        . . . . . f 4 . 4 . . . . . . . 
        . . . . f 4 4 . 4 f . . . . . . 
        . . . . . . . . 4 4 f . . . . . 
        `)
    animation.setAction(Mr_Rat, ActionKind.Walking)
    animation.attachAnimation(Mr_Rat, walk_r)
    walk_r.addAnimationFrame(img`
        . . . 3 c f f f f f 3 3 . . . . 
        . . . 3 f e e e e e f 3 . . . . 
        . . 3 c f 1 1 e 1 1 f 3 . . . . 
        . . 3 c f 1 f e f 1 f 3 . . . . 
        . . 3 c f d e e e d f 3 . . . . 
        . . . 3 f e e f e e f 3 . . . . 
        . . . 3 c f f f f f 3 3 . . . . 
        . . . 3 3 c c c c 3 3 3 . . . . 
        . . . 3 3 3 3 c b 3 3 3 . . . . 
        . . . 3 3 3 3 c b 3 3 3 . . . . 
        . . . 3 3 3 3 3 c b 3 3 . . . . 
        . . . . 3 3 3 3 c b 3 . . . . . 
        . . . . 3 3 3 3 3 c b . . . . . 
        . . . . 3 3 3 3 3 3 b . . . . . 
        . . . . 3 3 3 3 3 3 3 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
}
let walk_r: animation.Animation = null
let walk_l: animation.Animation = null
let Seagull: Sprite = null
let Mr_Rat: Sprite = null
info.startCountdown(60)
tiles.setTilemap(tilemap`level3`)
Mr_Rat = sprites.create(img`
    . . . f f f . . . f f f . . . . 
    . . . f 4 4 . . . 4 4 f . . . . 
    . . . f 4 d f f f d 4 f . . . . 
    . . . . . f 4 4 4 f . . . . . . 
    . . . . f 1 1 4 1 1 . . . . . . 
    . . . . f 1 e 4 1 e f . . . . . 
    . . . . f 4 4 3 4 4 f . . . . . 
    . . . . f 4 4 4 4 4 f . . . . . 
    . . . . . f 4 e 4 f . . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 . . . . 
    . . . 4 . . 4 4 4 . . 4 . . . . 
    . . . f . . 4 4 4 . . f . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . . 4 4 4 . . . . . . . 
    . . . . . f 4 . 4 f . . . . . . 
    . . . . f 4 4 . 4 4 f . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(Mr_Rat)
Mr_Rat.x = 6
Mr_Rat.y = 472
controller.moveSprite(Mr_Rat)
Seagull = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . f 1 1 . . . . . . . . . . . . 
    . . d 1 1 1 . . . . . . . . . . 
    . . . d 1 1 1 . . . . . . . . . 
    . . . d d 1 1 1 . . 1 1 . . . . 
    . . . . d 1 1 1 1 1 1 f 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 4 4 . 
    . . . 1 1 1 1 1 1 1 1 1 . . . . 
    1 1 1 1 1 1 1 1 1 1 1 . . . . . 
    f 1 1 1 1 1 1 1 1 1 1 . . . . . 
    . 1 1 . . . . . d 1 1 . . . . . 
    . f f . . . . . d 1 1 . . . . . 
    . . . . . . . . 1 1 1 . . . . . 
    . . . . . . . f 1 . . . . . . . 
    `, SpriteKind.Enemy)
Seagull.x = 8
Seagull.y = 120
Seagull.setVelocity(68, 0)
game.onUpdate(function () {
    fly()
    if (controller.left.isPressed()) {
        walk_left()
    } else if (controller.right.isPressed()) {
        walk_right()
    } else if (controller.up.isPressed()) {
        jump()
    }
    win_or_lose()
})
