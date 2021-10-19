import { CartProduct } from "../../types/cart-product";
import { Product } from "../../types/product";
// import { ProductINTERACTION } from "../../types/product";

type Props = {
  product: CartProduct;
  reduce: () => void;
  add: () => void;
  remove: () => void;
};

const RowProduct = ({ product, reduce, add, remove }: Props) => {
  return (
    <tr className={``}>
      <td>
        <div className="flex-1">
          <div className={`p-4 bg-gray-400 m-4`}>
            <div className={`flex flex-grow justify-center items-center h-36`}>
              <p className={`text-base p-4`}>M</p>
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="flex flex-1 justify-center items-center">
          <p className={`text-base p-4`}>{product.title}</p>
        </div>
      </td>
      <td>
        <div className="flex flex-1 px-16 justify-between items-center">
          <button
            onClick={reduce}
            className={`border-2 border-gray-500 px-4 py-2`}
          >
            {" "}
            -{" "}
          </button>
          <p className={`text-base p-4`}>{product.quantity}</p>
          <button
            onClick={add}
            className={`border-2 border-gray-500 px-4 py-2`}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </td>
      <td>
        <div className="flex flex-1 justify-center items-center">
          <p className={`text-base p-4`}>${product.price}</p>
        </div>
      </td>
      <td>
        <button
          onClick={remove}
          className="flex flex-1 justify-center items-center"
        >
          <p className={`text-base p-4`}>x</p>
        </button>
      </td>
    </tr>
  );
};

export default RowProduct;
