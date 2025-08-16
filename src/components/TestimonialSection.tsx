import Image from "next/image";
import assets from "@/data/assets";

const TestimonialSection = () => {
  return (
    <section className="bg-white py-8 md:py-16 px-4 rounded-b-[50px] md:rounded-b-[150px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-16">
          <p className="text-gray-600 text-sm md:text-lg font-medium mb-2">Check us out</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            You&apos;re in good company
          </h2>
        </div>

        {/* Customer Testimonials Section */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
          {/* Left Side - Quote and Heading */}
          <div className="flex items-start gap-3 md:gap-4 mb-6 lg:mb-0">
            {/* Quote Icon */}
            <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
              <Image
                src={assets.QuoteIconPng}
                alt="Quote"
                fill
                className="object-contain opacity-60"
              />
            </div>
            {/* Heading */}
            <div className="pt-1 md:pt-2">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                What our customers are saying
              </h3>
            </div>
          </div>

          {/* Right Side - Individual Message Cards */}
          <div className="lg:col-span-3 flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6">
            {/* Testimonial 1 */}
            <div className="relative hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-0">
              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-gray-800 text-sm leading-relaxed mb-4">
                  &quot;I didn&apos;t know where to start with my audit. This platform made it stupid simple. Loved the process from start to finish.&quot;
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="relative hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-0">
              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-gray-800 text-sm leading-relaxed mb-4">
                  &quot;Great service, quick quotes, and helpful support. I had full control over who I worked with. Highly recommend.&quot;
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="relative hover:scale-105 transition-transform duration-300 bg-white rounded-lg shadow-md p-4 md:p-6 mb-4 md:mb-0">
              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-gray-800 text-sm leading-relaxed mb-4">
                  &quot;I found a legit audit firm at a better price than I was quoted elsewhere. Everything online. was a pleasure.&quot;
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Local Live Event Section */}
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-6 md:p-12">
              {/* SheetSway Logo and Label */}
              <div className="mb-4 md:mb-6">
                {/* Logo */}
                <div className="relative w-16 h-16 md:w-24 md:h-24">
                  <Image
                    src={assets.LogoPng}
                    alt="SheetSway Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Local Live Event */}
                <div className="text-gray-900 font-bold text-xs md:text-sm -mt-6 md:-mt-8" style={{color: '#1F2937'}}>
                  Local Live Event
                </div>
              </div>

              {/* Event Title */}
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 italic">
                Our Time to Shine. Soft-launch of our Platform
              </h3>

              {/* Event Description */}
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm">
              <span className="font-semibold text-gray-900"> With around 100 esteemed guests from various professional firms.</span>
                <br />
                This event marked the beginning of a remarkable transformation in the world of auditing and accounting.
              </p>

              {/* Clyde Caruana Profile */}
              <div className="flex items-start gap-3 md:gap-4">
                {/* Profile Image */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={assets.TwoAt4x4Svg}
                    alt="Clyde Caruana"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Profile Content */}
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">Clyde Caruana</h4>
                  <p className="text-gray-500 text-xs md:text-sm font-medium mb-1 md:mb-2">Finance Minister of Malta</p>
                  <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                    The Minister of Finance honored us with a speech commemorating the launch at our event. It&apos;s an inspiration to see young adults make such an incredible movement for finance in the digital area.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side with Background Image */}
            <div className="relative min-h-[250px] md:min-h-[400px] lg:min-h-[500px]">
              <Image
                src={assets.Frame138Png}
                alt="Event Photo"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;