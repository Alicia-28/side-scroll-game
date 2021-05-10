class ActionKind(Enum):
    Walking = 0
    Idle = 1
    Jumping = 2
    Flying = 3
def walk_left():
    global walk_l
    walk_l = animation.create_animation(ActionKind.Walking, 150)
    walk_l.add_animation_frame(img("""
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
    """))
    walk_l.add_animation_frame(img("""
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
    """))
    animation.set_action(Mr_Rat, ActionKind.Walking)
    animation.attach_animation(Mr_Rat, walk_l)
def fly():
    if Seagull.is_hitting_tile(CollisionDirection.RIGHT):
        Seagull.set_velocity(-75, 0)
    elif Seagull.is_hitting_tile(CollisionDirection.LEFT):
        Seagull.set_velocity(75, 0)
def jump():
    Mr_Rat.ay += 7.6
def win_or_lose():
    if Mr_Rat.tile_kind_at(TileDirection.LEFT, assets.tile("""
        tile8
    """)):
        game.over(True)
    elif Seagull.overlaps_with(Mr_Rat):
        game.over(False)
def walk_right():
    global walk_r
    walk_r = animation.create_animation(ActionKind.Walking, 150)
    walk_r.add_animation_frame(img("""
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
    """))
    walk_r.add_animation_frame(img("""
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
    """))
    animation.set_action(Mr_Rat, ActionKind.Walking)
    animation.attach_animation(Mr_Rat, walk_r)
walk_r: animation.Animation = None
walk_l: animation.Animation = None
Seagull: Sprite = None
Mr_Rat: Sprite = None
info.start_countdown(60)
tiles.set_tilemap(tilemap("""
    level2
"""))
Mr_Rat = sprites.create(img("""
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
    """),
    SpriteKind.player)
scene.camera_follow_sprite(Mr_Rat)
Mr_Rat.x = 6
Mr_Rat.y = 472
controller.move_sprite(Mr_Rat)
Seagull = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Seagull.x = 8
Seagull.y = 120
Seagull.set_velocity(68, 0)

def on_on_update():
    fly()
    if controller.left.is_pressed():
        walk_left()
    elif controller.right.is_pressed():
        walk_right()
    elif controller.up.is_pressed():
        jump()
    win_or_lose()
game.on_update(on_on_update)
