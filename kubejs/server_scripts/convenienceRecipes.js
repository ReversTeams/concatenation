ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:chest'),
        [
            'AA ',
            '   ',
            '   '
        ],
        {
            A: '#minecraft:logs'
        }
    )
    event.shaped(
        Item.of('minecraft:chest', 4),
        [
            'AAA',
            'A A',
            'AAA'
        ],
        {
            A: '#minecraft:logs'
        }
    )
    event.shaped(
        Item.of('minecraft:stick', 16),
        [
            'A  ',
            'A  ',
            '   '
        ],
        {
            A: '#minecraft:logs'
        }
    )
    event.shapeless(
        Item.of('minecraft:amethyst_cluster'),
        [
            'minecraft:large_amethyst_bud',
            'minecraft:large_amethyst_bud',
            'minecraft:large_amethyst_bud',
            'minecraft:large_amethyst_bud'
        ]
    )
    event.shapeless(
        Item.of('minecraft:large_amethyst_bud'),
        [
            'minecraft:medium_amethyst_bud',
            'minecraft:medium_amethyst_bud',
            'minecraft:medium_amethyst_bud',
            'minecraft:medium_amethyst_bud'
        ]
    )
    event.shapeless(
        Item.of('minecraft:medium_amethyst_bud'),
        [
            'minecraft:small_amethyst_bud',
            'minecraft:small_amethyst_bud',
            'minecraft:small_amethyst_bud',
            'minecraft:small_amethyst_bud'
        ]
    )
});