export interface CartItem {
  id: string;
  title: string;
  price: number; // Tipik olarak fiyat için `number` kullanılır, ama burada `string` olarak bırakılmış.
  img: string;
  quantity: number;
}

const courseItems: CartItem[] = [
  {
    id: "adsadsadsadsada",
    title: "C Programlama Eğitimi",
    price: 69,
    img: "https://i.ibb.co/dPCxzWW/Screenshot-from-2024-09-28-14-12-36.png",
    quantity: 1,
  },
  {
    id: "sadsadsadsadsadsadsad",
    title: "C# Eğitimi",
    price: 69,
    img: "https://i.ibb.co/dPCxzWW/Screenshot-from-2024-09-28-14-12-36.png",
    quantity: 1,
  },
  {
    id: "sadsadsadsadsadsadsadsa",
    title: "Typescript Eğitimi",
    price: 69,
    img: "https://i.ibb.co/dPCxzWW/Screenshot-from-2024-09-28-14-12-36.png",
    quantity: 1,
  },
  {
    id: "adsadsadsadsadsadsadsaf",
    title: "React Eğitimi",
    price: 69,
    img: "https://i.ibb.co/dPCxzWW/Screenshot-from-2024-09-28-14-12-36.png",
    quantity: 1,
  },
];

export default courseItems;
