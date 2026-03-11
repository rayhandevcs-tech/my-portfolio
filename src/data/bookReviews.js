// import bookImg1 from "../assets/images/book-1.png";
// import bookImg2 from "../assets/images/book-2.png";
// import bookImg3 from "../assets/images/book-3.png";

// export const bookReviews = [
//   {
//     id: 1,
//     title: "Atomic Habits",
//     author: "James Clear",
//     category: "Self Development",
//     rating: "5/5",
//     image: bookImg1,
//     summary:
//       "Atomic Habits is one of the most practical books I have read on personal improvement. What makes it powerful is that it does not focus on dramatic overnight change. Instead, it explains how small actions, repeated consistently, shape long-term identity and results. The book breaks down habit formation into simple, understandable ideas and shows how environment, repetition, and systems matter more than temporary motivation. While reading it, I found myself thinking not just about habits in daily life, but also about how the same idea applies to coding, learning, and building projects. It made me reflect on how small repeated practice sessions can create visible growth over time. The writing is clear, direct, and easy to apply, which made it feel more useful than many abstract self-help books.",
//     takeaway:
//       "The biggest lesson I took from this book is that lasting improvement does not come from chasing perfect motivation; it comes from building systems that make good actions easier to repeat.",
//   },
//   {
//     id: 2,
//     title: "Deep Work",
//     author: "Cal Newport",
//     category: "Productivity",
//     rating: "4.5/5",
//     image: bookImg2,
//     summary:
//       "Deep Work explores the value of uninterrupted concentration in a world filled with distraction, shallow tasks, and constant digital noise. What I appreciated most about this book is that it treats focus as both a skill and a competitive advantage. It argues that the ability to work deeply is becoming more rare, but also more valuable. As someone trying to learn technical skills and build projects, I found this idea very relevant. The book made me reflect on how often attention gets broken by unnecessary switching, random browsing, or low-value activity. It also made me think more seriously about creating environments and routines that protect focus. Rather than simply telling the reader to work harder, the book explains why focused effort leads to better learning, stronger output, and more meaningful progress.",
//     takeaway:
//       "What stayed with me most is the idea that protecting attention is not a luxury — it is a core requirement for serious learning and meaningful work.",
//   },
//   {
//     id: 3,
//     title: "The Psychology of Money",
//     author: "Morgan Housel",
//     category: "Mindset",
//     rating: "4.5/5",
//     image: bookImg3,
//     summary:
//       "The Psychology of Money is less about technical financial strategies and more about the behavior, emotions, and perspectives that shape decisions over time. That is what made it especially interesting to me. The book shows that success is often connected not only to knowledge, but also to patience, humility, long-term thinking, and emotional control. Even though it is written around money, many of its ideas apply far beyond finance. I found myself relating its lessons to learning, decision-making, and personal growth in general. The stories are simple but memorable, and they communicate important ideas without becoming overly complicated. What I liked most is that it makes the reader think about sustainability, behavior, and mindset rather than only outcomes.",
//     takeaway:
//       "My biggest takeaway is that long-term success often depends less on complexity and more on how well we manage behavior, patience, and perspective.",
//   },
// ];


import bookImg1 from "../assets/images/atomic_habit.png";
import bookImg2 from "../assets/images/deep_work.png";
import bookImg3 from "../assets/images/psycology_money.png";

export const bookReviews = [
  {
    id: 1,
    slug: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    rating: "5/5",
    image: bookImg1,
    summary:
      "A highly practical book about habit formation, identity change and long-term growth.",
    fullReview:
      "Atomic Habits is one of the most practical books I have read on personal improvement. What makes it powerful is that it does not focus on dramatic overnight change. Instead, it explains how small actions, repeated consistently, shape long-term identity and results. The book breaks down habit formation into simple, understandable ideas and shows how environment, repetition, and systems matter more than temporary motivation.",
    takeaway:
      "Small improvements repeated consistently can create remarkable long-term transformation.",
  },
  {
    id: 2,
    slug: "deep-work",
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    rating: "4/5",
    image: bookImg2,
    summary:
      "A valuable book on focused work, attention and building meaningful productivity in a distracted world.",
    fullReview:
      "Deep Work explores the value of uninterrupted concentration in a world filled with distraction, shallow tasks, and constant digital noise. What I appreciated most about this book is that it treats focus as both a skill and a competitive advantage. It argues that the ability to work deeply is becoming more rare, but also more valuable.",
    takeaway:
      "Deep, distraction-free work is becoming increasingly valuable.",
  },
  {
    id: 3,
    slug: "psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Mindset",
    rating: "4.5/5",
    image: bookImg3,
    summary:
      "A thoughtful book about behavior, patience, perspective, and why mindset often matters more than complexity.",
    fullReview:
      "The Psychology of Money is less about technical financial strategies and more about the behavior, emotions, and perspectives that shape decisions over time. What makes it powerful is that it explains how success is often shaped by patience, humility, long-term thinking, and emotional control rather than only technical knowledge.",
    takeaway:
      "Long-term success often depends more on behavior and patience than on complexity.",
  },
];