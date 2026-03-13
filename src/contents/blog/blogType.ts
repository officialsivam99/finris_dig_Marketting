export interface BlogPost {
    id: number;
    image: string;
    date: string;
    tags: string[];
    title: string;
    text: string;
    link: string;
}

export interface BlogPage {
    id: number;
    image: string;
    date: string;
    tags: string[];
    title: string;
    description: string;
    link: string;
}

export interface BlogsListItem {
    id: number;
    title: string;
    description: string;
    date: string;
    comments: number;
    image: string;
    clientImage: string;
    author: string;
    shape?: string;
    link: string;
}

export interface BlogCarouselItem {
    id: number;
    title: string;
    description: string;
    image: string;
    userImage: string;
    userName: string;
    date: string;
    tags: string[];
    link: string;
}
 