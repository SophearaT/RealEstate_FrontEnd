<template>
  <section class="flex-1 bg-gray-50 p-8">
  <h2 class="text-2xl font-semibold mb-6">Edit Profile</h2>

  <!-- Profile photo -->
  <div class="flex items-center gap-6 mb-8">
    <img src="/src/assets/Photos/mypic.jpg" class="w-24 h-24 rounded-full" />
    <div>
      <button class="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
        Upload new photo
      </button>
      <p class="text-sm text-gray-500 mt-1">At least 800x800 px recommended. JPG or PNG is allowed.</p>
    </div>
  </div>

  <!-- Personal Info -->
  <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-medium">Personal Info</h3>
      <button class="text-blue-500 text-sm">Edit</button>
    </div>
    <div class="space-y-2">
      <p><strong>Full Name:</strong> Ronald Richards</p>
      <p><strong>Email:</strong> RonaldRich@example.com</p>
      <p><strong>Phone:</strong> (219) 555-0114</p>
      <p><strong>Address:</strong> 123 Main St, Anytown, USA</p>
      <p><strong>Password:</strong> ********</p>
    </div>
  </div>

  <!-- Location -->
  <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-medium">Location</h3>
    </div>
    <div class="flex gap-3">
      <input type="text" class="border rounded-md px-3 py-2 w-full" value="California" />
      <button class="bg-blue-600 text-white px-4 rounded-md">Save changes</button>
    </div>
  </div>

  <!-- Bio -->
  <div class="bg-white rounded-xl shadow-sm p-6">
    <div class="flex justify-between items-center mb-4">
      <h3 class="font-medium">Bio</h3>
      <button class="text-blue-500 text-sm">Edit</button>
    </div>
    <p class="text-gray-600">
      Hi 👋, I'm Ronald, a passionate UX designer with 10 years of experience...
    </p>
  </div>
</section>

  <!-- User's Properties Section -->

  <div class="flex flex-wrap justify-center gap-6 p-6 animate-fadeIn">
    <!--House1-->
     <div class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
    </a>
    <div class="p-3">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far.
      </p>
      <div class="flex gap-2 justify-center">
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Read more
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
          Edit
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
          Delete
        </a>
      </div>
    </div>
  </div>
    <!--House2-->
     <div class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
    </a>
    <div class="p-3">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far.
      </p>
      <div class="flex gap-2 justify-center">
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Read more
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
          Edit
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
          Delete
        </a>
      </div>
    </div>
  </div>
    <!--House3-->
     <div class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
    </a>
    <div class="p-3">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far.
      </p>
      <div class="flex gap-2 justify-center">
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Read more
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
          Edit
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
          Delete
        </a>
      </div>
    </div>
  </div>
    <!--House4-->
     <div class="w-64 h-[320px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="rounded-t-lg w-full h-32 object-cover" src="/src/assets/Photos/House.png" alt="House" />
    </a>
    <div class="p-3">
      <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p class="mb-3 text-sm text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far.
      </p>
      <div class="flex gap-2 justify-center">
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800">
          Read more
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800">
          Edit
        </a>
        <a href="#" class="inline-flex items-center px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800">
          Delete
        </a>
      </div>
    </div>
  </div>
  </div>

</template>
<script>
//set up later
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-in-out;
}
</style>
