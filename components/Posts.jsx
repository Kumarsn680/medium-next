import React from "react";
import {BookmarkAddOutlined,RemoveCircleOutlineOutlined,MoreHorizOutlined} from '@mui/icons-material/';

import Link from "next/link";
import { urlFor } from "@/sanity";

const randomposts = [
  {
    id: 1,
    authorData: {
      authorlogo: "/medium-small-logo.svg",
      name: "Minh Nguyen",
    },
    image: "/post-image.webp",
    title: "How I utilised LeetCode to get multiple tech job offers",
    date: "Nov 29, 2022",
    readtime: "5 min read",
    content: `This is my current breakdown, at the time I finished up my latest interviews in April, I had around ~450 questions completed.Thoughts
You’re not gaining any benefit by doing the types of questions your already comfortable with. If your crushing easy’s, increase the amount of mediums that you’re doing etc. Be deliberate about your practise, get the most value out of your time.
Things I would have done differently
Probably an ideal ratio would have been 1 : 3 : 1. Most questions asked in interviews are medium, so if you’re able to complete those comfortably your in a good spot to start interviewing.
Topic-wise or just random questions or Blind 75 etc?
Going into my Amazon/Atlassian/Canva/Google interviews this year
I did the daily LeetCode questions, along with going through the top questions from amazon interview list provided by my LeetCode premium subscription.`,
    tag: "Data Structures Algorithms",
  },
  {
    id: 2,
    authorData: {
      authorlogo: "/medium-small-logo.svg",
      name: "Minh Nguyen",
    },
    image: "/post-image.webp",
    title: "How I utilised LeetCode to get multiple tech job offers",
    date: "Nov 29, 2022",
    readtime: "5 min read",
    content: `This is my current breakdown, at the time I finished up my latest interviews in April, I had around ~450 questions completed.Thoughts
You’re not gaining any benefit by doing the types of questions your already comfortable with. If your crushing easy’s, increase the amount of mediums that you’re doing etc. Be deliberate about your practise, get the most value out of your time.
Things I would have done differently
Probably an ideal ratio would have been 1 : 3 : 1. Most questions asked in interviews are medium, so if you’re able to complete those comfortably your in a good spot to start interviewing.
Topic-wise or just random questions or Blind 75 etc?
Going into my Amazon/Atlassian/Canva/Google interviews this year
I did the daily LeetCode questions, along with going through the top questions from amazon interview list provided by my LeetCode premium subscription.`,
    tag: "Data Structures Algorithms",
  },
  {
    id: 3,
    authorData: {
      authorlogo: "/medium-small-logo.svg",
      name: "Minh Nguyen",
    },
    image: "/post-image.webp",
    title: "How I utilised LeetCode to get multiple tech job offers",
    date: "Nov 29, 2022",
    readtime: "5 min read",
    content: `This is my current breakdown, at the time I finished up my latest interviews in April, I had around ~450 questions completed.Thoughts
You’re not gaining any benefit by doing the types of questions your already comfortable with. If your crushing easy’s, increase the amount of mediums that you’re doing etc. Be deliberate about your practise, get the most value out of your time.
Things I would have done differently
Probably an ideal ratio would have been 1 : 3 : 1. Most questions asked in interviews are medium, so if you’re able to complete those comfortably your in a good spot to start interviewing.
Topic-wise or just random questions or Blind 75 etc?
Going into my Amazon/Atlassian/Canva/Google interviews this year
I did the daily LeetCode questions, along with going through the top questions from amazon interview list provided by my LeetCode premium subscription.`,
    tag: "Data Structures Algorithms",
  },
  {
    id: 4,
    authorData: {
      authorlogo: "/medium-small-logo.svg",
      name: "Minh Nguyen",
    },
    image: "/post-image.webp",
    title: "How I utilised LeetCode to get multiple tech job offers",
    date: "Nov 29, 2022",
    readtime: "5 min read",
    content: `This is my current breakdown, at the time I finished up my latest interviews in April, I had around ~450 questions completed.Thoughts
You’re not gaining any benefit by doing the types of questions your already comfortable with. If your crushing easy’s, increase the amount of mediums that you’re doing etc. Be deliberate about your practise, get the most value out of your time.
Things I would have done differently
Probably an ideal ratio would have been 1 : 3 : 1. Most questions asked in interviews are medium, so if you’re able to complete those comfortably your in a good spot to start interviewing.
Topic-wise or just random questions or Blind 75 etc?
Going into my Amazon/Atlassian/Canva/Google interviews this year
I did the daily LeetCode questions, along with going through the top questions from amazon interview list provided by my LeetCode premium subscription.`,
    tag: "Data Structures Algorithms",
  },
  {
    id: 5,
    authorData: {
      authorlogo: "/medium-small-logo.svg",
      name: "Minh Nguyen",
    },
    image: "/post-image.webp",
    title: "How I utilised LeetCode to get multiple tech job offers",
    date: "Nov 29, 2022",
    readtime: "5 min read",
    content: `This is my current breakdown, at the time I finished up my latest interviews in April, I had around ~450 questions completed.Thoughts
You’re not gaining any benefit by doing the types of questions your already comfortable with. If your crushing easy’s, increase the amount of mediums that you’re doing etc. Be deliberate about your practise, get the most value out of your time.
Things I would have done differently
Probably an ideal ratio would have been 1 : 3 : 1. Most questions asked in interviews are medium, so if you’re able to complete those comfortably your in a good spot to start interviewing.
Topic-wise or just random questions or Blind 75 etc?
Going into my Amazon/Atlassian/Canva/Google interviews this year
I did the daily LeetCode questions, along with going through the top questions from amazon interview list provided by my LeetCode premium subscription.`,
    tag: "Data Structures Algorithms",
  },
];

