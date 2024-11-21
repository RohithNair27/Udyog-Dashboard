<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
export default {
  components: {
    DataTable,
    Column,
  },

  data() {
    return {
      people: [
        {
          code: "P001",
          name: "John Doe",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=1",
          joiningDate: "2023-01-15",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P002",
          name: "Jane Smith",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=2",
          joiningDate: "2023-02-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P003",
          name: "Mark Brown",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=3",
          joiningDate: "2022-12-05",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P004",
          name: "Emily White",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=4",
          joiningDate: "2023-03-25",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P005",
          name: "Michael Green",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=5",
          joiningDate: "2023-01-30",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P006",
          name: "Sarah Black",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=6",
          joiningDate: "2022-11-11",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P007",
          name: "David Johnson",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=7",
          joiningDate: "2023-02-28",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P008",
          name: "Sophia Davis",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=8",
          joiningDate: "2022-12-15",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P009",
          name: "Daniel Wilson",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=9",
          joiningDate: "2023-04-02",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P010",
          name: "Olivia Martin",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=10",
          joiningDate: "2023-05-12",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P011",
          name: "James Lee",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=11",
          joiningDate: "2023-01-08",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P012",
          name: "Ava Moore",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=12",
          joiningDate: "2023-03-30",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P013",
          name: "William Taylor",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=13",
          joiningDate: "2023-04-18",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P014",
          name: "Mia Harris",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=14",
          joiningDate: "2023-02-22",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P015",
          name: "Benjamin Clark",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=15",
          joiningDate: "2023-01-03",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P016",
          name: "Charlotte Lewis",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=16",
          joiningDate: "2023-03-17",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P017",
          name: "Henry Walker",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=17",
          joiningDate: "2022-11-19",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P018",
          name: "Isabella Allen",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=18",
          joiningDate: "2023-01-25",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P019",
          name: "Elijah Young",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=19",
          joiningDate: "2023-02-03",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
        {
          code: "P020",
          name: "Zoe King",
          role: "Farm Hand",
          image: "https://picsum.photos/200?random=20",
          joiningDate: "2023-04-10",
          attendancePercentage: Math.floor(Math.random() * 100) + 1,
        },
      ],
    };
  },
};
</script>
<template>
  <DataTable :value="people" paginator :rows="9">
    <Column field="image" header="Image">
      <template #body="slotProps">
        <img
          :src="slotProps.data.image"
          :alt="slotProps.data.image"
          style="width: 30px; border-radius: 50%"
        />
      </template>
    </Column>
    <Column field="code" header="Id"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="role" header="Role"></Column>
    <Column field="joiningDate" header="Joinging Date"></Column>
    <Column header="Attendace percentage">
      <template #body="slotProps">
        <div class="progress-container">
          <div
            class="progress"
            :style="{ width: slotProps.data.attendancePercentage + '%' }"
          >
            {{ slotProps.data.attendancePercentage }}%
          </div>
        </div>
      </template>
    </Column>
  </DataTable>
</template>
<style>
.p-datatable {
  width: 80vw;
  height: fit-content;
}
.p-datatable thead {
  background-color: #ffc834;
  border-radius: 10px;
}
.p-datatable thead th {
  padding: 15px;
  border: 1px solid #ddd !important;
  margin-bottom: 100px !important;
}
.p-datatable tbody td {
  border: 1px solid #ddd !important;
  text-align: center !important;
  margin-bottom: 100px !important;
}
.p-datatable tbody tr:hover {
  background-color: #ddd;
}
.p-datatable-paginator-bottom {
  display: flex;
  border: 0px solid #ddd !important;
  justify-content: flex-end;
}
.p-paginator-pages .p-paginator-page {
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 6px 12px;
  margin: 0 4px;
}

.p-paginator-pages .p-paginator-page:hover {
  background-color: #ffc834;
  color: white;
}

.p-paginator-prev {
  background-color: #f5f5f5;
  padding: 6px 12px;
}

.p-paginator-next {
  background-color: #f5f5f5;
  padding: 6px 12px;
}

.p-paginator-first,
.p-paginator-last {
  background-color: #f5f5f5;
  padding: 6px 12px;
}

.p-paginator-info {
  font-size: 14px;
  color: #555;
}
.progress-container {
  border: 1px black solid;
  height: 20px;
  margin: 10px;
  border-radius: 10px;
  padding:0.5px
}
.progress {
  background-color: #4caf50;
  height: 100% !important;
  border-radius: 15px;
}
</style>
