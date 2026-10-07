import Link from "next/link";

interface MostRead {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/news/most-read"
  );

  const data = await res.json();
  const news: MostRead[] = data.data;

  return (
    <div className="card bg-base-100 p-2 border border-gray-300 mt-5">
      <h1 className="font-bold text-red-700 mb-3">সর্বাধিক পঠিত</h1>

      <div className="grid gap-3">
        {news.map((n, i) => (
          <Link href={`/news/${n.id}`} key={n.id}>
            <div className="flex gap-2">
              <p className="text-1xl font-bold text-red-600">{i + 1}</p>
              <h2 className="font-bold">{n.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MostRead;