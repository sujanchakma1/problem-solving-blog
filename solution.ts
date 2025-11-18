const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
};




const getLength = (value: string | number[]) => {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
};




class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};
const filterByRating = (values: Item[]): Item[] => {
  return values.filter((value) => value.rating >= 4);
};




type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
const filterActiveUsers = (values: User[]): User[] => {
  return values.filter((value) => value.isActive);
};





interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = ({
  title,
  author,
  publishedYear,
  isAvailable,
}: Book) => {
  console.log(
    `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${
      isAvailable ? "Yes" : "No"
    }`
  );
};





const getUniqueValues = (array1: number[], array2: number[]) => {
  const result: number[] = [];

  for (let i = 0; i < array1.length; i++) {
    result[result.length] = array1[i];
  }
  for (let i = 0; i < array2.length; i++) {
    result[result.length] = array2[i];
  }

  const unique: number[] = [];

  for (let i = 0; i < result.length; i++) {
    let found = false;
    for (let j = 0; j < unique.length; j++) {
      if (unique[j] === result[i]) {
        found = true;
        break;
      }
    }
    if (!found) {
      unique[unique.length] = result[i];
    }
  }
  return unique;
};





type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Product[]): number => {
  const total = products.reduce((total, product) => {
    const price = product.price * product.quantity;
    const discountPrice = product.discount
      ? price * (1 - product.discount / 100)
      : price;
    return total + discountPrice;
  }, 0);
  return total;
};
