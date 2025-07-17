import { FaPhone } from 'react-icons/fa';

export default function BookingTours() {
  return (
    <div className="h-auto  bg-[url(https://d31xsmoz1lk3y3.cloudfront.net/big/453.jpg?v=1661993062)]  p-5 justify-center  my-10 ">

      <div className="flex justify-around gap-3">
        <div className="flex flex-col justify-center items-center gap-3 text-2xl">
          <p className="">Stay Connected</p>
          <FaPhone />
          <p>
            +91 9940882200
          </p>
          <a href="mailto:mail@gtholidays.in" className="">mail@gtholidays.in</a>
        </div>
        <div>
          <p className="text-2xl">Book Your Dream Vacay Today!</p>
          <form>

            <div className="flex flex-col gap-3">

              <input
                id="increment"
                type="text"
                placeholder="Name"
                className="border w-full  border-gray-900 p-2 text-sm leading-tight text-gray-700 bg-white focus:outline-none focus:ring-0"

              />
              <input
                id="increment"
                type="text"
                placeholder="Name"
                className="border w-full  border-gray-900 p-2 text-sm leading-tight text-gray-700 bg-white focus:outline-none focus:ring-0"
              />
              <input
                id="increment"
                type="text"
                placeholder="Name"
                className="border w-full  border-gray-900 p-2 text-sm leading-tight text-gray-700 bg-white focus:outline-none focus:ring-0"
              />
              <input
                id="increment"
                type="text"
                placeholder="Name"
                className="border w-full  border-gray-900 p-2 text-sm leading-tight text-gray-700 bg-white focus:outline-none focus:ring-0"
              />
              <input
                id="increment"
                type="text"
                placeholder="Name"
                className="border w-full  border-gray-900 p-2 text-sm leading-tight text-gray-700 bg-white focus:outline-none focus:ring-0"
              />
              <input
                id="increment"
                type="text"
                placeholder="Name"
                className="border w-full  border-gray-900 p-2 text-sm leading-tight text-gray-700 bg-white focus:outline-none focus:ring-0"
              />
              <input
                id="increment"
                type="text"
                placeholder="Name"
                className="border w-full  border-gray-900 p-2 text-sm leading-tight text-gray-700 bg-white focus:outline-none focus:ring-0"
              />
              <input
                id="increment"
                type="text"
                placeholder="Name"
                className="border w-full  border-gray-900 p-2 text-sm leading-tight text-gray-700 bg-white focus:outline-none focus:ring-0"
              />

            </div>

            <div className="mt-2">
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
