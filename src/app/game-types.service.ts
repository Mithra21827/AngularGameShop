import { Injectable } from '@angular/core';


interface Gamedetails{
  gameId:number,
  gameTitle:string,
  gameImgUrl:string,
  gameAbout:string,
  gameGener:string,
  gameRating:number,
  gameTrilerUrl:string
}

interface GameGener{
  generId :number,
  gameGener:string,
}

interface User{
  userId:number,
  userName:string,
  userPassword:string,
  userEmail:string,
}

@Injectable({
  providedIn: 'root'
})

export class GameTypesService {

  logdinUser:string='';

  UserList:User[] =[
    {
      userId:1,
      userName: "Itachi",
      userPassword:"Itachi@123",
      userEmail:"Itachi@gmail.com",
    },
    {
      userId:2,
      userName: "Hinata",
      userPassword:"Hinata@123",
      userEmail:"Hinata@gmail.com",
    }
  ];

  cartList:Gamedetails[]=[
    {
      gameId:16,
      gameTitle:'Tetris',
      gameImgUrl:"https://wallpapercave.com/wp/wp4478512.png",
      gameAbout:"A classic tile-matching puzzle game where players arrange falling tetrominoes to create and clear lines, known for its simple yet addictive gameplay.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=Mr8fVT_Ds4Q?autoplay=1&mute=1"
    },
  ];

  gamesTypes:GameGener[] = [
      {generId:1,gameGener:'Racing'},
      {generId:2,gameGener:"Action"},
      {generId:3,gameGener:"Puzzle"},
      {generId:4,gameGener:"Board"},
      {generId:5,gameGener:"Sports"},
      {generId:6,gameGener:"Simulation"},
      {generId:7,gameGener:"City-Building"},
  ];

