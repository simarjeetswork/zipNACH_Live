import { clientsByState } from "./data";
import { stateCoordinates } from "./stateCoordinates";

export interface ClientPoint {
    name: string;
    state: string;
    lat: number;
    lng: number;
}

function jitter(value: number, spread = 1.2) {
    return value + (Math.random() - 0.5) * spread;
}

export const Points: ClientPoint[] = Object.entries(clientsByState).flatMap(
    ([state, names]) => {
        const coords = stateCoordinates[state];
        if (!coords) return [];
        const [lng, lat] = coords;

        return names.map((name) => ({
            name,
            state,
            lat: jitter(lat),
            lng: jitter(lng),
        }));
    }
);