export interface LyricLine {
  tibetan: string;
  english: string;
}

interface Song {
  id: string;
  title: string;
  titleTibetan: string;
  artist: string;
  artistTibetan?: string;
  genre: string;
  year?: number;
  description?: string;
  youtubeId: string;
  lyrics: LyricLine[];
}

export const songs: Song[] = [
  {
    id: "1",
    title: "Tears of an artist",
    titleTibetan: "རྡུང་ལེན་པ་ངའི་མིག་ཆུ།",
    artist: "Dubhe",
    artistTibetan: "གདུ་བྷེ།",
    youtubeId: "KAxeawDWVks",
    genre: "Folk",
    description: "A Tibetan life-song tracing one man's journey from birth on the banks of the Machu (Yellow River), through nomadic childhood, young love, the companionship of middle age, and the longing of old age.",
    lyrics: [
      {
        tibetan: "ཚེ་སྔོན་ལས་ཀྱིས་བཀོད་པས།།",
        english: "By the predetermined karma of a previous life,"
      },
      {
        tibetan: "རྨ་ཀླུང་སྔོན་མོའི་འགྲམ་ནས།།",
        english: "Beside the blue Mekong river,"
      },
      {
        tibetan: "འབྲོག་པའི་སྦྲ་ནག་ཁྲོད་དུ།།",
        english: "In the midst of a nomad's black tent,"
      },
      {
        tibetan: "མི་ཚེའི་མེ་ཏོག་བཞད་སོང༌༎",
        english: "The flower of human life bloomed."
      },
      {
        tibetan: "ཆུང་ཆུང་བྱིས་པའི་དུས་སུ།།",
        english: "In the times of early childhood,"
      },
      {
        tibetan: "གནག་ཕྱུགས་བེའུའི་རྗེས་ནས།།",
        english: "Following the livestock's calf,"
      },
      {
        tibetan: "རྫི་གླུ་རླུང་ལ་བསྐུར་བཞིན༎",
        english: "Sending the shepherd's song to the wind,"
      },
      {
        tibetan: "ལོ་ཟླ་རྩེད་འཇོས་རོལ་སོང།།",
        english: "Years and months passed in playful enjoyment."
      },
      {
        tibetan: "ལང་ཚོའི་ཟླ་གཞོན་རྒྱས་ཚེ།།",
        english: "When youth flourished like a young moon,"
      },
      {
        tibetan: "སྙན་གླུ་དབྱངས་སུ་བཀུག་ནས༎",
        english: "Gathering sweet melodies into song,"
      },
      {
        tibetan: "ན་ཆུང་བུ་མོ་ཞིག་གིས༎",
        english: "A certain young girl"
      },
      {
        tibetan: "དགའ་བའི་དུང་སེམས་འཕྲོག་སོང༌༎",
        english: "Stole away my heart."
      },
      {
        tibetan: "པི་ཝང་འགྲོས་ཀྱི་རྗེས་ནས།།",
        english: "Following the rhythm of the pi wang (lute),"
      },
      {
        tibetan: "ཕོ་ལོ་སུམ་ཅུའི་བདེ་སྡུག།",
        english: "The happiness and suffering of thirty years of manhood,"
      },
      {
        tibetan: "རིགས་མཐུན་སྤུན་ཟླའི་རྣ་བར།",
        english: "Into the ears of kindred siblings,"
      },
      {
        tibetan: "མ་གསང་དྲང་བོར་བརྗོད་ཡོད།།",
        english: "Spoken honestly and without concealment."
      },
      {
        tibetan: "གངས་དཀར་རི་བོའི་རྩེ་ནས།",
        english: "From the snow-white mountain peak,"
      },
      {
        tibetan: "ལྷོ་མོན་ཕྱོགས་སུ་ལྟ་དུས།།",
        english: "Looking towards the southern direction,"
      },
      {
        tibetan: "སྙིང་སྡུག་བྱམས་པ་དྲན་པས།།",
        english: "Remembering love with heartache,"
      },
      {
        tibetan: "སྐྱོ་བའི་གླུ་ཞིག་ལེན་འདོད།།",
        english: "Wishing to sing a sorrowful song."
      },
      {
        tibetan: "མག་མོག་འཇིག་རྟེན་འདི་རུ།",
        english: "In this fleeting world,"
      },
      {
        tibetan: "དྲན་པའི་གདུང་བ་ལྕི་བས༎",
        english: "Weighed down by the heaviness of remembrance,"
      },
      {
        tibetan: "སྨྲེང་སེམས་མཆི་མའི་ཆབ་རྒྱུན༎",
        english: "The stream of tears from a sorrowful heart"
      },
      {
        tibetan: "འཇམ་པའི་མཁུར་ལས་ཉིལ་སོང།",
        english: "Gently flowed down from my cheeks."
      }
    ]
  },
  {
    id: "2",
    title: "Don't forget",
    titleTibetan: "མ་བརྗེད། །",
    artist: "Tibetan patriotic singer",
    artistTibetan: "བོད་ལ་དུང་བའི་གླུ་བ།",
    youtubeId: "vq8njK1LGVc",
    genre: "Folk",
    description: "A song about freedom and independence, composed by the Tibetan ethnomusicologist Ngawang Choephel.",
    lyrics: [
      {
        tibetan: "སྟོད་ལྷོ་ཕྱོགས་རྒྱ་གར་འཕགས་ཡུལ་ན་བཞུགས་པའི། །",
        english: "He resides in the noble land of India, on the high south,",
      },
      {
        tibetan: "མགོན་ཕྱག་ན་པདྨོའི་རྣམ་རོལ་ཞེས་འབོད་པའི། །",
        english: "Avalokiteshvara's manifestation.",
      },
      {
        tibetan: "ྋམགོན་རྒྱལ་དབང་བསྟན་འཛིན་རྒྱ་མཚོ་དེ་དྲན་ན།།",
        english: "If you miss lord Gyalwang Tenzin Gyatso.",
      },
      {
        tibetan: "བོད་གངས་ཅན་སེམས་ཀྱི་སྡུག་བསྔལ་དེ་མ་བརྗེད །",
        english: "don't forget the heart suffering of Tibet,the snowland.",
      },
      {
        tibetan: "སྟོད་གངས་རི་དཀར་པོའི་རྩེ་མོ་ན་འགྱིངས་པའི། །",
        english: "He sits majestically on the top of the high white snow mountain,"
      },
      {
        tibetan: "སེང་དཀར་མོའི་གཡུ་རལ་བུ་ཆུང་ལ་གནང་བའི། །",
        english: "the white snow lion, who offers his turquoise mane to a small boy."
      },
      {
        tibetan: "སྐྱེས་དཔའ་བོ་ཐུབ་བསྟན་དངོས་གྲུབ་དེ་དྲན་ན། །",
        english: "If you miss the hero Thubten Ngodrup,"
      },
      {
        tibetan: "བོད་ཕ་སྐད་གཙང་མ་བཤད་རྒྱུ་དེ་མ་བརྗེད། །",
        english: "don't forget to speak Tibetan native language."
      },
      {
        tibetan: "བར་རྫ་རི་མཐོན་པོའི་རྩེ་མོ་ན་འགྱིངས་པའི། །",
        english: "He resides on the top of the middle rocky mountain,"
      },
      {
        tibetan: "འབྲོང་དར་མའི་རྭ་རྩེ་བན་ཆུང་ལ་གནང་བའི། །",
        english: "the young wild yak, who offers his tip of the horn to a young monk."
      },
      {
        tibetan: "དགེ་དཔའ་བོ་བློ་བཟང་བཀྲ་ཤིས་དེ་དྲན་ན། །",
        english: "If you miss the monk hero Lobsang Tashi,"
      },
      {
        tibetan: "བོད་མཐུན་སྒྲིལ་ལག་གདང་དོར་ཀི་དེ་མ་འཇུག །",
        english: "don't break the unity of the joined hands of Tibet."
      },
      {
        tibetan: "འགབ་ནགས་རི་ཕྱུག་མོའི་འདབས་རོལ་ན་འགྱིངས་པའི། །",
        english: "Here sides around the rich low mountain,"
      },
      {
        tibetan: "སྟག་དམར་མོའི་འཛུམ་དྲུག་བན་ཆུང་ལ་གནང་བའི། །",
        english: "the red tiger, who offers his stripes to a young monk."
      },
      {
        tibetan: "དགེ་དཔའ་བོ་བློ་བཟང་ཕུན་ཚོགས་དེ་དྲན་ན། །",
        english: "If you miss the monk hero Lobsang Phuntsok,"
      },
      {
        tibetan: "བོད་ལ་རྒྱའི་ཁ་གཡང་འབོད་རྒྱུ་དེ་མ་བརྗེད། །",
        english: "don't forget to call out the slogan of Tibetan dignity."
      },
      {
        tibetan: "དགུང་ཨ་སྔོན་སྤྲིན་དཀར་བང་རིམ་ན་འཕུར་བའི། །",
        english: "It flies inside white cloud on the blue sky"
      },
      {
        tibetan: "བྱ་ཁྱུང་ཆེན་གཤོག་རྩལ་བོད་ཕྲུག་ལ་གནང་བའི། །",
        english: "the garuda, who offers his wings to Tibetan children."
      },
      {
        tibetan: "སྲོག་དམར་ཆུང་ཤོག་པའི་དཔའ་བོ་རྣམས་དྲན་ན། །",
        english: "If you miss those heroes who lost their lives,"
      },
      {
        tibetan: "མིག་ཁྲ་ཆུང་མཆི་མ་དྭངས་རྒྱུ་དེ་མེད་ཀི །",
        english: "the tears will never dry out of your eyes."
      }
    ],
  }
];
