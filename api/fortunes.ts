// All the fortunes. Never let this list stale
const fortunes = [
  'Technology. Music. Travel. Whatever.',
  "' 1 = 1 --",
  'Drink all the things, hack all the booze!',
  'Arch, Vim, i3, Kitty.',
  'If you are not very careful, your possessions will possess you.',
  'Looking for an internship for the Summer of 2022.',
  '[object Object]',
  'undefined', // Bet you thought my website was broken ^_^
  'Use headphones for best experience.',
  '`base64 /dev/zero` is such a mood.',
  'You hate Micro$oft, yet you most probably boot from a PE file.',
  'My opinions are not my own.',
  'These fortunes have been cancelled.',
  'Division is futile. You will be approximated.',
  ':(){ :|:& };:',
  'What do you want to debug today?',
  'I just steal some of these from radare2.',
  'Causing retinal damage till I figure out dark mode.',
  '* screams internally *',
  "Let's read Paul Allen's fortunes.",
  'Free, as in Freedom.',
];

// We want to show the same fortune per session, or else the user will be
// too distracted. I guess. I don't know if anyone will even notice it XD.

const getNewFortune = (ts: number): string => (ts.toString().includes('444')
  ? 'It is Pooja time.' : fortunes[ts % fortunes.length]);

const getFortune = (): string => {
  const ts = sessionStorage.getItem('fortune_ts');
  if (!ts) {
    // No fortune_ts exists, so we add create a new fortune
    const now = Date.now();
    sessionStorage.setItem('fortune_ts', now.toString());
    return getNewFortune(now);
  }
  return ts.toString().includes('444')
    ? 'It is Pooja time.'
    : fortunes[parseInt(ts, 10) % fortunes.length];
};

export {
  getFortune,
};
