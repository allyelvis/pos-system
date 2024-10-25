<template>
  <div>
    <h2>Garage Service Management</h2>
    <button @click="addNewServiceRecord">Add Service Record</button>
    <ul>
      <li v-for="record in serviceRecords" :key="record._id">
        <h3>Vehicle: {{ record.vehicleModel }} - Owner: {{ record.ownerName }}</h3>
        <p>Status: {{ record.status }}</p>
        <p>Diagnosis: {{ record.diagnosis }}</p>
        <button @click="updateStatus(record, 'In Progress')">In Progress</button>
        <button @click="updateStatus(record, 'Completed')">Completed</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      serviceRecords: [],
    };
  },
  created() {
    this.fetchServiceRecords();
  },
  methods: {
    fetchServiceRecords() {
      axios.get('/api/service-records')
        .then(response => {
          this.serviceRecords = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
    addNewServiceRecord() {
      // Logic for adding a new service record
      // Placeholder for demo; actual implementation needed
    },
    updateStatus(record, status) {
      record.status = status;
      axios.put(`/api/service-records/${record._id}`, { status: status })
        .then(() => {
          this.fetchServiceRecords();
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
}
</script>
