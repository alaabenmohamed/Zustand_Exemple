
import { useCartStore } from "../Store";

const CartItem = ({ item }: any) => {
  const deleteItem = useCartStore((state) => state.deleteItem);
  const CalculePrixTotale = useCartStore((state) => state.CalculePrixTotale);

  return (
    <div className="flex flex-col ">
      <div className="flex gap-2  flex-row p-3  ">
        <p className=" d-flex align-items-center gap-5 text-black mb-[40px] ml-[10px]">
          {item.quantity}x
        </p>
        <h6 className="text-black  ml-[20px] text-xl grow ">{item.Nom}</h6>

        <p className=" text-black">${item.totalPrice}</p>
        <span
          className="text-black font-bold mb[40px] cursor-pointer"
          onClick={() => {
            deleteItem(item.id);
            CalculePrixTotale();
            // AddCounterProduit();
          }}
        >
          x
        </span>
      </div>
    </div>
  );
};

export default CartItem;
