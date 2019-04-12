const characters = {
  arya: {
    name: "Arya Stark",
    picture:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/game-of-thrones-season-8-arya-stark-maisie-williams-1553863199.jpg?crop=1.00xw:0.477xh;0,0.00800xh&resize=480:*",
    destiny: ""
  },
  beric: {
    name: "Beric Dondarrion",
    picture:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/a/ab/BericDondarrionBeyondtheWallRhllorSpeech.png/revision/latest?cb=20190215205301",
    destiny: ""
  },
  bran: {
    name: "Bran Stark",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fa/Bran_Stark_-_Isaac_Hempstead-Wright.jpeg/220px-Bran_Stark_-_Isaac_Hempstead-Wright.jpeg",
    destiny: ""
  },
  brienne: {
    name: "Brienne of Tarth",
    picture:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/9/92/BrienneSeason8Cropped.PNG/revision/latest?cb=20190207114051",
    destiny: ""
  },
  bronn: {
    name: "Bronn",
    picture:
      "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2017%2F03%2FBronn.jpg&c=sc&w=736&h=485",
    destiny: ""
  },
  cersei: {
    name: "Cersei Lannister",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/Cersei_Lannister-Lena_Headey.jpg/220px-Cersei_Lannister-Lena_Headey.jpg",
    destiny: ""
  },
  daenerys: {
    name: "Daenerys Targaryen",
    picture:
      "https://media.vanityfair.com/photos/59a589d562a7f43bf00ac4cd/master/pass/disgust-incest-daenerys.jpg",
    destiny: ""
  },
  davos: {
    name: "Davos Seaworth",
    picture:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/c/c9/Davos_Season_8.jpg/revision/latest?cb=20190206213729",
    destiny: ""
  },
  euron: {
    name: "Euron Greyjoy",
    picture:
      "https://www.telegraph.co.uk/content/dam/tv/2017/07/24/Pilou-Asbaek-Euron-Greyjoy-game-of-thrones-620x360_trans_NvBQzQNjv4BqI8qX0ftaydP5xx9bHApjPRFlOoX7LYjMP6Yze99l4Sc.jpg?imwidth=450",
    destiny: ""
  },
  gendry: {
    name: "Gendry",
    picture:
      "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2017%2F03%2Fgendry-1280.jpg&c=sc&w=736&h=485",
    destiny: ""
  },
  gilly: {
    name: "Gilly",
    picture:
      "https://cdn.vox-cdn.com/thumbor/7EjFQv-6B8Bv5QNt84izw-6_tuQ=/0x0:1920x1080/1200x800/filters:focal(730x296:1036x602)/cdn.vox-cdn.com/uploads/chorus_image/image/56223627/image__1_.0.png",
    destiny: ""
  },
  gregor: {
    name: 'Gregor "The Mountain" Clegane',
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Gregor_Clegane-The_Mountain-Haf%C3%BE%C3%B3r_J%C3%BAl%C3%ADus_Bj%C3%B6rnsson.jpg/220px-Gregor_Clegane-The_Mountain-Haf%C3%BE%C3%B3r_J%C3%BAl%C3%ADus_Bj%C3%B6rnsson.jpg",
    destiny: ""
  },
  grey: {
    name: "Grey Worm",
    picture:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/35/1504282564-greyworm.jpg?resize=480:*",
    destiny: ""
  },
  jaime: {
    name: "Jaime Lannister",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg/220px-Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",
    destiny: ""
  },
  jon: {
    name: "Jon Snow",
    picture:
      "https://fsmedia.imgix.net/05/b0/0b/43/56f3/4497/8d96/3a6602bd5e28/jon-snow-has-a-bright-future-as-long-as-hes-chill-with-dating-his-aunt.jpeg?rect=0%2C0%2C940%2C471&auto=format%2Ccompress&dpr=2&w=650",
    destiny: ""
  },
  jorah: {
    name: "Jorah Mormont",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d5/Jorah_Mormont-Iain_Glen.jpg/220px-Jorah_Mormont-Iain_Glen.jpg",
    destiny: ""
  },
  melisandre: {
    name: "Melisandre",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Melisandre-Carice_van_Houten.jpg/220px-Melisandre-Carice_van_Houten.jpg",
    destiny: ""
  },
  missandei: {
    name: "Missandei",
    picture:
      "https://imagesvc.timeincapp.com/v3/fan/image?url=https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2017%2F07%2FScreen-Shot-2017-07-11-at-12.42.42-PM.jpg&c=sc&w=736&h=485",
    destiny: ""
  },
  night: {
    name: "Night King",
    picture: "https://awoiaf.westeros.org/thumb.php?f=Night_king.jpg&width=300",
    destiny: ""
  },
  podrick: {
    name: "Podrick Payne",
    picture:
      "https://imgix.bustle.com/rehost/2016/9/13/76d7e0b6-d1bf-43b2-b446-77439f465c63.jpg?w=970&h=546&fit=crop&crop=faces&auto=format&q=70",
    destiny: ""
  },
  salladhor: {
    name: "Salladhor Saan",
    picture:
      "https://got2016-nocompany1458150561.netdna-ssl.com/People/salladhor-saan-d.jpg",
    destiny: ""
  },
  sam: {
    name: "Sam (Gilly's Baby)",
    picture:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/1/12/Sam_at_Oldtown.jpg/revision/latest?cb=20170808102046",
    destiny: ""
  },
  samwell: {
    name: "Samwell Tarly",
    picture:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/3/30/Samwell_Season_8_Cropped.PNG/revision/latest?cb=20190207112410",
    destiny: ""
  },
  sandor: {
    name: 'Sandor "The Hound" Clegane',
    picture:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/b/bc/Sandor_Clegane_Season_7_Promo_Image.PNG/revision/latest?cb=20170828063713",
    destiny: ""
  },
  sansa: {
    name: "Sansa Stark",
    picture:
      "https://hips.hearstapps.com/ell.h-cdn.co/assets/17/31/1501534522-e68346e4a713a0a9558be85255557819650b72a0e3f7498aebcaf70319f541cffe081a3669fb29e8742a54577bd535f9-1.jpg?crop=0.735xw:0.595xh;0.104xw,0.128xh&resize=480:*",
    destiny: ""
  },
  theon: {
    name: "Theon Greyjoy",
    picture:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Theon_Greyjoy-Alfie_Allen.jpg/220px-Theon_Greyjoy-Alfie_Allen.jpg",
    destiny: ""
  },
  tormund: {
    name: "Tormund Giantsbane",
    picture: "https://i.ytimg.com/vi/PYATVtnA4pA/maxresdefault.jpg",
    destiny: ""
  },
  tyrion: {
    name: "Tyrion Lannister",
    picture: "http://assets.viewers-guide.hbo.com/small59944e8fe5822@2x.jpg",
    destiny: ""
  },
  varys: {
    name: "Varys",
    picture:
      "https://pixel.nymag.com/imgs/daily/vulture/2017/07/31/31-got-varys.w700.h700.jpg",
    destiny: ""
  },
  yara: {
    name: "Yara Greyjoy",
    picture:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/a/a8/Game_of_thrones_6x5_yara_promo.jpg/revision/latest?cb=20160808022737",
    destiny: ""
  },
  ghost: {
    name: "Ghost (Jon's Direwolf)",
    picture:
      "https://i.pinimg.com/originals/42/43/7e/42437e224996a959c5a14395690b77f7.jpg",
    destiny: ""
  },
  nymeria: {
    name: "Nymeria (Arya's Direwolf)",
    picture:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/5/54/Nymeria-S7.png/revision/latest?cb=20170724060059",
    destiny: ""
  },
  drogon: {
    name: "Drogon (Dany's Dragon Mount)",
    picture: "https://i.ytimg.com/vi/zObIFr5O4p8/hqdefault.jpg",
    destiny: ""
  },
  rhaegal: {
    name: "Rhaegal (Green/Bronze Dragon)",
    picture:
      "https://oyster.ignimgs.com/mediawiki/apis.ign.com/game-of-thrones/4/48/Rhaegal.PNG?width=325",
    destiny: ""
  },
  viserion: {
    name: "Viserion (Dragon Wight)",
    picture:
      "https://nerdist.com/wp-content/uploads/2017/08/ice-dragon-1-970.jpg",
    destiny: ""
  }
};

export default characters;
