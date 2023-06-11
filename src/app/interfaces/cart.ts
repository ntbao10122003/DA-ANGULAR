export interface ICartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
    images: string;
  }
  
  export interface ICart {
    _id?: string;
    user: string;
    items: ICartItem[];
  }
  