import Produits from "./Data";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { useCartStore } from "./Store";

function HeroPage() {
  const AddProduit = useCartStore((state) => state.AddProduit);
 

  const CalculePrixTotale = useCartStore((state) => state.CalculePrixTotale);
  return (
    <div className="mt-20 ml-5 grid grid-cols-4 gap-2 mb-5">
      {Produits.map((element) => (
        <Card sx={{ maxWidth: 345 }} key={element.id}>
          <CardHeader title={element.Nom} />
          <img src={element.imgUrl} className="w-300 h-80" alt="" />

          <CardContent>
            <Typography variant="body2">
              <Typography paragraph>Description:</Typography>
              {element.description}
            </Typography>
          </CardContent>
          <CardActions className="flex flex-row justify-between p-2">
            <button
              className="bg-blue-500 w-36 text-white h-10 rounded-lg"
              onClick={() => {
                AddProduit({
                  id: Object.entries(element)[0][1],
                  Nom: Object.entries(element)[1][1],
                  prix: Object.entries(element)[3][1],
                });

                // AddCounterProduit();
                CalculePrixTotale();
              }}
            >
              Add to Cart
            </button>
            <Typography>{element.prix}$</Typography>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default HeroPage;
