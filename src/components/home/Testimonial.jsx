// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

// function Testimonial() {
//   const swiperRef = useRef(null);
//   const [expandedComments, setExpandedComments] = useState({});
//   const [truncateLength, setTruncateLength] = useState(120); // default for desktop

//   const testimonials = [
//     {
//       id: 1,
//       title: "Smooth Process",
//       comment:
//         "The car-buying process was incredibly smooth and hassle-free! I found my dream car within minutes, and the team guided me through every step. Highly recommended for anyone looking to buy or sell a car!",
//       avatar: "/home/john_doe.png",
//       name: "John Doe",
//       intention: "Happy Customer",
//     },
//     {
//       id: 2,
//       title: "Amazing Support",
//       comment:
//         "Excellent customer service! The platform made it easy to compare options and find the best deals. The support team answered all my questions and ensured a seamless experience.",
//       avatar: "/home/sara.png",
//       name: "Sarah Johnson",
//       intention: "First-Time Buyer",
//     },
//     {
//       id: 3,
//       title: "Trusted Platform",
//       comment:
//         "This platform is a game-changer for car enthusiasts. The transparency and reliability gave me confidence while purchasing. I sold my old car here too, and the process was quick and efficient!",
//       avatar: "/home/mike.png",
//       name: "Mike Brown",
//       intention: "Car Enthusiast",
//     },
//   ];

//   const toggleComment = (id) => {
//     setExpandedComments((prev) => ({
//       ...prev,
//       [id]: !prev[id],
//     }));
//   };

//   const truncateText = (text, maxLength) => {
//     if (text.length <= maxLength) return text;
//     return text.slice(0, maxLength).trim();
//   };

//   useEffect(() => {
//     // Adjust truncate length based on device width
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setTruncateLength(100); // smaller screens, shorter text
//       } else if (window.innerWidth < 1024) {
//         setTruncateLength(120); // tablets
//       } else {
//         setTruncateLength(180); // desktops
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const loadSwiper = async () => {
//       const { default: Swiper } = await import("swiper");
//       const { Navigation, Pagination, Autoplay } = await import(
//         "swiper/modules"
//       );

//       await import("swiper/css");
//       await import("swiper/css/navigation");
//       await import("swiper/css/pagination");

//       if (swiperRef.current) {
//         new Swiper(swiperRef.current, {
//           modules: [Navigation, Pagination, Autoplay],
//           spaceBetween: 20,
//           slidesPerView: 1,
//           navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//           },
//           pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//             dynamicBullets: true,
//           },
//           autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//           },
//           breakpoints: {
//             640: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//             1280: {
//               slidesPerView: 4,
//             },
//           },
//         });
//       }
//     };

//     loadSwiper();
//   }, []);

//   return (
//     <section className="py-16 px-4 sm:px-6 bg-gray-50">
//       <div className="max-w-[100rem] mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold h2-gradient-text leading-tight">
//             What our Clients say
//           </h2>
//         </div>

//         {/* Swiper */}
//         <div className="relative">
//           <div ref={swiperRef} className="swiper">
//             <div className="swiper-wrapper">
//               {testimonials.map((testimonial) => {
//                 const isExpanded = expandedComments[testimonial.id];
//                 const shouldShowSeeMore =
//                   testimonial.comment.length > truncateLength;
//                 const displayText = isExpanded
//                   ? testimonial.comment
//                   : truncateText(testimonial.comment, truncateLength);

//                 return (
//                   <div key={testimonial.id} className="swiper-slide">
//                     <Card className="w-full max-w-[22rem] md:max-w-[23.5rem]  min-h-[35vh] xl:min-h-[45vh]  group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-gray-200 mx-auto">
//                       <CardContent className="p-6 sm:p-8 text-left space-y-4">
//                         <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
//                           {testimonial.title}
//                         </h3>
//                         <div>
//                           <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
//                             {displayText}
//                             {shouldShowSeeMore && !isExpanded && "..."}
//                           </p>
//                           {shouldShowSeeMore && (
//                             <button
//                               onClick={() => toggleComment(testimonial.id)}
//                               className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors focus:outline-none focus:underline"
//                             >
//                               {isExpanded ? "See less" : "See more"}
//                             </button>
//                           )}
//                         </div>
//                       </CardContent>
//                       <CardFooter>
//                         <div className="flex items-center gap-x-4 pt-2">
//                           <Avatar className="w-10 h-10">
//                             <AvatarImage src={testimonial.avatar} />
//                             <AvatarFallback>U</AvatarFallback>
//                           </Avatar>
//                           <div>
//                             <p className="font-semibold text-sm sm:text-base">
//                               {testimonial.name}
//                             </p>
//                             <p className="text-gray-600 text-xs sm:text-sm">
//                               {testimonial.intention}
//                             </p>
//                           </div>
//                         </div>
//                       </CardFooter>
//                     </Card>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Swiper Styles */}
//         <style jsx>{`
//           .swiper-button-prev,
//           .swiper-button-next {
//             color: #2563eb !important;
//             width: 36px !important;
//             height: 36px !important;
//             background: white !important;
//             border-radius: 50% !important;
//             box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1) !important;
//           }
//           .swiper-button-prev:after,
//           .swiper-button-next:after {
//             font-size: 16px !important;
//             font-weight: bold !important;
//           }
//           .swiper-pagination {
//             position: relative !important;
//             margin-top: 1.5rem !important;
//           }
//           .swiper-pagination-bullet {
//             background: #cbd5e1 !important;
//             opacity: 1 !important;
//           }
//           .swiper-pagination-bullet-active {
//             background: #2563eb !important;
//           }
//         `}</style>
//       </div>
//     </section>
//   );
// }

// export default Testimonial;

"use client";
import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTranslations } from "next-intl";

