import {v4 as uuidv4} from 'uuid';
import Place from "@/models/Place";
import PlaceList from "@/models/PlaceList";

export function createPlace(name: string, description: string, placeId: string, lat: number, lng: number, address: string) {
  return {
    id: uuidv4(),
    name,
    description,
    placeId,
    lat,
    lng,
    address
  } as Place;
}

export function createPlaceList(name: string, description: string) {
  return {
    id: uuidv4(),
    name,
    description,
    places: []
  } as PlaceList
}