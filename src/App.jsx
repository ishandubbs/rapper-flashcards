import React from 'react';
import FlashcardList from './Flashcards';
import './App.css';

const FLASHCARDS = [
  {
    question: "Symere Bysil Woods",
    answer: "Lil Uzi Vert",
    img: "https://assets.vogue.com/photos/5ca6615c3475251a0e7b5fd6/master/pass/00-promo-lil-uzi-vert.jpg",
    difficulty: "medium"
  },

  {
    question: "Jordan Terell Carter",
    answer: "Playboi Carti",
    img: "https://i.iheart.com/v3/re/new_assets/67473687a2e3b6d97c31b1c1?ops=contain(1480,0)",
    difficulty: "easy"
  },

  {
    question: "Aubrey Graham",
    answer: "Drake",
    img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8256x5504+0+0/resize/1100/quality/50/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F19%2F3e%2Ffec9fb8444f990d424de14aa4d33%2Fgettyimages-1448234892.jpg",
    difficulty: "easy"
  },

  {
    question: "Jacques Bermon Webster II",
    answer: "Travis Scott",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHUfOs9y_H0u7VtpoLBAq-HSdL0bB_MCBBg&s",
    difficulty: "medium"
  },

  {
    question: "Nayvadius DeMun Cash",
    answer: "Future",
    img: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/2879x2082+0+32/resize/2879x2082!/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F5d%2Faa%2F88ef75204241a5a9202422acc0cc%2Fgettyimages-1426380391.jpg",
    difficulty: "medium"
  },

  {
    question: "Sheyaa-bin Abraham Joseph",
    answer: "21 Savage",
    img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F01%2F21-savage-teases-new-music-in-tweet-001.jpg?q=75&w=800&cbr=1&fit=max",
    difficulty: "hard"
    },

  {
    question: "Jarad Anthony Higgins",
    answer: "Juice WRLD",
    img: "https://wp.dailybruin.com/images/2020/07/web.ae_.juicewrld.courtesy.jpg",
    difficulty: "easy"
  },

  {
    question: "Jeffrey Lamar Williams",
    answer: "Young Thug",
    img: "https://www.ajc.com/resizer/v2/DSWX3FHTC7HIHGUD5DKAMVPSSU.jpg?auth=28b8d704459aa6dc22f60fe00d3344d22a52de43f8f1642bd03b720564d8b7a9&width=790&height=440&smart=true",
    difficulty: "easy"
  },

  {
    question: "Quantavious Tavario Thomas",
    answer: "Young Nudy",
    img: "https://www.rollingstone.com/wp-content/uploads/2023/03/young-nudy.jpg",
    difficulty: "hard"
  },

  {
    question: "Amala Ratna Zandile Dlamini",
    answer: "Doja Cat",
    img: "https://www.hot97.com/wp-content/uploads/sites/2/2024/04/doja-cat-weighs-in-on-big-three-debate.jpg?w=990",
    difficulty: "hard"
  },

  {
    question: "Belcalis Marlinus Cephus",
    answer: "Cardi B",
    img: "https://cdn.britannica.com/85/229185-050-3CC1C44E/Cardi-B-2019.jpg",
    difficulty: "hard"
  },

  {
    question: "Benito Antonio Martinez Ocasio",
    answer: "Bad Bunny",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1Is12nqfQESLkC8eHesrar1Jy5AUaMFiRQ&s",
    difficulty: "easy"
  },

  {
    question: "Onika Tanya Maraj-Petty",
    answer: "Nicki Minaj",
    img: "https://media.npr.org/assets/img/2023/09/01/minaj_custom-b03a0992f23b6fe5d3d5add53c8920cd1b7e0c42.jpg?s=1100&c=50&f=jpeg",
    difficulty: "medium"
  },

  {
    question: "Dominique Armani Jones",
    answer: "Lil Baby",
    img: "https://i8.amplience.net/i/naras/lil-baby_MI0005107873-MN0003353669",
    difficulty: "easy"
  },

  {
    question: "Sergio Giavanni Kitchens",
    answer: "Gunna",
    img: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2024%2F04%2F15%2Fgunna-one-of-wun-album-announcement-cover-art-0.jpg?w=960&cbr=1&q=90&fit=max",
    difficulty: "medium"
  },

  {
    question: "Taurus Tremani Bartlett",
    answer: "Polo G",
    img: "https://media.gettyimages.com/id/1457488628/photo/paris-france-polo-g-attends-the-givenchy-menswear-fall-winter-2023-2024-show-as-part-of-paris.jpg?s=612x612&w=gi&k=20&c=JDsI2TZ1hcHcqr9KKv7TwCHBAMjTuq0FVLKaIL_8nuU=",
    difficulty: "medium"
  },

  {
    question: "Tione Jayden Merritt",
    answer: "Lil Tjay",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZj5lQkqmGg8_m-NJ64MSoJSiY_g3Vi7z1g&s",
    difficulty: "medium"
  },

  {
    question: "Bill Kahan Kapri",
    answer: "Kodak Black",
    img: "https://www.billboard.com/wp-content/uploads/2024/11/kodak-black-2023-One-Music-Festival-billboard-1548.jpg?w=942&h=623&crop=1",
    difficulty: "hard"
  },

  {
    question: "Navraj Singh Goraya",
    answer: "Nav",
    img: "https://pyxis.nymag.com/v1/imgs/703/7b7/2f349f0aea9b337025c0b54ed173d10266-28-nav.2x.rsocial.w600.jpg",
    difficulty: "easy"
  },

  {
    question: "Olajide Olayinka Williams Olatunji",
    answer: "KSI",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa9uqn7Lc9PzZz4YOM0vxqudCGrAKTzNGH3g&s",
    difficulty: "hard"
  },
];

const App = () => {
  return (
    <div className="App">
      <div className='app-container'>
        <h1>Guess the rapper!</h1>
        <h2>Use their real name to guess who the rapper is!</h2>
        <FlashcardList cards = {FLASHCARDS} />
      </div>
    </div>
  );
};

export default App