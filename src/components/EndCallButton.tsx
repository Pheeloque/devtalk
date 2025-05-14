import { useCall, useCallStateHooks } from "@stream-io/video-react-sdk";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { api } from "../../convex/_generated/api";
import toast from "react-hot-toast";
import { Button } from "./ui/button";

function EndCallButton() {
  const call = useCall();
  const router = useRouter();
  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const updateInterviewStatus = useMutation(api.interviews.updateInterviewStatus);

  const interview = useQuery(api.interviews.getInterviewByStreamId, {
    streamCallId: call?.id || "",
  });

  if (!call || !interview) return null;

  const isNotMeetingOwner = localParticipant?.userId === call.state.createdBy?.id;

  if (!isNotMeetingOwner) return null;

  const endCall = async () => {
    try {
      await call.endCall();
      await updateInterviewStatus({ id: interview._id, status: "completed" });
      router.push("/");
      toast.success("Встреча успешно завершена");
    } catch (error) {
      console.error(error);
      toast.error("Не удалось завершить встречу");
    }
  };

  return (
    <Button variant={"destructive"} onClick={endCall}>
      Завершить встречу
    </Button>
  );
}
export default EndCallButton;
