import axios from "axios";

const getTopTenEndpoint = "getTopTenUsers";

export interface Channel {
    channelId: string;
    currentUsername: string;
    currentStreak: number;
}

export const testData: Channel[] = [
    {
        channelId: "1234",
        currentUsername: "Paul",
        currentStreak: 100
    },
    {
        channelId: "423",
        currentUsername: "Louis",
        currentStreak: 420
    }
];

export const getTopChannels = () => {
    const fbUrl = process.env.FIREBASE_URL;
    return axios({
        method: "get",
        url: fbUrl + getTopTenEndpoint
    });
};