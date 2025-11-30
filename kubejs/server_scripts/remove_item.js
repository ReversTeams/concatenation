//disable extended AE bugged/un needed items

const disabledItems = [
    'expatternprovider:fishbig',
    'expatternprovider:ex_inscriber',
    'expatternprovider:ex_charger',
    'expatternprovider:me_packing_tape',
    'expatternprovider:crystal_fixer',
    'expatternprovider:ingredient_buffer'
];

ServerEvents.recipes(event => {
    disabledItems.forEach(id => {
        event.remove({ output: id });
        event.remove({ input: id });
    });
});

ServerEvents.tags('item', event => {
    event.add('kubejs:disabled_items', disabledItems);
});
