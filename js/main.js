 
function randomquotes()
{
var quotes=[
    "“Be yourself; everyone else is already taken.”" ,//1
    "“So many books, so little time.”",//2
    "“Be the change that you wish to see in the world.”",//3
    "“You only live once, but if you do it right, once is enough.”",//4
    "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",//5
    "““A room without books is like a body without a soul.”",//6,
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    "“It is better to be hated for what you are than to be loved for what you are not.”",
    "“Insanity is doing the same thing, over and over again, but expecting different results.”",
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”"
];  

var author=['― Oscar Wilde','― Frank Zappa',
'― Mahatma Gandhi',
'― Mae West',
'― Dr. Seuss',
'― William W. Purkey',
'― Ralph Waldo Emerson',
'― Andre Gide, Autumn Leaves',
'― Narcotics Anonymous',
'― Ralph Waldo Emerson'];


var num= Math.floor(Math.random()*quotes.length);

document.getElementById('author').innerHTML = author[num];


document.getElementById('quotes').innerHTML = quotes[num];


}
