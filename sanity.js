import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2023-03-23",
  useCdn: process.env.NODE_ENV == "production",
};


export const sanityClient = createClient(config);
export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source);
