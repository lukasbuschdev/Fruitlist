export type Fruit = {
        name: string;
        img: string;
        description: string;
        genus: string;
        stars: number;
        reviews: {name: string, text: string}[];
}