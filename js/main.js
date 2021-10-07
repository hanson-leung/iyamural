//
// need to find a way to open cards but allow users to click on profiles and not have it close!
//

console.log(
  "%c nothing to see here! ",
  "background: #1d1d1b; color: #fff; padding: .5rem 1rem; border-radius: .2rem;"
);

// toggle dropdown on click
$(".card").on("click", function () {
  $(this).toggleClass("clicked");

  // need to add: close other tabs when you open another
});

const cohortEightProfiles = [
  {
    name: "Iris Leung",
    headshot: "",
    funnyPhoto: "",
    bio: "I have no sense of direction and absolutely cannot cook. If lost, please return to Yaya. Adobe XD supremacy!",
  },
  {
    name: "Jenna Gestetner",
    headshot: "",
    funnyPhoto: "",
    bio: "I love doing graphic design, specifically making logos and UI/UX. I really enjoy getting to look at different colour schemes and using Adobe Color. This is my portfolio with some of my favorite work that I have done: https://www.jennagestetner.com   My favorite emoji is the upside down smiley face because it is happy, simple, and has a silly aspect to it. Something that some people don't know about me is that I was born in London and moves to Los Angeles when I was 7.",
  },
  {
    name: "Peiyi Sun",
    headshot: "",
    funnyPhoto: "",
    bio: "Ariana grande and lady gaga are my favorite singer. The thing that most people don’t know about me is I wanted to be a fashion designer 👔 and  pilot✈️ when I was at the middle school. The most embarrassing thing I did recently was to take Vivian's phone number as Noy😅, and then I thought Vivian was Noy and sent LOTS OF MESSAGES ！！！The coolest place that I’ve been is Alaska, and my dream travel destination is Antarctica🧊. ",
  },
  {
    name: "Noy Chatoyan",
    headshot: "",
    funnyPhoto: "",
    bio: "Hey, I’m Noy! I enjoy playing the piano/composing piano pieces, working on graphic design projects, and working on various business ventures. I’m pretty much a Renaissance Man. My favorite book is Murder on The Orient Express, my favorite shows are Survivor, NCIS: Los Angeles, and MacGyver (the original). Something that most people don’t know about me is that I am actually a Lord of the Hougun Manor within the Hougun Manor Estate of England. So yes, you can call me Lord Noy if you’d like to... Here are some links: noychatoyan.com smilesinabox.com ",
  },
  {
    name: "Heath Chancey",
    headshot: "",
    funnyPhoto: "",
    bio: "My name is Heath (like the bar). I am a freshman studying Arts, Technology, and the Business of Innovation at USC. Every day, I gain knowledge and experience both in the classroom and in organizations (@gosparksc & @usclavalab) to propel my career forward. My specialties are in industrial, UI, and graphic design. If you don’t find me designing the next, I am usually recreating scenes from the Fast and Furious series (@heath.cars) or tending the net for the men’s ice hockey team.",
  },
  {
    name: "Alexis Kim",
    headshot: "",
    funnyPhoto: "",
    bio: "Following Iris who follows Yaya, I also do not have any sense of direction :). Something most people don't know about me is that I have a nickname, KimKim! Other things to know about me: I'm a very family oriented person, I've never had a pet and really really want a Rottweiler, I can cook (but mostly just Korean cuisine), I love eating (it brings me the most happiness), and I wear sweaters/hoodies probably 99% of the time. Ty for reading my bio! :)))",
  },
  {
    name: "Edward Chanquin",
    headshot: "",
    funnyPhoto: "",
    bio: "Hey! Dunno why you picked me but let’s get my bio ready!  My name is Edward and I'm from South Central Los Angeles. My favorite TV shows are very different but good at the same time: Bones, Steven Universe, and Banana Fish. I would love to travel to Thailand and Japan, and somewhere in Latin America as well (Maybe Barcelona). I love playing volleyball, watching anime, and dancing. My Zodiac sign is an Aries, so caps and taurus stay away lol (jk). What makes me happy is eating Thai and Salvadorian food (shoutout to my pupusa lovers).",
  },
  {
    name: "Kate Mathew",
    headshot: "",
    funnyPhoto: "",
    bio: "Hey everyone, I’m Kate! I’m from the Bay Area, so as you can tell I went super far away for school and have no bias to California whatsoever. I love to create, whether that be through marketing, social media, technology, or just thinking of new solutions to everyday problems, and at the academy I want to harness these passions and combine them in new and innovative ways. When I’m not at IYH, I love to work in the healthcare industry and in influencer marketing, as well as dance, play instruments, and travel. Additionally, I am a huge foodie so if you ever need a restaurant recommendation don’t hesitate to reach out! I love to watch anything sci-fi or marvel related, and my kryptonite is a movie soundtrack or anything by Hans Zimmer. I could watch The Princess Bride on repeat and am concerningly addicted to soul cycle. Finally and obviously, because my name has a T in it, I’m obsessed with tea - I’m currently training to be a tea sommelier and you can spot me around campus drinking one of my 15 cups of the day. Thanks for learning a little bit about me and I hope to meet you soon! :)",
  },
  {
    name: "Faith Wang",
    headshot: "",
    funnyPhoto: "",
    bio: "Hi, I'm Faith! I'm from the suburbs of Chicago, home of Portillo's and Culver's (the best food).  I've always loved sharing the stories of others whether it be through design, podcasts, or writing, and I'm excited to continue doing so at the Academy. In my free time, you can always find me sipping on an iced coffee or Red Bull, listening to a RadioLab podcast, and playing Animal Crossing (check out my island :)). One of my dreams is to work on a Radiolab-style podcast, so I'm always interested and looking out for wacky stories!",
  },
  {
    name: "Austin Li",
    headshot: "",
    funnyPhoto: "",
    bio: "People like to call me the dad of the group, especially within IY8. At home, however, I like to relax to jazz records, draw digital illustrations, as well as sketch out furniture ideas that I know I will never get around to building. Besides the things I do for work and class, I am an avid baker, with pies being my specialty. My most popular pie flavour is Juicy Blueberry and Strawberry and Red Wine pie, but I’ve also created my own cinnamon apple, honey pecan, and lemon meringue recipes as well. Follow me and my stuff on Insta @eggstotheshake !!!",
  },
  {
    name: "Niki Wright",
    headshot: "",
    funnyPhoto: "",
    bio: "Hi! My name is Niki. I was born in London and grew up in Japan, Ecuador, South Africa, and the Philippines. I love to travel, hike, scuba dive, and explore different places with friends and family. My dream trip would be to go skiing in France. I am dying to go, but not sure I would be able to handle the cold temperatures. I like to play tennis and the piano, now being in LA, I am excited to get better at surfing. I like most genres of music but, some of my favorites have to be SZA, Giveon, and Ariana Grande!",
  },
  {
    name: "James Wang",
    headshot: "",
    funnyPhoto: "",
    bio: "Hi, my name is James! I’m from a small town in Nevada called Las Vegas, but I consider Kaohsiung, Taiwan to be a second home of sorts. My favorite recording artist is Bob Dylan, my favorite shows are those of Mike Schur’s, and I love watching classic films (Make Way for Tomorrow is my favorite recent watch). The thing I love doing most in the world is spending time with my family — whether going on a vacation or simply eating out with them. (Not So) Fun Fact: I spend about an hour a day reading the news on my phone.",
  },
  {
    name: "Ayonnah Tinsley",
    headshot: "",
    funnyPhoto: "",
    bio: "Hiii my name is Ayonnah and things that make me happy are Nike shoes, abstract animations, and any form of carbs. I also love learning about how people learn! Learning design/ development fascinates me and I hope that I can use technology to help transform the education system. South Africa is my favorite country I have traveled to because of its music and museums! The medium of expression I like the best is vector art on Adobe Illustrator. Fun fact, I am a vegetarian (for about 5 years now) partly because I killed a chicken in middle school!",
  },
  {
    name: "Vivian Li",
    headshot: "",
    funnyPhoto: "",
    bio: "Hi, I'm Vivian! I'm from Montgomery County, MD, just 30 minutes outside of the Nation's Capital. I love illustration, digital design, code (not really), and powerful storytelling. Talk to me anytime about La La Land, (500) Days of Summer, New Girl, Master of None, Taylor Swift, or Dominic Fike. Happiness makes me happy--I enjoy uplifting the people around me and making them feel inspired! In my free time, I love baking plant-based snacks, writing bad poetry, hunting for good deals, exerting my dominance on the squat rack, and singing out loud. Connect with me and read more on Instagram (@mclovivian) or on my website, vivsdivs.com. ",
  },
  {
    name: "Sade Korbieh",
    headshot: "",
    funnyPhoto: "",
    bio: "My name is Sade and all my besties call me shawty. My favorite color is purple but if you ever see me walking around you would think it is pink because of the amount of pink products I have. When I'm rich and have money I want to travel to New Zealand, South Africa, etc. Also my dreams are to get on the amazing race and meet Rihanna so if you know the producer or Rihanna plug me please 😂",
  },
  {
    name: "Ry ",
    headshot: "",
    funnyPhoto: "",
    bio: "My name is Ry but not like the bread. I am a visual artist and I constantly visualize images I can't produce. My favorite movie is Alice in Wonderland (1951).",
  },
  {
    name: "Jack Crawford",
    headshot: "",
    funnyPhoto: "",
    bio: "Yo whats poppin! I'm Jack (of all trades) and I am creative and entrepreneurial with a desire to design innovative products and businesses. Before college I started a business to create fashionable ankle support gear, another to sell produce with the mission to impact food insecurity, and built an experiential public mural viewing station, all of which provided me invaluable experience. People describe me as passionate, fun, resourceful, loyal, diligent, and both a leader and a team player. I like to think I look at the world differently and offer unique perspectives and solutions. My varied interests range from sports, technology, photography, music, and design to finding ways to give back to society and to disrupt the norm. Close your eyes and let the word paint a thousand pictures One good girl is worth a thousand bitches",
  },
  {
    name: "",
    headshot: "",
    funnyPhoto: "",
    bio: "",
  },
  {
    name: "",
    headshot: "",
    funnyPhoto: "",
    bio: "",
  },
  {
    name: "",
    headshot: "",
    funnyPhoto: "",
    bio: "",
  },
  {
    name: "",
    headshot: "",
    funnyPhoto: "",
    bio: "",
  },
];

// clone profiles template for array length
const ARTICLES = $("article");
for (let i = 0; i < cohortEightProfiles.length; i++) {
  ARTICLES.clone().appendTo($(".cohort"));

  // add headshot for each profile
  $("article")
    .eq(i)
    .find("img")
    .attr("src", "images/" + cohortEightProfiles[i].headshot);

  // add name to profile
  $("article")
    .eq(i)
    .find(".name")
    .html(cohortEightProfiles[i].name)
    .next()
    .html(cohortEightProfiles[i].bio);
}

// show detailed profile on click (show profile bio)
$(".profile").on("click", function () {
  $(".profile").not(this).hide();
  $(this).addClass("clicked");
});

// remove class clicked and show profiles
const SHOW_ALL = function () {
  if ($(".profile").hasClass("clicked")) {
    $(".profile").removeClass("clicked");
  }
  $(".profile").show();
};

// show cohort profiles on button click
$("#button_view_cohort").on("click", function () {
  SHOW_ALL();
});
