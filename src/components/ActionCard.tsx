import { QuickActionType } from "@/constants";
import { Card } from "./ui/card";

// from-green-500/20 via-green-500/10 to-green-500/5
// from-red-500/20 via-red-500/10 to-red-500/5
// from-sky-500/20 via-sky-500/10 to-sky-500/5
// from-amber-500/20 via-amber-500/10 to-amber-500/5

function ActionCard({ action, onClick }: { action: QuickActionType, onClick: () => void }) {
    return (
        <Card className="group relative overflow-hidden hover:border-primary/70 transition-all duration-300 hover:shadow-lg cursor-pointer" onClick={onClick}>
            {/*action gradient*/}
            <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-100 group-hover:opacity-50 transition-opacity`} />

            {/*action content wrapper*/}
            <div className="relative p-6 size-full">
                <div className="space-y-4">
                    {/*action icon*/}
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${action.color}/10 group-hover:scale-110 transition-transform`}>
                        <action.icon className={`w-6 h-6 text-${action.color}`} />
                    </div>

                    {/*action details*/}
                    <div className="space-y-1">
                        <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
                            {action.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}
export default ActionCard