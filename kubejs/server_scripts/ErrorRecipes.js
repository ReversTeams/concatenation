ServerEvents.recipes(event => {
    event.remove({output: 'the_deep_void:glutton_block'})
    event.remove({output: 'the_deep_void:reinforced_pickaxe'})
    event.shaped(
                Item.of('the_deep_void:reinforced_pickaxe'),
                [
                        'ABF',
                        'CDB',
                        'ECA'
                ],
                {
                        F: 'concatenationcore:the_error',
                        E: 'the_deep_void:ancient_onyx',
                        D: 'the_deep_void:onyx_pickaxe',
                        C: 'the_deep_void:black_moss',
                        B: 'the_deep_void:grim_gem',
                        A: 'the_deep_void:void_matter'
                }
        ).keepIngredient('concatenationcore:the_error')
    event.shaped(
                Item.of('the_deep_void:glutton_block'),
                [
                        'ADA',
                        'BCB',
                        'ABA'
                ],
                {
                        D: 'concatenationcore:the_error',
                        C: 'the_deep_void:block_of_ancient_flesh',
                        B: 'projecte:dark_matter_block',
                        A: 'the_deep_void:soul_fused_ingot'
                }
        ).keepIngredient('concatenationcore:the_error')
    event.shaped(
                Item.of(
                        "concatenationcore:the_error",
                        '{display:{Name:\'{"text":"Tarot : The Error","color":"yellow","italic":false}\'},CurioAttributeModifiers:[{AttributeName:"generic.attack_speed",Name:"generic.attack_speed",Amount:0.5,Operation:1,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
                ),
                [
                    'BCB',
                    'DAE',
                    'BFB'
                ],
                { 
                    A: 'tarotcards:the_lovers',
                    B: 'the_deep_void:block_of_refined_onyx',
                    C: 'the_deep_void:heart_of_the_mind',
                    D: 'the_deep_void:call_upon_the_hive',
                    E: 'the_deep_void:rooter',
                    F: 'the_deep_void:void_mirror'
                }
        ).keepIngredient('tarotcards:the_lovers')
    event.shaped(
                Item.of('the_deep_void:grim_shard', 9),
                [
                        'CCC',
                        'BAB',
                        'BDB'
                ],
                {
                    D: 'the_deep_void:liquid_void_bucket',
                    C: 'theurgy:alchemical_salt_mineral',    
                    B: 'the_deep_void:desolate_soil',
                    A: 'the_deep_void:grim_shard'
                }
        ) //these are the most placeholdery placeholder recipes...
    event.shaped(
                Item.of('the_deep_void:ancient_onyx'),
                [
                        'BCB',
                        ' A ',
                        'BDB'
                ],
                {
                    D: 'the_deep_void:liquid_void_bucket',
                    C: 'the_deep_void:desolate_soil',    
                    B: 'the_deep_void:onyx',
                    A: 'theurgy:alchemical_sulfur_gems_precious'
                }
        )
    // event.custom({
    //     "type": "theurgy:digestion",
    //     "category": "misc",
    //     "fluid": {
    //         "amount": 200,
    //         "ingredient": {
    //         "fluid": "the_deep_void:liquid_void"
    //         }
    //     },
    //     "ingredients": [
    //         {
    //         "count": 1,
    //         "ingredient": {
    //             "item": "the_deep_void:grim_shard"
    //         }
    //         },
    //         {
    //         "count": 8,
    //         "ingredient": {
    //             "item": "the_deep_void:desolate_soil"
    //         }
    //         }
    //     ],
    //     "result": {
    //         "count": 8,
    //         "id": "the_deep_void:grim_shard"
    //     },
    //     "time": 400
    // })
    // event.custom({
    //     "type": "theurgy:fermentation",
    //     "category": "misc",
    //     "fluid": {
    //         "amount": 50,
    //         "ingredient": {
    //         "fluid": "the_deep_void:liquid_void"
    //         }
    //     },
    //     "ingredients": [
    //         {
    //         "count": 4,
    //         "ingredient": {
    //             "item": "the_deep_void:onyx"
    //         }
    //         },
    //         {
    //         "count": 1,
    //         "ingredient": {
    //             "item": "the_deep_void:desolate_soil"
    //         }
    //         }
    //     ],
    //     "result": {
    //         "count": 1,
    //         "id": "the_deep_void:ancient_onyx"
    //     },
    //     "time": 100
    // })
    // event.recipes.theurgy.digestion(
    //     "8x the_deep_void:grim_shard",
    //     '1bx the_deep_void:liquid_void',
    //     ['the_deep_void:grim_shard', 'the_deep_void:desolate_soil'],
    //     500
    // )
    // event.recipes.theurgy.fermentation(
    //     "the_deep_void:ancient_onyx",
    //     '1bx the_deep_void:liquid_void',
    //     ['4x the_deep_void:onyx', 'the_deep_void:desolate_soil'],
    //     100
    // )
    // event.shaped(
    //             Item.of('theurgy:alchemical_sulfur_grim_gem'),
    //             [
    //                     'BBB',
    //                     'BAB',
    //                     'BBB'
    //             ],
    //             {
    //                     B: 'the_deep_void:grim_shard',
    //                     A: 'theurgy:alchemical_niter_rare_gem'
    //             }
    //     )
});