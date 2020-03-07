=== free_stall ===
*   [Try the stall on your right.]
    God is good. The stall is empty. Nobody saw your shit drenched ass. And best of all, there’s a fresh roll of toilet paper.
    Your ass is clean. It all flushes perfectly. You wash your hands and return to the party and your crush. You might even get lucky tonight. THE END. -> END
*   [Try the stall on your left.]

// if you talk to the bully
{ 
- next_stall.bully_recognize.deny:
    You already messed with that shmuck, don't go in there!
    * * [Waddle away in embarassment.] 
    You made it back to your own stall just in time.
    -> beginning
    * * [Try the stall on your right.]
    Someone comes in and sees you with your pants down. They run screaming, "PLAYER_NAME has their pants down!" GAME OVER.
    -> END
    
//if the person did not run out of the stall and you did not deny
// the bully again
- not next_stall.run_out && not next_stall.bully_recognize.deny:
    You pull on the door so fast you didn’t notice it was locked. The person inside laughs. “Why are your pants down?”
    * *  [Wow that sucked. Let’s waddle away in embarrassment.]-> beginning
    * *  (meekly_ask) [Meekly ask for some toilet paper.]
    “No problem,” the stranger says. “Head on back to your stall and I’ll pass it under.”
    You’re drenched with sweat but made it back safely. You sit again, lock the door, and wait.-> next_stall.talk_with_bully
    
//if the bully did run out of the stall
- else:
    The now empty stall is yours for the taking. And best of all, there’s a fresh roll of toilet paper.
    Your ass is clean. It all flushes perfectly. You wash your hands and return to the party and your crush. You might even get lucky tonight. THE END. -> END 
}
    