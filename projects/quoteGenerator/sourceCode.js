const quotes = [
  {
    quote: `"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."`,
    author: "-Buddha",
  },
  {
    quote: `"Anybody who has survived his childhood has enough information about life to last him the rest of his days."`,
    author: `-Flannery O'Connor`,
  },
  {
    quote: `"Life is never easy. There is work to be done and obligations to be met - obligations to truth, to justice, and to liberty." `,
    author: `-John F. Kennedy`,
  },
  {
    quote: `"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it."`,
    author: `-Steve Jobs`,
  },
  {
    quote: ` "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."`,
    author: `-Neil Armstrong `,
  },
  {
    quote: ` "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve."`,
    author: `-Jeff Bezos`,
  },
  {
    quote: `"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you'll do things differently."`,
    author: `-Warren Buffett`,
  },
  {
    quote: `"When one door closes, another opens; but we often look so long and so regretfully upon the closed door that we do not see the one that has opened for us."`,
    author: `-Alexander Graham Bell`,
  },
];

const random = Math.floor(Math.random() * quotes.length);
document.querySelector("#qt").innerHTML = quotes[random].quote;
document.querySelector("#at").innerHTML = quotes[random].author;
