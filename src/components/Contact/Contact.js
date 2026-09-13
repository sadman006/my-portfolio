"use client";

import Reveal from "@/components/Reveal/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <Reveal>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Side */}
            <div className="flex flex-col justify-start">
              <h2 className="mb-2 text-4xl font-semibold tracking-tight sm:text-5xl">
                Contact Me
              </h2>

              <p className="mb-7 max-w-xl text-lg leading-7">
                If I can be of assistance, please do not hesitate to contact me
                <br className="hidden sm:block" />
                And I will give you my best.
              </p>

              <div className="space-y-3">
                {/* Email */}
                <div>
                  <h3 className="text-base font-semibold">Email</h3>
                  <a
                    href="mailto:sadmanahmedalvi3287@gmail.com"
                    className="text-base font-medium text-[#8ca8d0] transition-colors hover:text-white"
                  >
                    sadmanahmedalvi3287@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-base font-semibold">Phone</h3>
                  <a
                    href="tel:+8801994589676"
                    className="text-base font-medium text-[#8ca8d0] transition-colors hover:text-white"
                  >
                    +880 1994589676
                  </a>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-base font-semibold">Address</h3>
                  <p className="text-base font-medium text-[#8ca8d0]">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form className="space-y-3">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="name"
                    className="w-full rounded-lg border border-[#596579] bg-[#394457] px-3 py-3 text-sm text-white outline-none placeholder:text-[#9aa6b8] transition-all duration-200 focus:border-[#08c9a5] focus:ring-1 focus:ring-[#08c9a5]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="name@flowbite.com"
                    className="w-full rounded-lg border border-[#596579] bg-[#394457] px-3 py-3 text-sm text-white outline-none placeholder:text-[#9aa6b8] transition-all duration-200 focus:border-[#08c9a5] focus:ring-1 focus:ring-[#08c9a5]"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Let us know how we can help you"
                    className="w-full rounded-lg border border-[#596579] bg-[#394457] px-3 py-3 text-sm text-white outline-none placeholder:text-[#9aa6b8] transition-all duration-200 focus:border-[#08c9a5] focus:ring-1 focus:ring-[#08c9a5]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Leave a comment..."
                    className="w-full resize-none rounded-lg border border-[#596579] bg-[#394457] px-3 py-3 text-sm text-white outline-none placeholder:text-[#9aa6b8] transition-all duration-200 focus:border-[#08c9a5] focus:ring-1 focus:ring-[#08c9a5]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-600 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:shadow-lg hover:shadow-[#08c9a5]/20 active:scale-[0.99]"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
