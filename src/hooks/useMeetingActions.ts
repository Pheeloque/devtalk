import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

const useMeetingActions = () => {
  const router = useRouter();
  const client = useStreamVideoClient();

  const createMeeting = async () => {
    if (!client) return;

    try {
      const id = crypto.randomUUID();
      const call = client.call("default", id);

      await call.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
          custom: {
            description: "Instant Meeting",
          },
        },
      });

      router.push(`/meeting/${call.id}`);
      toast.success("Встреча создана");
    } catch (error) {
      console.error(error);
      toast.error("Не удалось создать встречу");
    }
  };

  const joinMeeting = (callId: string) => {
    if (!client) return toast.error("Не удалось подключиться к встрече");
    router.push(`/meeting/${callId}`);
  };

  return { createMeeting, joinMeeting };
};

export default useMeetingActions;
