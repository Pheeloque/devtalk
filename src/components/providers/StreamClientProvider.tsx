"use client";

import { ReactNode, useEffect, useState } from "react";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import { useUser } from "@clerk/nextjs";
import LoaderUI from "../LoaderUI";
import { streamTokenProvider } from "@/actions/stream.actions";

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [streamVideoClient, setStreamVideoClient] = useState<StreamVideoClient | null>(null);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const client = new StreamVideoClient({
      apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
      user: {
        id: user?.id,
        name: user?.username || `${user?.firstName || ""} ${user?.lastName || ""}`.trim() || user?.id,
        image: user?.imageUrl,
      },
      tokenProvider: async () => {
        return await streamTokenProvider();
      },
    });

    const originalConsoleWarn = console.warn;
    console.warn = (...args) => {
      originalConsoleWarn(...args);

      const warnMessage = args.join(" ");
      if (warnMessage.includes("Participant with sessionId")) {
        console.log("Attempting to reconnect...");

        setStreamVideoClient(null);

        setTimeout(() => {
          console.log("Reconnecting...");
          const newClient = StreamVideoClient.getOrCreateInstance({
            apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
            user: {
              id: user.id,
              name: user.username || `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.id,
              image: user.imageUrl,
            },
            tokenProvider: async () => {
              return await streamTokenProvider();
            },
          });

          setStreamVideoClient(newClient);
        }, 3000);
      }
    };

    setStreamVideoClient(client);
  }, [user, isLoaded]);

  if (!streamVideoClient) return <LoaderUI />;

  return <StreamVideo client={streamVideoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
