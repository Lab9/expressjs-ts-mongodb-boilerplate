import {config} from "../config";

/**
 * Normalize a given port value.
 *
 * This way we can assure, that we have a valid port that is a number and no string or anything else.
 * It's really just dummy safe.
 *
 * @param value the value
 * @param fallback the fallback value if it's impossible to parse the port
 * @return normalized port
 */
export default function (value: string | number, fallback: number = config.port): number {
    if (typeof value === "number" && value >= 0) {
        return value;
    }

    const port: number = parseInt(String(value), 10);

    if (isNaN(port)) {
        return fallback;
    }

    return port >= 0 ? port : fallback;
}
