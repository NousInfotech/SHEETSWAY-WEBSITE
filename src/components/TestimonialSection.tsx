import Image from "next/image";
import assets from "@/data/assets";

const TestimonialSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg font-medium mb-2">Check us out</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            You&apos;re in good company
          </h2>
        </div>

        {/* Customer Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-20 items-start">
          {/* Left Side - Quote and Heading */}
          <div className="lg:col-span-1 flex items-start gap-4">
            {/* Quote Icon */}
            <div className="relative w-16 h-16 flex-shrink-0">
              <Image
                src={assets.QuoteIconPng}
                alt="Quote"
                fill
                className="object-contain opacity-60"
              />
            </div>
            {/* Heading */}
            <div className="pt-2">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                What our customers are saying
              </h3>
            </div>
          </div>

          {/* Right Side - Individual Message Cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image
                src={assets.MessagePng}
                alt="Testimonial Card"
                width={300}
                height={200}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
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
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image
                src={assets.MessagePng}
                alt="Testimonial Card"
                width={300}
                height={200}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
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
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image
                src={assets.MessagePng}
                alt="Testimonial Card"
                width={300}
                height={200}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center">
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
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Content */}
            <div className="p-12">
              {/* SheetSway Logo and Label */}
              <div className="mb-6">
                {/* Logo */}
                <div className="relative w-24 h-24">
                  <Image
                    src={assets.LogoPng}
                    alt="SheetSway Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Local Live Event */}
                <div className="text-gray-900 font-bold text-sm -mt-8" style={{color: '#1F2937'}}>
                  Local Live Event
                </div>
              </div>

              {/* Event Title */}
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 italic">
                Our Time to Shine. Soft-launch of our Platform
              </h3>

              {/* Event Description */}
              <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              <span className="font-semibold text-gray-900"> With around 100 esteemed guests from various professional firms.</span>
                <br />
                This event marked the beginning of a remarkable transformation in the world of auditing and accounting.
              </p>

              {/* Clyde Caruana Profile */}
              <div className="flex items-center gap-4">
                {/* Profile Image */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={assets.TwoAt4x4Svg}
                    alt="Clyde Caruana"
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Profile Content */}
                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 text-base">Clyde Caruana</h4>
                  <p className="text-gray-500 text-sm font-medium mb-2">Finance Minister of Malta</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    The Minister of Finance honored us with a speech commemorating the launch at our event. It&apos;s an inspiration to see young adults make such an incredible movement for finance in the digital area.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side with Background Image */}
            <div className="relative min-h-[400px] lg:min-h-[500px]">
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