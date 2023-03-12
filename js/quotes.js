const quotes = [
    {
        quote: "Javascript is the duct tape of the Internet.",
        author: "Charlie Campbell",
    },
    {
        quote: "The kind of programming that C provides will probably remain similar absolutely or slowly decline in usage, but relatively, JavaScript or its variants, or XML, will continue to become more central.",
        author: "Dennis Ritchie",
    },
    {
        quote: "Computer language design is just like a stroll in the park. Jurassic Park, that is.",
        author: "Larry Wall",
    },
    {
        quote: "JavaScript is the only language that I'm aware of that people feel they don't need to learn before they start using it.",
        author: "Douglas Crockford",
    },
    {
        quote: "Any app that can be written in JavaScript, will eventually be written in JavaScript.",
        author: "Jeff Atwood",
    },
    {
        quote: "JavaScript: Don't judge me by my bad parts, learn the good stuff and stick with that!",
        author: "Eric Freeman",
    },
    {
        quote: "JavaScript is the world's most misunderstood programming language.",
        author: "Douglas Crockford",
    },
    {
        quote: "There is no programming languageâ€“no matter how structuredâ€“that will prevent programmers from making bad programs.",
        author: "Larry Flon",
    },
    {
        quote: "When someone says, 'I want a programming language in which I need only say what I want done,' give him a lollipop.",
        author: "Alan Perlis",
    },
    {
        quote: "Programming languages are like girlfriends: The new one is better because *you* are better.",
        author: "Derek Sivers",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

const todaysQuote = quotes[getRandomIndex(quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;