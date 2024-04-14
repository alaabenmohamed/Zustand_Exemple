import { useCartStore } from "../Store";
import PanierVide from "./PanierVide.png";
import CloseIcon from "@mui/icons-material/Close";
import CartItem from "./CartItem";
type variable = {
  ShowCart: boolean;
  setShowCart: Function;
};
function Cart({ ShowCart, setShowCart }: variable) {
  const cartProducts = useCartStore((state) => state.cartItems);
  const PrixTotale = useCartStore((state) => state.totalAmount);
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-50">
      <div className="absolute top-0 right-0 w-400 h-full bg-white z-50">
        <div
          style={{
            fontSize: "1.1rem",
            padding: "5px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          <span
            onClick={() => {
              setShowCart(!ShowCart);
            }}
          >
            <i
              style={{
                background: "#212245",
                marginRight: "350px",
                borderRadius: "50%",
              }}
            >
              <CloseIcon style={{ marginBottom: "4px" }} />
            </i>
          </span>
        </div>
        <div className="h-calc(100vh - 140px)">
          {cartProducts.length === 0 ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
              <img src={PanierVide} className="w-300" alt="imageCarteVide" />
              <p className="text-xl text-[#64748b] font-semibold">
                Add some items to your cart
              </p>
            </div>
          ) : (
            cartProducts.map((item: any, index: any) => (
              <CartItem item={item} key={index} />
            ))
          )}
        </div>
        <h6 className="absolute bottom-0 left-0 px-5 py-4 w-full h-20  bg-blue-500  border   text-black">
          Totale :<span>${PrixTotale}</span>
        </h6>
      </div>
    </div>
  );
}

export default Cart;
