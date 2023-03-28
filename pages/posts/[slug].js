import { sanityClient, urlFor } from "@/sanity";
import {
  Twitter,
  Facebook,
  LinkedIn,
  Link,
  BookmarkAddOutlined,
} from "@mui/icons-material/";

import React from "react";
import { PortableText } from "@portabletext/react";
import { types } from "util";
import Comment from "@/components/Comment";

const Post = ({ pagecontent }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="mx-10 mt-8 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col">
          <div className="flex">
            <img
              src={urlFor(pagecontent.author.image.asset._ref).url()}
              className="w-12 h-12 rounded-full object-cover mr-5"
            ></img>
            <div>
              <p className="mr-2 text-">{`${pagecontent.author.name}`}</p>
              <div className="flex items-center">
                <p className="text-slate-500 text-sm mr-5">{`${pagecontent.publishedAt
                  .toString()
                  .substring(0, 10)}`}</p>
                <p className="text-sm text-slate-500">{`${pagecontent.readtime}`}</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-between mt-4 mb-4 items-center sm:w-64">
            <div className="flex border rounded-xl py-1 px-3">
              <BookmarkAddOutlined className="w-5 text-slate-400 font-light" />
              <p>Save</p>
            </div>
            <Twitter className="w-5 text-slate-400 font-light" />
            <Facebook className="w-5 text-slate-400 font-light rounded-full" />
            <LinkedIn className="w-5 text-slate-400 font-light" />
            <Link className="w-5 text-slate-400 font-light" />
          </div>
        </div>

        {/* Title */}
        <div className="mt-6 mb-5">
          <h1 className="font-bold text-4xl">{`${pagecontent.title}`}</h1>
        </div>
        {/* MainImage */}
        <div className="mt-10 mb-10 flex justify-center">
          <img
            className="object-cover w-full md:h-96 md:w-11/12"
            src={urlFor(pagecontent.mainImage).url()}
          />
        </div>
        {/* Content */}
        {console.log(pagecontent.content)}
        <div className="border-b-2 mb-8">
          <PortableText
            value={pagecontent.content}
            components={{
              types: {
                image: ({ value, isInline }) => (
                  <img
                    src={urlFor(value).url()}
                    className="object-cover w-full md:w-11/12 my-10"
                  ></img>
                ),
              },
              block: {
                h4: ({ children }) => (
                  <h4 className="text-xl mt-8 mb-4">{children}</h4>
                ),
                normal: ({ children }) => (
                  <h4 className="text-lg leading-8 font-normal mb-6">
                    {children}
                  </h4>
                ),
              },
              list: {
                bullet: ({ children }) => (
                  <ul className="list-disc ml-10">{children}</ul>
                ),
              },
              listItem: {
                bullet: ({ children }) => <li className="pb-2">{children}</li>,
                number: ({ children }) => <li>{children}</li>,
              },
            }}
          />
        </div>
        <Comment/>
      </div>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const query = `
    *[_type == 'post']{
  _id,
    slug{
    current
    }
}
`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: `${post.slug.current}`,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `
    *[_type == 'post' && slug.current == $slug][0]{
  _id,
    publishedAt,
    mainImage,
    readtime,
    title,
    category,
    content,
    author -> {
      name,
      image
    }
    
}
    `;

  const pagecontent = await sanityClient.fetch(query, { slug: params.slug });

  if (!pagecontent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      pagecontent,
    },
  };
};
