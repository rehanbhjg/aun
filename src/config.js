// ===== EDIT EVERYTHING HERE: names, date, photos, captions, story, quiz, letter, songs =====
const img=n=>`/images/${n}.jpg`
export default {
aun:'Aun', me:'Rehan', date:'2026-11-09T00:00:00+05:00', // Asia/Karachi
tagline:'Another year, another chapter…',
intro:"You probably weren't expecting this. But some people deserve more than just a birthday message.",
secret:{t:'You found the secret.',m:'Of everything I could have built, this was the easiest part to mean: I am really glad you are my friend.'},
hero:img('selfie'),
story:[
{y:'The Beginning',t:'It all started with a simple conversation',d:'Write how your friendship began here. Date, place, the first thing you remember.',i:img('tree')},
{y:'The Crazy Times',t:'From fun plans to unforgettable adventures',d:'Add a trip, a ride, a late-night plan that went perfectly wrong.',i:img('car')},
{y:'The Laughs',t:'The days we could not stop laughing',d:'Add the funniest day you two ever had.',i:img('cat')},
{y:'The Real Ones',t:'Through every high and low',d:'Add a moment he stood by you, or you stood by him.',i:img('petals')},
{y:'Forever',t:'Always together',d:'Write what you both want for the years ahead.',i:img('duo')}],
gallery:[
{i:img('selfie'),c:'Random Moments',t:'Caption: edit me'},{i:img('mirror'),c:'Funny Moments',t:'Caption: edit me'},{i:img('mask'),c:'Funny Moments',t:'Caption: edit me'},{i:img('cat'),c:'Funny Moments',t:'Caption: edit me'},{i:img('petals'),c:'Adventures',t:'Caption: edit me'},{i:img('duo'),c:'Us Together',t:'Caption: edit me'},{i:img('car'),c:'Unforgettable Days',t:'Caption: edit me'},{i:img('tree'),c:'Random Moments',t:'Caption: edit me'}],
archive:[
{h:'Funny memories',i:img('cat'),x:'Tell the story that still makes you both laugh.'},
{h:'Inside jokes',i:img('mask'),x:'The jokes nobody else would understand.'},
{h:'Random incidents',i:img('mirror'),x:'The chaos you survived together.'},
{h:'Unforgettable moments',i:img('petals'),x:'A moment you never want to forget.'},
{h:'Best photographs',i:img('car'),x:'Why this photo matters to you.'},
{h:'Things only we understand',i:img('duo'),x:'The unwritten rules of your friendship.'}],
letter:{img:img('duo'),parts:[
['A birthday letter',"Aun, I know I could have just sent a message. But a message felt too small for what you mean to me, so I built you a whole world instead. Happy Birthday, my friend."],
['What I appreciate about you',"I appreciate that you are real. That you show up. That being around you has never felt like effort. Some people fill a room; you make it feel like home."],
['What makes you special',"It is not one big thing. It is a hundred small ones: the way you make people feel seen, the loyalty you never talk about, the laugh that makes everyone join in."],
['My wishes for your future',"I wish you peace on the hard days and loud joy on the good ones. I wish you every dream you are quietly carrying, and the courage to chase all of them."],
['One last thing',"Wherever life takes us, you have a brother in me. Thank you for being exactly who you are. I am proud to be your friend."]]},
awards:[['The Main Character Award','Walks in and the story starts.'],['The Loyalty Award','Always there, no questions asked.'],['The Best Advice Award','Words that actually helped.'],['The Professional Troublemaker','Respectfully, a menace.'],['The Unmatched Confidence Award','Confidence on a different level.'],['The Legendary Friend Award','Simply the best there is.']],
reasons:Array.from({length:10},(_,i)=>`Reason #${i+1}: write why Aun is one of a kind.`),
quiz:[{q:"What's Aun's superpower?",o:['Good looks','Smart mind','Bad jokes','All of the above'],a:3},{q:'Edit question 2',o:['A','B','C','D'],a:0},{q:'Edit question 3',o:['A','B','C','D'],a:1},{q:'Edit question 4',o:['A','B','C','D'],a:2}],
guess:[{i:img('petals'),o:['Memory A','Memory B','Memory C'],a:0,r:'Write the story behind this photo.'},{i:img('car'),o:['Memory A','Memory B','Memory C'],a:1,r:'Write the story behind this photo.'},{i:img('tree'),o:['Memory A','Memory B','Memory C'],a:2,r:'Write the story behind this photo.'}],
tot:[['Chai','Coffee','Edit funny verdict'],['Night owl','Early bird','Edit funny verdict'],['Road trip','Staying in','Edit funny verdict'],['Pizza','Burger','Edit funny verdict']],
chal:['Strike your best birthday pose','Text me "you are the GOAT"','Eat something unreasonably tasty','Make a wish and keep it secret','Tell someone you are grateful for them'],
playlist:'https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M', // paste your own playlist: open.spotify.com/embed/playlist/ID
playlistLink:'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
tracks:[{t:'Song title 1',a:'Artist',u:'https://open.spotify.com/search/birthday'},{t:'Song title 2',a:'Artist',u:'https://open.spotify.com/search/friendship'},{t:'Song title 3',a:'Artist',u:'https://open.spotify.com/search/brotherhood'}],
final:'Different years. Different memories. Same brotherhood. Happy Birthday, Aun.', finalImg:img('duo')}
