export interface Show {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image?: string;
}

export const shows: Show[] = [
  {
    id: '1',
    title: "Views From Da Vine",
    slug: "views-from-da-vine",
    tagline: "Where the city talks back.",
    description: "Views From Da Vine is Da Grape Vine's raw, unfiltered sit-down series spotlighting local legends, rising stars, and everyday people making big moves in the community. From barbers to business owners, artists to activists — if you got a story, we wanna hear it. This ain't no cookie-cutter convo. It's real talk, real grind, and real success straight from the soil.\n\nSuccess look different around here. Come see it from Da Vine's View"
  },
  {
    id: '2',
    title: "Studio Live",
    slug: "studio-live",
    tagline: "Da city's sound. Raw, live, and straight off the block.",
    description: "Studio Live is Da Grape Vine's live performance and music spotlight series—where local artists, singers, producers, poets, and creatives of all kinds tap in, show out, and get seen. No labels. No industry politics. Just talent, energy, and soul straight from the city streets to the screen.\n\nFrom trap to R&B, from open mics to unreleased bangers — this is the platform built for the underdogs, the undiscovered, and the unstoppable.\n\nYou bring the sound. We bring the shine. Welcome to Studio Live."
  },
  {
    id: '3',
    title: "Purple Party Politics",
    slug: "purple-party-politics",
    tagline: "Where red and blue meet the block.",
    description: "Purple Party Politics is Da Grape Vine's all-inclusive political roundtable — built for real talk, real solutions, and real impact. We bring together Democrats, Republicans, Independents, and grassroots voices to cut through the noise and focus on what is supposed to really matter: the people.\n\nAin't no echo chambers here — just raw, respectful dialogue aimed at building win-win solutions for the people & our communities. From the streets, to blocks, to prison yards, to the state house, to City Hall, we're giving the mic to politicians, organizers, and everyday people who have something to say and something to change.\n\nNo spin. No suits. Just power, perspective, and policy — for the people."
  },
  {
    id: '4',
    title: "Ball of Fame",
    slug: "ball-of-fame",
    tagline: "Built for the ones tryna make it out the mud with a ball in their hand.",
    description: "Ball of Fame is Da Grape Vine's spotlight series on Rhode Island's young athletes — from high school stars to up-and-coming AAU beasts. We give the next generation a platform to talk their journey, show off their game, and get the shine they deserve.\n\nBasketball, football, track, wrestling, whatever your lane — if you're putting in that work, we're putting the camera on you. It's more than highlights. It's who you are, where you come from, and how far you plan to go.\n\nReal stories. Real talent. Real Rhode Island. Welcome to the Hall of the Hungry — Ball of Fame."
  },
  {
    id: '5',
    title: "Allegedly",
    slug: "allegedly",
    tagline: "Every headline got two sides.",
    description: "Allegedly is Da Grape Vine's crime and court coverage with a twist — we report the streets and the system, but we stand on innocent until proven guilty.\n\nNo assumptions. No smear campaigns. Just the facts, the charges, and the context — because around here, \"allegedly\" means something. We break down arrests, indictments, and trials without jumping to conclusions. Whether it's a big bust or a small-town scandal, we're telling the story without playing judge and jury.\n\nThis ain't just crime reporting. This is a reminder: until proven, it's all Allegedly."
  },
  {
    id: '6',
    title: "Tap In",
    slug: "tap-in",
    tagline: "The convo starts here.",
    description: "Tap In is Da Grape Vine's go-to show for what's really goin' on in the town. From block parties to city council, school drama to community wins — if it's buzzing in the city, we're talkin' about it.\n\nIt's part roundtable, part front porch, part barbershop — with real voices, real issues, and yeah… just a lil bit of tea. Whether it's serious or spicy, we're creating a space for the people to speak, react, and stay woke to what's happening around them.\n\nThis ain't just talk. This the town check-in. So if you care? Tap In."
  },
  {
    id: '7',
    title: "Wake n' Bake",
    slug: "wake-n-bake",
    tagline: "Light up your mind before you light up your day.",
    description: "Wake n' Bake is Da Grape Vine's daily dose of motivation, meant to spark your spirit and set the tone before the grind begins. Whether you're rollin' one or just rollin' outta bed, we're dropping quotes, affirmations, and real talk to get your mind right and your energy up.\n\nIt's fuel for the hustlers, the healers, and the ones tryna break generational curses before breakfast.\n\nStart your day lit — mentally, spiritually, and emotionally. Wake n' Bake with us."
  },
  {
    id: '8',
    title: "Night Cap",
    slug: "night-cap",
    tagline: "Rest easy. You made it.",
    description: "Night Cap is Da Grape Vine's nightly wind-down for the soul — a quick hit of motivation, reflection, and love for the people who made it through the day. Whether it was a win, a loss, or just survival, this is your reminder that you're still standing… and tomorrow's another shot to get it right.\n\nNo matter how heavy the day was, we're ending it with light. Real talk. Gentle power. And a vibe that tucks you in with hope.\n\nBreathe deep. Rest up. You did enough. Night Cap got you."
  },
  {
    id: '9',
    title: "Shady Shields",
    slug: "shady-shields",
    tagline: "Not all badges shine.",
    description: "Shady Shields is Da Grape Vine's hard-hitting series exposing police corruption, abuse of power, and the dirty hands behind the badge. From crooked cops to correctional officers who move grimy, we're peeling back the blue curtain and holding the so-called enforcers accountable.\n\nWe're talkin' about real stories from the streets — harassment, brutality, cover-ups, and the systems that protect 'em. No cap, no sugar-coating, and no fear. If you out here abusing power, we see you.\n\nThis ain't anti-police. It's anti-corruption. And we gon' keep the lights on the Shady Shields."
  },
  {
    id: '10',
    title: "Blood on the Block",
    slug: "blood-on-the-block",
    tagline: "The truth they bury. The streets we carry.",
    description: "Blood on the Block is Da Grape Vine's unfiltered look into the violence shaking our communities — from gunshots to gang wars, from unsolved murders to the ripple effects left behind. We're covering crime how it really happens: through the eyes of the people who live it, lose from it, and are fighting to survive it.\n\nThis ain't just numbers and headlines — it's names, neighborhoods, and lives cut short. We expose the root causes, spotlight the patterns, and tell the stories too real for mainstream news.\n\nThis is journalism for the hood, from the hood — because every block bleeding deserves to be heard."
  },
  {
    id: '11',
    title: "Out N' About",
    slug: "out-n-about",
    tagline: "If it's poppin', we pullin' up.",
    description: "Out N' About is Da Grape Vine's official tap-in to the city's nightlife, local events, and everything lit in the City. From block parties to basement shows, food truck pull-ups to downtown lounges — if it's where the vibe's at, we there.\n\nWhether you're lookin' for your next move or tryna see what you missed, we're bringin' you the hottest spots, the freshest crowds, and the real fun that don't always make the flyers.\n\nOut N' About ain't just what's goin' on — it's where the city comes alive."
  }
]; 