/*Recent Transaction*/
type recentTrans = {
    title: string;
    subtitle: string;
    textcolor: string;
    boldtext: boolean;
    line: boolean;
    link: string;
    url: string;
};

/*product performance*/
type productPerformanceType = {
    id: number;
    name: string;
    time: string;
    quantity: string;
};

/*Products card types*/
type productsCards = {
    title: string;
    link: string;
    photo: string;
    salesPrice: number;
    price: number;
    rating: number;
};

export type { recentTrans, productPerformanceType, productsCards }