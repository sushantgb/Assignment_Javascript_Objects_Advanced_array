//declaration and initiation of button, quote and it's orator literals
let btn = document.getElementById("btn"); //button lit
let quote = document.getElementById("quote"); //quote lit
let orator = document.getElementById("orator"); //speaker/orator of quote lit

//array of quotes
var quotes = [
    {
        q: "It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone.", //object q for quote
        n: "- APJ Abdul Kalam" //object n for quote author/orator/speaker's name
    },
    {
        q:"Thinking is the capital, Enterprise is the way, Hard Work is the solution",
        n:"- APJ Abdul Kalam"
    },
    {
        q:"The biggest guru-mantra is: never share your secrets with anybody. It will destroy you.",
        n: "- Chanakya"
    },
    {
        q:"A person should not be too honest. Straight trees are cut first and honest people are screwed first.",
        n: "- Chanakya"
    },
    {
        q: "No one can defeat a powerful mind.",
        n: "- Chanakya"
    },
    {
        q: "Life loses half its interest if there is no struggle — if there are no risks to be taken.",
        n: "- Netaji Subhash Chandra Bose"
    },
    {
        q: "I am such a lunatic that I am free even in jail.",
        n: "- Shaheed-e-Azam Bhagat Singh"
    },
    {
        q: "No one saves us but ourselves. No one can and no one may. We ourselves must walk the path.",
        n: "- Gautam Buddha"
    },
]

//function to print quote and return it to html page
function quotePrint(){
    //randomized value of quote through Math function
    var randomQuote = Math.floor(Math.random() * quotes.length);
    //storing random quote in the quotestring var for quotes by using object q
    var quoteString = quotes[randomQuote].q;
    //storing random quote orator in quoteorator variable by using object n
    var quoteOrator = quotes[randomQuote].n;
    //printing quote and the name of author in the respective paragraphs
    quote.innerHTML = quoteString;
    orator.innerHTML = quoteOrator;
}