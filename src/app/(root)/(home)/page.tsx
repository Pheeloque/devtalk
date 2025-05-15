"use client";

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useQuery } from "convex/react";
import { useState } from "react";
import { api } from "../../../../convex/_generated/api";
import { useRouter } from "next/navigation";
import MeetingModal from "@/components/MeetingModal";
import LoaderUI from "@/components/LoaderUI";
import { LoaderCircle } from "lucide-react";
import MeetingCard from "@/components/MeetingCard";

export default function Home() {
  const router = useRouter();

  const { isInterviewer, isCandidate, isLoading } = useUserRole();
  const interviews = useQuery(api.interviews.getMyInterviews);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"start" | "join">();

  const handleQuickAction = (title: string) => {
    switch (title) {
      case "New Call":
        setModalType("start");
        setShowModal(true);
        break;
      case "Join Interview":
        setModalType("join");
        setShowModal(true);
        break;
      default:
        router.push(`/${title.toLowerCase()}`);
    }
  };

  if (isLoading) return <LoaderUI />;

  return (
    <div className="container max-w-7xl mx-auto p-6">
      {/*welcome section*/}
      <div className="rounded-lg bg-card bg-gradient-to-r from-green-500/5 via-green-500/2 to-transparent p-6 border mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-300 bg-clip-text text-transparent">
          Добро пожаловать в DevTalk!
        </h1>
        <p className="text-muted-foreground mt-4">
          {isInterviewer
            ? "С легкостью планируйте и управляйте собеседованиями"
            : "Всегда будьте в курсе о предстоящих собеседованиях"}
        </p>
      </div>

      {isInterviewer ? (
        // interviewer page
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <ActionCard key={action.engTitle} action={action} onClick={() => handleQuickAction(action.engTitle)} />
            ))}
          </div>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={modalType === "join" ? "Присоединиться к встрече" : "Новая встреча"}
            isJoinMeeting={modalType === "join"}
          />
        </>
      ) : (
        // candidate page
        <>
          <div>
            <h1 className="text-3xl font-bold">Ваши собеседования</h1>
            <p className="text-muted-foreground mt-1">Следите за ходом ваших собеседований</p>
          </div>

          <div className="mt-8">
            {interviews === undefined ? (
              <div className="flex justify-center py-12">
                <LoaderCircle className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : interviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview) => (
                  <MeetingCard key={interview._id} interview={interview} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">У вас нет запланированных собеседований</div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
