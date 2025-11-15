ServerEvents.recipes(event => {

    // The Economy, Fools!
    event.shaped(
        Item.of('concatenationcore:gold_card'),
        [
            'AAA',
            'CDC',
            'ABA'
        ],
        {
            A: '#concatenation:smooth_material',
            C: '#concatenation:circuits',
            B: 'concatenationcore:gold_paper',
            D: 'concatenationcore:merchant_permit_1'
        }
    )
    event.shaped(
        Item.of('concatenationcore:merchant_permit_1'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            B: 'minecraft:diamond_block',
            D: 'concatenationcore:one_hundred_twenty_five_karaon',
            A: 'minecraft:iron_block',
            C: 'concatenationcore:twice_compacted_wood'
        }
    )
    event.shaped(
        Item.of('concatenationcore:merchant_permit_2'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:diamond_block',
            C: 'concatenationcore:shimmering_gold_block',
            D: 'concatenationcore:merchant_permit_1',
            B: 'minecraft:netherite_block',
            E: 'concatenationcore:six_hundred_twenty_five_karaon'
        }
    )
    event.shaped(
        Item.of('concatenationcore:merchant_permit_2'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:diamond_block',
            D: 'concatenationcore:gold_card',
            B: 'minecraft:netherite_block',
            C: 'concatenationcore:glowing_gold_block',
            E: 'concatenationcore:six_hundred_twenty_five_karaon'
        }
    )
    event.shaped(
        Item.of('concatenationcore:merchant_permit_3'),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            C: 'concatenationcore:merchant_permit_2',
            B: 'concatenationcore:three_thousand_one_hundred_twenty_five_karaon',
            A: 'concatenationcore:silver_paper'
        }
    )
    event.shaped(
        Item.of('concatenationcore:one_karaon'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'thermal:enderium_coin'
        }
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 5),
        ['concatenationcore:five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:five_karaon', 5),
        ['concatenationcore:twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 25),
        ['concatenationcore:twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:twenty_five_karaon', 5),
        ['concatenationcore:one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:five_karaon', 25),
        ['concatenationcore:one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 125),
        ['concatenationcore:one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_hundred_twenty_five_karaon', 5),
        ['concatenationcore:six_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:twenty_five_karaon', 25),
        ['concatenationcore:six_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:five_karaon', 125),
        ['concatenationcore:six_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 625),
        ['concatenationcore:six_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:six_hundred_twenty_five_karaon', 5),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_hundred_twenty_five_karaon', 25),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:twenty_five_karaon', 125),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:five_karaon', 625),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 3125),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )


});