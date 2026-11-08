// ===== EDIT EVERYTHING HERE =====  (names, dates, captions, story, letter, games, songs, passcode)
// Texts are written to ring true for any real friendship. Add your own real stories wherever you like.
const img=n=>`/images/${n}.jpg`
export default {
aun:'Aun', me:'Rehan',
date:'2026-11-09T00:00:00+05:00', // birthday, Asia/Karachi
born:'2009-11-09',                // used for the "days of being a legend" counter
passcode:'0911', passcodeHint:'Enter the 4-digit code: his birthday, day then month. (Frontend-only, just for fun.)',
tagline:'Seventeen. A new chapter.',
intro:"You probably weren't expecting this. But some people deserve more than just a birthday message. Seventeen deserves a whole world.",
secret:{t:'You found the secret.',m:"Five clicks on a logo. That is exactly the kind of person you are: curious, a little stubborn, and always finding the hidden thing. Happy 17th, Aun. Proud of you."},
hero:img('selfie'),
story:[
{y:'Chapter One',t:'Every legend has a first scene',d:"Nobody plans the friendships that end up mattering most. Ours never needed a script. It just started, and somehow became one of the best parts of my story.",i:img('tree')},
{y:'Chapter Two',t:'Plans that turned into adventures',d:"The best days were never the planned ones. A short ride, a random detour, a place we had no business being, and suddenly it is a memory we will tell for years.",i:img('car')},
{y:'Chapter Three',t:'The days we could not stop laughing',d:"Some laughs are so loud and so pointless that they become permanent. If I had to name one superpower of yours, making people laugh like that would be in the top three.",i:img('cat')},
{y:'Chapter Four',t:'Through the quiet days too',d:"A friend is not only who shows up for the highlights. It is who stays on the ordinary days and the heavy ones. You are that person, and I do not say it enough.",i:img('petals')},
{y:'Chapter Five',t:'Turning seventeen',d:"Seventeen is not just a number. It is a bigger view, bigger dreams and a little more of who you are going to be. I get to watch it happen, and honestly, that is a privilege.",i:img('selfie')},
{y:'Chapter Six',t:'Still the same brotherhood',d:"Whatever the next year brings, new places, new goals, new chaos, this part stays. Different years, different memories, same brotherhood.",i:img('duo')}],
gallery:[
{i:img('selfie'),c:'Random Moments',t:'Calm face. Loud presence.'},{i:img('mirror'),c:'Funny Moments',t:'Mirror mission: completed.'},{i:img('mask'),c:'Funny Moments',t:'Undercover. Extremely professional.'},{i:img('cat'),c:'Funny Moments',t:'When the cat filter wins the photo.'},{i:img('petals'),c:'Adventures',t:'A field of petals and a main-character moment.'},{i:img('duo'),c:'Us Together',t:'Two masked legends. No further questions.'},{i:img('car'),c:'Unforgettable Days',t:'Street, car, pose. Pure cinema.'},{i:img('tree'),c:'Random Moments',t:'Looking up. Seventeen is a good view.'}],
archive:[
{h:'Funny memories',i:img('cat'),x:"Some stories have no punchline, just the two of us trying to explain them to everyone else and failing completely. The cat filter photo is Exhibit A."},
{h:'Inside jokes',i:img('mask'),x:"If you have to explain it, it is not an inside joke. And the best ones make no sense to anyone outside, which is exactly why they work."},
{h:'Random incidents',i:img('mirror'),x:"Plans fell apart, phones got pointed at mirrors, and somehow it all became a good story. Chaos with good company is still the best kind."},
{h:'Unforgettable moments',i:img('petals'),x:"A field full of petals, sunlight, and nowhere to be. The kind of moment you do not realise you will remember until later."},
{h:'Best photographs',i:img('car'),x:"The ones where you did not even try and it still looked like a movie poster. Effortless is a skill, and you have it."},
{h:'Things only we understand',i:img('duo'),x:"The looks across a room. The one word that sets us both off. The unwritten rules of a friendship that never needed a rulebook."}],
letter:{img:img('duo'),parts:[
['Happy 17th, Aun',"I know I could have just sent a message. But a message felt too small for what you mean to me, so I built you a whole world instead. Seventeen years of you existing is something the world should be quietly grateful for. I am."],
['What I appreciate about you',"I appreciate that you are real. That you show up. That being around you has never felt like effort. Some people fill a room; you make it feel like home. Thank you for being easy to laugh with and safe to be myself around."],
['What makes you special',"It is not one big thing. It is a hundred small ones: the way you make people feel seen, the loyalty you never make a speech about, the confidence that makes the rest of us braver, and the laugh that makes everyone join in."],
['My wishes for your seventeenth year',"I wish you peace on the hard days and loud joy on the good ones. I wish you good grades without the stress, big goals with the courage to chase them, and people who treat you the way you treat everyone else. May this be your best year yet."],
['One last thing',"Wherever life takes us, you will always have a brother in me. Thank you for being exactly who you are. I am proud to be your friend, and I will be right here, cheering the loudest. Happy Birthday, Aun."]]},
awards:[['The Main Character Award','For entering every room like the soundtrack just started.'],['The Loyalty Award','Never announced, always there. The quietest kind of strength.'],['The Best Advice Award','Sometimes blunt, always honest, usually right. Annoying, honestly.'],['The Professional Troublemaker','Respectfully, a menace. Lovingly, the best kind.'],['The Unmatched Confidence Award','Walks like the plan is already working. And somehow it often is.'],['The Legendary Friend Award','The one trophy that was never really a competition.']],
reasons:['He makes ordinary days feel like an event.','Loyal in the way that never needs announcing.','A main-character entrance, every single time.','He can fix a bad mood with one look.','His confidence is contagious.','First to back his people, last to leave them.','Great taste. He picked his friends, after all.','Style that does not try. It just arrives.','Real, even when filters are funnier.','Hard to out-laugh, impossible to out-loyal.','Honest when it matters, kind in how he says it.','The kind of energy a room remembers.','Seventeen and already someone people rely on.','He turns nothing into a memory.','A listener when it counts.','Always has a plan, or confidently invents one.','Because the world only made one Aun.'],
quiz:[
{q:'How old is Aun turning tomorrow?',o:['14','15','16','17'],a:3},
{q:'Which animal takes over the camera in our photo collection?',o:['A dog','A cat with its tongue out','A parrot','A panda'],a:1},
{q:'What are the "undercover legends" wearing on their faces?',o:['Black ski masks','Party hats','Sunglasses','Paper bags'],a:0},
{q:'What covers the ground in the golden-hour field photo?',o:['Snow','Autumn leaves','Pink-red rose petals','Sand'],a:2},
{q:'Which of these is actually in our memories?',o:['A submarine','A burgundy car','A helicopter','A dragon'],a:1},
{q:'What does every legend need?',o:['A loyal best friend','A good alarm clock','Free pizza','All of the above'],a:3}],
guess:[{i:img('petals'),o:['A field covered in rose petals','A snowy mountain','A beach at sunset'],a:0,r:'Petals everywhere, golden light, and not a single care. Perfect.'},{i:img('car'),o:['A quiet library','A street, a car and a main-character pose','A rooftop party'],a:1,r:'Leaning on a burgundy car like the poster for a film nobody is allowed to miss.'},{i:img('tree'),o:['Floating in space','Under the sea','Looking up through the trees'],a:2,r:'Sky, branches and a calm look upward. Seventeen is a good view.'}],
tot:[['Chai ☕','Coffee 🧋','Both are valid. A legend never explains his order.'],['Night owl 🦉','Early bird 🐦','Good ideas happen at both times. Mostly late.'],['Road trip 🚗','Staying in 🛋️','Either way, as long as the company is right.'],['Pizza 🍕','Burger 🍔','No wrong answer. Birthday rules apply: both.'],['Selfie 🤳','Candid 📸','You look good either way. Annoying.']],
chal:['Strike your most legendary birthday pose','Send Rehan a 17-second voice note','Eat something unreasonably delicious','Make a wish at 11:11 and keep it secret','Thank one person who helped you grow this year','Tell yourself one thing you are proud of','Drink water. Legends stay hydrated'],
playlist:'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M', // paste your own: https://open.spotify.com/embed/playlist/YOUR_ID
playlistLink:'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
tracks:[{t:'Birthday songs',a:'Spotify search',u:'https://open.spotify.com/search/birthday%20party'},{t:'Songs for brothers',a:'Spotify search',u:'https://open.spotify.com/search/friendship'},{t:'Main character energy',a:'Spotify search',u:'https://open.spotify.com/search/main%20character'}],
final:'Different years. Different memories. Same brotherhood. Happy 17th Birthday, Aun.', finalImg:img('duo')}
