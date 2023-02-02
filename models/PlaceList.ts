import Place from "@/models/Place";

type PlaceList = {
  id: string;
  name: string;
  description: string;
  places: Place[]
}

export default PlaceList;