const Post = ({ posts }) => {
  return (
    <div className="w-full p-2 mt-5 sm:mt-20 divide-y-2 max-w-6xl">
      {posts.map((post) => (
        <Link key={post._id} href={`posts/${post.slug.current}`}>
          <div className="px-2 mb-4 mt-4 cursor-pointer group">
            {/* Header */}
            <div className="py-3 flex items-center ">
              <img
                src={urlFor(post.author.image.asset._ref).url()}
                className="w-5 h-5 rounded-full object-cover mr-1"
              ></img>
              <p className="mr-2 text-sm">{`${post.author.name}`}</p>
              <p className="text-slate-500 text-sm">{`${post.publishedAt
                .toString()
                .substring(0, 10)}`}</p>
            </div>

            {/* Title,Image,Content */}
            <div className="flex justify-between pb-10 items-center">
              <div className="flex flex-col items-start xs:w-2/3">
                <h1 className="font-bold text-base  xs:hidden ">{`${post.title.substring(
                  0,
                  30
                )}...`}</h1>
                <h1 className="font-bold text-base  hidden xs:inline-block sm:text-2xl">{`${post.title}`}</h1>
                <p className="hidden sm:inline-block text-lg mb-6 mt-4">{`${post.description.substring(
                  0,
                  200
                )}...`}</p>
              </div>
              <img
                className="h-16 w-20 object-cover group-hover:scale-125 xs:w-24 sm:w-60 sm:h-40"
                src={urlFor(post.mainImage).url()}
              ></img>
            </div>

            {/*Footer  */}
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="mr-4 py-1 px-1 bg-slate-200 rounded-xl text-xs xs:hidden">{`${post.category.substring(
                  0,
                  10
                )}...`}</span>
                <span className="hidden mr-4 py-1 px-1 bg-slate-200 rounded-xl text-xs xs:inline-block">{`${post.category}`}</span>
                <p className="text-xs text-slate-500">{`${post.readtime}`}</p>
              </div>
              <div className="flex w-32 justify-evenly">
                <BookmarkAddOutlined className="w-5 text-slate-400 font-light" />
                <RemoveCircleOutlineOutlined className="w-5 text-slate-400 font-light" />
                <MoreHorizOutlined className="w-5 text-slate-400 font-light" />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Post;