  gamesDerails:Gamedetails[] = [
    //raceing
    
    //Action
    {
      gameId:8,
      gameTitle:'God of War Ragnarök',
      gameImgUrl:"https://wallpapercave.com/uwp/uwp4226832.jpeg",
      gameAbout:" The sequel to the critically acclaimed God of War (2018), continuing the story of Kratos and his son Atreus. It combines mythological themes with intense combat and a rich narrative.",
      gameGener:"Action",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=dIQGI36BxDE?autoplay=1&mute=1"
    },
    {
      gameId:9,
      gameTitle:'Red Dead Redemption 2',
      gameImgUrl:"https://wallpapercave.com/wp/wp13566391.jpg",
      gameAbout:"An open-world game set in the late 1800s, focusing on the life of an outlaw, featuring an immersive world, detailed storytelling, and a blend of action and exploration.",
      gameGener:"Action",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=gmA6MrX81z4?autoplay=1&mute=1"
    },
    {
      gameId:10,
      gameTitle:'Grand Theft Auto V',
      gameImgUrl:"https://wallpapercave.com/wp/wp4490919.png",
      gameAbout:"An open-world game set in the fictional city of Los Santos, featuring three protagonists involved in a series of heists and missions, known for its extensive world and narrative depth.",
      gameGener:"Action",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=hvoD7ehZPcM?autoplay=1&mute=1"
    },
    {
      gameId:11,
      gameTitle:'Cyberpunk 2077',
      gameImgUrl:"https://wallpapercave.com/wp/wp12983289.jpg",
      gameAbout:"An open-world RPG set in a dystopian future, where players explore the neon-lit city of Night City, engage in cybernetic upgrades, and uncover a gripping narrative with various branching paths.",
      gameGener:"Action",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=qIcTM8WXFjk?autoplay=1&mute=1"
    },
    {
      gameId:12,
      gameTitle:'Shadows Die Twice',
      gameImgUrl:"https://wallpapercave.com/wp/wp5202251.jpg",
      gameAbout:"An action-adventure game set in a reimagined late 1500s Japan. Players control a shinobi with stealth and combat abilities, tackling a challenging series of enemies and bosses.",
      gameGener:"Action",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=vrSY6E-TXg4?autoplay=1&mute=1"
    },
    {
      gameId:13,
      gameTitle:"Assassin's Creed Valhalla",
      gameImgUrl:"https://wallpapercave.com/wp/wp9162086.jpg",
      gameAbout:"Set in the Viking era, this entry in the Assassin's Creed series follows Eivor, a Viking warrior, featuring a vast open world, historical settings, and a mix of stealth and combat.",
      gameGener:"Action",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=gnmuEkn30ZE?autoplay=1&mute=1"
    },
    {
      gameId:14,
      gameTitle:'Doom Eternal',
      gameImgUrl:"https://wallpapercave.com/wp/wp4400607.jpg",
      gameAbout:" A fast-paced first-person shooter where players battle against demonic forces on Earth and beyond, known for its intense combat and heavy metal soundtrack.",
      gameGener:"Action",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=_UuktemkCFI?autoplay=1&mute=1"
    },
    {
      gameId:15,
      gameTitle:'Hades',
      gameImgUrl:"https://wallpapercave.com/wp/wp13939277.png",
      gameAbout:"A rogue-like dungeon crawler where players take on the role of Zagreus, the son of Hades, trying to escape the underworld, known for its engaging story and fast-paced combat.",
      gameGener:"Action",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=91t0ha9x0AE?autoplay=1&mute=1"
    },
    
    //Puzzle
    {
      gameId:16,
      gameTitle:'Tetris',
      gameImgUrl:"https://wallpapercave.com/wp/wp4478512.png",
      gameAbout:"A classic tile-matching puzzle game where players arrange falling tetrominoes to create and clear lines, known for its simple yet addictive gameplay.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=Mr8fVT_Ds4Q?autoplay=1&mute=1"
    },
    {
      gameId:17,
      gameTitle:'Portal 2',
      gameImgUrl:"https://wallpapercave.com/wp/wp7908502.jpg",
      gameAbout:"A first-person puzzle game that involves using a portal gun to solve puzzles and navigate through the Aperture Science facility. It combines humor, physics-based challenges, and a compelling story.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=A88YiZdXugA?autoplay=1&mute=1"
    },
    {
      gameId:18,
      gameTitle:'The Witness',
      gameImgUrl:"https://wallpapercave.com/wp/wp4163247.jpg",
      gameAbout:"A first-person puzzle game set on a mysterious island filled with puzzles requiring observation and logic, known for its intricate puzzles and philosophical themes.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=ul7kNFD6noU?autoplay=1&mute=1"
    },
    {
      gameId:19,
      gameTitle:'Monument Valley',
      gameImgUrl:"https://wallpapercave.com/wp/wp12710546.jpg",
      gameAbout:"A visually stunning puzzle game where players guide a character through impossible architecture and optical illusions, known for its unique art style and relaxing gameplay.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=mh_4JJNULZ0"
    },
    { 
      gameId:4,
      gameTitle:'F1 2023',
      gameImgUrl:"https://i.ytimg.com/vi/K6Lxqh5FELA/maxresdefault.jpg",
      gameAbout:"The latest in the F1 racing series, offering realistic simulation of Formula 1 racing. It includes all the official teams, drivers, and circuits, with advanced car handling and realistic race conditions.",
      gameGener:"Racing",
      gameRating:9,
      gameTrilerUrl:"https://www.youtube.com/watch?v=ewOZTzM3vUY?autoplay=1&mute=1"
    },
    { 
      gameId:5,
      gameTitle:'Dirt 5',
      gameImgUrl:"https://wallpapercave.com/wp/wp7427261.jpg",
      gameAbout:"A fun off-road racing game with a focus on arcade-style racing. It features a variety of terrains, dynamic weather, and a robust career mode.",
      gameGener:"Racing",
      gameRating:7,
      gameTrilerUrl:"https://www.youtube.com/watch?v=rPIj7Lxi-Q8?autoplay=1&mute=1"
    },
    { 
      gameId:6,
      gameTitle:'WRC Generations',
      gameImgUrl:"https://store-images.s-microsoft.com/image/apps.54825.14015447301042986.492d8bea-7384-4878-a5ce-3fd9bc0a75ff.bb29283e-c5a4-41e6-8460-178c5ca69bec",
      gameAbout:"The latest entry in the long-running Gran Turismo series, offering realistic driving experiences, a wide range of cars, and stunning graphics. It features a comprehensive single-player campaign and a robust multiplayer mode.",
      gameGener:"Racing",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=2nRUwDtP6s4?autoplay=1&mute=1"
    },
    { 
      gameId:7,
      gameTitle:'The Crew 2',
      gameImgUrl:"https://wallpapercave.com/wp/wp3539342.jpg",
      gameAbout:"The latest entry in the long-running Gran Turismo series, offering realistic driving experiences, a wide range of cars, and stunning graphics. It features a comprehensive single-player campaign and a robust multiplayer mode.",
      gameGener:"Racing",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=D3Enbdr_V-4?autoplay=1&mute=1"
    },
    {
      gameId:20,
      gameTitle:'Candy Crush Saga',
      gameImgUrl:"https://wallpapercave.com/wp/wp2347554.jpg",
      gameAbout:"A match-three puzzle game where players swap colorful candies to create matches and complete levels, known for its casual, addictive gameplay and social features.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=gJjCGmMkAIw"
    },
    {
      gameId:21,
      gameTitle:'Limbo',
      gameImgUrl:"https://wallpapercave.com/wp/EqkpIrt.jpg",
      gameAbout:"A dark and atmospheric puzzle-platformer where players guide a boy through a mysterious and dangerous world filled with traps and puzzles, known for its unique visual style and haunting atmosphere.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=Y4HSyVXKYz8"
    },
    {
      gameId:22,
      gameTitle:'Baba Is You',
      gameImgUrl:"https://wallpapercave.com/wp/wp10476368.jpg",
      gameAbout:"A puzzle game where players manipulate the rules of the game world to solve puzzles, praised for its innovative mechanics and challenging brain-teasers.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=z3_yA4HTJfs"
    },
    {
      gameId:23,
      gameTitle:'Catherine',
      gameImgUrl:"https://animemojo.com/cdn-cgi/image/fit=cover,width=640,height=360,quality=50/images/articles/banners/6539.jpg",
      gameAbout:"A puzzle-platformer blending a gripping narrative with challenging block-pushing puzzles, exploring themes of relationships and personal dilemmas through unique gameplay.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=SRHMnMyAvKA"
    },
    {
      gameId:24,
      gameTitle:'Sokoban',
      gameImgUrl:"https://th.bing.com/th/id/OIP.I8r-46H09RtQr1q5vLntswHaDt?w=1600&h=800&rs=1&pid=ImgDetMain",
      gameAbout:"A classic puzzle game where players push boxes around a warehouse to place them in designated locations, known for its simple yet engaging mechanics.",
      gameGener:"Puzzle",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=cywOW7P-kcA"
    },
    //Board
    {
      gameId:25,
      gameTitle:'Monopoly',
      gameImgUrl:"https://wallpapercave.com/wp/wp11736655.jpg",
      gameAbout:"A classic board game where players buy, trade, and develop properties to accumulate wealth and bankrupt opponents. Known for its iconic gameplay and real estate theme.",
      gameGener:"Board",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=X0hImxpxMIY"
    },
    {
      gameId:26,
      gameTitle:'Settlers of Catan',
      gameImgUrl:"https://image-cdn.hypb.st/https://hypebeast.com/image/2021/05/settlers-of-catan-three-dimensional-edition-board-game-launch-001.jpg",
      gameAbout:"A strategy board game where players collect and trade resources to build settlements, roads, and cities on the island of Catan, praised for its strategic depth and replayability.",
      gameGener:"Board",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=5-6OVXTzVdI"
    },
    {
      gameId:27,
      gameTitle:'Ticket to Ride',
      gameImgUrl:"https://upload.wikimedia.org/wikipedia/en/9/92/Ticket_to_Ride_Board_Game_Box_EN.jpg",
      gameAbout:" A board game where players collect train cards to claim railway routes across a map, celebrated for its strategic gameplay and easy-to-learn rules.",
      gameGener:"Board",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=_vqgHldCS0I"
    },
    {
      gameId:26,
      gameTitle:'Pandemic',
      gameImgUrl:"https://cdn-europe1.lanmedia.fr/var/europe1/storage/images/europe1/culture/pandemic-un-jeu-video-pour-lutter-contre-une-epidemie-3960720/54686845-1-fre-FR/Pandemic-un-jeu-video-pour-lutter-contre-une-epidemie.png",
      gameAbout:"A cooperative board game where players work together to prevent global outbreaks of diseases, known for its teamwork and strategic planning elements.",
      gameGener:"Board",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=nV25C4El3io"
    },
    //Sports
    {
      gameId:27,
      gameTitle:'FIFA 24',
      gameImgUrl:"https://wallpapercave.com/wp/wp12562484.jpg",
      gameAbout:"The latest installment in the FIFA series, offering realistic soccer gameplay with updated teams, players, and stadiums. Known for its comprehensive features and immersive soccer experience.",
      gameGener:"Sports",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=axJaMUPaZU0"
    },
    {
      gameId:28,
      gameTitle:'NBA 2K24',
      gameImgUrl:"https://wallpapercave.com/wp/wp12585967.jpg",
      gameAbout:"A basketball simulation game featuring realistic gameplay, updated rosters, and various game modes including MyCareer and MyTeam, known for its detailed graphics and deep gameplay mechanics.",
      gameGener:"Sports",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=OJS1BVniz5c"
    },
    {
      gameId:29,
      gameTitle:'Madden NFL 24',
      gameImgUrl:"https://wallpapercave.com/wp/wp12391926.jpg",
      gameAbout:" The latest in the Madden NFL series, offering updated teams, improved gameplay mechanics, and various modes including Franchise and Ultimate Team, known for its realism and depth.",
      gameGener:"Sports",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=4o6xDjg2B54"
    },
    { 
      gameId:1,
      gameTitle:'Gran Turismo 7',
      gameImgUrl:"https://th.bing.com/th/id/OIP.iu1ZJTFuUstY-pqe89S0fgHaEK?rs=1&pid=ImgDetMain",
      gameAbout:"The latest entry in the long-running Gran Turismo series, offering realistic driving experiences, a wide range of cars, and stunning graphics. It features a comprehensive single-player campaign and a robust multiplayer mode.",
      gameGener:"Racing",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/embed/1tBUsXIkG1A?autoplay=1&mute=1"
    },
    { 
      gameId:2,
      gameTitle:'Forza Horizon 5',
      gameImgUrl:"https://www.gtplanet.net/wp-content/uploads/2022/02/image-1-19.jpg",
      gameAbout:"An open-world racing game set in a vibrant and diverse representation of Mexico. Known for its expansive map, dynamic weather, and a wide variety of cars, it blends racing with exploration and social play.",
      gameGener:"Racing",
      gameRating:9,
      gameTrilerUrl:"https://www.youtube.com/embed/1tBUsXIkG1A?autoplay=1&mute=1"
    },
    { 
      gameId:3,
      gameTitle:'Need for Speed Heat',
      gameImgUrl:"https://wallpapercave.com/wp/wp12611316.jpg",
      gameAbout:"This entry in the Need for Speed series features an action-packed street racing experience with a day/night cycle that impacts gameplay. Players can customize cars and engage in illegal street races.",
      gameGener:"Racing",
      gameRating:9,
      gameTrilerUrl:"https://www.youtube.com/watch?v=9ewiJJe_nYI?autoplay=1&mute=1"
    },
    {
      gameId:30,
      gameTitle:'F1 23',
      gameImgUrl:"https://wallpapercave.com/wp/wp12433641.png",
      gameAbout:"A realistic Formula 1 racing simulation featuring all the official teams, drivers, and tracks, offering advanced car handling, realistic race conditions, and various game modes.",
      gameGener:"Sports",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=ewOZTzM3vUY"
    },
    {
      gameId:31,
      gameTitle:'WWE 2K24',
      gameImgUrl:"https://wallpapercave.com/wp/wp13497297.jpg",
      gameAbout:"A wrestling simulation game featuring realistic gameplay, updated rosters, and various game modes including MyCareer and Universe, known for its detailed graphics and immersive experience.",
      gameGener:"Sports",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=GpuRjErh-e0"
    },
    //Simulation
    {
      gameId:32,
      gameTitle:'Stardew Valley',
      gameImgUrl:"https://th.bing.com/th/id/OIP.-340rsXDzLuBC_qERhpVxwAAAA?rs=1&pid=ImgDetMain",
      gameAbout:" The latest in the Madden NFL series, offering updated teams, improved gameplay mechanics, and various modes including Franchise and Ultimate Team, known for its realism and depth.",
      gameGener:"Simulation",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=8A7A1X1TVNc"
    },
    {
      gameId:33,
      gameTitle:'The Sims 4',
      gameImgUrl:"https://wallpapercave.com/wp/wp11859169.png",
      gameAbout:"A life simulation game where players create and control characters, build homes, and guide their lives, known for its extensive customization options and open-ended gameplay.",
      gameGener:"Simulation",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=DyNv44QR14g"
    },
    {
      gameId:34,
      gameTitle:'Cities: Skylines',
      gameImgUrl:"https://wallpapercave.com/wp/wp11978411.jpg",
      gameAbout:"A city-building simulation game where players design and manage cities, balancing various aspects like infrastructure, economy, and citizen satisfaction, known for its depth and modding community.",
      gameGener:"Simulation",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=CpWe03NhXKs"
    },
    {
      gameId:35,
      gameTitle:'House Flipper',
      gameImgUrl:"https://wallpapercave.com/wp/wp9490461.png",
      gameAbout:"A simulation game where players buy, renovate, and sell houses, focusing on various aspects of home improvement, known for its detailed renovation mechanics and realistic graphics.",
      gameGener:"Simulation",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=nh4zuyi7vVM"
    },
    {
      gameId:36,
      gameTitle:'Prison Architect',
      gameImgUrl:"https://wallpapercave.com/wp/wp13924370.jpg",
      gameAbout:"A prison management simulation game where players design and run a prison, managing inmates, staff, and resources, known for its strategic depth and challenging scenarios.",
      gameGener:"Simulation",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=JGagqxloRZU"
    },
    //City-Building
    {
      gameId:37,
      gameTitle:'SimCity (2013)',
      gameImgUrl:"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2017/04/simcity-buildit.jpg",
      gameAbout:"A city-building simulation game where players design and manage a city, balancing various aspects like infrastructure, economy, and citizen satisfaction, known for its depth and engaging gamepla",
      gameGener:"City-Building",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=3diYp35FITM"
    },
    {
      gameId:38,
      gameTitle:'Cities: Skylines',
      gameImgUrl:"https://wallpapercave.com/wp/wp12087800.jpg",
      gameAbout:"A city-building simulation game where players design and manage cities, balancing various aspects like infrastructure, economy, and citizen satisfaction, known for its depth and modding community.",
      gameGener:"City-Building",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=7vlKoMi4Qr0"
    },
    {
      gameId:39,
      gameTitle:'Tropico 6',
      gameImgUrl:"https://wallpapercave.com/wp/wp4663346.jpg",
      gameAbout:" A city-building and management simulation game where players take on the role of El Presidente, managing an island nation through various historical eras, known for its humor and political satire.",
      gameGener:"City-Building",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=QoKpWyjUmQY"
    },
    {
      gameId:40,
      gameTitle:'Banished',
      gameImgUrl:"https://wallpapercave.com/wp/wp11800811.jpg",
      gameAbout:" A city-building simulation game where players manage a group of exiled travelers who decide to restart their lives in a new land, focusing on resource management and survival.",
      gameGener:"City-Building",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=Ls8FBFFjMxk"
    },
    {
      gameId:41,
      gameTitle:'Anno 1800',
      gameImgUrl:"https://wallpapercave.com/wp/wp12092598.jpg",
      gameAbout:"A city-building and strategy game set in the 19th century, where players build and manage cities, engage in trade, and explore new territories, known for its detailed world and strategic depth.",
      gameGener:"City-Building",
      gameRating:8,
      gameTrilerUrl:"https://www.youtube.com/watch?v=7ZwaZMuc1TQ"
    },
  ];

  constructor() { }

  getGames(){
    return this.gamesTypes;
  }

  getGameDetails(){
    return this.gamesDerails;
  }

  getUserList(){
    return this.UserList;
  }

  getCartList(){
    return this.cartList;
  }
}
