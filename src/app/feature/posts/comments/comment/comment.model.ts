
export interface comment {
    comment: string;
    createdAt: Date;
    id: string;
    post: string;
    user: {
        role: string,
        photo: string,
        name: string,
        email: string,
        id: string
    };
}