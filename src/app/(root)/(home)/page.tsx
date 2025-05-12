"use client"

import ActionCard from "@/components/ActionCard";
import { QUICK_ACTIONS } from "@/constants";
import { useUserRole } from "@/hooks/useUserRole";
import { useState } from "react";

export default function Home() {
  const { isInterviewer, isCandidate } = useUserRole();

  const [showModal, setShowModal] = useState(false);

  const handleQuickAction = (title: string) => {  };

  return (
    <div className="container max-w-7xl mx-auto p-6">
      {/*welcome section*/}
      <div className="rounded-lg bg-card bg-gradient-to-r from-green-500/5 via-green-500/2 to-transparent p-6 border mb-10">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-500 to-emerald-300 bg-clip-text text-transparent">
          Welcome to DevTalk
        </h1>
        <p className="text-muted-foreground mt-4">
          {isInterviewer
            ? "Schedule and manage your interviews with ease"
            : "Always be ready for upcoming interviews"}
        </p>
      </div>

      {isInterviewer ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <ActionCard
                key={action.title}
                action={action}
                onClick={() => handleQuickAction(action.title)}
              />
            ))}
          </div>
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
}
