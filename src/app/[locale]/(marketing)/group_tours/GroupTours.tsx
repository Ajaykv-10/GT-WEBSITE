import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';

type Tours = {
  id: number;
  name: string;
  location: string;
  duration: string;
  price: number;
  imageUrl: string;
};
const reqURL = 'https://a2855ba8-3e20-4925-b54d-088d845baff5.mock.pstmn.io/group_tours';
async function fetchTours(): Promise<Tours[]> {
  const res = await fetch(reqURL, {
    cache: 'no-store', // disable caching for fresh data every time
  });

  if (!res.ok) {
    throw new Error('Failed to fetch tours');
  }

  return res.json();
}
export default async function WinterGroupTours({ soldout }: { soldout: boolean }) {
  const groupTours = await fetchTours();
  return (
    <div className="grid gap-3 grid-cols-1 md:grid-cols-3 lg:grid-cols-4  ">
      {groupTours.map(data => (
        <div key={data.id} className="w-72 h-96 border-1 border-black relative">
          <Image src={data.imageUrl} width={500} height={500} className="w-full" alt="img" />
          <div className="px-4 py-1">
            <p className="flex gap-2 items-center text-[10px]">
              <span><FaLocationDot /></span>
              <span>{data.location}</span>
            </p>
            <h4>{data.name}</h4>
            <p className="flex gap-2 items-center text-[15px] text-amber-600">
              <span><FiClock /></span>
              <span>{data.duration}</span>
            </p>
          </div>
          {soldout && <Image src="/assets/images/sold-out.png" height={100} width={100} alt="tours" className="absolute -top-3" />}
        </div>
      ))}

    </div>
  );
};
