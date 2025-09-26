// Creates the World Devourer loot table

ServerEvents.customCommand("genworlddevourer", () => {

	Utils.server.runCommand("/say [WDEVR] Started");

	const $LootDataType = Java.loadClass("net.minecraft.world.level.storage.loot.LootDataType")

	const lootData = Utils.server.getLootData();
	const allTables = lootData.getKeys($LootDataType.TABLE);
	const list = allTables
		.stream()
		.map(id => id.toString())
		.toList();

	Utils.server.runCommand("/say [WDEVR] Obtained reslocs");

	JsonIO.write("kubejs/data/foolsendeavour/loot_tables/chests/devoured_world.json", {
		"pools": [
			{
				"rolls": 1,
				"entries": list.map(resloc => ({
					"type": "minecraft:loot_table",
					"name": resloc
				}))
			}
		]
	});

	Utils.server.runCommand("/say [WDEVR] Wrote loot table");
})