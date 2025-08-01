import { FaPhone } from 'react-icons/fa';
import FormInput from '@/components/FormInput';

export default function BookingTours() {
  return (
    <div className="h-auto relative   p-5 justify-center  my-10 ">
      <div className="absolute bg-[url(https://d31xsmoz1lk3y3.cloudfront.net/big/453.jpg?v=1661993062)] opacity-25 inset-0 z-0 pointer-events-none "></div>
      <div className="flex justify-around gap-3 z-10">
        <div className="flex flex-col justify-center items-center gap-3 text-2xl">
          <p className="">Stay Connected</p>
          <FaPhone />
          <p>
            +91 9940882200
          </p>
          <a href="mailto:mail@gtholidays.in" className="">mail@gtholidays.in</a>
        </div>
        <div>
          <p className="text-2xl mb-5">Book Your Dream Vacay Today!</p>
          <form>

            <div className="flex flex-col  gap-5">

              <FormInput name="name" type="text" placeHolder="Name" />
              <FormInput name="city_of_residence" type="text" placeHolder="City Of Residence" />
              <FormInput name="email" type="text" placeHolder="Email" />
              <FormInput name="mobile_number" type="text" placeHolder="Phone Number" />
              <FormInput name="destination" type="text" placeHolder="Travel Destination" />
              <FormInput name="date" type="text" placeHolder="Date Of Travel" />
              <FormInput name="no-of-people" type="text" placeHolder="No. Of People" />
              <FormInput name="type" type="text" placeHolder="Vacation Type" />

            </div>

            <div className="mt-5">
              <button
                className=" bg-primaryColor-500 px-5 py-1 w-full font-bold text-black  focus:outline-hidden focus:ring-3 hover:bg-black hover:text-gray-300 disabled:pointer-events-none disabled:opacity-50"
                type="submit"
                // disabled={form.formState.isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
