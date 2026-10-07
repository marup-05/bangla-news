import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const NewsDetails = async ({
  params,
}: {
  params: Promise<{ newsId: string }>;
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`
  );

  const data = await res.json();
  const news = data.data;

 if(!news){
  notFound()
 }

 
  return (
    <div>
      <h1>{news.title}</h1>
      <p>{news.text}</p>

      <Image
        className="rounded-2xl"
        height={600}
        width={500}
        src={news.imageUrl}
        alt={news.imageAlt || 'news'}
      />
    </div>
  );
};

export default NewsDetails;