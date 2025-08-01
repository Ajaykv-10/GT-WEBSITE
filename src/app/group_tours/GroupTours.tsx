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
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {groupTours.map(data => (
        <div
          key={data.id}
          className="relative   border bg-white"
        >
          <Image
            src={data.imageUrl}
            width={500}
            height={500}
            alt="Tour Image"
            className="w-full  object-cover "
          />

          {soldout && (
            <Image
              src="/assets/images/sold-out.png"
              height={80}
              width={80}
              alt="Sold Out"
              className="absolute -top-2 left-2 z-10 w-20"
            />
          )}

          <div className="p-4 space-y-2">
            <p className="flex items-center text-xs text-gray-600">
              <FaLocationDot className="mr-1 text-gray-500" />
              {data.location}
            </p>
            <h4 className="text-base font-semibold text-gray-900">{data.name}</h4>
            <p className="flex items-center text-sm text-amber-600">
              <FiClock className="mr-1" />
              {data.duration}
            </p>
          </div>
        </div>
      ))}
    </div>

  );
};