function Testimonial() {
  const t = useTranslations("home.testimonial");
  const swiperRef = useRef(null);
  const [expandedComments, setExpandedComments] = useState({});
  const [truncateLength, setTruncateLength] = useState(120); // default for desktop

  const testimonials = [
    {
      id: 1,
      title: t("testimonials.smoothProcess.title"),
      comment: t("testimonials.smoothProcess.comment"),
      avatar: "/home/john_doe.png",
      name: t("testimonials.smoothProcess.name"),
      intention: t("testimonials.smoothProcess.intention"),
    },
    {
      id: 2,
      title: t("testimonials.amazingSupport.title"),
      comment: t("testimonials.amazingSupport.comment"),
      avatar: "/home/sara.png",
      name: t("testimonials.amazingSupport.name"),
      intention: t("testimonials.amazingSupport.intention"),
    },
    {
      id: 3,
      title: t("testimonials.trustedPlatform.title"),
      comment: t("testimonials.trustedPlatform.comment"),
      avatar: "/home/mike.png",
      name: t("testimonials.trustedPlatform.name"),
      intention: t("testimonials.trustedPlatform.intention"),
    },
    {
      id: 4,
      title: t("testimonials.trustedPlatform.title"),
      comment: t("testimonials.trustedPlatform.comment"),
      avatar: "/home/mike.png",
      name: t("testimonials.trustedPlatform.name"),
      intention: t("testimonials.trustedPlatform.intention"),
    },
  ];

  const toggleComment = (id) => {
    setExpandedComments((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim();
  };

  useEffect(() => {
    // Adjust truncate length based on device width
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTruncateLength(100); // smaller screens, shorter text
      } else if (window.innerWidth < 1024) {
        setTruncateLength(120); // tablets
      } else {
        setTruncateLength(100); // desktops
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const loadSwiper = async () => {
      const { default: Swiper } = await import("swiper");
      const { Navigation, Pagination, Autoplay } = await import(
        "swiper/modules"
      );

      await import("swiper/css");
      await import("swiper/css/navigation");
      await import("swiper/css/pagination");

      if (swiperRef.current) {
        new Swiper(swiperRef.current, {
          modules: [Navigation, Pagination, Autoplay],
          spaceBetween: 20,
          slidesPerView: 1,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
          },
          autoplay: {
            delay: 3000,
            disableOnInteraction: false,
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          },
        });
      }
    };

    loadSwiper();
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-[100rem] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold h2-gradient-text leading-tight">
            {t("title")}
          </h2>
        </div>

        {/* Swiper */}
        <div className="relative">
          <div ref={swiperRef} className="swiper">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial) => {
                const isExpanded = expandedComments[testimonial.id];
                const shouldShowSeeMore =
                  testimonial.comment.length > truncateLength;
                const displayText = isExpanded
                  ? testimonial.comment
                  : truncateText(testimonial.comment, truncateLength);

                return (
                  <div key={testimonial.id} className="swiper-slide">
                    <Card className="w-full max-w-[22rem] md:max-w-[23.5rem] min-h-[300px]  md:min-h-[450px] xl:min-h-[400px]    group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-gray-200 mx-auto flex flex-col">
                      <CardContent className="p-6 sm:p-8 text-left space-y-4 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {testimonial.title}
                        </h3>
                        <div className="flex-1">
                          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                            {displayText}
                            {shouldShowSeeMore && !isExpanded && "..."}
                          </p>
                          {shouldShowSeeMore && (
                            <button
                              onClick={() => toggleComment(testimonial.id)}
                              className="text-blue-600 hover:text-blue-800 text-sm font-medium mt-2 transition-colors focus:outline-none focus:underline"
                            >
                              {isExpanded ? t("seeLess") : t("seeMore")}
                            </button>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="p-6 sm:p-8 pt-0">
                        <div className="flex items-center gap-x-4 w-full">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={testimonial.avatar} />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm sm:text-base">
                              {testimonial.name}
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm">
                              {testimonial.intention}
                            </p>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Swiper Styles */}
        <style jsx>{`
          .swiper-button-prev,
          .swiper-button-next {
            color: #2563eb !important;
            width: 36px !important;
            height: 36px !important;
            background: white !important;
            border-radius: 50% !important;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1) !important;
          }
          .swiper-button-prev:after,
          .swiper-button-next:after {
            font-size: 16px !important;
            font-weight: bold !important;
          }
          .swiper-pagination {
            position: relative !important;
            margin-top: 1.5rem !important;
          }
          .swiper-pagination-bullet {
            background: #cbd5e1 !important;
            opacity: 1 !important;
          }
          .swiper-pagination-bullet-active {
            background: #2563eb !important;
          }
        `}</style>
      </div>
    </section>
  );
}

export default Testimonial;
