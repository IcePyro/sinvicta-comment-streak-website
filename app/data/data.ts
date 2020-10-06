export interface Video {
    id: string;
    name: string;
}

export interface Channel {
    id: string;
    currentName: string;
    startVideo: Video;
    endVideo: Video;
    streak: number;
}

export const testData: Channel[] = [
    {
        id: "1234",
        currentName: "Paul",
        startVideo: {
            id: "abc",
            name: "How to build a Snowman"
        },
        endVideo: {
            id: "bdjd",
            name: "Hello World"
        },
        streak: 100
    },
    {
        id: "423",
        currentName: "Louis",
        startVideo: {
            id: "asdasd",
            name: "Git Shadow Legends"
        },
        endVideo: {
            id: "adaw",
            name: "AMONG US - THE TASK MANAGER"
        },
        streak: 420
    }
];