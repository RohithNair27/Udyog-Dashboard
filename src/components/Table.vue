<script>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
export default {
  components:{
    DataTable,Column
  },

  data() {
    return {
      people: [
    { code: 'P001', name: 'John Doe', role: 'Farm Hand', image: 'https://picsum.photos/200?random=1', joiningDate: '2023-01-15', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P002', name: 'Jane Smith', role: 'Farm Hand', image: 'https://picsum.photos/200?random=2', joiningDate: '2023-02-10', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P003', name: 'Mark Brown', role: 'Farm Hand', image: 'https://picsum.photos/200?random=3', joiningDate: '2022-12-05', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P004', name: 'Emily White', role: 'Farm Hand', image: 'https://picsum.photos/200?random=4', joiningDate: '2023-03-25', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P005', name: 'Michael Green', role: 'Farm Hand', image: 'https://picsum.photos/200?random=5', joiningDate: '2023-01-30', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P006', name: 'Sarah Black', role: 'Farm Hand', image: 'https://picsum.photos/200?random=6', joiningDate: '2022-11-11', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P007', name: 'David Johnson', role: 'Farm Hand', image: 'https://picsum.photos/200?random=7', joiningDate: '2023-02-28', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P008', name: 'Sophia Davis', role: 'Farm Hand', image: 'https://picsum.photos/200?random=8', joiningDate: '2022-12-15', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P009', name: 'Daniel Wilson', role: 'Farm Hand', image: 'https://picsum.photos/200?random=9', joiningDate: '2023-04-02', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P010', name: 'Olivia Martin', role: 'Farm Hand', image: 'https://picsum.photos/200?random=10', joiningDate: '2023-05-12', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P011', name: 'James Lee', role: 'Farm Hand', image: 'https://picsum.photos/200?random=11', joiningDate: '2023-01-08', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P012', name: 'Ava Moore', role: 'Farm Hand', image: 'https://picsum.photos/200?random=12', joiningDate: '2023-03-30', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P013', name: 'William Taylor', role: 'Farm Hand', image: 'https://picsum.photos/200?random=13', joiningDate: '2023-04-18', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P014', name: 'Mia Harris', role: 'Farm Hand', image: 'https://picsum.photos/200?random=14', joiningDate: '2023-02-22', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P015', name: 'Benjamin Clark', role: 'Farm Hand', image: 'https://picsum.photos/200?random=15', joiningDate: '2023-01-03', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P016', name: 'Charlotte Lewis', role: 'Farm Hand', image: 'https://picsum.photos/200?random=16', joiningDate: '2023-03-17', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P017', name: 'Henry Walker', role: 'Farm Hand', image: 'https://picsum.photos/200?random=17', joiningDate: '2022-11-19', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P018', name: 'Isabella Allen', role: 'Farm Hand', image: 'https://picsum.photos/200?random=18', joiningDate: '2023-01-25', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P019', name: 'Elijah Young', role: 'Farm Hand', image: 'https://picsum.photos/200?random=19', joiningDate: '2023-02-03', attendancePercentage: Math.floor(Math.random() * 100) + 1 },
    { code: 'P020', name: 'Zoe King', role: 'Farm Hand', image: 'https://picsum.photos/200?random=20', joiningDate: '2023-04-10', attendancePercentage: Math.floor(Math.random() * 100) + 1 }
]
        
    };
    
  },
 
};
</script>
<template>
    <DataTable :value="people" paginator :rows="6" class="data-table-body" >
      <Column field="image" header="Image">
      <template #body="slotProps">
            <img :src="slotProps.data.image" :alt="slotProps.data.image" style="width: 30px;border-radius: 50%;" />
      </template></Column>
      <Column field="code" header="Id"></Column>
      <Column field="name" header="Name"></Column>
    <Column field="role" header="Role"></Column>
    <Column field="joiningDate" header="Joinging Date"></Column>
    <Column field="attendancePercentage" header="Attendace percentage" class=".p-datatable-thead"></Column>
      </DataTable>

</template>
<style>
.p-datatable {
  table-layout: fixed; 
  width:80vw;
  min-height:80vh;
}
.p-datatable thead th{
  padding:20px;
  border: 1px solid #ddd !important; /* Optional: add border for clarity */
  text-align: center !important;
}
/* */
.p-datatable tbody td {
  padding: 5px !important; /* Add padding for better spacing */
  border: 1px solid #ddd !important; /* Optional: add border for clarity */
  text-align: center !important;

}
.p-datatable tbody tr:hover{
  background-color: #ddd;
}
.p-paginator{
  display: flex!important;
  flex-direction:row!important;
  align-items: center;
  justify-content: center;
  width:100%;
  border:1px black solid;

}

.p-paginator .p-paginator-page,
.p-paginator .p-paginator-prev,
.p-paginator .p-paginator-next {
  margin: 0 5px; /* Space between buttons */
}
</style>