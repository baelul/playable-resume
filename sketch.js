// font
var pixelated_font;
var title_font;

// music
var background_music
var music_off = true

// camera values (camera is centered so vals are halved)
var TITLE = 320;
var LEVEL_1 = 960;
var LEVEL_2 = 1600;
var LEVEL_3 = 2240;
var LEVEL_HEIGHT = 320;

// character spirtes and values
var c;
var char_sprite_sheet_up;
var char_sprite_sheet_down;
var char_sprite_sheet_left;
var char_sprite_sheet_right;
var preclick = true;
var x = 100;
var y = 560;

// title
var pixel_me;
var text_block_pink;
var block_count = 0;

// lvl 1 sprites and values

// sprites
var b_g;
var b_salmon;

// spritesheets
var tile;
var dark_road;
var tile_walkway;
var b_green_sprite_sheet;
var b_salmon_sprite_sheet;

// lvl 2 sprites and values

// sprites
var metro;
var android;
var b_s;
var pp_build;
var b_blue;
var b_grey;
var b_yellow;
var redstatue;

// spritesheets
var grass;
var tree;
var sidewalk;
var walkway;
var road;
var road_corners;
var android_sprite_sheet;
var metro_sprite_sheet;
var redstatue_sprite_sheet;
var laf_sprite_sheet;
var b_blue_sprite_sheet;
var b_s_sprite_sheet;
var pp_sprite_sheet;
var b_grey_sprite_sheet;
var b_yellow_sprite_sheet;

// lvl 3 sprites and values

// sprites
var house;
var shed;

// spritesheets
var fence;
var gate;
var park;
var house_sprite_sheet;
var shed_sprite_sheet;

// room sprites and values

// groups
var intro_group;
var pp_group;
var nyu_group;
var google_group;
var hobbies_group;
var outro_group;

var collision_group;

// sprites
var intro_room;
var pp_room;
var nyu_room;
var google_room;
var hobbies_room;
var outro_room;

// spritesheets
var room_sprite_sheet;

var r_end;
var l_end;

// out of bounds for g room
var box1;
var box2;
var box3;
var box4;

// fence boxes
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;

// IF THESE VALUES EXIST, CHARACTER CANNOT MOVE
var cannot_move_x_right;
var cannot_move_x_left;
var cannot_move_y_up;
var cannot_move_y_down;

// intro group
var couch;
var tv_stand;
var carpet;
var book;
var arrow;
var text_block;

// pp group
var pp_floor;

var mta_statue;
var zodiac_statue;
var local_vase;
var quiet_vase;
var billie_vase;
var game_vase;
var genshin_vase;
var wiki_painting;
var admin_painting;
var rail;
var arrow_local;
var arrow_mta;
var arrow_zodiac;
var arrow_quiet;
var arrow_wiki;
var arrow_admin;
var arrow_game;
var arrow_billie;
var arrow_genshin;
var text_block_red;

// nyu group
var class_room;
var desks;
var sidedesk;
var eraser;
var chair1;
var chair2;
var chair_back;
var bookshelf;
var teach_desk;
var kid;
var arrow_ptc;
var arrow_code;
var arrow_clubs;
var text_block_purple;

// internship group
var office_room;
var office_desk_1;
var office_desk_2;
var office_chair;
var boss;
var boss_spritesheet;
var arrow_google;
var arrow_frontend;
var text_block_blue;

// hobbies group
var bed_room;
var bed_rug;
var stool;
var bed_chair;
var miku;
var bed;
var posters;
var light;
var laptop;
var dresser;
var table;
var game;
var arrow_anime;
var arrow_drawing;
var arrow_web_dev;
var arrow_console;
var text_block_orange;

// outro group
var outro_room;
var cake_table;

var party_goer_1_spritesheet;
var party_goer_2_spritesheet;
var party_goer_3_spritesheet;
var party_goer_4_spritesheet;
var party_goer_5_spritesheet;
var party_goer_6_spritesheet;

var party_goer_1;
var party_goer_2;
var party_goer_3;
var party_goer_4;
var party_goer_5;
var party_goer_6;
var arrow_talk;
var text_block_green;

// building flag
var building_flag;

// links
var title_page_art
var sprites_link
var soundcloud
var cc_link
var moonwalkers_link
var local_link
var billie_link
var quiet_link
var genshin_link
var zodiac_link
var wiki_link
var mta_link
var linkedin
var github
var insta

