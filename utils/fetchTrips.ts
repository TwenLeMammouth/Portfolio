import { Trip } from "typings";

export const fetchTrips = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getTrips`);

    const data = await res.json()
    const trips: Trip[] = data.trips;

    return trips;
}