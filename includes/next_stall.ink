=== next_stall ===
//only hear the groan the first time
{next_stall == 1: 
You hear a groan to your left. The toilet flushes and there’s the sweetest sound of fresh toilet paper spinning off the roll.
}
*   [Cough and wait for them to reply. You know, real casual like.]
    "Bless you." 
    Well that went nowhere. Unlike your crush who might leave with someone else if you don’t wrap this up.
    -> next_stall
*   [Say, “Excuse me, but can you spare a few squares?”]
    “Excuse me, but can you spare a few squares?”
    -> talk_with_bully
*   (run_out) [Reach your hand under the stall and say, “I need some freakin’ toilet paper right now!”]
    “I need some freakin’ toilet paper right now!”
    Your stall neighbor shrieks so loud that everyone at the reunion probably heard it over the ten year old pop music blaring. They flush once again, gather their pants up and fly out the stall and bathroom without washing their hands. Looks like you’re back where you began.
    -> beginning

= talk_with_bully
{not free_stall.meekly_ask: “Hmm, I could,” the stranger says. They pause to let the relief hit you.} // only prints if player is not coming from the free stall
“But it ain’t free.”
*   "What's your price? I'm desperate here."
    They wait a long time before answering. You can practically see them smiling right through the stall and your bunghole is getting itchy. “A dollar per square sounds more than reasonable.”
    * * [Tell them to fuck off.]
        "No way I'm paying that, sorry buddy."
    * * [Maybe the price is fair? Check your wallet.]
    You reach down into your dropped pants and find your wallet. It has $5 in it.
        * * *   (five_ones) [You reluctantly pass the five ones under the stall.] -> shit_on_hands_ending
        * * *   “I don’t have enough cash. Will you take a check?”
-   “If you don’t have the cash, that’s fine. There’s something else you can do.”
    A thousand thoughts flash through your mind. How many perverted things can you do in a public restroom? But you’re in too deep to back out now. And your ass is on fire and your crush is waiting. 
    *   [You gulp and ask “Like what?”]
        "Like what?"
        “Oh nothing much. I just wanna hear you yell at the top of your lungs. Take a deep breath and give it all you got. Repeat after me: I’m PLAYER NAME and I still don’t know how to wipe my ass!”
        So it’s not sex-related. That’s good. But how does this person know who you are? Sure you must’ve gone to high school together but… 
                * * "How do you know my name?"[] you ask. 
                -> bully_recognize
        
= bully_recognize
“How could I forget? You used to give me swirlies in my own piss after every gym class. I’ve been waiting a long fuckin’ time to get my revenge.”
*   [Apologize.] -> apology_ending
*   (deny) [Deny it.]
     Were you a high school bully? No, can’t be. They were harmless pranks and everyone laughed. Plus you would’ve remembered a piss swirly. “You’re confusing me with someone else,” you say. “I never did that. No way.”
                    “I’m not confusing you with anybody,” they say. “Now do what I want or suffer the consequences. And based on the smell, they’ll be pretty bad.”
    * * [Apologize.] -> apology_ending
    * * [Give in.] -> give_in_ending
    * * [Deny again and go back to the beginning. You’ll find a way out of this jam without this person’s help.] 
        "Look it's not me, I'm done talking about it."
        "Alright, have fun in there. Good night and good luck."
        -> beginning
*   [Give in.] -> give_in_ending
                    
        
   


