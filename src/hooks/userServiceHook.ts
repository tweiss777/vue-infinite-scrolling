import UserService from "../services/user.service";
import { ref, onMounted, Ref, onUnmounted } from "vue";
import IUser from "../types/user";

export function useUserService() {
    const users: Ref<IUser[]> = ref<IUser[]>([]);
    const pageNumber: Ref<number> = ref<number>(1);
    const isLoading: Ref<boolean> = ref<boolean>(false);

    async function handleScroll() {
        if (
            window.innerHeight + document.documentElement.scrollTop !==
            document.documentElement.offsetHeight ||
            isLoading.value
        ) {
            return;
        }
        pageNumber.value += 1;
        await loadUsers();
    }

    async function loadUsers() {
        isLoading.value = true;
        const json = await UserService.fetchUsers(pageNumber.value);
        json.forEach((user: IUser) => {
            users.value.push(user);
        });
        isLoading.value = false;
    }

    onMounted(async () => {
        let count = 0;
        window.addEventListener("scroll", handleScroll);
        do {
            await loadUsers();
            pageNumber.value += 1;
            count++;
        } while (count < 4);

    });

    onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
    });

    return { isLoading, users };
}
