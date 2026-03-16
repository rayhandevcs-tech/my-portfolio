
import placeholderImg from "../assets/images/placeholder-image.png";
import placeholderImg1 from "../assets/images/placeholder-image-1.png";
import placeholderImg2 from "../assets/images/placeholder-image-2.png";


export const blogPosts = [
  {
    id: 1,
    slug: "my-react-learning-journey",
    title: "My React Learning Journey",
    category: "Tech",
    excerpt:
      "How I started learning React, what confused me at first, and what helped me improve gradually through practice and small projects.",
    content: `
React শেখা শুরুতে আমার কাছে একটু challenging ছিল, বিশেষ করে component structure, props, state আর reusability নিয়ে। শুরুতে অনেক কিছুই confusing লাগত, কারণ plain HTML, CSS আর JavaScript থেকে component-based চিন্তায় আসতে একটু সময় লাগে।

প্রথম দিকে আমি mostly ছোট ছোট UI section বানিয়ে practice করতাম। কখনও simple card, কখনও navbar, কখনও form, আবার কখনও single page layout। এতে করে আমি বুঝতে শুরু করি কীভাবে JSX কাজ করে, component আলাদা রাখলে code clean থাকে, আর props দিয়ে data pass করলে UI অনেক flexible হয়।

State নিয়ে আমার confusion আরও বেশি ছিল। কখন কোথায় state রাখতে হয়, কীভাবে update হয়, আর rerender কেন হয় — এই জিনিসগুলো বুঝতে সময় লেগেছে। কিন্তু যখন আমি practical project-এ use করা শুরু করি, তখন ধীরে ধীরে clarity আসে।

আমার জন্য সবচেয়ে helpful ছিল:
- একই জিনিস একবার না, কয়েকবার build করা
- code refactor করা
- reusable component বানানোর চেষ্টা করা
- folder structure clean রাখা
- project grow করার mindset রাখা

React শেখার journey-তে আমি বুঝেছি, perfection-এর জন্য বসে থাকলে progress হয় না। ছোট ছোট project, repeated practice, আর structure maintain করাই confidence build করতে সবচেয়ে বেশি help করে।

এখন আমি চেষ্টা করছি শুধু React syntax শেখার না, বরং scalable project architecture, reusable UI, cleaner styling system, আর future-ready structure নিয়ে ভাবতে। আমার portfolio project-ও সেই direction-এ build করছি।
    `,
    date: "2026-03-10",
    readTime: "5 min read",
    featured: true,
    image: placeholderImg,
    tags: ["React", "Learning", "Frontend"],
  },
  {
    id: 2,
    slug: "how-i-build-discipline",
    title: "How I Build Discipline in Daily Life",
    category: "Self Development",
    excerpt:
      "A short reflection on consistency, habit building, and how I try to stay focused as a student and learner.",
    content: `
Discipline আমার কাছে perfection না, বরং repeatable system। আমি সব সময় perfectly productive থাকতে পারি না, কিন্তু আমি চেষ্টা করি এমন routine বানাতে যেটা আমাকে বারবার track-এ ফিরিয়ে আনে।

আগে আমি motivation-এর উপর অনেক depend করতাম। যখন motivation থাকত, তখন ভালো কাজ হত। কিন্তু motivation কমে গেলে সবকিছু থেমে যেত। পরে বুঝেছি, motivation temporary — discipline comparatively more reliable।

আমি যেভাবে discipline build করার চেষ্টা করি:

প্রথমত, আমি বড় goal-কে ছোট ছোট actionable step-এ ভেঙে ফেলি। "React শিখবো" এইটা অনেক vague, কিন্তু "আজ props নিয়ে ৩০ মিনিট practice করবো" অনেক clearer।

দ্বিতীয়ত, fixed routine maintain করার চেষ্টা করি। প্রতিদিন same time-এ পড়া বা project-এ বসা mind-কে train করতে help করে।

তৃতীয়ত, distraction কমানো আমার জন্য খুব important। phone, random browsing, unnecessary switching — এগুলো focus destroy করে। তাই আমি কাজের সময় environment একটু clean রাখার চেষ্টা করি।

চতুর্থত, আমি consistency-কে priority দিই intensity-এর থেকে। একদিন ৮ ঘণ্টা কাজ করে ৪ দিন কিছু না করার চেয়ে, প্রতিদিন steadyভাবে একটু একটু কাজ করা আমার কাছে বেশি effective।

Discipline build করা এখনও চলমান process। আমি এখনো improve করছি। কিন্তু একটা জিনিস পরিষ্কার — small repeatable habits long term-এ বড় difference তৈরি করে।
    `,
    date: "2026-03-08",
    readTime: "4 min read",
    featured: false,
    image: placeholderImg1,
    tags: ["Discipline", "Habits", "Growth"],
  },
  {
    id: 3,
    slug: "notes-on-academic-writing",
    title: "Notes on Better Academic Writing",
    category: "Academic",
    excerpt:
      "A few lessons on writing clearly, organizing ideas, and improving academic expression over time.",
    content: `
Academic writing-এ clarity আমার কাছে সবচেয়ে important জিনিসগুলোর একটি। অনেক সময় আমরা complicated শব্দ ব্যবহার করতে গিয়ে main idea-টাই less clear করে ফেলি। আমি ধীরে ধীরে শিখছি যে strong writing মানে শুধু advanced vocabulary না, বরং clear thinking + organized presentation।

আমি যে কয়েকটা জিনিস helpful পেয়েছি:

প্রথমত, writing শুরু করার আগে outline করা। যখন main points আগে define করা থাকে, তখন paragraph flow অনেক better হয়।

দ্বিতীয়ত, এক paragraph-এ একটাই main idea রাখার চেষ্টা করা। এতে reading সহজ হয়, আর argument cleaner লাগে।

তৃতীয়ত, evidence use করা important, but evidence-এর explanation equally important। শুধু quote বা data দিলেই writing strong হয় না, সেটার relevance explain করাও দরকার।

চতুর্থত, simple expression academic weakness না। বরং অনেক ক্ষেত্রে concise আর clear language writing-কে stronger করে।

আরেকটা useful habit হলো editing। first draft usually perfect হয় না। revise করার সময় unnecessary sentence cut করা, repetition কমানো, আর structure tighten করা writing quality improve করে।

আমি এখনো academic writing improve করার process-এ আছি, but যত বেশি পড়ছি আর লিখছি, তত বেশি বুঝতে পারছি যে good writing মূলত clear thinking-এর reflection।
    `,
    date: "2026-03-05",
    readTime: "6 min read",
    featured: false,
    image: placeholderImg2,
    tags: ["Writing", "Academic", "Clarity"],
  },
  {
    id: 4,
    slug: "why-structure-matters-in-frontend-projects",
    title: "Why Structure Matters in Frontend Projects",
    category: "Tech",
    excerpt:
      "A reflection on why separating components, pages, data, and styles makes frontend projects easier to scale.",
    content: `
Frontend project build করতে গিয়ে আমি একটা জিনিস খুব clearভাবে বুঝেছি — শুরু থেকেই structure ভালো হলে later project manage করা অনেক সহজ হয়।

একটা ছোট project initially flat structure-এ করলেও সমস্যা কম মনে হতে পারে। কিন্তু project একটু বড় হলেই সবকিছু mixed হয়ে গেলে maintain করা difficult হয়ে যায়। বিশেষ করে যখন pages, components, data, styles, এবং layout সব একসাথে mixed থাকে, তখন change করলেই অনেক জায়গায় impact পড়ে।

আমি এখন project-এ generally এভাবে ভাবি:
- pages route-level responsibility নেবে
- sections page-এর block হিসেবে থাকবে
- common components repeated UI handle করবে
- data আলাদা file-এ থাকবে
- layout components navigation এবং footer-এর মতো shared structure manage করবে

এই separation-এর সবচেয়ে বড় benefit হলো reusability। একই header pattern, same card wrapper, same button style, বা same page hero বহু জায়গায় use করা যায়।

আরেকটা benefit হলো scalability। এখন static data file use করলেও later API বা backend যুক্ত করা comparatively সহজ হবে, কারণ UI আর data source tightly coupled না।

আমার portfolio project build করতে গিয়ে আমি বুঝেছি, clean structure শুধু code neat রাখে না — এটা future growth-কে practical করে তোলে।
    `,
    date: "2026-03-02",
    readTime: "5 min read",
    featured: false,
    image: placeholderImg,
    tags: ["Architecture", "React", "Scalability"],
  },
  {
    id: 5,
    slug: "learning-through-small-projects",
    title: "Learning Through Small Projects",
    category: "Tech",
    excerpt:
      "Why building small projects repeatedly has helped me learn faster than only watching tutorials.",
    content: `
Programming শেখার সময় আমি একটা বড় difference দেখেছি tutorial দেখা আর project build করার মধ্যে। Tutorial helpful, but real learning শুরু হয় যখন নিজে বসে কিছু বানাতে হয়।

Small project build করার সবচেয়ে বড় সুবিধা হলো immediate application। তুমি যা শিখছ, সেটা instantly use করতে পারছ। এতে concept শুধু theoretical থাকে না, practical হয়ে যায়।

আমি notice করেছি:
- ছোট project বানালে fear কমে
- mistakes সহজে ধরা পড়ে
- একই concept multiple context-এ use করা যায়
- confidence দ্রুত বাড়ে

যেমন, একটা simple todo app, weather app, portfolio section, বা blog card layout — এগুলো খুব বড় project না। কিন্তু প্রতিটা project কিছু core skill improve করে:
- state management
- props handling
- conditional rendering
- component separation
- styling consistency

Small project repeat করার আরেকটা benefit হলো refactor করার সুযোগ পাওয়া। প্রথম version imperfect হলেও দ্বিতীয় version cleaner হয়। এই iteration process-টাই growth-এর বড় অংশ।

আমার কাছে small projects হলো learning-এর সবচেয়ে practical toolগুলোর একটা।
    `,
    date: "2026-02-27",
    readTime: "4 min read",
    featured: false,
    image: placeholderImg1,
    tags: ["Projects", "Practice", "Learning"],
  },
  {
    id: 6,
    slug: "the-value-of-clear-notes",
    title: "The Value of Clear Notes",
    category: "Self Development",
    excerpt:
      "How taking simple and organized notes helps me think better, revise faster, and learn more effectively.",
    content: `
আমি আগে note নিতাম, কিন্তু খুব organizedভাবে না। পরে বুঝেছি clear notes শুধু information save করার জন্য না — এটা thinking improve করারও একটা powerful tool।

যখন আমি simple language-এ note লিখি, তখন actually বুঝতে পারি আমি conceptটা truly বুঝেছি কি না। যদি note cleanভাবে লিখতে না পারি, usually তার মানে আমি বিষয়টা পুরো clear না।

Good notes আমার জন্য useful হয় কয়েকভাবে:
- revision faster হয়
- important point quickly পাওয়া যায়
- blog বা writing-এর raw material হিসেবে use করা যায়
- long-term learning track করা যায়

আমি এখন note নেওয়ার সময় generally চেষ্টা করি:
- heading clear রাখতে
- one topic one section follow করতে
- unnecessary detail কমাতে
- important keyword highlight করতে
- নিজের ভাষায় লিখতে

Clear notes productivity trick না, বরং clarity tool। এটা learning process-কে অনেক smoother করে।
    `,
    date: "2026-02-24",
    readTime: "3 min read",
    featured: false,
    image: placeholderImg2,
    tags: ["Notes", "Clarity", "Learning"],
  },
];