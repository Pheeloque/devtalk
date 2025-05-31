import { useState } from "react";
import { Id } from "../../convex/_generated/dataModel";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import toast from "react-hot-toast";
import { MessageSquareIcon, StarIcon } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { getInterviewerInfo } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { format } from "date-fns";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { ru } from "date-fns/locale";

function CommentDialog({ interviewId }: { interviewId: Id<"interviews"> }) {
  const [isOpen, setIsOpen] = useState(false);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("5");

  const addComment = useMutation(api.comments.addComment);
  const users = useQuery(api.users.getUsers);
  const existingComments = useQuery(api.comments.getComments, { interviewId });

  const handleSubmit = async () => {
    if (!comment.trim()) return toast.error("Введите комментарий");

    try {
      await addComment({
        interviewId,
        content: comment.trim(),
        rating: parseInt(rating),
      });

      toast.success("Комментарий отправлен");
      setComment("");
      setRating("3");
      setIsOpen(false);
    } catch (error) {
      toast.error("Не удалось отправить комментарий");
    }
  };

  const renderStars = (rating: number) => (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((starValue) => (
        <StarIcon
          key={starValue}
          className={`h-4 w-4 ${starValue <= rating ? "fill-primary text-primary" : "text-muted-foreground"}`}
        />
      ))}
    </div>
  );

  if (existingComments === undefined || users === undefined) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* trigger button */}
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full">
          <MessageSquareIcon className="h-4 w-4 mr-2" />
          Оставить комментарий
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Отзыв о собеседовании</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {existingComments.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium">Предыдущие комментарии</h4>
                <Badge variant="outline">Всего: {existingComments.length}</Badge>
              </div>

              {/* existing comments */}
              <ScrollArea className="h-[240px]">
                <div className="space-y-4">
                  {existingComments.map((comment, index) => {
                    const interviewer = getInterviewerInfo(users, comment.interviewerId);
                    return (
                      <div key={index} className="rounded-lg border p-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={interviewer.image} />
                              <AvatarFallback>{interviewer.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="text-sm font-medium">{interviewer.name}</p>
                              <p className="text-xs text-muted-foreground">
                                {format(comment._creationTime, "d MMM, yyyy, HH:mm", { locale: ru })}
                              </p>
                            </div>
                          </div>
                          {renderStars(comment.rating)}
                        </div>
                        <p className="text-sm text-muted-foreground">{comment.content}</p>
                      </div>
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          )}

          <div className="space-y-4">
            {/* rating */}
            <div className="space-y-2">
              <Label>Оценка</Label>
              <Select value={rating} onValueChange={setRating}>
                <SelectTrigger>
                  <SelectValue placeholder="Оцените кандидата" />
                </SelectTrigger>
                <SelectContent>
                  {[5, 4, 3, 2, 1].map((value) => (
                    <SelectItem key={value} value={value.toString()}>
                      <div className="flex items-center gap-2">{renderStars(value)}</div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* comment */}
            <div className="space-y-2">
              <Label>Ваш комментарий</Label>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Поделитесь мнением об этом кандидате"
                className="h-32"
              />
            </div>
          </div>
        </div>

        {/* buttons */}
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            Отмена
          </Button>
          <Button onClick={handleSubmit}>Подтвердить</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CommentDialog;