function preload() {
  // font
  pixelated_font = loadFont("Apple.ttf");
  title_font = loadFont("Adventurer.ttf");

  // music
  background_music = loadSound("Morning-Routine-Lofi-Study-Music.mp3")

  // title page
  pixel_me = createSprite(320, 320);
  pixel_me.addAnimation("pixel_me", "assets/me.png");

  // LEVEL 1 ITEMS
  tile = loadSpriteSheet("assets/tile.png", 64, 64, 5);
  dark_road = loadSpriteSheet("assets/dark_road.png", 32, 32, 4);
  tile_walkway = loadSpriteSheet("assets/tile_walkway.png", 64, 32, 3);

  b_green_sprite_sheet = loadSpriteSheet("assets/b_green.png", 192, 352, 1);
  b_salmon_sprite_sheet = loadSpriteSheet("assets/b_salmon.png", 192, 352, 1);

  b_g = createSprite(1180, 128);
  b_g.addAnimation("norm", b_green_sprite_sheet);
  // b_g.setCollider("rectangle", 0, 0, 192, 325);

  // LEVEL 2 ITEMS
  sidewalk = loadSpriteSheet("assets/sidewalk.png", 64, 64, 1);
  grass = loadSpriteSheet("assets/grass.png", 32, 32, 9);
  redstatue_sprite_sheet = loadSpriteSheet("assets/128x128.png", 288, 288, 1);
  walkway = loadSpriteSheet("assets/walkway.png", 64, 32, 4);
  road = loadSpriteSheet("assets/road.png", 64, 64, 9);
  road_corners = loadSpriteSheet("assets/road_corners.png", 64, 64, 20);

  tree = loadSpriteSheet("assets/tree.png", 64, 96, 1);
  android_sprite_sheet = loadSpriteSheet("assets/android.png", 64, 76, 1);
  metro_sprite_sheet = loadSpriteSheet("assets/metro.png", 192, 352, 1);
  laf_sprite_sheet = loadSpriteSheet("assets/laf.png", 224, 576, 1);
  b_blue_sprite_sheet = loadSpriteSheet("assets/b_blue.png", 192, 352, 1);
  b_s_sprite_sheet = loadSpriteSheet("assets/b_s.png", 192, 352, 1);
  pp_sprite_sheet = loadSpriteSheet("assets/pp_build.png", 192, 352, 1);
  b_grey_sprite_sheet = loadSpriteSheet("assets/b_grey.png", 192, 352, 1);
  b_yellow_sprite_sheet = loadSpriteSheet("assets/b_yellow.png", 192, 352, 1);

  b_blue = createSprite(1820, 128);
  b_blue.addAnimation("norm", b_blue_sprite_sheet);
  b_blue.setCollider("rectangle", 0, 0, 192, 280);

  metro = createSprite(1600, 128);
  metro.addAnimation("norm", metro_sprite_sheet);
  metro.setCollider("rectangle", 0, 0, 192, 280);

  pp_build = createSprite(1380, 128);
  pp_build.addAnimation("norm", pp_sprite_sheet);
  pp_build.setCollider("rectangle", 0, 0, 192, 280);

  android = createSprite(1742, 280);
  android.addAnimation("norm", android_sprite_sheet);

  redstatue = createSprite(1700, 500);
  redstatue.addAnimation("norm", redstatue_sprite_sheet);

  // LEVEL 3 ITEMS
  fence = loadSpriteSheet("assets/fence.png", 32, 64, 10);
  gate = loadSpriteSheet("assets/gate.png", 160, 88, 1);
  park = loadSpriteSheet("assets/park.png", 64, 64, 6);
  house_sprite_sheet = loadSpriteSheet("assets/house.png", 288, 416, 1);
  shed_sprite_sheet = loadSpriteSheet("assets/shed.png", 128, 160, 1);

  house = createSprite(2150, 160);
  house.addAnimation("norm", house_sprite_sheet);
  house.setCollider("rectangle", -15, 0, 250, 250);

  shed = createSprite(2370, 200);
  shed.addAnimation("norm", shed_sprite_sheet);
  // shed.setCollider("rectangle", -15, 0, 250, 250);

  // ROOM ITEMS
  room_sprite_sheet = loadSpriteSheet("assets/room.png", 574, 498, 1);

  intro_room = createSprite(284, 940);

  intro_room.addAnimation("norm", room_sprite_sheet);

  // room groups
  intro_group = new Group();
  pp_group = new Group();
  nyu_group = new Group();
  google_group = new Group();
  hobbies_group = new Group();
  outro_group = new Group();

  collision_group = new Group();

  // intro room
  carpet = createSprite(350, 1000);
  carpet.addAnimation("carpet", "assets/carpet.png");
  intro_group.add(carpet);

  couch = createSprite(354, 1000);
  couch.addAnimation("couch", "assets/couch.png");
  intro_group.add(couch);
  collision_group.add(couch);

  tv_stand = createSprite(354, 800);
  tv_stand.addAnimation("tv_stand", "assets/tv_stand.png");
  intro_group.add(tv_stand);
  collision_group.add(tv_stand);

  book = createSprite(300, 800);
  book.addAnimation("book", "assets/book.png");
  intro_group.add(book);
  collision_group.add(book);

  arrow = createSprite(300, 740);
  arrow.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  arrow.animation.frameDelay = 6;
  intro_group.add(arrow);

  // pp room
  pp_floor = createSprite(284, 940);
  pp_floor.addAnimation("pp_floor", "assets/pp_room.png");
  pp_group.add(pp_floor);

  mta_statue = createSprite(215, 780);
  mta_statue.addAnimation("mta_statue", "assets/mta_statue.png");
  pp_group.add(mta_statue);
  collision_group.add(mta_statue);

  zodiac_statue = createSprite(498, 780);
  zodiac_statue.addAnimation("zodiac_statue", "assets/zodiac_statue.png");
  pp_group.add(zodiac_statue);
  collision_group.add(zodiac_statue);

  billie_vase = createSprite(300, 920);
  billie_vase.addAnimation("billie_vase", "assets/billie_vase.png");
  pp_group.add(billie_vase);
  collision_group.add(billie_vase);

  quiet_vase = createSprite(350, 920);
  quiet_vase.addAnimation("quiet_vase", "assets/quiet_vase.png");
  pp_group.add(quiet_vase);
  collision_group.add(quiet_vase);

  genshin_vase = createSprite(400, 920);
  genshin_vase.addAnimation("genshin_vase", "assets/genshin_vase.png");
  pp_group.add(genshin_vase);
  collision_group.add(genshin_vase);

  wiki_painting = createSprite(310, 745);
  wiki_painting.addAnimation("wiki_painting", "assets/wiki_painting.png");
  pp_group.add(wiki_painting);
  collision_group.add(wiki_painting);

  admin_painting = createSprite(395, 745);
  admin_painting.addAnimation("admin_painting", "assets/admin_painting.png");
  pp_group.add(admin_painting);
  collision_group.add(admin_painting);

  rail = createSprite(352, 790);
  rail.addAnimation("rail", "assets/rail.png");
  pp_group.add(rail);
  collision_group.add(rail);

  local_vase = createSprite(475, 1075);
  local_vase.addAnimation("local_vase", "assets/local_vase.png");
  pp_group.add(local_vase);
  collision_group.add(local_vase);

  game_vase = createSprite(240, 1000);
  game_vase.addAnimation("game_vase", "assets/game_vase.png");
  pp_group.add(game_vase);
  collision_group.add(game_vase);

  arrow_mta = createSprite(215, 700);
  arrow_mta.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  pp_group.add(arrow_mta);
  arrow_mta.animation.frameDelay = 6;

  arrow_zodiac = createSprite(498, 700);
  arrow_zodiac.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  pp_group.add(arrow_zodiac);
  arrow_zodiac.animation.frameDelay = 6;

  arrow_wiki = createSprite(310, 680);
  arrow_wiki.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  pp_group.add(arrow_wiki);
  arrow_wiki.animation.frameDelay = 6;

  arrow_admin = createSprite(395, 680);
  arrow_admin.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  pp_group.add(arrow_admin);
  arrow_admin.animation.frameDelay = 6;

  arrow_local = createSprite(475, 990);
  arrow_local.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  pp_group.add(arrow_local);
  arrow_local.animation.frameDelay = 6;

  arrow_game = createSprite(240, 900);
  arrow_game.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  pp_group.add(arrow_game);
  arrow_game.animation.frameDelay = 6;

  arrow_billie = createSprite(300, 830);
  arrow_billie.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  pp_group.add(arrow_billie);
  arrow_billie.animation.frameDelay = 6;

  arrow_quiet = createSprite(350, 830);
  arrow_quiet.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  pp_group.add(arrow_quiet);
  arrow_quiet.animation.frameDelay = 6;

  arrow_genshin = createSprite(400, 830);
  arrow_genshin.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  pp_group.add(arrow_genshin);
  arrow_genshin.animation.frameDelay = 6;

  // nyu room
  class_room = createSprite(284, 940);
  class_room.addAnimation("class_room", "assets/class_room.png");
  nyu_group.add(class_room);

  desks = createSprite(310, 970);
  desks.addAnimation("desks", "assets/desks.png");
  nyu_group.add(desks);
  collision_group.add(desks);

  sidedesk = createSprite(500, 940);
  sidedesk.addAnimation("sidedesk", "assets/sidedesk.png");
  nyu_group.add(sidedesk);
  collision_group.add(sidedesk);

  eraser = createSprite(500, 925);
  eraser.addAnimation("eraser", "assets/eraser.png");
  nyu_group.add(eraser);
  collision_group.add(eraser);

  chair1 = createSprite(285, 1020);
  chair1.addAnimation("chair", "assets/chair.png");
  nyu_group.add(chair1);
  collision_group.add(chair1);

  chair2 = createSprite(335, 1020);
  chair2.addAnimation("chair", "assets/chair.png");
  nyu_group.add(chair2);
  collision_group.add(chair2);

  kid = createSprite(385, 990);
  kid.addAnimation("side", "assets/kid_side.png");
  kid.addAnimation("back", "assets/kid_back.png");
  kid.changeAnimation("back");
  nyu_group.add(kid);
  collision_group.add(kid);

  chair_back = createSprite(385, 1027);
  chair_back.addAnimation("chair_back", "assets/chair_back.png");
  nyu_group.add(chair_back);
  collision_group.add(chair_back);

  bookshelf = createSprite(230, 772);
  bookshelf.addAnimation("bookshelf", "assets/bookshelf.png");
  nyu_group.add(bookshelf);
  collision_group.add(bookshelf);

  teach_desk = createSprite(350, 850);
  teach_desk.addAnimation("teach_desk", "assets/teach_desk.png");
  nyu_group.add(teach_desk);
  collision_group.add(teach_desk);

  arrow_ptc = createSprite(500, 880);
  arrow_ptc.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  nyu_group.add(arrow_ptc);

  arrow_code = createSprite(230, 720);
  arrow_code.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  nyu_group.add(arrow_code);

  arrow_clubs = createSprite(385, 920);
  arrow_clubs.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  nyu_group.add(arrow_clubs);

  arrow_ptc.animation.frameDelay = 6;
  arrow_code.animation.frameDelay = 6;
  arrow_clubs.animation.frameDelay = 6;

  // internships room
  office_room = createSprite(284, 940);
  office_room.addAnimation("office_room", "assets/office_room.png");
  google_group.add(office_room);

  office_chair = createSprite(333, 775);
  office_chair.addAnimation("office_chair", "assets/office_chair.png");
  google_group.add(office_chair);
  collision_group.add(office_chair);

  boss = createSprite(310, 800);
  boss_spritesheet = loadSpriteSheet("assets/boss.png", 48, 69, 6);
  boss.addAnimation("boss", boss_spritesheet);
  google_group.add(boss);
  collision_group.add(boss);
  boss.animation.frameDelay = 6;

  office_desk_1 = createSprite(430, 970);
  office_desk_1.addAnimation("office_desk_1", "assets/office_desk_1.png");
  google_group.add(office_desk_1);
  collision_group.add(office_desk_1);

  office_desk_2 = createSprite(312, 850);
  office_desk_2.addAnimation("office_desk_2", "assets/office_desk_2.png");
  google_group.add(office_desk_2);
  collision_group.add(office_desk_2);
  office_desk_2.setCollider("rectangle", -11, -26, 230, 86);

  arrow_google = createSprite(310, 735);
  arrow_google.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  google_group.add(arrow_google);
  arrow_google.animation.frameDelay = 6;

  arrow_frontend = createSprite(450, 870);
  arrow_frontend.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  google_group.add(arrow_frontend);
  arrow_frontend.animation.frameDelay = 6;

  // hobbies room
  bed_room = createSprite(284, 940);
  bed_room.addAnimation("bed_room", "assets/bed_room.png");
  hobbies_group.add(bed_room);

  bed_rug = createSprite(350, 960);
  bed_rug.addAnimation("bed_rug", "assets/bed_rug.png");
  hobbies_group.add(bed_rug);

  stool = createSprite(220, 1020);
  stool.addAnimation("stool", "assets/stool.png");
  hobbies_group.add(stool);
  collision_group.add(stool);

  miku = createSprite(220, 995);
  miku.addAnimation("miku", "assets/miku.png");
  hobbies_group.add(miku);
  collision_group.add(miku);

  bed = createSprite(220, 820);
  bed.addAnimation("bed", "assets/bed.png");
  hobbies_group.add(bed);
  collision_group.add(bed);

  posters = createSprite(333, 750);
  posters.addAnimation("posters", "assets/posters.png");
  hobbies_group.add(posters);
  collision_group.add(posters);

  light = createSprite(217, 750);
  light.addAnimation("light", "assets/lights.png");
  hobbies_group.add(light);

  dresser = createSprite(450, 775);
  dresser.addAnimation("dresser", "assets/dresser.png");
  hobbies_group.add(dresser);
  collision_group.add(dresser);

  table = createSprite(500, 970);
  table.addAnimation("table", "assets/table.png");
  hobbies_group.add(table);
  collision_group.add(table);

  laptop = createSprite(500, 910);
  laptop.addAnimation("laptop", "assets/laptop.png");
  hobbies_group.add(laptop);
  collision_group.add(laptop);

  game = createSprite(500, 990);
  game.addAnimation("game", "assets/console.png");
  hobbies_group.add(game);
  collision_group.add(game);

  bed_chair = createSprite(500, 1080);
  bed_chair.addAnimation("bed_chair", "assets/bed_chair.png");
  hobbies_group.add(bed_chair);
  collision_group.add(bed_chair);

  arrow_anime = createSprite(220, 940);
  arrow_anime.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  hobbies_group.add(arrow_anime);
  arrow_anime.animation.frameDelay = 6;

  arrow_drawing = createSprite(325, 700);
  arrow_drawing.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  hobbies_group.add(arrow_drawing);
  arrow_drawing.animation.frameDelay = 6;

  arrow_console = createSprite(500, 940);
  arrow_console.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  hobbies_group.add(arrow_console);
  arrow_console.animation.frameDelay = 6;

  arrow_web_dev = createSprite(500, 850);
  arrow_web_dev.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  hobbies_group.add(arrow_web_dev);
  arrow_web_dev.animation.frameDelay = 6;

  // outro
  outro_room = createSprite(284, 940);
  outro_room.addAnimation("outro_room", "assets/outro_room.png");
  outro_group.add(outro_room);

  cake_table = createSprite(355, 800);
  cake_table.addAnimation("cake_table", "assets/cake_table.png");
  outro_group.add(cake_table);
  collision_group.add(cake_table);

  party_goer_1_spritesheet = loadSpriteSheet(
    "assets/party_goer_1.png",
    48,
    72,
    6
  );
  party_goer_2_spritesheet = loadSpriteSheet(
    "assets/party_goer_2.png",
    48,
    72,
    6
  );
  party_goer_3_spritesheet = loadSpriteSheet(
    "assets/party_goer_3.png",
    48,
    72,
    6
  );
  party_goer_4_spritesheet = loadSpriteSheet(
    "assets/party_goer_4.png",
    48,
    72,
    6
  );
  party_goer_5_spritesheet = loadSpriteSheet(
    "assets/party_goer_5.png",
    48,
    72,
    6
  );
  party_goer_6_spritesheet = loadSpriteSheet(
    "assets/party_goer_6.png",
    48,
    72,
    6
  );

  party_goer_1 = createSprite(353, 930);
  party_goer_1.addAnimation("party_goer_1", party_goer_1_spritesheet);
  outro_group.add(party_goer_1);
  collision_group.add(party_goer_1);

  party_goer_2 = createSprite(222, 1030);
  party_goer_2.addAnimation("party_goer_2", party_goer_2_spritesheet);
  outro_group.add(party_goer_2);
  collision_group.add(party_goer_2);

  party_goer_3 = createSprite(248, 877);
  party_goer_3.addAnimation("party_goer_3", party_goer_3_spritesheet);
  outro_group.add(party_goer_3);
  collision_group.add(party_goer_3);

  party_goer_4 = createSprite(456, 934);
  party_goer_4.addAnimation("party_goer_4", party_goer_5_spritesheet);
  outro_group.add(party_goer_4);
  collision_group.add(party_goer_4);

  party_goer_5 = createSprite(440, 984);
  party_goer_5.addAnimation("party_goer_5", party_goer_4_spritesheet);
  outro_group.add(party_goer_5);
  collision_group.add(party_goer_5);

  party_goer_6 = createSprite(273, 1025);
  party_goer_6.addAnimation("party_goer_6", party_goer_6_spritesheet);
  outro_group.add(party_goer_6);
  collision_group.add(party_goer_6);

  arrow_talk = createSprite(353, 860);
  arrow_talk.addAnimation(
    "arrow",
    "assets/arrow1.png",
    "assets/arrow2.png",
    "assets/arrow3.png",
    "assets/arrow4.png",
    "assets/arrow5.png",
    "assets/arrow6.png"
  );
  outro_group.add(arrow_talk);
  arrow_talk.animation.frameDelay = 6;

  party_goer_1.animation.frameDelay = 6;
  party_goer_2.animation.frameDelay = 6;
  party_goer_3.animation.frameDelay = 6;
  party_goer_4.animation.frameDelay = 6;
  party_goer_5.animation.frameDelay = 6;
  party_goer_6.animation.frameDelay = 6;

  // character
  char_sprite_sheet_up = loadSpriteSheet("assets/up.png", 64, 64, 9);
  char_sprite_sheet_down = loadSpriteSheet("assets/down.png", 64, 64, 9);
  char_sprite_sheet_left = loadSpriteSheet("assets/left.png", 64, 64, 9);
  char_sprite_sheet_right = loadSpriteSheet("assets/right.png", 64, 64, 9);
  char_sprite_sheet_none = loadSpriteSheet("assets/right.png", 64, 64, 1);

  c = createSprite(x, y);
  c.addAnimation("up", char_sprite_sheet_up);
  c.addAnimation("down", char_sprite_sheet_down);
  c.addAnimation("left", char_sprite_sheet_left);
  c.addAnimation("right", char_sprite_sheet_right);
  c.setCollider("rectangle", 0, 22, 20, 10);

  pixel_me.depth = c.depth + 2;

  text_block = createSprite(320, 930);
  text_block.addAnimation("text", "assets/text_block.png");
  intro_group.add(text_block);
  text_block.visible = false;

  text_block_red = createSprite(320, 930);
  text_block_red.addAnimation("text", "assets/text_block_red.png");
  pp_group.add(text_block_red);
  text_block_red.visible = false;

  text_block_purple = createSprite(320, 930);
  text_block_purple.addAnimation("text", "assets/text_block_purple.png");
  nyu_group.add(text_block_purple);
  text_block_purple.visible = false;

  text_block_blue = createSprite(320, 930);
  text_block_blue.addAnimation("text", "assets/text_block_blue.png");
  google_group.add(text_block_blue);
  text_block_blue.visible = false;

  text_block_orange = createSprite(320, 930);
  text_block_orange.addAnimation("text", "assets/text_block_orange.png");
  hobbies_group.add(text_block_orange);
  text_block_orange.visible = false;

  text_block_green = createSprite(320, 930);
  text_block_green.addAnimation("text", "assets/text_block_green.png");
  outro_group.add(text_block_green);
  text_block_green.visible = false;

  text_block_pink = createSprite(320, 320);
  text_block_pink.addAnimation("text", "assets/text_block_pink.png");
  text_block_pink.visible = false;
}
function setup() {
  createCanvas(640, 640);
  var i, j;
}
function draw() {
  background(255);

  // change font
  textFont(pixelated_font);

  // render all screens

  // change camera based on character position
  if (c.position.x <= 640) {
    camera.position.x = TITLE;
  } else if (c.position.x <= 1280) {
    camera.position.x = LEVEL_1;
    render_level_1();
  } else if (c.position.x <= 1920) {
    camera.position.x = LEVEL_2;
    render_level_2();
  } else if (c.position.x <= 2560) {
    camera.position.x = LEVEL_3;
    render_level_3();
  }
  // camera.position.y = LEVEL_HEIGHT;

  render_character();
  collision_check();

  var h = camera.position.x + mouseX - 320;
  var w = camera.position.y + mouseY - 320;
  drawSprites(); // draws all sprites, no need for animation()

  text_directions();
}
function mouseClicked() { // UI to bypass Chrome autoplay restrictions
  if (music_off) {
    music_off = false
    background_music.loop()
  }
}
function collision_check() {
  r_end = x >= 2550; // end of map
  l_end = x <= 16;

  // room boxes
  box1 = x >= 0 && x <= 195 && y >= 640 && y <= 1073;
  box2 = x >= 187 && x < 527 && y >= 640 && y <= 790;
  box3 = x >= 515 && x <= 640 && y >= 640 && y <= 1280;
  box4 = x >= 0 && x <= 527 && y >= 1135 && y <= 1280;

  // fence boxes
  box5 = x >= 1970 && x <= 1990 && y >= 120 && y <= 542; // can't move left
  box5pt2 = x >= 2000 && x <= 2017 && y >= 120 && y <= 542; // can't move right
  box6 = x >= 1920 && x <= 2560 && y >= 0 && y <= 160; // can't go up
  box7 = x >= 2462 && x <= 2487 && y >= 0 && y <= 480; // can't go right
  box7pt2 = x >= 2490 && x <= 2509 && y >= 0 && y <= 480; // can't go left
  box8 = x >= 2160 && x <= 2478 && y >= 400 && y <= 450; // can't go down
  box8pt2 = x >= 2160 && x <= 2478 && y >= 460 && y <= 480; // can't go up
  box9 = x >= 2148 && x <= 2158 && y >= 435 && y <= 542; // can't go right
  box9pt2 = x >= 2168 && x <= 2188 && y >= 435 && y <= 542; // can't go left

  // end
  box10 = x <= 656 && y >= 0 && y <= 640;

  // IF THESE VALUES EXIST, CHARACTER CANNOT MOVE
  cannot_move_x_right = box3 || r_end || box7 || box9 || box5;
  cannot_move_x_left = box1 || l_end || box5pt2 || box7pt2 || box9pt2 || box10;
  cannot_move_y_up = box1 || box2 || box6 || box8pt2;
  cannot_move_y_down = box4 || box8;

  //check collide boxes when mouse pressed
  // metro.debug = mouseIsPressed;
  // pp_build.debug = mouseIsPressed;
  // b_blue.debug = mouseIsPressed;
  // redstatue.debug = mouseIsPressed;
  // b_g.debug = mouseIsPressed;
  // c.debug = mouseIsPressed;
  // house.debug = mouseIsPressed;
  // shed.debug = mouseIsPressed;
  // for (i = 0; i < collision_group.length; i++) {
  //   collision_group[i].debug = mouseIsPressed;
  // }

  // change depth
  redstatue.depth = c.depth + 1;

  // makes buildings immovable
  metro.immovable = true;
  pp_build.immovable = true;
  b_blue.immovable = true;
  redstatue.immovable = true;
  b_g.immovable = true;
  house.immovable = true;
  shed.immovable = true;
  // room.immovable = true;

  // collisions
  c.collide(metro);
  c.collide(b_g);
  c.collide(pp_build);
  c.collide(b_blue);
  c.collide(house);
  c.collide(shed);
  var collision = c.collide(collision_group);
  // var collision = false;
  // c.collide(room);

  var m = metro.overlapPoint(c.position.x, c.position.y + 10);
  var g = b_g.overlapPoint(c.position.x, c.position.y + 10);
  var p = pp_build.overlapPoint(c.position.x, c.position.y + 10);
  var b = b_blue.overlapPoint(c.position.x, c.position.y + 10);
  var h = house.overlapPoint(c.position.x, c.position.y + 10);
  var s = shed.overlapPoint(c.position.x, c.position.y + 10);

  // var gr = room.overlapPoint(c.position.x, c.position.y + 10);

  if ((m || g || p || b || h || s || collision) == false) {
    // if nothing is colliding
    return false;
  } else if (m || g || p || b || h || s || collision) {
    // if any collision
    return true;
  }
}
function render_character() {
  // updates x & y when keys r pressed
  c.position.x = x;
  c.position.y = y;

  // controls character
  if (keyIsPressed) {
    if (keyCode === LEFT_ARROW || keyCode === 65) {
      c.changeAnimation("left");
      c.animation.play();

      if (!cannot_move_x_left && !collision_check()) {
        x -= 7;
      }
    } else if (keyCode === RIGHT_ARROW || keyCode === 68) {
      c.changeAnimation("right");
      c.animation.play();

      if (!cannot_move_x_right && !collision_check()) {
        x += 7;
      }
    } else if (keyCode === DOWN_ARROW || keyCode === 83) {
      c.changeAnimation("down");
      c.animation.play();

      if (!cannot_move_y_down) {
        y += 7;
      }
    } else if (keyCode === UP_ARROW || keyCode === 87) {
      c.changeAnimation("up");
      c.animation.play();

      if (!cannot_move_y_up && !collision_check()) {
        y -= 7;
      }
    }
    preclick = false;
  } else {
    if (preclick) {
      // setup position, before starting to play/move
      c.changeAnimation("right");
    }
    c.animation.stop();
  }
}
function render_level_1() {
  var i, j;

  //sidewalk
  for (i = 640; i <= 1280; i += 64) {
    for (j = 0; j <= 600; j += 64) {
      tile.drawFrame(0, i, j);
    }
  }

  // middle of road
  for (i = 640; i <= 1280; i += 32) {
    dark_road.drawFrame(1, i, 352);
    dark_road.drawFrame(3, i, 384);
    dark_road.drawFrame(3, i, 416);
    dark_road.drawFrame(2, i, 432);
    dark_road.drawFrame(3, i, 464);
    dark_road.drawFrame(3, i, 496);
    dark_road.drawFrame(0, i, 512);
  }

  // walkway
  for (j = 352; j <= 512; j += 32) {
    if (j == 352) {
      tile_walkway.drawFrame(0, 864, j);
    } else if (j == 512) {
      tile_walkway.drawFrame(1, 864, j);
    } else {
      tile_walkway.drawFrame(2, 864, j);
    }
  }

  // HOW TO + INTRO
  push();
  textAlign(CENTER);
  textSize(18);

  text("WELCOME TO BAELUL'S", 870, 48);
  text("PLAYABLE RESUME!", 870, 70);
  textSize(12);

  text("Explore Baelul's academic and", 870, 90);
  text("technical life as a student.", 870, 110);
  textSize(14);

  text("HOW TO PLAY", 870, 140);

  textSize(12);

  text("Use the arrow keys or WASD to", 870, 160);
  text("move the character, me!", 870, 180);
  text("When you get to the door of a", 870, 210);
  text("buidling, you will be prompted to", 870, 230);
  text("press ENTER. Do so to learn", 870, 250);
  text("about different parts of my life.", 870, 270);
  text("Try it! ->", 870, 300);

  pop();

  // lvl pointers
  text("experience ->", 1100, 600);
}
function render_level_2() {
  var i, j;

  //sidewalk
  for (i = 1280; i <= 1888; i += 64) {
    for (j = 0; j <= 600; j += 64) {
      sidewalk.drawFrame(0, i, j);
    }
  }

  // middle of road
  for (i = 1280; i <= 1856; i += 64) {
    road_corners.drawFrame(11, i, 352);
    road.drawFrame(1, i, 416);
    road_corners.drawFrame(16, i, 480);
  }

  // walkway
  for (j = 352; j <= 512; j += 32) {
    if (j == 352) {
      walkway.drawFrame(0, 1504, j);
    } else if (j == 512) {
      walkway.drawFrame(3, 1504, j);
    } else {
      walkway.drawFrame(1, 1504, j);
    }
  }

  for (i = 1280; i <= 1888; i += 32) {
    for (j = 0; j <= 96; j += 32) {
      grass.drawFrame(4, i, j);
    }
    grass.drawFrame(7, i, 128);
  }

  // trees
  for (i = 1280; i <= 1888; i += 50) {
    for (j = -128; j <= 16; j += 48) {
      tree.drawFrame(0, i, j);
    }
  }

  // lvl pointers
  text("<- intro", 1300, 600);
  text("hobbies ->", 1780, 600);

  if (
    pp_build.overlapPoint(c.position.x, c.position.y) ||
    metro.overlapPoint(c.position.x, c.position.y) ||
    b_blue.overlapPoint(c.position.x, c.position.y)
  ) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("Press ENTER", 1600, 600);
    pop();
  }
}
function render_level_3() {
  //sidewalk
  for (i = 1920; i <= 2560; i += 64) {
    for (j = 0; j <= 600; j += 64) {
      tile.drawFrame(0, i, j);
    }
  }

  // land
  for (i = 1984; i <= 2448; i += 64) {
    for (j = 144; j <= 432; j += 64) {
      park.drawFrame(4, i, j);

      if (i == 2368 && j == 336) {
        park.drawFrame(3, i, j);
      }

      if (i == 2304 && j == 208) {
        park.drawFrame(3, i, j);
      }

      if (i == 2048 && j == 400) {
        park.drawFrame(2, i, j);
      }
      if (i == 2432 && j == 144) {
        park.drawFrame(2, i, j);
      }
    }
  }

  // gate sec
  park.drawFrame(4, 1984, j);
  park.drawFrame(4, 2048, j);
  park.drawFrame(4, 2112, j);
  park.drawFrame(4, 1984, j + 16);
  park.drawFrame(4, 2048, j + 16);
  park.drawFrame(4, 2112, j + 16);

  // road
  for (i = 1920; i <= 2560; i += 32) {
    dark_road.drawFrame(3, i, 0);
    dark_road.drawFrame(2, i, 32);
    dark_road.drawFrame(0, i, 64);
  }

  // fence
  for (i = 2016; i <= 2432; i += 32) {
    fence.drawFrame(2, i, 96);
  }

  fence.drawFrame(0, 1984, 96);
  fence.drawFrame(3, 2464, 96);

  for (j = 160; j <= 384; j += 64) {
    fence.drawFrame(4, 1984, j);
    fence.drawFrame(5, 2464, j);
  }

  fence.drawFrame(8, 1984, 480);
  fence.drawFrame(4, 1984, 416);
  fence.drawFrame(6, 2464, 416);

  for (i = 2016; i <= 2432; i += 32) {
    if (i > 2144) {
      fence.drawFrame(7, i, 416);
    } else if (i == 2144) {
      fence.drawFrame(0, i + 13, 416);
      fence.drawFrame(6, i, 480);
    } else if (i >= 2016 && i <= 2112) {
      continue;
    } else {
      fence.drawFrame(7, i, 480);
    }

    gate.drawFrame(0, 2000, 456);

    // lvl pointers
    text("<- experience", 1940, 600);

    if (
      house.overlapPoint(c.position.x, c.position.y) ||
      shed.overlapPoint(c.position.x, c.position.y)
    ) {
      push();
      textAlign(CENTER);
      textSize(15);
      text("Press ENTER", 2240, 600);
      pop();
    }
  }
}
function text_directions() {
  if (
    camera.position.x == TITLE &&
    camera.position.y == 320 &&
    text_block_pink.visible == false
  ) {
    push();
    textAlign(CENTER);
    fill(255);

    textSize(20);
    text("Press ENTER to", 320, 500);
    text("start game!", 320, 530);
    textFont(title_font);

    textSize(70);
    text("Baelul's", 320, 130);
    text("Playable Resume", 320, 210);
    pop();
  } else if (b_g.overlapPoint(c.position.x, c.position.y)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("Press ENTER", 960, 600);
    pop();
  } else if (book.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("READ BOOK", 320, 1240);
    pop();
  } else if (x <= 18 && y >= 1073 && y <= 1135) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("GO BACK", 320, 1240);
    pop();
  }

  if (kid.overlapPoint(c.position.x - 50, c.position.y)) {
    kid.changeAnimation("side");
  } else {
    kid.changeAnimation("back");
  }

  if (kid.overlapPoint(c.position.x - 50, c.position.y)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("TALK TO STUDENT", 320, 1240);
    pop();
  } else if (
    eraser.overlapPoint(c.position.x, c.position.y - 30) ||
    eraser.overlapPoint(c.position.x + 30, c.position.y)
  ) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("OPEN NOTEBOOK", 320, 1240);
    pop();
  } else if (bookshelf.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("GRAB TEXTBOOK", 320, 1240);
    pop();
  } else if (office_desk_1.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("LOOK AT COMPUTER", 320, 1240);
    pop();
  } else if (office_desk_2.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("TALK TO BOSS", 320, 1240);
    pop();
  } else if (
    miku.overlapPoint(c.position.x, c.position.y - 30) ||
    miku.overlapPoint(c.position.x - 30, c.position.y)
  ) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("LOOK AT FIGURINE", 320, 1240);
    pop();
  } else if (laptop.overlapPoint(c.position.x + 30, c.position.y)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("LOOK AT LAPTOP", 320, 1240);
    pop();
  } else if (game.overlapPoint(c.position.x + 30, c.position.y)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("PLAY GAME", 320, 1240);
    pop();
  } else if (posters.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("LOOK AT POSTERS", 320, 1240);
    pop();
  } else if (mta_statue.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("ADMIRE STATUE", 320, 1240);
    pop();
  } else if (zodiac_statue.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("ADMIRE STATUE", 320, 1240);
    pop();
  } else if (
    local_vase.overlapPoint(c.position.x, c.position.y - 30) ||
    local_vase.overlapPoint(c.position.x + 30, c.position.y)
  ) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("EXAMINE VASE", 320, 1240);
    pop();
  } else if (quiet_vase.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("EXAMINE VASE", 320, 1240);
    pop();
  } else if (billie_vase.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("EXAMINE VASE", 320, 1240);
    pop();
  } else if (
    game_vase.overlapPoint(c.position.x, c.position.y - 30) ||
    game_vase.overlapPoint(c.position.x - 30, c.position.y)
  ) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("EXAMINE VASE", 320, 1240);
    pop();
  } else if (
    genshin_vase.overlapPoint(c.position.x, c.position.y - 30) ||
    genshin_vase.overlapPoint(c.position.x - 30, c.position.y)
  ) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("EXAMINE VASE", 320, 1240);
    pop();
  } else if (wiki_painting.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("ANALYZE PAINTING", 320, 1240);
    pop();
  } else if (admin_painting.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("ANALYZE PAINTING", 320, 1240);
    pop();
  } else if (party_goer_1.overlapPoint(c.position.x, c.position.y - 30)) {
    push();
    textAlign(CENTER);
    textSize(15);
    text("TALK", 320, 1240);
    pop();
  }

  if (text_block.visible == true) {
    push();
    textAlign(CENTER);
    textSize(18);
    text("INTRODUCTION", 320, 760);

    textSize(12);
    text("Hi! My name is Baelul Haile", 320, 800);
    text("(bay-loo high-lay), and", 320, 820);
    text("welcome to my game!", 320, 840);

    text("I am Eritrean-American and I", 320, 870);
    text("am 20 years old. I am a rising", 320, 890);
    text("senior at NYU majoring in Computer", 320, 910);
    text("Science and double minoring in Game", 320, 930);
    text("Engineering and Integrated Design", 320, 950);
    text("& Media. I am passionate about all", 320, 970);
    text("the aspects of both web/mobile app", 320, 990);
    text("development and game design, but I", 320, 1010);
    text("also want to learn about visual", 320, 1030);
    text("and UX/UI design. My fav artists are", 320, 1050);
    text("Billie Eilish and Amine, and I like", 320, 1070);
    text("to explore and thrift in my free time.", 320, 1090);
    text("Press ENTER to close", 320, 1120);

    pop();
  } else if (text_block_purple.visible == true) {
    if (kid.overlapPoint(c.position.x - 30, c.position.y)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("CLUBS/ACTIVITIES", 320, 760);

      textSize(12);
      text("At NYU, I've been given the", 320, 790);
      text("chance to involve myself in", 320, 810);
      text("many different communities.", 320, 830);

      text("For starters, I am the VP of", 320, 850);
      text("the Ethiopian Eritrean Student", 320, 870);
      text("Association, which I deeply", 320, 890);
      text("value, as I am Eritrean. In", 320, 910);
      text("addition, I was an NYU Welcome", 320, 930);
      text("Leader, tasked with running", 320, 950);
      text("Welcome Week events for incoming", 320, 970);
      text("students. I'll be a Welcome", 320, 990);
      text("Captain next year! Finally,", 320, 1010);
      text("I am also a member of the", 320, 1030);
      text("National Society of", 320, 1050);
      text("Black Engineers (NSBE).", 320, 1070);
      text("Press ENTER to close", 320, 1100);

      pop();
    } else if (
      eraser.overlapPoint(c.position.x, c.position.y - 30) ||
      eraser.overlapPoint(c.position.x + 30, c.position.y)
    ) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("WORK - PTC", 320, 760);

      textSize(12);
      text("Throughout my junior year,", 320, 790);
      text("I've maintained a job on", 320, 810);
      text("campus. I work at the PTC.", 320, 830);

      text("The PTC is the Polytechnic", 320, 850);
      text("Tutoring Center at Tandon.", 320, 870);
      text("I work at the front desk.", 320, 890);
      text("Not only do I aide the", 320, 910);
      text("director in assisting students,", 320, 930);
      text("taking phone calls and", 320, 950);
      text("scheudling appointments,", 320, 970);
      text("but I also get to design", 320, 990);
      text("promotional slides for", 320, 1010);
      text("the PTC! Also, I have to", 320, 1030);
      text("familiarize myself with", 320, 1050);
      text("the database used, AccuSQL.", 320, 1070);
      text("Press ENTER to close", 320, 1100);

      pop();
    } else if (bookshelf.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("COURSEWORK/LANGUAGES", 320, 760);

      textSize(14);
      text("COURSES", 320, 790);

      textSize(12);
      text("Intro to Programming (Python)", 320, 810);
      text("Data Structures (Python)", 320, 830);
      text("OOP (C++)", 320, 850);
      text("Comp Arch (Assembly, C++)", 320, 870);
      text("Algorithms", 320, 890);
      text("Game Programming (OpenGL,", 320, 910);
      text("SDL, C++)", 320, 930);
      text("Computer Security (Python", 320, 950);
      text("Computer Security (Python, Repy V2)", 320, 970);
      text("Intro to OS (C)", 320, 990);
      text("Intro to Web Dev (HTML,", 320, 1010);
      text("CSS, Javascript)", 320, 1030);
      text("Creative Coding (p5.js)", 320, 1050);
      text("Visual Foundations (Adobe", 320, 1070);
      text("Illustrator and Indesign)", 320, 1090);
      text("Press ENTER to close", 320, 1150);

      pop();
    }
  } else if (text_block_blue.visible == true) {
    if (office_desk_1.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("MYINFLUENCY", 320, 760);

      textSize(12);
      text("There's not too much", 320, 800);
      text("to say about this, since", 320, 820);
      text("I haven't started yet.", 320, 840);

      text("I just got an internship", 320, 870);
      text("with MyInfluency, a startup", 320, 890);
      text("devoted to connecting small", 320, 910);
      text("businesses to influencers!", 320, 930);
      text("I was just hired as an unpaid", 320, 950);
      text("Front End Development Intern, and", 320, 970);
      text("I will be using my skills in,", 320, 990);
      text("Javascript, HTML, CSS, and", 320, 1010);
      text("other front end tools to", 320, 1030);
      text("help the company grow.", 320, 1050);
      text("Press ENTER to close", 320, 1100);

      pop();
    } else if (office_desk_2.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("GOOGLE", 320, 760);

      textSize(12);
      text("I was a Google intern for", 320, 800);
      text("two summers, Summer 2020", 320, 820);
      text("and Summer 2021.", 320, 840);

      text("I worked remotely both years", 320, 870);
      text("with a team of other interns", 320, 890);
      text("and Google software engineers", 320, 910);
      text("to complete training and a", 320, 930);
      text("project after 12 weeks. I", 320, 950);
      text("learned a tremendous amount of", 320, 970);
      text("information. Some of it wasn't", 320, 990);
      text("just technical. Since this", 320, 1010);
      text("internship was my first real job,", 320, 1030);
      text("I also learned a lot about working.", 320, 1050);
      text("Press ENTER to close", 320, 1100);

      pop();
    }
  } else if (text_block_orange.visible == true) {
    if (
      miku.overlapPoint(c.position.x, c.position.y - 30) ||
      miku.overlapPoint(c.position.x - 30, c.position.y)
    ) {
      // anime
      push();
      textAlign(CENTER);
      textSize(18);
      text("ANIME", 320, 760);

      textSize(12);
      text("(I know Miku isn't from", 320, 800);
      text("an anime, she just looked cool)", 320, 820);

      text("I am a huge anime fan, my all", 320, 850);
      text("time favorite being Jujutsu", 320, 870);
      text("Kaisen. I got really into anime", 320, 890);
      text("during quarantine, and ever since", 320, 910);
      text("I've been a huge nerd about it.", 320, 930);
      text("Not only is it just fun to watch,", 320, 950);
      text("but it was also the reason I started", 320, 970);
      text("drawing again!", 320, 990);
      text("Right now, my current favorite", 320, 1010);
      text("shows are Jojo's Bizzare", 320, 1030);
      text("Adventures and Spy x Family", 320, 1050);
      text("Press ENTER to close", 320, 1100);

      pop();
    } else if (laptop.overlapPoint(c.position.x + 30, c.position.y)) {
      // web dev
      push();
      textAlign(CENTER);
      textSize(18);
      text("WEB DEV", 320, 760);

      textSize(12);
      text("Ever since I was a sophomore", 320, 800);
      text("in high school I have been", 320, 820);
      text("interested in web dev", 320, 840);

      text("I started out with Tumblr in", 320, 870);
      text("2016, where I ran a blog devoted", 320, 890);
      text("to my favorite game at the time:", 320, 910);
      text("the Sims 4. I was able to tweak", 320, 930);
      text("my blog very specifically with,", 320, 950);
      text("code so I started to pick up a", 320, 970);
      text("little HTML. Ever since, I", 320, 990);
      text("have been obsessed with", 320, 1010);
      text("making websites. I also love", 320, 1030);
      text("exploring the intersectionality", 320, 1050);
      text("of web dev, gaming,and graphic", 320, 1070);
      text("design (ex: this game!)", 320, 1090);
      text("Press ENTER to close", 320, 1140);

      pop();
    } else if (game.overlapPoint(c.position.x + 30, c.position.y)) {
      //gaming
      push();
      textAlign(CENTER);
      textSize(18);
      text("GAMING", 320, 760);

      textSize(12);
      text("While I'm not the biggest", 320, 800);
      text("gamer, I do indulge every", 320, 820);
      text("now and then in a good game.", 320, 840);

      text("I am a huge Genshin Impact player,", 320, 870);
      text("which is a beautiful RPG gacha", 320, 890);
      text("game (I main Yanfei and Kazuha).", 320, 910);
      text("I also really love the Sims 4,", 320, 930);
      text("I enjoy being able to play God (LOL).", 320, 950);
      text("My gaming hobby started out as a", 320, 970);
      text("kid playing Minecraft and", 320, 990);
      text("watching gaming Youtubers like", 320, 1010);
      text("SkyDoesMinecraft, StampyLongHead", 320, 1030);
      text("and PewDiePie. This is what", 320, 1050);
      text("got me into game engineering!", 320, 1070);
      text("Press ENTER to close", 320, 1140);

      pop();
    } else if (posters.overlapPoint(c.position.x, c.position.y - 30)) {
      // drawing
      push();
      textAlign(CENTER);
      textSize(18);
      text("DRAWING", 320, 760);

      textSize(12);
      text("I started drawing in quarantine", 320, 800);
      text("and I'm so glad I did.", 320, 820);
      text("I love to draw!", 320, 840);

      text("At home, I have a countless", 320, 870);
      text("amount of copic markers, sketch pads,", 320, 890);
      text("pencils and pens from the times when", 320, 910);
      text("I would draw almost everyday. I like", 320, 930);
      text("to say I'm pretty good, but I don't", 320, 950);
      text("see anything coming of it; just a fun", 320, 970);
      text("hobbie I have. I decorated every inch", 320, 990);
      text("of my bedroom wall with drawings, and", 320, 1010);
      text("now whenever I walk in, I am welcomed", 320, 1030);
      text("with a rainbow of colors. Just the", 320, 1050);
      text("sign of the wall inspiries me to", 320, 1070);
      text("draw more frequently", 320, 1090);
      text("Press ENTER to close", 320, 1140);

      pop();
    }
  } else if (text_block_red.visible == true) {
    if (mta_statue.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("FIND JFK FROM JAY ST", 320, 760);

      textSize(14);
      text("VISUAL FOUNDATIONS (VFS)", 320, 780);

      textSize(12);

      text("Used Adobe Creative Suite,", 320, 820);
      text("specifically Adobe InDesign", 320, 840);

      text("The A train can get difficult,", 320, 870);
      text("especially when trying to get to", 320, 890);
      text("the JFK airport. This assignment", 320, 910);
      text("asks for some sort of signage, telling", 320, 930);
      text("foreigners and travelers how to get", 320, 950);
      text("to JFK airport from Jay Street -", 320, 970);
      text("MetroTech, which is the subway stop", 320, 990);
      text("closest to campus.", 320, 1010);
      text("Press ENTER to close", 320, 1100);

      pop();
    } else if (zodiac_statue.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("ZODIAC PLACEMAT", 320, 760);

      textSize(14);
      text("VISUAL FOUNDATIONS (VFS)", 320, 780);

      textSize(12);

      text("Used Adobe Creative Suite,", 320, 820);
      text("specifically Adobe InDesign", 320, 840);

      text("Have you ever seen a placemat of", 320, 870);
      text("the Chinese Zodiac on the tables of", 320, 890);
      text("a traditional restaraunt? This ", 320, 910);
      text("assignment it to recreate your own!", 320, 930);
      text("I made up a zodiac based on Genshin", 320, 950);
      text("Impact. Each sign corresponds to a", 320, 970);
      text("certain character. For example, as", 320, 990);
      text("a Cancer, I am Barbara!", 320, 1010);
      text("Press ENTER to close", 320, 1120);

      pop();
    } else if (
      local_vase.overlapPoint(c.position.x, c.position.y - 30) ||
      local_vase.overlapPoint(c.position.x + 30, c.position.y)
    ) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("LOCAL", 320, 760);

      textSize(14);
      text("GOOGLE CSSI (pre-college)", 320, 780);

      textSize(12);

      text("Used Python, HTML/CSS, Java", 320, 820);
      text("Javascript and YAML.", 320, 840);

      text("Create a website that brings", 320, 870);
      text("together travelers who wish to", 320, 890);
      text("experience the world by placing", 320, 910);
      text("them directly into a local's shoes", 320, 930);
      text(" navigating an unfamiliar area with", 320, 950);
      text("someone who knows it best.", 320, 970);
      text("Press ENTER to close", 320, 1100);

      pop();
    } else if (quiet_vase.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("QUIET", 320, 760);

      textSize(14);
      text("INTRO TO WEB DEV", 320, 780);

      textSize(12);

      text("Used HTML, CSS", 320, 820);
      text("and Javascript.", 320, 840);

      text("Created a website to advertise", 320, 870);
      text("a fake event inspired by a Big", 320, 890);
      text("Brother-esque art piece and experiment", 320, 910);
      text("run by Josh Harris called 'Quiet: We", 320, 930);
      text("Live In Public.' The advertising used", 320, 950);
      text("was inspired by Fyre Festival, an event", 320, 970);
      text("falsely advertised in 2017.", 320, 990);
      text("Press ENTER to close", 320, 1100);

      pop();
    } else if (billie_vase.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("BILLIE EILISH FANSITE", 320, 760);

      textSize(14);
      text("INTRO TO WEB DEV", 320, 780);

      textSize(12);

      text("Used HTML, CSS", 320, 820);
      text("and Javascript.", 320, 840);

      text("This is an older site of mine,", 320, 870);
      text("but the concept is simple.", 320, 890);
      text("I created a sort of a 'fan site'", 320, 910);
      text("for a class assignment. It is", 320, 930);
      text("simply a page describing Billie", 320, 950);
      text("Eilish and her career throughout the", 320, 970);
      text("years. It's also mobile friendly!", 320, 990);
      text("Press ENTER to close", 320, 1100);

      pop();
    } else if (
      game_vase.overlapPoint(c.position.x, c.position.y - 30) ||
      game_vase.overlapPoint(c.position.x - 30, c.position.y)
    ) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("MOON WALKERS", 320, 760);

      textSize(14);
      text("INTRO TO GAME PROGRAMMING", 320, 780);

      textSize(12);

      text("Used XCode, C++ and C, the", 320, 820);
      text("Simple DirectMedia Layer and OpenGL", 320, 840);

      text("In the game Moon Walkers, the user,", 320, 870);
      text("an astronaut, but find their way ", 320, 890);
      text("through an abandon spaceship, looking for", 320, 910);
      text("keys in each room and avoiding enemies", 320, 930);
      text("lurking behind. The goal is to gain", 320, 950);
      text("access to all three rooms and make it", 320, 970);
      text("through the spaceship alive. The game", 320, 990);
      text("consists of a menu screen, three levels,", 320, 1010);
      text("AI, music, and sound effects.", 320, 1030);
      text("Press ENTER to close", 320, 1100);

      pop();
    } else if (
      genshin_vase.overlapPoint(c.position.x, c.position.y - 30) ||
      genshin_vase.overlapPoint(c.position.x - 30, c.position.y)
    ) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("GENSHIN CHARACTER PAGE", 320, 760);

      textSize(14);
      text("INTRO TO WEB DEV", 320, 780);

      textSize(12);

      text("Used HTML, CSS,", 320, 820);
      text("and Javascript", 320, 840);

      text("Another page that is slightly older.", 320, 870);
      text("This page also has a simple concept;", 320, 890);
      text("a page showcasing different playable .", 320, 910);
      text("characters in the game, along with a ", 320, 930);
      text("few facts about them. I made this not ", 320, 950);
      text("only because I really enjoy this game, ", 320, 970);
      text("but also because I wanted to try out", 320, 990);
      text("some features I had been learning about", 320, 1010);
      text(" in class, specifically the feature where ", 320, 1030);
      text("the cards fade into view when", 320, 1050);
      text("scrolling on the screen", 320, 1070);
      text("Press ENTER to close", 320, 1120);

      pop();
    } else if (wiki_painting.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("WIKILOOP CIVILITY CHECK", 320, 760);

      textSize(14);
      text("GOOGLE (STEP INTERN)", 320, 780);

      textSize(12);

      text("Used Java and Javascript, Github, Linux", 320, 820);
      text("/UNIX scripting and the Perspective API", 320, 840);

      text("Worked with an intern pod of three,", 320, 870);
      text(" s well as two Google Engineers,", 320, 890);
      text("during the pandemic. Create a project", 320, 910);
      text("called Wikiloop CivilityCheck that", 320, 930);
      text("analyzes Wikipedia comments for toxicity", 320, 950);
      text("and displays a report to editors and", 320, 970);
      text("moderators. using the site. Learned", 320, 990);
      text("both frontend and backend coding.", 320, 1010);
      text("Due to the pandemic,", 320, 1030);
      text("I worked from home.", 320, 1050);
      text("Press ENTER to close", 320, 1150);

      pop();
    } else if (admin_painting.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("REMOVING ADMIN ROLE FROM", 320, 760);
      text("JOINED MEMBERSHIPS", 320, 780);

      textSize(14);
      text("GOOGLE (STEP INTERN)", 320, 800);

      textSize(12);

      text("Used Java and Google internal tools,", 320, 820);
      text("such as an IDE and code checker.", 320, 840);

      text("Worked closely with another intern,", 320, 870);
      text("as well as two Google Engineers,", 320, 890);
      text("during the pandemic. Create a project", 320, 910);
      text("involving Google Chat that removes", 320, 930);
      text("the ADMIN role from joined memberships", 320, 950);
      text("and deletes all existing roles from the", 320, 970);
      text("storage system. Due to the pandemic,", 320, 990);
      text("I worked from home.", 320, 1010);
      text("Press ENTER to close", 320, 1120);

      pop();
    }
  } else if (text_block_green.visible == true) {
    if (party_goer_1.overlapPoint(c.position.x, c.position.y - 30)) {
      push();
      textAlign(CENTER);
      textSize(18);
      text("THANKS FOR PLAYING!", 320, 760);

      textSize(12);
      text("Hope you enjoyed!", 320, 800);
      text("I've put a lot of", 320, 820);
      text("work into this game.", 320, 840);

      text("Let me know if you have any", 320, 870);
      text("suggestions or comments, or if", 320, 890);
      text("you just want to say hi!", 320, 910);
      textSize(14);

      text("MY CONTACT INFO", 320, 940);
      textSize(12);

      text("Linkedin: linkedin.com/in/baelul/", 320, 960);
      text("Github: github.com/baelul", 320, 980);
      text("Email: hailebaelul@gmail.com", 320, 1000);
      text("Follow me on Insta!", 320, 1030);
      text("@baelulhaile", 320, 1050);
      text("Press ENTER to close", 320, 1110);

      pop();
    }
  } else if (text_block_pink.visible == true && block_count == 0) {
    push();
    textAlign(CENTER);
    textSize(18);
    text("DISCLAIMER!", 320, 160);

    textSize(12);
    text("This is still a very new game,", 320, 200);
    text("developed in under 2 weeks. There are", 320, 220);
    text("a few bugs to watch out for.", 320, 240);

    text("When you touch an object, you may", 320, 260);
    text("find yourself stuck. In this case,", 320, 280);
    text("always go down. Collisions stop", 320, 300);
    text("movement in the up, left, and right", 320, 320);
    text("directions. I am currently looking", 320, 340);
    text("for a better solution to this.", 320, 360);
    text("Enjoy!", 320, 440);

    text("Press ENTER to continue", 320, 520);

    pop();
  } else if (text_block_pink.visible == true && block_count == 1) {
    push();

    textAlign(CENTER);
    textSize(18);
    text("CREDIT", 320, 160);

    textSize(12);
    text("TITLE PAGE ART:", 320, 200);
    text("twitter.com/ponchopilgrim", 320, 220);
    text("SPRITES/SPRITESHEETS:", 320, 240);
    text("limezu.itch.io/", 320, 260);

    text("MUSIC:", 320, 280);
    text("Morning Routine by Ghostrifter", 320, 300);
    text("Ghostrifter Official", 320, 320);
    text("soundcloud.com/ghostrifter-official", 320, 340);
    text("Creative Commons CC BY-SA 3.0", 320, 360);
    text("creativecommons.org/licenses/by-sa/3.0", 320, 380);
    text("Press ENTER to continue", 320, 520);

    pop();
  }
}
function turnOffGroups() {
  for (i = 0; i < collision_group.length; i++) {
    collision_group[i].visible = false;
    collision_group[i].setCollider("rectangle", -640, 0, 0, 0);
  }

  for (i = 0; i < intro_group.length; i++) {
    intro_group[i].visible = false;
  }

  for (i = 0; i < pp_group.length; i++) {
    pp_group[i].visible = false;
  }

  for (i = 0; i < nyu_group.length; i++) {
    nyu_group[i].visible = false;
  }

  for (i = 0; i < google_group.length; i++) {
    google_group[i].visible = false;
  }

  for (i = 0; i < hobbies_group.length; i++) {
    hobbies_group[i].visible = false;
  }

  for (i = 0; i < outro_group.length; i++) {
    outro_group[i].visible = false;
  }
}
function resetGroup(group) {
  for (i = 0; i < group.length; i++) {
    group[i].visible = true;
    group[i].setDefaultCollider();
    if (group == google_group) {
      office_desk_1.setCollider("rectangle", 5, -25, 180, 90);
      office_desk_2.setCollider("rectangle", -11, -26, 230, 86);
    }
  }
}
function keyPressed() {
  if (keyCode === 13) {
    if (x >= 0 && x <= 640 && y >= 0 && y <= 640) {
      if (text_block_pink.visible == false) {
        text_block_pink.visible = true;
      } else {
        if (block_count == 0) {
          block_count += 1;
        } else {
          text_block_pink.visible = false;
          pixel_me.visible = false;
          x = 690;
          y = 576;
          camera.position.x = LEVEL_1;
        }
      }
    } else if (b_g.overlapPoint(c.position.x, c.position.y)) {
      // green building/intro
      building_flag = "b_g";

      turnOffGroups();
      resetGroup(intro_group);
      text_block.visible = false;

      x = 32;
      y = 1100;
      camera.position.y = 960;
      c.changeAnimation("right");
    } else if (pp_build.overlapPoint(c.position.x, c.position.y)) {
      // personal projects
      building_flag = "pp";

      turnOffGroups();
      resetGroup(pp_group);
      text_block_red.visible = false;

      x = 32;
      y = 1100;
      camera.position.y = 960;
      c.changeAnimation("right");
    } else if (metro.overlapPoint(c.position.x, c.position.y)) {
      // nyu
      building_flag = "nyu";

      turnOffGroups();
      resetGroup(nyu_group);
      text_block_purple.visible = false;

      x = 32;
      y = 1100;
      camera.position.y = 960;
      c.changeAnimation("right");
    } else if (b_blue.overlapPoint(c.position.x, c.position.y)) {
      // google
      building_flag = "google";
      turnOffGroups();
      resetGroup(google_group);

      text_block_blue.visible = false;

      x = 32;
      y = 1100;
      camera.position.y = 960;
      c.changeAnimation("right");
    } else if (house.overlapPoint(c.position.x, c.position.y)) {
      // home/hobbies
      building_flag = "house";

      turnOffGroups();
      resetGroup(hobbies_group);

      text_block_orange.visible = false;

      x = 32;
      y = 1100;
      camera.position.y = 960;
      c.changeAnimation("right");
    } else if (shed.overlapPoint(c.position.x, c.position.y)) {
      // outro/credits?
      building_flag = "outro";

      turnOffGroups();
      resetGroup(outro_group);
      text_block_green.visible = false;

      x = 32;
      y = 1100;
      camera.position.y = 960;
      c.changeAnimation("right");
    } else if (x <= 18 && y >= 1073 && y <= 1135) {
      camera.position.y = LEVEL_HEIGHT;
      c.changeAnimation("down");

      if (building_flag == "b_g") {
        x = 1135;
        y = 320;
      } else if (building_flag == "pp") {
        x = 1380;
        y = 310;
      } else if (building_flag == "nyu") {
        x = 1600;
        y = 310;
      } else if (building_flag == "google") {
        x = 1820;
        y = 310;
      } else if (building_flag == "house") {
        x = 2085;
        y = 322;
      } else if (building_flag == "outro") {
        x = 2390;
        y = 290;
      }
    } else if (book.overlapPoint(c.position.x, c.position.y - 30)) {
      // book
      arrow.animation.visible = false;
      if (text_block.visible) {
        text_block.visible = false;
      } else {
        text_block.visible = true;
      }
    } else if (kid.overlapPoint(c.position.x - 30, c.position.y)) {
      // smth abt clubs
      arrow_clubs.animation.visible = false;
      if (text_block_purple.visible) {
        text_block_purple.visible = false;
      } else {
        text_block_purple.visible = true;
      }
    } else if (
      eraser.overlapPoint(c.position.x, c.position.y - 30) ||
      eraser.overlapPoint(c.position.x + 30, c.position.y)
    ) {
      // smth abt ptc
      arrow_ptc.animation.visible = false;
      if (text_block_purple.visible) {
        text_block_purple.visible = false;
      } else {
        text_block_purple.visible = true;
      }
    } else if (bookshelf.overlapPoint(c.position.x, c.position.y - 30)) {
      // smth abt coding
      arrow_code.animation.visible = false;
      if (text_block_purple.visible) {
        text_block_purple.visible = false;
      } else {
        text_block_purple.visible = true;
      }
    } else if (office_desk_1.overlapPoint(c.position.x, c.position.y - 30)) {
      arrow_frontend.animation.visible = false;
      if (text_block_blue.visible) {
        text_block_blue.visible = false;
      } else {
        text_block_blue.visible = true;
      }
    } else if (office_desk_2.overlapPoint(c.position.x, c.position.y - 30)) {
      arrow_google.animation.visible = false;
      if (text_block_blue.visible) {
        text_block_blue.visible = false;
      } else {
        text_block_blue.visible = true;
      }
    } else if (
      miku.overlapPoint(c.position.x, c.position.y - 30) ||
      miku.overlapPoint(c.position.x - 30, c.position.y)
    ) {
      // anime
      arrow_anime.animation.visible = false;
      if (text_block_orange.visible) {
        text_block_orange.visible = false;
      } else {
        text_block_orange.visible = true;
      }
    } else if (laptop.overlapPoint(c.position.x + 30, c.position.y)) {
      // web dev
      arrow_web_dev.animation.visible = false;
      if (text_block_orange.visible) {
        text_block_orange.visible = false;
      } else {
        text_block_orange.visible = true;
      }
    } else if (game.overlapPoint(c.position.x + 30, c.position.y)) {
      // gaming
      arrow_console.animation.visible = false;
      if (text_block_orange.visible) {
        text_block_orange.visible = false;
      } else {
        text_block_orange.visible = true;
      }
    } else if (posters.overlapPoint(c.position.x, c.position.y - 30)) {
      // drawing
      arrow_drawing.animation.visible = false;
      if (text_block_orange.visible) {
        text_block_orange.visible = false;
      } else {
        text_block_orange.visible = true;
      }
    } else if (mta_statue.overlapPoint(c.position.x, c.position.y - 30)) {
      arrow_mta.animation.visible = false;
      if (text_block_red.visible) {
        text_block_red.visible = false;
      } else {
        text_block_red.visible = true;
      }
    } else if (zodiac_statue.overlapPoint(c.position.x, c.position.y - 30)) {
      arrow_zodiac.animation.visible = false;
      if (text_block_red.visible) {
        text_block_red.visible = false;
      } else {
        text_block_red.visible = true;
      }
    } else if (
      local_vase.overlapPoint(c.position.x, c.position.y - 30) ||
      local_vase.overlapPoint(c.position.x + 30, c.position.y)
    ) {
      arrow_local.animation.visible = false;
      if (text_block_red.visible) {
        text_block_red.visible = false;
      } else {
        text_block_red.visible = true;
      }
    } else if (quiet_vase.overlapPoint(c.position.x, c.position.y - 30)) {
      arrow_quiet.animation.visible = false;
      if (text_block_red.visible) {
        text_block_red.visible = false;
      } else {
        text_block_red.visible = true;
      }
    } else if (billie_vase.overlapPoint(c.position.x, c.position.y - 30)) {
      arrow_billie.animation.visible = false;
      if (text_block_red.visible) {
        text_block_red.visible = false;
      } else {
        text_block_red.visible = true;
      }
    } else if (
      game_vase.overlapPoint(c.position.x, c.position.y - 30) ||
      game_vase.overlapPoint(c.position.x - 30, c.position.y)
    ) {
      arrow_game.animation.visible = false;
      if (text_block_red.visible) {
        text_block_red.visible = false;
      } else {
        text_block_red.visible = true;
      }
    } else if (
      genshin_vase.overlapPoint(c.position.x, c.position.y - 30) ||
      genshin_vase.overlapPoint(c.position.x - 30, c.position.y)
    ) {
      arrow_genshin.animation.visible = false;
      if (text_block_red.visible) {
        text_block_red.visible = false;
      } else {
        text_block_red.visible = true;
      }
    } else if (wiki_painting.overlapPoint(c.position.x, c.position.y - 30)) {
      arrow_wiki.animation.visible = false;
      if (text_block_red.visible) {
        text_block_red.visible = false;
      } else {
        text_block_red.visible = true;
      }
    } else if (admin_painting.overlapPoint(c.position.x, c.position.y - 30)) {
      arrow_admin.animation.visible = false;
      if (text_block_red.visible) {
        text_block_red.visible = false;
      } else {
        text_block_red.visible = true;
      }
    } else if (party_goer_1.overlapPoint(c.position.x, c.position.y - 30)) {
      arrow_talk.animation.visible = false;
      if (text_block_green.visible) {
        text_block_green.visible = false;
      } else {
        text_block_green.visible = true;
      }
    }
  }
}
