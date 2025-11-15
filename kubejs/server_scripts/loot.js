LootJS.modifiers(event => {
  event.addLootTableModifier(/.*/)
    .removeLoot((ctx, loot) => loot.id.startsWith("spelled:"))
})
