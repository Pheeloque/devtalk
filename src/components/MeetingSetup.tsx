import { DeviceSettings, useCall, VideoPreview } from "@stream-io/video-react-sdk";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { CameraIcon, CameraOff, MicIcon, MicOff, SettingsIcon } from "lucide-react";
import { Switch } from "./ui/switch";
import { Button } from "./ui/button";

function MeetingSetup({ onSetupComplete }: { onSetupComplete: () => void }) {
  const [isCameraDisabled, setIsCameraDisabled] = useState(true);
  const [isMicrophoneDisabled, setIsMicrophoneDisabled] = useState(true);

  const call = useCall();

  if (!call) return null;

  useEffect(() => {
    if (isCameraDisabled) call.camera.disable();
    else call.camera.enable();
  }, [isCameraDisabled, call.camera]);

  useEffect(() => {
    if (isMicrophoneDisabled) call.microphone.disable();
    else call.microphone.enable();
  }, [isMicrophoneDisabled, call.microphone]);

  const handleJoin = async () => {
    await call.join();
    onSetupComplete();
  };

  return (
    <div className="min-h-[calc(100vh-4rem-1px)] flex items-center justify-center p-6 bg-background/95">
      <div className="w-full max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* camera preview */}
          <Card className="md:col-span-1 p-6 flex flex-col">
            <div>
              <h1 className="text-xl font-semibold mb-1">Предварительный просмотр</h1>
              <p className="text-sm text-muted-foreground">Убедитесь, что Вы хорошо выглядите!</p>
            </div>

            <div className="mt-4 flex-1 min-h-[400px] rounded-xl overflow-hidden bg-muted/50 border relative">
              <div className="absolute inset-0">
                <VideoPreview className="h-full w-full" />
              </div>
            </div>
          </Card>

          {/* card controls */}
          <Card className="md:col-span-1 p-6">
            <div className="h-full flex flex-col">
              {/* meeting details */}
              <div>
                <h2 className="text-xl font-semibold mb-1">Настройка и выбор устройств</h2>
                <p className="text-sm text-muted-foreground break-all">{call.id}</p>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div className="space-y-2 mt-8">
                  {/* camera control */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {isCameraDisabled ? (
                          <CameraOff className="h-5 w-5 text-primary" />
                        ) : (
                          <CameraIcon className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">Камера</p>
                        <p className="text-sm text-muted-foreground">{isCameraDisabled ? "Off" : "On"}</p>
                      </div>
                    </div>
                    <Switch checked={!isCameraDisabled} onCheckedChange={(checked) => setIsCameraDisabled(!checked)} />
                  </div>

                  {/* microphone control */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {isMicrophoneDisabled ? (
                          <MicOff className="h-5 w-5 text-primary" />
                        ) : (
                          <MicIcon className="h-5 w-5 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">Микрофон</p>
                        <p className="text-sm text-muted-foreground">{isMicrophoneDisabled ? "Off" : "On"}</p>
                      </div>
                    </div>
                    <Switch
                      checked={!isMicrophoneDisabled}
                      onCheckedChange={(checked) => setIsMicrophoneDisabled(!checked)}
                    />
                  </div>

                  {/* device settings */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <SettingsIcon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Настройки</p>
                        <p className="text-sm text-muted-foreground">Выберите устройства</p>
                      </div>
                    </div>
                    <DeviceSettings />
                  </div>
                </div>

                {/* join button */}
                <div className="space-y-3 mt-8">
                  <Button className="w-full" size="lg" onClick={handleJoin}>
                    Присоединиться
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    Не волнуйтесь. Мы хотим, чтобы вы успешно прошли собеседование.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default MeetingSetup;
