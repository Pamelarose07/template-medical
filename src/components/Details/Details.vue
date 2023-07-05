
<template>
  <div>
    <!-- Modal -->
    <div class="bg-gray-100 mt-16 grid grid-cols-2 p-20 ">
      <!-- Appointment Details -->
      
      <div class="bg-white p-8 shadow-xl">
        
        <h2 class="text-xl font-semibold mb-4 text-center">Appointment Details</h2>

        <!-- Choose Department -->
        <div class="mb-4">
          <label for="department" class="block mb-1">Choose Department:</label>
          <select id="department" v-model="selectedDepartment" class="w-full p-2 border border-gray-300 rounded">
            <option value="">Select Department</option>
            <option value="department1">Department 1</option>
            <option value="department2">Department 2</option>
            <option value="department3">Department 3</option>
          </select>
        </div>

        <!-- Select Doctor -->
        <div class="mb-4">
          <label for="doctor" class="block mb-1">Select Doctor:</label>
          <select id="doctor" v-model="selectedDoctor" class="w-full p-2 border border-gray-300 rounded">
            <option value="">Select Doctor</option>
            <option value="doctor1">Doctor 1</option>
            <option value="doctor2">Doctor 2</option>
            <option value="doctor3">Doctor 3</option>
          </select>
        </div>

        <!-- Name -->
        <div class="mb-4">
          <label for="name" class="block mb-1">Name:</label>
          <input id="name" v-model="name" type="text" class="w-full p-2 border border-gray-300 rounded">
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block mb-1">Email:</label>
          <input id="email" v-model="email" type="email" class="w-full p-2 border border-gray-300 rounded">
        </div>

        <!-- Date -->
        <div class="mb-4">
          <label for="date" class="block mb-1">Date:</label>
          <input id="date" v-model="date" type="date" class="w-full p-2 border border-gray-300 rounded">
        </div>

        <!-- Time -->
        <div class="mb-4">
          <label for="time" class="block mb-1">Time:</label>
          <input id="time" v-model="time" type="time" class="w-full p-2 border border-gray-300 rounded">
        </div>

        <!-- Submit button -->
        <button @click="submitAppointment" class="w-30 bg-blue-400 hover:bg-blue-500 text-black font-bold py-2 px-4 rounded ml-48">
          Submit
        </button>
      </div>

      <!-- Appointment Form -->
      <div class="bg-blue-400 p-8 shadow-xl">
        <h2 class="text-xl font-semibold mb-4 text-center">Opening Hours</h2>
        <!-- Add your appointment form elements here -->
      </div>
    </div>
  </div>
</template>

  <script>
  export default {
    data() {
      return {
        showModal: false,
        selectedDepartment: '',
        selectedDoctor: '',
        name: '',
        email: '',
        date: '',
        time: '',
      };
    },
    methods: {
      openModal() {
        this.showModal = true;
      },
      submitAppointment() {
        // Perform submission logic here
        console.log('Appointment submitted!');
        
        // Reset form fields
        this.selectedDepartment = '';
        this.selectedDoctor = '';
        this.name = '';
        this.email = '';
        this.date = '';
        this.time = '';
  
        // Close the modal
        this.showModal = false;
      },
    },
  };
  </script>