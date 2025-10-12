<template>
   <div class="flex-1 flex flex-col gap-6">
        <!-- Stats Cards -->
        <div class="flex justify-center gap-4 flex-wrap">
          <div class="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between w-40 transition transform hover:scale-105 hover:shadow-lg">
            <h3 class="text-sm text-gray-500">All Bookings</h3>
            <div class="flex items-center justify-between mt-2">
              <p class="text-2xl font-semibold">5</p>
              <span class="text-xs text-gray-400">35.67%</span>
            </div>
            <div class="h-2 mt-3 rounded-lg bg-blue-400"></div>
          </div>

          <div class="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between w-40 transition transform hover:scale-105 hover:shadow-lg">
            <h3 class="text-sm text-gray-500">Completed</h3>
            <div class="flex items-center justify-between mt-2">
              <p class="text-2xl font-semibold">2</p>
              <span class="text-xs text-gray-400">25%</span>
            </div>
            <div class="h-2 mt-3 rounded-lg bg-purple-400"></div>
          </div>

          <div class="bg-white rounded-xl shadow-md p-4 flex flex-col justify-between w-40 transition transform hover:scale-105 hover:shadow-lg">
            <h3 class="text-sm text-gray-500">Cancelled</h3>
            <div class="flex items-center justify-between mt-2">
              <p class="text-2xl font-semibold">5</p>
              <span class="text-xs text-gray-400">35.67%</span>
            </div>
            <div class="h-2 mt-3 rounded-lg bg-orange-400"></div>
          </div>
        </div>

        <!-- Appointments Table -->
        <div class="bg-white rounded-2xl shadow-md p-6 transition transform hover:scale-[1.01] hover:shadow-lg">
          <div class="flex justify-between items-center mb-3">
            <h3 class="font-semibold text-gray-700">Appointments</h3>
            <button class="text-sm text-blue-500 hover:underline">
              All Time
            </button>
          </div>

          <table class="w-full text-left text-sm">
            <tbody>
              <tr v-for="(item, index) in appointments" :key="index"
                class="border-t border-gray-100 hover:bg-gray-50 transition">
                <td class="py-2 w-1/6 text-gray-500">{{ item.date }}</td>
                <td class="py-2 w-1/3 font-medium">{{ item.service }}</td>
                <td class="py-2">
                  <span :class="[
                    'px-2 py-1 rounded-full text-xs',
                    statusColor(item.status)
                  ]">
                    {{ item.status }}
                  </span>
                </td>
                <td class="py-2 font-semibold text-gray-600 text-right">
                  ${{ item.price }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Invoices Table -->
        <div class="bg-white rounded-2xl shadow-md p-6 transition transform hover:scale-[1.01] hover:shadow-lg">
          <h3 class="font-semibold text-gray-700 mb-3">Invoices</h3>
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="text-gray-500 text-xs border-b">
                <th class="pb-2">Date</th>
                <th>Invoice ID</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in invoices" :key="index"
                class="border-t border-gray-100 hover:bg-gray-50 transition">
                <td class="py-2 text-gray-500">{{ item.date }}</td>
                <td class="py-2">{{ item.id }}</td>
                <td class="py-2">${{ item.amount }}</td>
                <td class="py-2">
                  <span class="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Paid</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
</template>


<script setup>
const appointments = [
  { date: "29 Sep", service: "Plumbing", status: "Cancelled", price: 50 },
  { date: "15 Oct", service: "Carpentry", status: "Booked", price: 345 },
  { date: "11 Nov", service: "Painting", status: "Done", price: 130 },
  { date: "13 Jan", service: "Hair Drying", status: "Done", price: 50 },
  { date: "24 Feb", service: "Blue Print Structure", status: "Booked", price: 80 },
];

const invoices = [
  { date: "03/31/2019", id: "315462", amount: 99.0 },
  { date: "04/02/2019", id: "315463", amount: 120.0 },
];

const statusColor = (status) => {
  if (status === "Done") return "bg-green-100 text-green-700";
  if (status === "Booked") return "bg-blue-100 text-blue-700";
  if (status === "Cancelled") return "bg-red-100 text-red-600";
  return "";
};
</script>
