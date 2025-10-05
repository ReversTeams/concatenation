PlayerEvents.loggedIn(event => {
  let player = event.player;

  if (!player.persistentData.chatCleared) {
    event.server.scheduleInTicks(400, ctx => {
      for (let i = 0; i < 100; i++) {
        player.tell(Text.of(""));
      }
      player.persistentData.chatCleared = true;
    });
  }
});
