var storyContent = ﻿{"inkVersion":19,"root":[["\n","\n","\n","\n","\n",{"->":"beginning"},["done",{"#f":5,"#n":"g-0"}],null],"done",{"beginning":[["ev",{"CNT?":".^.^"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ It’s finally over. The diarrhea’s out of you and in the toilet and your legs are numb but your tummy isn’t gurgling anymore. You sigh, wipe your sweaty forehead, and reach for the TP but find only a cold metal rod that should be holding a cardboard tube and layers of soft paper that would feel so good on your chapped, burning anus.",{"->":".^.^.^.6"},null]}],"nop","\n","ev",{"CNT?":".^.^"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["^ You want nothing more than to get back to your ten year high school reunion where your old crush was chatting you up at the punch bowl. You told them you’d just be a minute and it’s already been five but you had to make sure the brown soup was all out of you. The last thing you need would be an unplanned release later tonight.",{"->":".^.^.^.14"},null]}],"nop","\n","ev","str","^Wipe with what you have.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Ask the person in the next stall for supplies.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Waddle to a free stall and hope no one sees you.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n",{"->":"wipe"},{"#f":5}],"c-1":["\n",{"->":"next_stall"},{"#f":5}],"c-2":["\n",{"->":"free_stall"},{"#f":5}]}],{"#f":1}],"wipe":[["^Who do you think you are, MacGyver? Alright hot shot, what are you gonna use?","\n","ev","str","^Nothing. Literally nothing. Against all odds, your ass is clean.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Your sock. Hope they weren’t designer.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Your underwear. Good call. After the pregame farts you let out, they’re probably ruined anyway.","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^Your hands.","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":["^ ","\n",{"->":"smell_like_shit_ending"},{"#f":5}],"c-1":["\n","^You slide your hand into your sock, about to make a shit puppet, and go to town. After a few passes, it’s totally covered and your ass is still not clean. What now?","\n",["ev","str","^The other sock. Duh!","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Time to call in the big guns and use the underwear.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["^ ",{"->":"water_ending"},"\n",{"#f":5}],"c-1":["^ ",{"->":"water_ending"},"\n",{"#f":5}]}],{"#f":5}],"c-2":["^ ",{"->":"water_ending"},"\n",{"#f":5}],"c-3":["^ ",{"->":"shit_on_hands_ending"},"\n",{"#f":5}]}],{"#f":1}],"next_stall":[["ev",{"CNT?":".^.^"},1,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^You hear a groan to your left. The toilet flushes and there’s the sweetest sound of fresh toilet paper spinning off the roll.","\n",{"->":".^.^.^.6"},null]}],"nop","\n","ev","str","^Cough and wait for them to reply. You know, real casual like.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Say, “Excuse me, but can you spare a few squares?”","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Reach your hand under the stall and say, “I need some freakin’ toilet paper right now!”","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["\n","^\"Bless you.\"","\n","^Well that went nowhere. Unlike your crush who might leave with someone else if you don’t wrap this up.","\n",{"->":".^.^.^"},{"#f":5}],"c-1":["\n","^“Excuse me, but can you spare a few squares?”","\n",{"->":".^.^.^.talk_with_bully"},{"#f":5}],"c-2":["\n","^“I need some freakin’ toilet paper right now!”","\n","^Your stall neighbor shrieks so loud that everyone at the reunion probably heard it over the ten year old pop music blaring. They flush once again, gather their pants up and fly out the stall and bathroom without washing their hands. Looks like you’re back where you began.","\n",{"->":"beginning"},{"#f":5}]}],{"talk_with_bully":[["ev",{"CNT?":"free_stall.0.c-1.2.b.c-1"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ “Hmm, I could,” the stranger says. They pause to let the relief hit you.",{"->":".^.^.^.5"},null]}],"nop","\n","^“But it ain’t free.”","\n",["ev",{"^->":"next_stall.talk_with_bully.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"What's your price? I'm desperate here.\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"next_stall.talk_with_bully.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","^They wait a long time before answering. You can practically see them smiling right through the stall and your bunghole is getting itchy. “A dollar per square sounds more than reasonable.”","\n",["ev","str","^Tell them to fuck off.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Maybe the price is fair? Check your wallet.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^\"No way I'm paying that, sorry buddy.\"","\n",{"->":".^.^.^.^.g-0"},{"#f":5}],"c-1":["\n","^You reach down into your dropped pants and find your wallet. It has $5 in it.","\n",["ev","str","^You reluctantly pass the five ones under the stall.","/str","/ev",{"*":".^.c-0","flg":20},["ev",{"^->":"next_stall.talk_with_bully.0.c-0.9.c-1.3.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^“I don’t have enough cash. Will you take a check?”",{"->":"$r","var":true},null]}],{"c-0":["^ ",{"->":"shit_on_hands_ending"},"\n",{"->":".^.^.^.^.^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"next_stall.talk_with_bully.0.c-0.9.c-1.3.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}]}],{"#f":5}],"g-0":["^“If you don’t have the cash, that’s fine. There’s something else you can do.”","\n","^A thousand thoughts flash through your mind. How many perverted things can you do in a public restroom? But you’re in too deep to back out now. And your ass is on fire and your crush is waiting.","\n","ev","str","^You gulp and ask “Like what?”","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n","^\"Like what?\"","\n","^“Oh nothing much. I just wanna hear you yell at the top of your lungs. Take a deep breath and give it all you got. Repeat after me: I’m PLAYER NAME and I still don’t know how to wipe my ass!”","\n","^So it’s not sex-related. That’s good. But how does this person know who you are? Sure you must’ve gone to high school together but…","\n",[["ev",{"^->":"next_stall.talk_with_bully.0.g-0.c-1.7.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"How do you know my name?\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"next_stall.talk_with_bully.0.g-0.c-1.7.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^ you ask. ","\n",{"->":"next_stall.bully_recognize"},{"#f":5}]}],{"#f":5}],"#f":5}]}],{"#f":1}],"bully_recognize":[["^“How could I forget? You used to give me swirlies in my own piss after every gym class. I’ve been waiting a long fuckin’ time to get my revenge.”","\n","ev","str","^Apologize.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Deny it.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Give in.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ ",{"->":"apology_ending"},"\n",{"#f":5}],"c-1":["\n","^Were you a high school bully? No, can’t be. They were harmless pranks and everyone laughed. Plus you would’ve remembered a piss swirly. “You’re confusing me with someone else,” you say. “I never did that. No way.”","\n","^“I’m not confusing you with anybody,” they say. “Now do what I want or suffer the consequences. And based on the smell, they’ll be pretty bad.”","\n",["ev","str","^Apologize.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Give in.","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Deny again and go back to the beginning. You’ll find a way out of this jam without this person’s help.","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ ",{"->":"apology_ending"},"\n",{"#f":5}],"c-1":["^ ",{"->":"give_in_ending"},"\n",{"#f":5}],"c-2":["^ ","\n","^\"Look it's not me, I'm done talking about it.\"","\n","^\"Alright, have fun in there. Good night and good luck.\"","\n",{"->":"beginning"},{"#f":5}]}],{"#f":5}],"c-2":["^ ",{"->":"give_in_ending"},"\n",{"#f":5}]}],{"#f":1}],"#f":1}],"free_stall":[["ev","str","^Try the stall on your right.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Try the stall on your left.","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["\n","^God is good. The stall is empty. Nobody saw your shit drenched ass. And best of all, there’s a fresh roll of toilet paper.","\n","^Your ass is clean. It all flushes perfectly. You wash your hands and return to the party and your crush. You might even get lucky tonight. THE END.","\n","end",{"#f":5}],"c-1":["\n",["ev",{"CNT?":"next_stall.bully_recognize.0.c-1"},"/ev",{"->":".^.b","c":true},{"b":["\n","^You already messed with that shmuck, don't go in there!","\n","ev","str","^Waddle away in embarassment.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Try the stall on your right.","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.4"},{"c-0":["^ ","\n","^You made it back to your own stall just in time.","\n",{"->":"beginning"},{"#f":5}],"c-1":["\n","^Someone comes in and sees you with your pants down. They run screaming, \"PLAYER_NAME has their pants down!\" GAME OVER.","\n","end",{"#f":5}]}]}],["ev",{"CNT?":"next_stall.0.c-2"},"!",{"CNT?":"next_stall.bully_recognize.0.c-1"},"!","&&","/ev",{"->":".^.b","c":true},{"b":["\n","^You pull on the door so fast you didn’t notice it was locked. The person inside laughs. “Why are your pants down?”","\n","ev","str","^Wow that sucked. Let’s waddle away in embarrassment.","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Meekly ask for some toilet paper.","/str","/ev",{"*":".^.c-1","flg":20},{"->":".^.^.^.4"},{"c-0":["^ ",{"->":"beginning"},"\n",{"#f":5}],"c-1":["\n","^\"I need some toilet paper please.\"","\n","^“No problem,” the stranger says. “Head on back to your stall and I’ll pass it under.”","\n","^You’re drenched with sweat but made it back safely. You sit again, lock the door, and wait. ",{"->":"next_stall.talk_with_bully"},"\n",{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n","^The now empty stall is yours for the taking. And best of all, there’s a fresh roll of toilet paper.","\n","^Your ass is clean. It all flushes perfectly. You wash your hands and return to the party and your crush. You might even get lucky tonight. THE END.","\n","end",{"->":".^.^.^.4"},null]}],"nop","\n",{"#f":5}]}],{"#f":1}],"water_ending":["^After using all the clothing you’re willing to part with, your ass is so clean you wouldn’t mind if your crush took their tongue to it later tonight. Now to flush away the evidence and get back to the party. The water rushes in, swirls, your shitty rags disappear…almost. The toilet chokes and gurgles. Water fills the bowl and keeps rising. “The fuck!” your stall neighbor says. Their door slams open and they’re out. You hike your pants and try to do the same.","\n","^The water won’t stop. You’re standing in a good inch of it already but before you make it to the door, the janitor bursts in and digs into the clog with his bare hands, up to his elbows in shit water. Maybe you can still sprint out of here, but what’s this? The door’s held open by partygoers, your old classmates, all here to watch the show. They’re all laughing, no doubt in their minds who the culprit is here. Finally the water calms, the janitor raises your shit rag high and triumphant above his head. “Well there’s your problem,” he says. Your crush pushes through the crowd. “PLAYER NAME  what in the fuck? Oh god…” they vomit, a red stream of the spiked punch you were feeding them earlier. “Good thing the janitor is here,” you say.","\n","^THE END.","\n","end",{"#f":1}],"smell_like_shit_ending":["ev",{"CNT?":"next_stall.talk_with_bully.0.c-0.9.c-1.3.c-0"},"/ev",[{"->":".^.b","c":true},{"b":["^ The stranger takes their time counting it, licking their thumb with each pass. “Is that all?” they ask. Five individual squares appear under the stall. “Good luck and god speed.\"",{"->":".^.^.^.4"},null]}],"nop","\n","^You go back to the party and your crush comments that you smell like shit. GAME OVER.","\n","end",{"#f":1}],"shit_on_hands_ending":["^You got shit on your hands.","\n","^GAME OVER.","\n","end",{"#f":1}],"apology_ending":["^Okay, they’re right. You were a dick in high school. But that’s not you anymore and it’s time to make amends. “I’m sorry,” you say. “For all that. I was a dumb kid and a real jerk. Once we’re out of here, I’d like to make it up to you.”","\n","^“It’s nice to hear you say that. And because you’re being the bigger person, I’ve got a new deal for you. If you want the toilet paper, all you have to do is yell: I’m PLAYER NAME and I finally learned how to wipe my ass!”","\n","^Desperation gets the better of you and you decide to take your punishment. You scream the most embarrassing thing you’ve ever said. So loud that you didn’t hear the bathroom door open. “Oh my god,” your crush says. Their voice is only a little slurred and they laugh. “PLAYER NAME is that really you?” The toilet paper arrives just in time. You snatch it, wipe clean in a flash and burst from the stall with a smile. “Yeah it’s me.” You wash your hands without breaking eye contact. “Just having fun with an old friend.” They smile too. “You’ll have to fill me in later. Wanna get out of here?”","\n","^THE END.","\n","end",{"#f":1}],"give_in_ending":["^It’s true and you’re not really sorry about it. But they’ve got you in the noose right now and maybe the best way out of this is to give them what they want. You scream “I’m PLAYER NAME and I still don’t know how to wipe my ass!”","\n","^Right as you scream the words, the bathroom door slams open. “PLAYER NAME?” your crush says. “Are you in here? What’s going on?” Your stall neighbor laughs. “Didn’t you hear? PLAYER NAME can’t wipe!” Your crush groans. “You haven’t changed at all since high school. I’m leaving.” Fuck everything. You stand up with your legs numb, your pants strangling your ankles, diarrhea dripping from your cheeks, and rush outside the stall for one last chance. You trip, face plant, and fart, looking up in time to see your crush scowl as they leave the bathroom.","\n","^THE END.","\n","end",{"#f":1}],"#f":1}],"listDefs":{}};