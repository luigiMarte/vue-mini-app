export const axiosInstance = `<script>
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
});

export default axiosInstance;
</script>
`;

export const endpointModules = `
  <script>
  import axiosInstance from '../axiosInstance';

  export const fetchUsers = () => axiosInstance.get('/users');
  export const fetchUserById = (id) => axiosInstance.get(\`/users/\${id}\`);
  export const createUser = (data) => axiosInstance.post('/users', data);
  export const updateUser = (id, data) => axiosInstance.put(\`/users/\${id}\`, data);
  export const deleteUser = (id) => axiosInstance.delete(\`/users/\${id}\`);
  </script>
`;

export const componetCode = `
<script>
import { ref, onMounted } from 'vue';
import { fetchUsers } from '@/api/endpoints/usersApi';

export default {
  setup() {
    const users = ref([]);

    const loadUsers = async () => {
      try {
        const response = await fetchUsers();
        users.value = response.data;
      } catch (error) {
        console.error('Error al obtener los usuarios:', error);
      }
    };

    onMounted(loadUsers);

    return {
      users,
    };
  },
};
</script>
`;
