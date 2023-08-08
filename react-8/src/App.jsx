import React, { useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import { motion } from "framer-motion";
import { Button } from "@mantine/core";

const App = () => {
  const [popular, setPopular] = useState([
    {
      adult: false,
      backdrop_path: "/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg",
      genre_ids: [28, 80, 53],
      id: 385687,
      original_language: "en",
      original_title: "Fast X",
      overview:
        "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
      popularity: 3980.086,
      poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
      release_date: "2023-05-17",
      title: "Fast X",
      video: false,
      vote_average: 7.3,
      vote_count: 2226,
    },
    {
      adult: false,
      backdrop_path: "/fhquRW28vRZHr26orSaFFnhYIA0.jpg",
      genre_ids: [28, 53],
      id: 697843,
      original_language: "en",
      original_title: "Extraction 2",
      overview:
        "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
      popularity: 1939.316,
      poster_path: "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
      release_date: "2023-06-09",
      title: "Extraction 2",
      video: false,
      vote_average: 7.6,
      vote_count: 1013,
    },
    {
      adult: false,
      backdrop_path: "/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
      genre_ids: [28, 12, 16, 878],
      id: 569094,
      original_language: "en",
      original_title: "Spider-Man: Across the Spider-Verse",
      overview:
        "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
      popularity: 1803.035,
      poster_path: "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      release_date: "2023-05-31",
      title: "Spider-Man: Across the Spider-Verse",
      video: false,
      vote_average: 8.6,
      vote_count: 1875,
    },
    {
      adult: false,
      backdrop_path: "/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg",
      genre_ids: [28, 53, 80],
      id: 603692,
      original_language: "en",
      original_title: "John Wick: Chapter 4",
      overview:
        "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
      popularity: 1690.22,
      poster_path: "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
      release_date: "2023-03-22",
      title: "John Wick: Chapter 4",
      video: false,
      vote_average: 7.9,
      vote_count: 3405,
    },
    {
      adult: false,
      backdrop_path: "/nniZPBIfrep9wbx0l1529RHXeD8.jpg",
      genre_ids: [16, 10751, 12, 14, 35],
      id: 502356,
      original_language: "en",
      original_title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      popularity: 1513.9,
      poster_path: "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: "2023-04-05",
      title: "The Super Mario Bros. Movie",
      video: false,
      vote_average: 7.8,
      vote_count: 5259,
    },
    {
      adult: false,
      backdrop_path: "/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
      genre_ids: [28, 12, 878],
      id: 667538,
      original_language: "en",
      original_title: "Transformers: Rise of the Beasts",
      overview:
        "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
      popularity: 1382.686,
      poster_path: "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
      release_date: "2023-06-06",
      title: "Transformers: Rise of the Beasts",
      video: false,
      vote_average: 7.2,
      vote_count: 512,
    },
    {
      adult: false,
      backdrop_path: "/osnvZffaZymubHiBkOsIFd8Y3Re.jpg",
      genre_ids: [28, 27, 53],
      id: 986070,
      original_language: "en",
      original_title: "The Wrath of Becky",
      overview:
        "Two years after she escaped a violent attack on her family, 16-year-old Becky attempts to rebuild her life in the care of an older woman -- a kindred spirit named Elena. However, when a violent group known as the Noble Men break into their home, attack them and take their beloved dog, Becky must return to her old ways to protect herself and her loved ones.",
      popularity: 1312.736,
      poster_path: "/3LShl6EwqptKIVq6NWOZ0FbZHEe.jpg",
      release_date: "2023-05-26",
      title: "The Wrath of Becky",
      video: false,
      vote_average: 6.6,
      vote_count: 50,
    },
    {
      adult: false,
      backdrop_path: "/pNOccytgkGuyofTLmh1sqEfTJuE.jpg",
      genre_ids: [10749, 18],
      id: 1010581,
      original_language: "es",
      original_title: "Culpa mía",
      overview:
        "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
      popularity: 1244.503,
      poster_path: "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
      release_date: "2023-06-08",
      title: "My Fault",
      video: false,
      vote_average: 8.3,
      vote_count: 965,
    },
    {
      adult: false,
      backdrop_path: "/xDEVdWduhRdNS4PzA6wif6FjUQb.jpg",
      genre_ids: [28, 14, 53],
      id: 1036561,
      original_language: "en",
      original_title: "Shadow Master",
      overview:
        "After being slain by a group of criminals, a man is reborn with animal-like superpowers and makes it his mission to right the wrongs of his city.",
      popularity: 1223.885,
      poster_path: "/67ZsRKbItt6B1yHlsJKgfPWOyuJ.jpg",
      release_date: "2022-11-03",
      title: "Shadow Master",
      video: false,
      vote_average: 7.1,
      vote_count: 47,
    },
    {
      adult: false,
      backdrop_path: "/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg",
      genre_ids: [16, 35, 10751, 14, 10749],
      id: 976573,
      original_language: "en",
      original_title: "Elemental",
      overview:
        "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
      popularity: 1181.444,
      poster_path: "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
      release_date: "2023-06-14",
      title: "Elemental",
      video: false,
      vote_average: 7.5,
      vote_count: 249,
    },
    {
      adult: false,
      backdrop_path: "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
      genre_ids: [28, 878, 12],
      id: 447365,
      original_language: "en",
      original_title: "Guardians of the Galaxy Vol. 3",
      overview:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      popularity: 884.405,
      poster_path: "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      release_date: "2023-05-03",
      title: "Guardians of the Galaxy Vol. 3",
      video: false,
      vote_average: 8.1,
      vote_count: 2135,
    },
    {
      adult: false,
      backdrop_path: "/fEe2csLOUsTyaLdCccVJfFeJzhx.jpg",
      genre_ids: [878, 28, 12],
      id: 298618,
      original_language: "en",
      original_title: "The Flash",
      overview:
        "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
      popularity: 869.816,
      poster_path: "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
      release_date: "2023-06-13",
      title: "The Flash",
      video: false,
      vote_average: 6.7,
      vote_count: 683,
    },
    {
      adult: false,
      backdrop_path: "/4pNlHx6ytdYBDs94PgcS0wQkbc4.jpg",
      genre_ids: [878, 12, 28],
      id: 76600,
      original_language: "en",
      original_title: "Avatar: The Way of Water",
      overview:
        "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
      popularity: 855.275,
      poster_path: "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
      release_date: "2022-12-14",
      title: "Avatar: The Way of Water",
      video: false,
      vote_average: 7.7,
      vote_count: 8902,
    },
    {
      adult: false,
      backdrop_path: "/vQ5T84t8h4N2xAswNFW9fkVIyZq.jpg",
      genre_ids: [9648, 53, 878],
      id: 536437,
      original_language: "en",
      original_title: "Hypnotic",
      overview:
        "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
      popularity: 849.239,
      poster_path: "/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
      release_date: "2023-05-11",
      title: "Hypnotic",
      video: false,
      vote_average: 6.4,
      vote_count: 263,
    },
    {
      adult: false,
      backdrop_path: "/ribiMu3iINPxDkofErPxe8jQ8L0.jpg",
      genre_ids: [12, 10751, 14, 10749],
      id: 447277,
      original_language: "en",
      original_title: "The Little Mermaid",
      overview:
        "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
      popularity: 817.482,
      poster_path: "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      release_date: "2023-05-18",
      title: "The Little Mermaid",
      video: false,
      vote_average: 6.2,
      vote_count: 799,
    },
    {
      adult: false,
      backdrop_path: "/zPcuuhwZFDzBTc66wtrLZ2qX5y4.jpg",
      genre_ids: [12, 28],
      id: 335977,
      original_language: "en",
      original_title: "Indiana Jones and the Dial of Destiny",
      overview:
        "Finding himself in a new era, approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
      popularity: 683.771,
      poster_path: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
      release_date: "2023-06-28",
      title: "Indiana Jones and the Dial of Destiny",
      video: false,
      vote_average: 6.5,
      vote_count: 149,
    },
    {
      adult: false,
      backdrop_path: "/sWulI556AJZ1DAQnxyAvnAAY6nd.jpg",
      genre_ids: [16, 10751],
      id: 73723,
      original_language: "en",
      original_title: "The Lorax",
      overview:
        "A 12-year-old boy searches for the one thing that will enable him to win the affection of the girl of his dreams. To find it he must discover the story of the Lorax, the grumpy yet charming creature who fights to protect his world.",
      popularity: 662.485,
      poster_path: "/tePFnZFw5JvjwjQjaKkqDPNMLPU.jpg",
      release_date: "2012-03-01",
      title: "The Lorax",
      video: false,
      vote_average: 6.5,
      vote_count: 3078,
    },
    {
      adult: false,
      backdrop_path: "/sFGENDTUNOuDbVufxksCkrDtuaT.jpg",
      genre_ids: [53, 27],
      id: 713704,
      original_language: "en",
      original_title: "Evil Dead Rise",
      overview:
        "A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
      popularity: 648.025,
      poster_path: "/5ik4ATKmNtmJU6AYD0bLm56BCVM.jpg",
      release_date: "2023-04-12",
      title: "Evil Dead Rise",
      video: false,
      vote_average: 7,
      vote_count: 1791,
    },
    {
      adult: false,
      backdrop_path: "/9t0tJXcOdWwwxmGTk112HGDaT0Q.jpg",
      genre_ids: [27, 53],
      id: 890771,
      original_language: "en",
      original_title: "The Black Demon",
      overview:
        "Oilman Paul Sturges' idyllic family vacation turns into a nightmare when they encounter a ferocious megalodon shark that will stop at nothing to protect its territory. Stranded and under constant attack, Paul and his family must somehow find a way to get his family back to shore alive before it strikes again in this epic battle between humans and nature.",
      popularity: 641.342,
      poster_path: "/uiFcFIjig0YwyNmhoxkxtAAVIL2.jpg",
      release_date: "2023-04-26",
      title: "The Black Demon",
      video: false,
      vote_average: 6.3,
      vote_count: 245,
    },
    {
      adult: false,
      backdrop_path: "/b8tX15xHPai3bYeKYgAZikANTGl.jpg",
      genre_ids: [10752, 28, 53],
      id: 882569,
      original_language: "en",
      original_title: "Guy Ritchie's The Covenant",
      overview:
        "During the war in Afghanistan, a local interpreter risks his own life to carry an injured sergeant across miles of grueling terrain.",
      popularity: 626.795,
      poster_path: "/kVG8zFFYrpyYLoHChuEeOGAd6Ru.jpg",
      release_date: "2023-04-19",
      title: "Guy Ritchie's The Covenant",
      video: false,
      vote_average: 7.8,
      vote_count: 848,
    },
  ]);
  const [filter, setFilter] = useState(popular);
  const [activeGenre, setActiveGenre] = useState(0);

  return (
    // <div>
    //   <Filter
    //     popular={popular}
    //     filter={filter}
    //     setFilter={setFilter}
    //     activeGenre={activeGenre}
    //     setActiveGenre={setActiveGenre}
    //   />
    //   <motion.div layout className=" flex flex-wrap gap-10 justify-center my-20">
    //     {filter.map((movie) => (
    //       <Movie key={movie.id} {...movie} />
    //     ))}
    //   </motion.div>
    // </div>

    <Button color="grape" className=" bg-black">Settings</Button>
  );
};

export default App;
