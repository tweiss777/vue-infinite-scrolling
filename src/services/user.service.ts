import IUser from "../types/user";

export default class UserService {

    public static async fetchUsers(pageNumber: number): Promise<IUser[]> {

        try {

            const token: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTcxMDQ0MzQ4MX0.1AsnbydfefTT4o1LO94UmsPGpihfMJs2knfWvnINg7A";
            const data = await fetch(
                `/api/v1/users?page_number=${pageNumber}`,
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                },
            );
            const { data: users }: { data: IUser[] } = await data.json();
            return users
        } catch (error) {
            throw error
        }

    }
}





