import Image from 'next/image';
import { FaLocationDot } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';

export default function GroupTours() {
  return (
    <>
      <div className="relative w-full h-[500px]">
        <Image
          src="/assets/images/enjoy-stress-free-group-tours-with-gt.jpg"
          alt="banner"
          fill
        />
      </div>
      <div className="p-10">
        <h6 className="my-5 text-4xl">Ultimate Group Tour Adventures</h6>
        <h5 className="my-5 text-3xl">Winter Groups for 2025</h5>
        <div className="w-72 h-96 border-1 border-black">
          <Image src="https://group.gtholidays.in/wp-content/uploads/2023/08/Dubai-Group-Tour-600x600.jpg" width={500} height={500} className="w-full" alt="img" />
          <div className="px-4 py-1">
            <p className="flex gap-2 items-center text-[10px]">
              <span><FaLocationDot /></span>
              <span>Sharjah | Abu Dhabi | Dubai</span>
            </p>
            <h4>Dubai Group Departure Ex Chennai</h4>
            <p className="flex gap-2 items-center text-[15px] text-amber-600">
              <span><FiClock /></span>
              <span>Sharjah | Abu Dhabi | Dubai</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
