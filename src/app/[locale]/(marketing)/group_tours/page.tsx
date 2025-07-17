import Image from 'next/image';
import BookingTours from './BookingTours';
import WinterGroupTours from './GroupTours';

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
        <WinterGroupTours soldout={false} />
        <h6 className="my-5 text-4xl">Fully Reserved Exclusive Group Tours</h6>
        <WinterGroupTours soldout={true} />

      </div>
      <BookingTours />
    </>
  );
}
