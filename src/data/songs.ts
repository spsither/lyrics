export interface LyricLine {
  tibetan: string;
  english: string;
}

export interface Song {
  id: string;
  title: string;
  titleTibetan: string;
  artist: string;
  artistTibetan?: string;
  genre: string;
  year?: number;
  description?: string;
  lyrics: LyricLine[];
}

export const songs: Song[] = [
  {
    id: "palden-lhamo",
    title: "Palden Lhamo",
    titleTibetan: "དཔལ་ལྡན་ལྷ་མོ།",
    artist: "Traditional",
    artistTibetan: "རྒྱུན་སྲོལ།",
    genre: "Traditional / Devotional",
    description: "A traditional invocation to Palden Lhamo, the protector deity of Tibet.",
    lyrics: [
      {
        tibetan: "དཔལ་ལྡན་ལྷ་མོ་མཁྱེན་ནོ།",
        english: "Glorious Lhamo, please know me.",
      },
      {
        tibetan: "བདག་གི་སྡིག་པ་ཐམས་ཅད་བཤགས།",
        english: "I confess all my wrongdoings.",
      },
      {
        tibetan: "དྲིན་ཅན་རྩ་བའི་བླ་མར་སྐྱབས་སུ་མཆི།",
        english: "I take refuge in the kind root lama.",
      },
      {
        tibetan: "སངས་རྒྱས་ཆོས་དང་དགེ་འདུན་ལ་སྐྱབས་སུ་མཆི།",
        english: "I take refuge in the Buddha, Dharma, and Sangha.",
      },
    ],
  },
  {
    id: "rangzen",
    title: "Rangzen",
    titleTibetan: "རང་བཙན།",
    artist: "Ngawang Choephel",
    artistTibetan: "ངག་དབང་ཆོས་འཕེལ།",
    genre: "Folk / Political",
    year: 1995,
    description: "A song about freedom and independence, composed by the Tibetan ethnomusicologist Ngawang Choephel.",
    lyrics: [
      {
        tibetan: "བོད་ཀྱི་རང་བཙན་སྔར་བཞིན་ཡོད།",
        english: "Tibet's independence remains as before.",
      },
      {
        tibetan: "གངས་རི་ཆེན་པོའི་ཞིང་ཁམས་སུ།",
        english: "In the land of the great snow mountains,",
      },
      {
        tibetan: "བོད་མི་རྣམས་ཀྱིས་རང་བཙན་འདོད།",
        english: "The Tibetan people desire freedom.",
      },
      {
        tibetan: "ཕ་ཡུལ་བོད་ལ་ཕྱིར་ལོག་འདོད།",
        english: "We wish to return to our homeland Tibet.",
      },
    ],
  },
  {
    id: "dranpa",
    title: "Dranpa (Remembrance)",
    titleTibetan: "དྲན་པ།",
    artist: "Loten Namling",
    artistTibetan: "བློ་གཏན་རྣམ་གླིང་།",
    genre: "Contemporary",
    year: 2003,
    description: "A contemporary Tibetan song of longing and memory for the homeland.",
    lyrics: [
      {
        tibetan: "ཕ་ཡུལ་གྱི་གངས་རིར་བལྟས་ནས།",
        english: "Looking toward the snow mountains of my homeland,",
      },
      {
        tibetan: "སེམས་ཀྱི་ནང་དྲན་གདུང་སྐྱེས་སོང་།",
        english: "Longing and remembrance arise within my heart.",
      },
      {
        tibetan: "ཡུལ་གྲུ་རིང་བོར་འགྲོ་དགོས་ཀྱང་།",
        english: "Though I must travel far from home,",
      },
      {
        tibetan: "བོད་ཀྱི་མིང་ནི་མི་བརྗེད་དོ།",
        english: "The name of Tibet I shall never forget.",
      },
      {
        tibetan: "ཨ་ཕའི་ཞལ་གྱི་དྲན་གདུང་དང་།",
        english: "With longing for my father's face,",
      },
      {
        tibetan: "ཨ་མའི་བྱམས་པའི་ལྕེ་ལྔ་ཡིས།",
        english: "And the five-toned voice of my mother's love,",
      },
    ],
  },
];
