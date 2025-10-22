<template>
  <div class=" min-h-screen bg-white font-inter">
    <!-- Header and Hero Section -->
    <div
      class=" bg-[url(src/assets/Photos/Frame_48.png)]  relative min-h-[600px] bg-gradient-to-br from-primary-teal via-primary-teal to-pink-300 bg-hero-pattern bg-cover bg-center">
      <!-- Header Navigation -->


      <!-- Hero Content -->
      <div class="relative z-10 px-6 lg:px-8">
        <div class="max-w-[1388px] mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Hero Text -->
            <div class="space-y-8">
              <h1
                class="text-4xl lg:text-[64px] font-semibold leading-tight lg:leading-[77px] text-black tracking-[-1.28px]">
                Find A House<br>That Suits You
              </h1>

              <p class="text-xl text-black leading-[33px] tracking-[-0.4px] max-w-[494px]">
                Want to find a home? We are ready to help you find one that suits your lifestyle and needs
              </p>

              <button
                class="inline-flex items-center px-12 py-4 bg-black text-white rounded-[11px] text-base font-medium tracking-[-0.32px] hover:bg-gray-800 transition-colors">
                Get Started
              </button>

              <!-- Statistics -->
              <div class="flex flex-wrap gap-8 pt-8">
                <div>
                  <div class="text-[32px] font-semibold tracking-[-0.64px] text-black">
                    1200<span class="text-primary-purple">+</span>
                  </div>
                  <div class="text-base text-black tracking-[-0.32px]">Listed Properties</div>
                </div>
                <div>
                  <div class="text-[32px] font-semibold tracking-[-0.64px] text-black">
                    4500<span class="text-primary-purple">+</span>
                  </div>
                  <div class="text-base text-black tracking-[-0.32px]">Listed Properties</div>
                </div>
                <div>
                  <div class="text-[32px] font-semibold tracking-[-0.64px] text-black">
                    1200<span class="text-primary-purple">+</span>
                  </div>
                  <div class="text-base text-black tracking-[-0.32px]">Listed Properties</div>
                </div>
              </div>
            </div>

            <!-- 3D House Illustration Area -->
            <div class="lg:block hidden relative h-[500px]">
              <!-- This space would contain the 3D house illustration from the design -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Search Section -->
    <div class="relative -mt-24 z-20 px-6 lg:px-8">
      <div class="max-w-[1092px] mx-auto">
        <div class="bg-white rounded-lg border border-gray-light shadow-lg p-6">
          <h2 class="text-xl font-medium text-black tracking-[-0.4px] mb-6">Search for available properties</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <!-- Location Filter -->
            <div class="flex items-center justify-between px-4 py-3 border-2 border-black rounded-[11px] bg-white">
              <span class="text-base font-medium text-black tracking-[-0.32px]">Location</span>
              <svg width="19" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.7 20.4082C8.35817 20.4082 7.09717 20.1403 5.917 19.6046C4.73683 19.0689 3.71025 18.3418 2.83725 17.4235C1.96425 16.5051 1.27313 15.4252 0.763875 14.1837C0.254625 12.9422 0 11.6156 0 10.2041C0 8.79252 0.254625 7.46599 0.763875 6.22449C1.27313 4.98299 1.96425 3.90306 2.83725 2.98469C3.71025 2.06633 4.73683 1.33929 5.917 0.803571C7.09717 0.267857 8.35817 0 9.7 0C11.0418 0 12.3028 0.267857 13.483 0.803571C14.6632 1.33929 15.6898 2.06633 16.5627 2.98469C17.4358 3.90306 18.1269 4.98299 18.6361 6.22449C19.1454 7.46599 19.4 8.79252 19.4 10.2041C19.4 11.6156 19.1454 12.9422 18.6361 14.1837C18.1269 15.4252 17.4358 16.5051 16.5627 17.4235C15.6898 18.3418 14.6632 19.0689 13.483 19.6046C12.3028 20.1403 11.0418 20.4082 9.7 20.4082ZM9.7 15.8163C10.4275 15.051 11.0742 14.2602 11.64 13.4439C12.125 12.7466 12.5696 11.9813 12.9737 11.148C13.3779 10.3146 13.58 9.4898 13.58 8.67347C13.58 7.55102 13.2001 6.59014 12.4402 5.79082C11.6804 4.9915 10.767 4.59184 9.7 4.59184C8.633 4.59184 7.71958 4.9915 6.95975 5.79082C6.19992 6.59014 5.82 7.55102 5.82 8.67347C5.82 9.4898 6.02208 10.3146 6.42625 11.148C6.83042 11.9813 7.275 12.7466 7.76 13.4439C8.32583 14.2602 8.9725 15.051 9.7 15.8163ZM9.7 10.2041C9.29583 10.2041 8.95229 10.0553 8.66937 9.75765C8.38646 9.46003 8.245 9.09864 8.245 8.67347C8.245 8.2483 8.38646 7.8869 8.66937 7.58929C8.95229 7.29167 9.29583 7.14286 9.7 7.14286C10.1042 7.14286 10.4477 7.29167 10.7306 7.58929C11.0135 7.8869 11.155 8.2483 11.155 8.67347C11.155 9.09864 11.0135 9.46003 10.7306 9.75765C10.4477 10.0553 10.1042 10.2041 9.7 10.2041Z"
                  fill="#1C1B1F" />
              </svg>
            </div>

            <!-- Property Type Filter -->
            <div class="flex items-center justify-between px-4 py-3 border-2 border-black rounded-[11px] bg-white">
              <span class="text-base font-medium text-black tracking-[-0.32px]">Property Type</span>
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11 0L22 8.25L20.8 9.85L19 8.5V18H3V8.5L1.2 9.85L0 8.25L11 0ZM6.35 9.05C6.35 9.93333 6.825 10.875 7.775 11.875C8.725 12.875 9.8 13.9167 11 15C12.2 13.9167 13.275 12.875 14.225 11.875C15.175 10.875 15.65 9.93333 15.65 9.05C15.65 8.31667 15.4 7.70833 14.9 7.225C14.4 6.74167 13.8 6.5 13.1 6.5C12.6667 6.5 12.2708 6.5875 11.9125 6.7625C11.5542 6.9375 11.25 7.16667 11 7.45C10.75 7.16667 10.4375 6.9375 10.0625 6.7625C9.6875 6.5875 9.3 6.5 8.9 6.5C8.2 6.5 7.6 6.74167 7.1 7.225C6.6 7.70833 6.35 8.31667 6.35 9.05Z"
                  fill="#1C1B1F" />
              </svg>
            </div>

            <!-- Budget Filter -->
            <div class="flex items-center justify-between px-4 py-3 border-2 border-black rounded-[11px] bg-white">
              <span class="text-base font-medium text-black tracking-[-0.32px]">Budget</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.1 17H10.85V15.75C11.6833 15.6 12.4 15.275 13 14.775C13.6 14.275 13.9 13.5333 13.9 12.55C13.9 11.85 13.7 11.2083 13.3 10.625C12.9 10.0417 12.1 9.53333 10.9 9.1C9.9 8.76667 9.20833 8.475 8.825 8.225C8.44167 7.975 8.25 7.63333 8.25 7.2C8.25 6.76667 8.40417 6.425 8.7125 6.175C9.02083 5.925 9.46667 5.8 10.05 5.8C10.5833 5.8 11 5.92917 11.3 6.1875C11.6 6.44583 11.8167 6.76667 11.95 7.15L13.55 6.5C13.3667 5.91667 13.0292 5.40833 12.5375 4.975C12.0458 4.54167 11.5 4.3 10.9 4.25V3H9.15V4.25C8.31667 4.43333 7.66667 4.8 7.2 5.35C6.73333 5.9 6.5 6.51667 6.5 7.2C6.5 7.98333 6.72917 8.61667 7.1875 9.1C7.64583 9.58333 8.36667 10 9.35 10.35C10.4 10.7333 11.1292 11.075 11.5375 11.375C11.9458 11.675 12.15 12.0667 12.15 12.55C12.15 13.1 11.9542 13.5042 11.5625 13.7625C11.1708 14.0208 10.7 14.15 10.15 14.15C9.6 14.15 9.1125 13.9792 8.6875 13.6375C8.2625 13.2958 7.95 12.7833 7.75 12.1L6.1 12.75C6.33333 13.55 6.69583 14.1958 7.1875 14.6875C7.67917 15.1792 8.31667 15.5167 9.1 15.7V17ZM10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20Z"
                  fill="#1C1B1F" />
              </svg>
            </div>

            <!-- Search Button -->
            <button
              class="px-8 py-3 bg-blue-600 text-white rounded-[11px] text-base font-medium tracking-[-0.32px] hover:bg-blue-700 transition-colors">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Popular Homes Section -->
    <section class="py-20 px-6 lg:px-8">
      <div class="max-w-[1387px] mx-auto">
        <!-- Section Header -->
        <div class="mb-16">
          <div class="flex items-center gap-6 mb-4">
            <div class="w-12 h-[6px] bg-black"></div>
            <h3 class="text-[40px] font-medium text-black tracking-[-0.8px]">POPULAR</h3>
          </div>
          <h2 class="text-[48px] font-semibold text-black tracking-[-0.96px]">Our Popular Homes</h2>
        </div>

        <!-- Property Cards Grid -->
        <div class="flex flex-wrap justify-center  gap-6 m-10">
          <!-- Property Card 1 -->
          <div
            class="bg-white rounded-[20px] h-[360px] max-w-sm overflow-hidden shadow-2xl er:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:bg-blue-100 hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c40083dad30041373963c49d1fee46fbd4ebd130?width=746"
              alt="Property" class="w-full h-[200px] object-cover">

            <div class="p-6">
              <!-- Location -->
              <div class="flex items-center gap-2 mb-4">
                <svg width="19" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.7 20.4082C8.35817 20.4082 7.09717 20.1403 5.917 19.6046C4.73683 19.0689 3.71025 18.3418 2.83725 17.4235C1.96425 16.5051 1.27313 15.4252 0.763875 14.1837C0.254625 12.9422 0 11.6156 0 10.2041C0 8.79252 0.254625 7.46599 0.763875 6.22449C1.27313 4.98299 1.96425 3.90306 2.83725 2.98469C3.71025 2.06633 4.73683 1.33929 5.917 0.803571C7.09717 0.267857 8.35817 0 9.7 0C11.0418 0 12.3028 0.267857 13.483 0.803571C14.6632 1.33929 15.6898 2.06633 16.5627 2.98469C17.4358 3.90306 18.1269 4.98299 18.6361 6.22449C19.1454 7.46599 19.4 8.79252 19.4 10.2041C19.4 11.6156 19.1454 12.9422 18.6361 14.1837C18.1269 15.4252 17.4358 16.5051 16.5627 17.4235C15.6898 18.3418 14.6632 19.0689 13.483 19.6046C12.3028 20.1403 11.0418 20.4082 9.7 20.4082ZM9.7 15.8163C10.4275 15.051 11.0742 14.2602 11.64 13.4439C12.125 12.7466 12.5696 11.9813 12.9737 11.148C13.3779 10.3146 13.58 9.4898 13.58 8.67347C13.58 7.55102 13.2001 6.59014 12.4402 5.79082C11.6804 4.9915 10.767 4.59184 9.7 4.59184C8.633 4.59184 7.71958 4.9915 6.95975 5.79082C6.19992 6.59014 5.82 7.55102 5.82 8.67347C5.82 9.4898 6.02208 10.3146 6.42625 11.148C6.83042 11.9813 7.275 12.7466 7.76 13.4439C8.32583 14.2602 8.9725 15.051 9.7 15.8163ZM9.7 10.2041C9.29583 10.2041 8.95229 10.0553 8.66937 9.75765C8.38646 9.46003 8.245 9.09864 8.245 8.67347C8.245 8.2483 8.38646 7.8869 8.66937 7.58929C8.95229 7.29167 9.29583 7.14286 9.7 7.14286C10.1042 7.14286 10.4477 7.29167 10.7306 7.58929C11.0135 7.8869 11.155 8.2483 11.155 8.67347C11.155 9.09864 11.0135 9.46003 10.7306 9.75765C10.4477 10.0553 10.1042 10.2041 9.7 10.2041Z"
                    fill="#1C1B1F" />
                </svg>
                <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">Banana
                  Island,Lagos</span>
              </div>

              <!-- Property Details -->
              <div class="flex items-center gap-6 mb-4">
                <div class="flex items-center gap-2">
                  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 15V0H2V10H10V2H18C19.1 2 20.0417 2.39167 20.825 3.175C21.6083 3.95833 22 4.9 22 6V15H20V12H2V15H0ZM6 9C5.16667 9 4.45833 8.70833 3.875 8.125C3.29167 7.54167 3 6.83333 3 6C3 5.16667 3.29167 4.45833 3.875 3.875C4.45833 3.29167 5.16667 3 6 3C6.83333 3 7.54167 3.29167 8.125 3.875C8.70833 4.45833 9 5.16667 9 6C9 6.83333 8.70833 7.54167 8.125 8.125C7.54167 8.70833 6.83333 9 6 9ZM12 10H20V6C20 5.45 19.8042 4.97917 19.4125 4.5875C19.0208 4.19583 18.55 4 18 4H12V10ZM6 7C6.28333 7 6.52083 6.90417 6.7125 6.7125C6.90417 6.52083 7 6.28333 7 6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6C5 6.28333 5.09583 6.52083 5.2875 6.7125C5.47917 6.90417 5.71667 7 6 7Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">4 Bed</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 18V16L2 14V18H0ZM4 18V12L6 10V18H4ZM8 18V10L10 12.025V18H8ZM12 18V12.025L14 10.025V18H12ZM16 18V8L18 6V18H16ZM0 12.825V10L7 3L11 7L18 0V2.825L11 9.825L7 5.825L0 12.825Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">10x10 m</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 14H6V7H4V14ZM8 14H10V4H8V14ZM12 14H14V10H12V14ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.8042 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">1600 m</span>
                </div>
              </div>

              <!-- Price and Button -->
              <div class="flex items-center justify-between">
                <button
                  class="px-5 py-2 bg-blue-700 text-white rounded-[11px] text-base font-medium tracking-[-0.32px] hover:bg-green-800 transition-colors">
                  Book Now
                </button>
                <span class="text-base font-black text-black tracking-[-0.32px]">$120,000,000</span>
              </div>
            </div>
          </div>
          <!-- Property Card 2 -->
          <div
            class="bg-white rounded-[20px] h-[360px] max-w-sm overflow-hidden shadow-2xl er:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:bg-blue-100 hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c40083dad30041373963c49d1fee46fbd4ebd130?width=746"
              alt="Property" class="w-full h-[200px] object-cover">

            <div class="p-6">
              <!-- Location -->
              <div class="flex items-center gap-2 mb-4">
                <svg width="19" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.7 20.4082C8.35817 20.4082 7.09717 20.1403 5.917 19.6046C4.73683 19.0689 3.71025 18.3418 2.83725 17.4235C1.96425 16.5051 1.27313 15.4252 0.763875 14.1837C0.254625 12.9422 0 11.6156 0 10.2041C0 8.79252 0.254625 7.46599 0.763875 6.22449C1.27313 4.98299 1.96425 3.90306 2.83725 2.98469C3.71025 2.06633 4.73683 1.33929 5.917 0.803571C7.09717 0.267857 8.35817 0 9.7 0C11.0418 0 12.3028 0.267857 13.483 0.803571C14.6632 1.33929 15.6898 2.06633 16.5627 2.98469C17.4358 3.90306 18.1269 4.98299 18.6361 6.22449C19.1454 7.46599 19.4 8.79252 19.4 10.2041C19.4 11.6156 19.1454 12.9422 18.6361 14.1837C18.1269 15.4252 17.4358 16.5051 16.5627 17.4235C15.6898 18.3418 14.6632 19.0689 13.483 19.6046C12.3028 20.1403 11.0418 20.4082 9.7 20.4082ZM9.7 15.8163C10.4275 15.051 11.0742 14.2602 11.64 13.4439C12.125 12.7466 12.5696 11.9813 12.9737 11.148C13.3779 10.3146 13.58 9.4898 13.58 8.67347C13.58 7.55102 13.2001 6.59014 12.4402 5.79082C11.6804 4.9915 10.767 4.59184 9.7 4.59184C8.633 4.59184 7.71958 4.9915 6.95975 5.79082C6.19992 6.59014 5.82 7.55102 5.82 8.67347C5.82 9.4898 6.02208 10.3146 6.42625 11.148C6.83042 11.9813 7.275 12.7466 7.76 13.4439C8.32583 14.2602 8.9725 15.051 9.7 15.8163ZM9.7 10.2041C9.29583 10.2041 8.95229 10.0553 8.66937 9.75765C8.38646 9.46003 8.245 9.09864 8.245 8.67347C8.245 8.2483 8.38646 7.8869 8.66937 7.58929C8.95229 7.29167 9.29583 7.14286 9.7 7.14286C10.1042 7.14286 10.4477 7.29167 10.7306 7.58929C11.0135 7.8869 11.155 8.2483 11.155 8.67347C11.155 9.09864 11.0135 9.46003 10.7306 9.75765C10.4477 10.0553 10.1042 10.2041 9.7 10.2041Z"
                    fill="#1C1B1F" />
                </svg>
                <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">Banana
                  Island,Lagos</span>
              </div>

              <!-- Property Details -->
              <div class="flex items-center gap-6 mb-4">
                <div class="flex items-center gap-2">
                  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 15V0H2V10H10V2H18C19.1 2 20.0417 2.39167 20.825 3.175C21.6083 3.95833 22 4.9 22 6V15H20V12H2V15H0ZM6 9C5.16667 9 4.45833 8.70833 3.875 8.125C3.29167 7.54167 3 6.83333 3 6C3 5.16667 3.29167 4.45833 3.875 3.875C4.45833 3.29167 5.16667 3 6 3C6.83333 3 7.54167 3.29167 8.125 3.875C8.70833 4.45833 9 5.16667 9 6C9 6.83333 8.70833 7.54167 8.125 8.125C7.54167 8.70833 6.83333 9 6 9ZM12 10H20V6C20 5.45 19.8042 4.97917 19.4125 4.5875C19.0208 4.19583 18.55 4 18 4H12V10ZM6 7C6.28333 7 6.52083 6.90417 6.7125 6.7125C6.90417 6.52083 7 6.28333 7 6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6C5 6.28333 5.09583 6.52083 5.2875 6.7125C5.47917 6.90417 5.71667 7 6 7Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">4 Bed</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 18V16L2 14V18H0ZM4 18V12L6 10V18H4ZM8 18V10L10 12.025V18H8ZM12 18V12.025L14 10.025V18H12ZM16 18V8L18 6V18H16ZM0 12.825V10L7 3L11 7L18 0V2.825L11 9.825L7 5.825L0 12.825Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">10x10 m</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 14H6V7H4V14ZM8 14H10V4H8V14ZM12 14H14V10H12V14ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.8042 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">1600 m</span>
                </div>
              </div>

              <!-- Price and Button -->
              <div class="flex items-center justify-between">
                <button
                  class="px-5 py-2 bg-blue-700 text-white rounded-[11px] text-base font-medium tracking-[-0.32px] hover:bg-green-800 transition-colors">
                  Book Now
                </button>
                <span class="text-base font-black text-black tracking-[-0.32px]">$120,000,000</span>
              </div>
            </div>
          </div>
          <!-- Property Card 3 -->
          <div
            class="bg-white rounded-[20px] h-[360px] max-w-sm overflow-hidden shadow-2xl er:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:bg-blue-100 hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/c40083dad30041373963c49d1fee46fbd4ebd130?width=746"
              alt="Property" class="w-full h-[200px] object-cover">

            <div class="p-6">
              <!-- Location -->
              <div class="flex items-center gap-2 mb-4">
                <svg width="19" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.7 20.4082C8.35817 20.4082 7.09717 20.1403 5.917 19.6046C4.73683 19.0689 3.71025 18.3418 2.83725 17.4235C1.96425 16.5051 1.27313 15.4252 0.763875 14.1837C0.254625 12.9422 0 11.6156 0 10.2041C0 8.79252 0.254625 7.46599 0.763875 6.22449C1.27313 4.98299 1.96425 3.90306 2.83725 2.98469C3.71025 2.06633 4.73683 1.33929 5.917 0.803571C7.09717 0.267857 8.35817 0 9.7 0C11.0418 0 12.3028 0.267857 13.483 0.803571C14.6632 1.33929 15.6898 2.06633 16.5627 2.98469C17.4358 3.90306 18.1269 4.98299 18.6361 6.22449C19.1454 7.46599 19.4 8.79252 19.4 10.2041C19.4 11.6156 19.1454 12.9422 18.6361 14.1837C18.1269 15.4252 17.4358 16.5051 16.5627 17.4235C15.6898 18.3418 14.6632 19.0689 13.483 19.6046C12.3028 20.1403 11.0418 20.4082 9.7 20.4082ZM9.7 15.8163C10.4275 15.051 11.0742 14.2602 11.64 13.4439C12.125 12.7466 12.5696 11.9813 12.9737 11.148C13.3779 10.3146 13.58 9.4898 13.58 8.67347C13.58 7.55102 13.2001 6.59014 12.4402 5.79082C11.6804 4.9915 10.767 4.59184 9.7 4.59184C8.633 4.59184 7.71958 4.9915 6.95975 5.79082C6.19992 6.59014 5.82 7.55102 5.82 8.67347C5.82 9.4898 6.02208 10.3146 6.42625 11.148C6.83042 11.9813 7.275 12.7466 7.76 13.4439C8.32583 14.2602 8.9725 15.051 9.7 15.8163ZM9.7 10.2041C9.29583 10.2041 8.95229 10.0553 8.66937 9.75765C8.38646 9.46003 8.245 9.09864 8.245 8.67347C8.245 8.2483 8.38646 7.8869 8.66937 7.58929C8.95229 7.29167 9.29583 7.14286 9.7 7.14286C10.1042 7.14286 10.4477 7.29167 10.7306 7.58929C11.0135 7.8869 11.155 8.2483 11.155 8.67347C11.155 9.09864 11.0135 9.46003 10.7306 9.75765C10.4477 10.0553 10.1042 10.2041 9.7 10.2041Z"
                    fill="#1C1B1F" />
                </svg>
                <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">Banana
                  Island,Lagos</span>
              </div>

              <!-- Property Details -->
              <div class="flex items-center gap-6 mb-4">
                <div class="flex items-center gap-2">
                  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 15V0H2V10H10V2H18C19.1 2 20.0417 2.39167 20.825 3.175C21.6083 3.95833 22 4.9 22 6V15H20V12H2V15H0ZM6 9C5.16667 9 4.45833 8.70833 3.875 8.125C3.29167 7.54167 3 6.83333 3 6C3 5.16667 3.29167 4.45833 3.875 3.875C4.45833 3.29167 5.16667 3 6 3C6.83333 3 7.54167 3.29167 8.125 3.875C8.70833 4.45833 9 5.16667 9 6C9 6.83333 8.70833 7.54167 8.125 8.125C7.54167 8.70833 6.83333 9 6 9ZM12 10H20V6C20 5.45 19.8042 4.97917 19.4125 4.5875C19.0208 4.19583 18.55 4 18 4H12V10ZM6 7C6.28333 7 6.52083 6.90417 6.7125 6.7125C6.90417 6.52083 7 6.28333 7 6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6C5 6.28333 5.09583 6.52083 5.2875 6.7125C5.47917 6.90417 5.71667 7 6 7Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">4 Bed</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 18V16L2 14V18H0ZM4 18V12L6 10V18H4ZM8 18V10L10 12.025V18H8ZM12 18V12.025L14 10.025V18H12ZM16 18V8L18 6V18H16ZM0 12.825V10L7 3L11 7L18 0V2.825L11 9.825L7 5.825L0 12.825Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">10x10 m</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 14H6V7H4V14ZM8 14H10V4H8V14ZM12 14H14V10H12V14ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.8042 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">1600 m</span>
                </div>
              </div>

              <!-- Price and Button -->
              <div class="flex items-center justify-between">
                <button
                  class="px-5 py-2 bg-blue-700 text-white rounded-[11px] text-base font-medium tracking-[-0.32px] hover:bg-green-800 transition-colors">
                  Book Now
                </button>
                <span class="text-base font-black text-black tracking-[-0.32px]">$120,000,000</span>
              </div>
            </div>
          </div>
          <!-- Property Card 4 -->
          <div
            class="bg-white rounded-[20px] h-[360px] max-w-sm overflow-hidden shadow-2xl er:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:bg-blue-100 hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden">
            <img
              src="https://housing.com/news/wp-content/uploads/2023/01/Mountain-house-designs-feature-compressed.jpg? width=746"
              alt="Property" class="w-full h-[200px] object-cover">

            <div class="p-6">
              <!-- Location -->
              <div class="flex items-center gap-2 mb-4">
                <svg width="19" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.7 20.4082C8.35817 20.4082 7.09717 20.1403 5.917 19.6046C4.73683 19.0689 3.71025 18.3418 2.83725 17.4235C1.96425 16.5051 1.27313 15.4252 0.763875 14.1837C0.254625 12.9422 0 11.6156 0 10.2041C0 8.79252 0.254625 7.46599 0.763875 6.22449C1.27313 4.98299 1.96425 3.90306 2.83725 2.98469C3.71025 2.06633 4.73683 1.33929 5.917 0.803571C7.09717 0.267857 8.35817 0 9.7 0C11.0418 0 12.3028 0.267857 13.483 0.803571C14.6632 1.33929 15.6898 2.06633 16.5627 2.98469C17.4358 3.90306 18.1269 4.98299 18.6361 6.22449C19.1454 7.46599 19.4 8.79252 19.4 10.2041C19.4 11.6156 19.1454 12.9422 18.6361 14.1837C18.1269 15.4252 17.4358 16.5051 16.5627 17.4235C15.6898 18.3418 14.6632 19.0689 13.483 19.6046C12.3028 20.1403 11.0418 20.4082 9.7 20.4082ZM9.7 15.8163C10.4275 15.051 11.0742 14.2602 11.64 13.4439C12.125 12.7466 12.5696 11.9813 12.9737 11.148C13.3779 10.3146 13.58 9.4898 13.58 8.67347C13.58 7.55102 13.2001 6.59014 12.4402 5.79082C11.6804 4.9915 10.767 4.59184 9.7 4.59184C8.633 4.59184 7.71958 4.9915 6.95975 5.79082C6.19992 6.59014 5.82 7.55102 5.82 8.67347C5.82 9.4898 6.02208 10.3146 6.42625 11.148C6.83042 11.9813 7.275 12.7466 7.76 13.4439C8.32583 14.2602 8.9725 15.051 9.7 15.8163ZM9.7 10.2041C9.29583 10.2041 8.95229 10.0553 8.66937 9.75765C8.38646 9.46003 8.245 9.09864 8.245 8.67347C8.245 8.2483 8.38646 7.8869 8.66937 7.58929C8.95229 7.29167 9.29583 7.14286 9.7 7.14286C10.1042 7.14286 10.4477 7.29167 10.7306 7.58929C11.0135 7.8869 11.155 8.2483 11.155 8.67347C11.155 9.09864 11.0135 9.46003 10.7306 9.75765C10.4477 10.0553 10.1042 10.2041 9.7 10.2041Z"
                    fill="#1C1B1F" />
                </svg>
                <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">Banana
                  Island,Lagos</span>
              </div>

              <!-- Property Details -->
              <div class="flex items-center gap-6 mb-4">
                <div class="flex items-center gap-2">
                  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 15V0H2V10H10V2H18C19.1 2 20.0417 2.39167 20.825 3.175C21.6083 3.95833 22 4.9 22 6V15H20V12H2V15H0ZM6 9C5.16667 9 4.45833 8.70833 3.875 8.125C3.29167 7.54167 3 6.83333 3 6C3 5.16667 3.29167 4.45833 3.875 3.875C4.45833 3.29167 5.16667 3 6 3C6.83333 3 7.54167 3.29167 8.125 3.875C8.70833 4.45833 9 5.16667 9 6C9 6.83333 8.70833 7.54167 8.125 8.125C7.54167 8.70833 6.83333 9 6 9ZM12 10H20V6C20 5.45 19.8042 4.97917 19.4125 4.5875C19.0208 4.19583 18.55 4 18 4H12V10ZM6 7C6.28333 7 6.52083 6.90417 6.7125 6.7125C6.90417 6.52083 7 6.28333 7 6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6C5 6.28333 5.09583 6.52083 5.2875 6.7125C5.47917 6.90417 5.71667 7 6 7Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">4 Bed</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 18V16L2 14V18H0ZM4 18V12L6 10V18H4ZM8 18V10L10 12.025V18H8ZM12 18V12.025L14 10.025V18H12ZM16 18V8L18 6V18H16ZM0 12.825V10L7 3L11 7L18 0V2.825L11 9.825L7 5.825L0 12.825Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">10x10 m</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 14H6V7H4V14ZM8 14H10V4H8V14ZM12 14H14V10H12V14ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.8042 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">1600 m</span>
                </div>
              </div>

              <!-- Price and Button -->
              <div class="flex items-center justify-between">
                <button
                  class="px-5 py-2 bg-blue-700 text-white rounded-[11px] text-base font-medium tracking-[-0.32px] hover:bg-green-800 transition-colors">
                  Book Now
                </button>
                <span class="text-base font-black text-black tracking-[-0.32px]">$120,000,000</span>
              </div>
            </div>
          </div>
          <!-- Property Card 5 -->
          <div
            class="bg-white rounded-[20px] h-[360px] max-w-sm overflow-hidden shadow-2xl er:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:bg-blue-100 hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden">
            <img src="https://cdn.houseplansservices.com/content/8anheh4thlpbg2j5k9h3q5j5cb/w991x660.jpg?width=746"
              alt="Property" class="w-full h-[200px] object-cover">

            <div class="p-6">
              <!-- Location -->
              <div class="flex items-center gap-2 mb-4">
                <svg width="19" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.7 20.4082C8.35817 20.4082 7.09717 20.1403 5.917 19.6046C4.73683 19.0689 3.71025 18.3418 2.83725 17.4235C1.96425 16.5051 1.27313 15.4252 0.763875 14.1837C0.254625 12.9422 0 11.6156 0 10.2041C0 8.79252 0.254625 7.46599 0.763875 6.22449C1.27313 4.98299 1.96425 3.90306 2.83725 2.98469C3.71025 2.06633 4.73683 1.33929 5.917 0.803571C7.09717 0.267857 8.35817 0 9.7 0C11.0418 0 12.3028 0.267857 13.483 0.803571C14.6632 1.33929 15.6898 2.06633 16.5627 2.98469C17.4358 3.90306 18.1269 4.98299 18.6361 6.22449C19.1454 7.46599 19.4 8.79252 19.4 10.2041C19.4 11.6156 19.1454 12.9422 18.6361 14.1837C18.1269 15.4252 17.4358 16.5051 16.5627 17.4235C15.6898 18.3418 14.6632 19.0689 13.483 19.6046C12.3028 20.1403 11.0418 20.4082 9.7 20.4082ZM9.7 15.8163C10.4275 15.051 11.0742 14.2602 11.64 13.4439C12.125 12.7466 12.5696 11.9813 12.9737 11.148C13.3779 10.3146 13.58 9.4898 13.58 8.67347C13.58 7.55102 13.2001 6.59014 12.4402 5.79082C11.6804 4.9915 10.767 4.59184 9.7 4.59184C8.633 4.59184 7.71958 4.9915 6.95975 5.79082C6.19992 6.59014 5.82 7.55102 5.82 8.67347C5.82 9.4898 6.02208 10.3146 6.42625 11.148C6.83042 11.9813 7.275 12.7466 7.76 13.4439C8.32583 14.2602 8.9725 15.051 9.7 15.8163ZM9.7 10.2041C9.29583 10.2041 8.95229 10.0553 8.66937 9.75765C8.38646 9.46003 8.245 9.09864 8.245 8.67347C8.245 8.2483 8.38646 7.8869 8.66937 7.58929C8.95229 7.29167 9.29583 7.14286 9.7 7.14286C10.1042 7.14286 10.4477 7.29167 10.7306 7.58929C11.0135 7.8869 11.155 8.2483 11.155 8.67347C11.155 9.09864 11.0135 9.46003 10.7306 9.75765C10.4477 10.0553 10.1042 10.2041 9.7 10.2041Z"
                    fill="#1C1B1F" />
                </svg>
                <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">Banana
                  Island,Lagos</span>
              </div>

              <!-- Property Details -->
              <div class="flex items-center gap-6 mb-4">
                <div class="flex items-center gap-2">
                  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 15V0H2V10H10V2H18C19.1 2 20.0417 2.39167 20.825 3.175C21.6083 3.95833 22 4.9 22 6V15H20V12H2V15H0ZM6 9C5.16667 9 4.45833 8.70833 3.875 8.125C3.29167 7.54167 3 6.83333 3 6C3 5.16667 3.29167 4.45833 3.875 3.875C4.45833 3.29167 5.16667 3 6 3C6.83333 3 7.54167 3.29167 8.125 3.875C8.70833 4.45833 9 5.16667 9 6C9 6.83333 8.70833 7.54167 8.125 8.125C7.54167 8.70833 6.83333 9 6 9ZM12 10H20V6C20 5.45 19.8042 4.97917 19.4125 4.5875C19.0208 4.19583 18.55 4 18 4H12V10ZM6 7C6.28333 7 6.52083 6.90417 6.7125 6.7125C6.90417 6.52083 7 6.28333 7 6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6C5 6.28333 5.09583 6.52083 5.2875 6.7125C5.47917 6.90417 5.71667 7 6 7Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">4 Bed</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 18V16L2 14V18H0ZM4 18V12L6 10V18H4ZM8 18V10L10 12.025V18H8ZM12 18V12.025L14 10.025V18H12ZM16 18V8L18 6V18H16ZM0 12.825V10L7 3L11 7L18 0V2.825L11 9.825L7 5.825L0 12.825Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">10x10 m</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 14H6V7H4V14ZM8 14H10V4H8V14ZM12 14H14V10H12V14ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.8042 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">1600 m</span>
                </div>
              </div>

              <!-- Price and Button -->
              <div class="flex items-center justify-between">
                <button
                  class="px-5 py-2 bg-blue-700 text-white rounded-[11px] text-base font-medium tracking-[-0.32px] hover:bg-green-800 transition-colors">
                  Book Now
                </button>
                <span class="text-base font-black text-black tracking-[-0.32px]">$120,000,000</span>
              </div>
            </div>
          </div>
          <!-- Property Card 6 -->
          <div
            class="bg-white rounded-[20px] h-[360px] max-w-sm overflow-hidden shadow-2xl er:shadow-indigo-500/30 hover:shadow-2xl hover:scale-[1.02] hover:bg-blue-100 hover:-translate-y-1 active:scale-95 transition-all duration-500 ease-out cursor-pointer hover:border-indigo-400/60 overflow-hidden">
            <img
              src="https://prolinerangehoods.com/cdn/shop/articles/5-mountain-home-exterior-ideas-326930.jpg?v=1719132363"
              alt="Property" class="w-full h-[200px] object-cover">

            <div class="p-6">
              <!-- Location -->
              <div class="flex items-center gap-2 mb-4">
                <svg width="19" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.7 20.4082C8.35817 20.4082 7.09717 20.1403 5.917 19.6046C4.73683 19.0689 3.71025 18.3418 2.83725 17.4235C1.96425 16.5051 1.27313 15.4252 0.763875 14.1837C0.254625 12.9422 0 11.6156 0 10.2041C0 8.79252 0.254625 7.46599 0.763875 6.22449C1.27313 4.98299 1.96425 3.90306 2.83725 2.98469C3.71025 2.06633 4.73683 1.33929 5.917 0.803571C7.09717 0.267857 8.35817 0 9.7 0C11.0418 0 12.3028 0.267857 13.483 0.803571C14.6632 1.33929 15.6898 2.06633 16.5627 2.98469C17.4358 3.90306 18.1269 4.98299 18.6361 6.22449C19.1454 7.46599 19.4 8.79252 19.4 10.2041C19.4 11.6156 19.1454 12.9422 18.6361 14.1837C18.1269 15.4252 17.4358 16.5051 16.5627 17.4235C15.6898 18.3418 14.6632 19.0689 13.483 19.6046C12.3028 20.1403 11.0418 20.4082 9.7 20.4082ZM9.7 15.8163C10.4275 15.051 11.0742 14.2602 11.64 13.4439C12.125 12.7466 12.5696 11.9813 12.9737 11.148C13.3779 10.3146 13.58 9.4898 13.58 8.67347C13.58 7.55102 13.2001 6.59014 12.4402 5.79082C11.6804 4.9915 10.767 4.59184 9.7 4.59184C8.633 4.59184 7.71958 4.9915 6.95975 5.79082C6.19992 6.59014 5.82 7.55102 5.82 8.67347C5.82 9.4898 6.02208 10.3146 6.42625 11.148C6.83042 11.9813 7.275 12.7466 7.76 13.4439C8.32583 14.2602 8.9725 15.051 9.7 15.8163ZM9.7 10.2041C9.29583 10.2041 8.95229 10.0553 8.66937 9.75765C8.38646 9.46003 8.245 9.09864 8.245 8.67347C8.245 8.2483 8.38646 7.8869 8.66937 7.58929C8.95229 7.29167 9.29583 7.14286 9.7 7.14286C10.1042 7.14286 10.4477 7.29167 10.7306 7.58929C11.0135 7.8869 11.155 8.2483 11.155 8.67347C11.155 9.09864 11.0135 9.46003 10.7306 9.75765C10.4477 10.0553 10.1042 10.2041 9.7 10.2041Z"
                    fill="#1C1B1F" />
                </svg>
                <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">Banana
                  Island,Lagos</span>
              </div>

              <!-- Property Details -->
              <div class="flex items-center gap-6 mb-4">
                <div class="flex items-center gap-2">
                  <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 15V0H2V10H10V2H18C19.1 2 20.0417 2.39167 20.825 3.175C21.6083 3.95833 22 4.9 22 6V15H20V12H2V15H0ZM6 9C5.16667 9 4.45833 8.70833 3.875 8.125C3.29167 7.54167 3 6.83333 3 6C3 5.16667 3.29167 4.45833 3.875 3.875C4.45833 3.29167 5.16667 3 6 3C6.83333 3 7.54167 3.29167 8.125 3.875C8.70833 4.45833 9 5.16667 9 6C9 6.83333 8.70833 7.54167 8.125 8.125C7.54167 8.70833 6.83333 9 6 9ZM12 10H20V6C20 5.45 19.8042 4.97917 19.4125 4.5875C19.0208 4.19583 18.55 4 18 4H12V10ZM6 7C6.28333 7 6.52083 6.90417 6.7125 6.7125C6.90417 6.52083 7 6.28333 7 6C7 5.71667 6.90417 5.47917 6.7125 5.2875C6.52083 5.09583 6.28333 5 6 5C5.71667 5 5.47917 5.09583 5.2875 5.2875C5.09583 5.47917 5 5.71667 5 6C5 6.28333 5.09583 6.52083 5.2875 6.7125C5.47917 6.90417 5.71667 7 6 7Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">4 Bed</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M0 18V16L2 14V18H0ZM4 18V12L6 10V18H4ZM8 18V10L10 12.025V18H8ZM12 18V12.025L14 10.025V18H12ZM16 18V8L18 6V18H16ZM0 12.825V10L7 3L11 7L18 0V2.825L11 9.825L7 5.825L0 12.825Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">10x10 m</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M4 14H6V7H4V14ZM8 14H10V4H8V14ZM12 14H14V10H12V14ZM2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0H16C16.55 0 17.0208 0.195833 17.4125 0.5875C17.8042 0.979167 18 1.45 18 2V16C18 16.55 17.8042 17.0208 17.4125 17.4125C17.8042 17.8042 16.55 18 16 18H2ZM2 16H16V2H2V16Z"
                      fill="#1C1B1F" />
                  </svg>
                  <span class="text-base font-semibold text-black tracking-[-0.32px] font-instrument">1600 m</span>
                </div>
              </div>

              <!-- Price and Button -->
              <div class="flex items-center justify-between">
                <button
                  class="px-5 py-2 bg-blue-700 text-white rounded-[11px] text-base font-medium tracking-[-0.32px] hover:bg-green-800 transition-colors">
                  Book Now
                </button>
                <span class="text-base font-black text-black tracking-[-0.32px]">$120,000,000</span>
              </div>
            </div>
          </div>
        </div>


        <div>
         


          <div class="bg-white dark:bg-gray-900">
            <iframe class="w-full md:px-8 pb-8 px-4"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1136.5930139771904!2d104.91109523974878!3d11.653472412087895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095370e0247513%3A0xf0bc571e4ce52487!2sInstitute%20of%20Digital%20Governance%20-%20IDG!5e1!3m2!1sen!2skh!4v1759656049445!5m2!1sen!2skh"
              height="350" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>



          <!-- <div
            class="mt-16 max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img class="rounded-t-lg" src="/src/assets/Photos/House.png" alt="" />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology
                  acquisitions 2021</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology
                acquisitions of 2021 so far, in reverse chronological order.</p>
              <a href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div> -->
        </div>
      </div>
    </section>



    <!-- Footer -->

  </div>
</template>