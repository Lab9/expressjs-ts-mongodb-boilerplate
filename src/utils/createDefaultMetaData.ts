import {MetaData} from "../models/MetaData";

/**
 * Create default metadata for an instance
 */
export default function (): MetaData {
    const now: number = Date.now();
    return {
        createdAt: now,
        modifiedAt: now
    }
}
