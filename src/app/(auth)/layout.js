
import "../globals.css";
import Image from "next/image";



export default function AuthLayout({ children }) {
  return (
    
     
        <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white to-white">
          {/* Background geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Large blue circle - bottom left */}
            <div className="absolute -bottom-32 -left-32 w-64 h-64 md:w-96 md:h-96 lg:w-130 lg:h-130 bg-gradient-to-r from-blue-600 to-blue-300 rounded-full z-10"></div>

            {/* Medium blue circle - top right */}
            <div className="absolute -mt-28 -left-0 w-64 h-64 md:w-96 md:h-96 lg:w-220 lg:h-220 rounded-br-[300px] md:rounded-br-[400px] lg:rounded-br-[600px] rounded-r-[150px] md:rounded-r-[200px] lg:rounded-r-[300px] bg-gradient-to-r from-blue-900 to-blue-600"></div>

            {/* Purple gradient circle - bottom right */}
            <div className="absolute -bottom-32 -right-24 w-64 h-64 md:w-96 md:h-96 lg:w-130 lg:h-130 bg-gradient-to-r from-blue-600 to-blue-300 rounded-full z-10"></div>
          </div>

          {/* Main content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen py-8">
            {/* Left side - Welcome content (hidden on mobile) */}
            <div className="lg:flex hidden max-w-lg flex-col gap-3 lg:-mt-[350px] md:-mt-[300px] -mt-0 w-full text-white">
              {/* 3D illustration placeholder */}
              <div className="w-full flex justify-center items-center">
                <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48  flex items-center justify-center">
                  <Image
                    src={"/auth/login.png"}
                    width={300}
                    height={300}
                    alt="login"
                  />
                </div>
              </div>
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
                Welcome Back
              </h1>

              <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed block opacity-90 text-center">
                Log in to connect with verified professionals, manage projects,
                and collaborate easily. Lunq offers secure payments, direct
                contracts, and zero commission—giving you full control over your
                work and earnings.
              </p>
              <div>
                <Image
                  className="absolute left-[350px] -mt-10"
                  src={"/auth/chat.png"}
                  width={300}
                  height={350}
                  alt="Chat Icons"
                />
              </div>
            </div>

            {/* Right side - Login form */}
            <div className="flex-shrink-0 w-full rounded-xl shadow-2xl bg-white max-w-md md:max-w-lg lg:ml-8">
              {children}
            </div>
          </div>
        </div>
      
  );
}
