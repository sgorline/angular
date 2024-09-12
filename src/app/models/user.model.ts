export interface User {
    permissions: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    }
}
