"use client";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import PRODUCTS from "../../../data/basics/productstock";
import CN from "@/lib/utils";

type ProductCategoryRowType = {
  category: string;
};
interface ProductRowType extends Omit<(typeof PRODUCTS)[number], "category"> {}
type FilterType = {
  searchStr: string;
  setSearchStr: Dispatch<SetStateAction<string>>;
  inStock: boolean;
  setInStock: Dispatch<SetStateAction<boolean>>;
};
function ProductStock() {
  const [inStock, setInStock] = useState(false);
  const [searchStr, setSearchStr] = useState("");
  return (
    <div
      className="sm:w-1/2 p-2
      text-black w-5/6 border border-black rounded-lg"
    >
      <div className="flex gap-2 w-full items-center justify-center text-black ">
        <FilterInput
          inStock={inStock}
          searchStr={searchStr}
          setSearchStr={setSearchStr}
          setInStock={setInStock}
        />
      </div>
      <hr className="w-1/2 bg-black  my-2 mx-auto" />
      <table className="w-full ">
        <caption>Products</caption>
        <thead className="">
          <tr>
            <th>Name</th>

            <th>Price</th>
          </tr>
          <ProductTable
            inStock={inStock}
            searchStr={searchStr}
            products={PRODUCTS}
          />
        </thead>
      </table>
    </div>
  );
}
export default ProductStock;

function ProductTable({
  products,
  inStock,
  searchStr,
}: {
  searchStr: string;

  products: typeof PRODUCTS;
  inStock: boolean;
}) {
  let currentCategory = "";
  let tableContent: ReactNode[] = [];
  for (let product of products) {
    let i = 0;
    if (
      product.name.toLowerCase().indexOf(searchStr.toLowerCase()) === -1 &&
      searchStr.trim().length !== 0
    ) {
      continue;
    }
    if (!product.stocked && inStock) {
      continue;
    }
    if (product.category !== currentCategory) {
      tableContent.push(
        <ProductCategoryRow
          key={`${i}${product.category}a2`}
          category={product.category}
        />
      );
      currentCategory = product.category;
    }

    tableContent.push(
      <ProductRow key={`${i}${product.name}a2`} {...product} />
    );
  }
  return tableContent;
}

function FilterInput({
  inStock,
  searchStr,
  setSearchStr,
  setInStock,
}: FilterType) {
  return (
    <div className="flex justify-center items-center gap-1 flex-col">
      <input
        className="border border-black p-1 text-lg rounded-lg "
        type="text"
        value={searchStr}
        onChange={(e) => setSearchStr(e.target.value)}
      />
      <div className="flex gap-2 text-sm">
        <label htmlFor="show">Show product in stock</label>
        <input
          type="checkbox"
          checked={inStock}
          id="show"
          onChange={() => setInStock(!inStock)}
        />
      </div>
    </div>
  );
}

function ProductCategoryRow({ category }: ProductCategoryRowType) {
  return (
    <tr className="border border-black  ">
      <th colSpan={2} className="text-lg font-bold text-black">
        {category}
      </th>
    </tr>
  );
}
function ProductRow({ price, name, stocked }: ProductRowType) {
  return (
    <tr className={CN({ "text-red-500": !stocked })}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
