import useMeetingActions from "@/hooks/useMeetingActions";
import { Doc } from "../../convex/_generated/dataModel";
import { getMeetingStatus } from "@/lib/utils";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { CalendarIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ru } from "date-fns/locale";

type Interview = Doc<"interviews">;

function MeetingCard({ interview }: { interview: Interview }) {
  const { joinMeeting } = useMeetingActions();

  const status = getMeetingStatus(interview);
  const formattedDate = format(new Date(interview.startTime), "EEEE, d MMM, HH:mm", { locale: ru });

  return (
    <Card>
      <CardHeader className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            {formattedDate}
          </div>

          <Badge variant={status === "live" ? "default" : status === "upcoming" ? "secondary" : "outline"}>
            {status === "live" ? "Сейчас идёт" : status === "upcoming" ? "Запланировано" : "Завершено"}
          </Badge>
        </div>

        <CardTitle>{interview.title}</CardTitle>

        {interview.description && <CardDescription className="line-clamp-2">{interview.description}</CardDescription>}
      </CardHeader>

      <CardContent>
        {status === "live" && (
          <Button className="w-full" onClick={() => joinMeeting(interview.streamCallId)}>
            Присоединиться
          </Button>
        )}

        {status === "upcoming" && (
          <Button variant="outline" className="w-full" disabled>
            Ожидает начала
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
export default MeetingCard;
