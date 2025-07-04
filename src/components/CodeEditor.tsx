import { CODING_QUESTIONS, LANGUAGES } from "@/constants";
import { useEffect, useState } from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "./ui/resizable";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { AlertCircleIcon, BookIcon, LightbulbIcon, PlayIcon } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import ts from "typescript";

function CodeEditor() {
  const [selectedQuestion, setSelectedQuestion] = useState(CODING_QUESTIONS[0]);
  const [language, setLanguage] = useState<
    "javascript" | "python" | "java" | "typescript" | "cpp" | "csharp" | "php" | "swift" | "go"
  >(LANGUAGES[0].id);
  const [code, setCode] = useState(selectedQuestion.starterCode[language]);
  const [output, setOutput] = useState<string>("");
  const { resolvedTheme } = useTheme();
  const [editorTheme, setEditorTheme] = useState<"vs-dark" | "vs">("vs-dark");

  useEffect(() => {
    setEditorTheme(resolvedTheme === "light" ? "vs" : "vs-dark");
  }, [resolvedTheme]);

  const handleQuestionChange = (questionId: string) => {
    const question = CODING_QUESTIONS.find((q) => q.id === questionId)!;
    setSelectedQuestion(question);
    setCode(question.starterCode[language]);
  };

  const handleLanguageChange = (
    newLanguage: "javascript" | "python" | "java" | "typescript" | "cpp" | "csharp" | "php" | "swift" | "go"
  ) => {
    setLanguage(newLanguage);
    setCode(selectedQuestion.starterCode[newLanguage]);
  };

  // only works for javascript/typescript
  const runCode = async () => {
    try {
      let finalCode = code;

      if (language === "typescript") {
        // transpile typescript to javascript
        const transpiled = ts.transpileModule(code, {});
        finalCode = transpiled.outputText;
      }

      // capture console output
      let output = "";
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        output += args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg, null, 2) : arg)).join(" ") + "\n";
      };

      new Function(finalCode)();

      console.log = originalConsoleLog;
      setOutput(output.trim());
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : error}`);
    }
  };

  return (
    <ResizablePanelGroup direction="vertical" className="min-h-[calc-100vh-4rem-1px">
      {/* question area */}
      <ResizablePanel>
        <ScrollArea className="h-full">
          <div className="p-6">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-semibold tracking-tight">{selectedQuestion.title}</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">Выберите язык и решите задачу</p>
                </div>
                <div className="flex items-center gap-3">
                  <Select value={selectedQuestion.id} onValueChange={handleQuestionChange}>
                    <SelectTrigger className="w-auto">
                      <SelectValue placeholder="Select question" />
                    </SelectTrigger>
                    <SelectContent>
                      {CODING_QUESTIONS.map((q) => (
                        <SelectItem key={q.id} value={q.id}>
                          {q.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={language} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-[150px]">
                      {/* select value */}
                      <SelectValue>
                        <div className="flex items-center gap-2">
                          <img src={`/${language}.png`} alt={language} className="w-5 h-5 object-contain" />
                          {LANGUAGES.find((l) => l.id === language)?.name}
                        </div>
                      </SelectValue>
                    </SelectTrigger>
                    {/* select content */}
                    <SelectContent>
                      {LANGUAGES.map((lang) => (
                        <SelectItem key={lang.id} value={lang.id}>
                          <div className="flex items-center gap-2">
                            <img src={`/${lang.id}.png`} alt={lang.name} className="w-5 h-5 object-contain" />
                            {lang.name}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* task description */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <BookIcon className="size-6 text-primary/90" />
                  <CardTitle className="text-lg">Описание</CardTitle>
                </CardHeader>
                <CardContent className="text-sm leading-relaxed">
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    <p className="whitespace-pre-line">{selectedQuestion.description}</p>
                  </div>
                </CardContent>
              </Card>

              {/* examples */}
              <Card>
                <CardHeader className="flex flex-row items-center gap-2">
                  <LightbulbIcon className="size-6 text-yellow-500" />
                  <CardTitle className="text-lg">Примеры</CardTitle>
                </CardHeader>
                <CardContent>
                  <ScrollArea className="h-full w-full rounded-md border">
                    <div className="p-4 space-y-4">
                      {selectedQuestion.examples.map((example, index) => (
                        <div key={index} className="space-y-2">
                          <p className="font-medium text-sm">Пример {index + 1}:</p>
                          <ScrollArea className="h-full w-full rounded-md">
                            <pre className="bg-muted/50 p-3 rounded-lg text-sm font-mono">
                              <div>Ввод: {example.input}</div>
                              <div>Вывод: {example.output}</div>
                              {example.explanation && (
                                <div className="pt-2 text-muted-foreground">Пояснение: {example.explanation}</div>
                              )}
                            </pre>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      ))}
                    </div>
                    <ScrollBar />
                  </ScrollArea>
                </CardContent>
              </Card>

              {/* constraints */}
              {selectedQuestion.constraints && (
                <Card>
                  <CardHeader className="flex flex-row items-center gap-2">
                    <AlertCircleIcon className="size-6 text-red-500" />
                    <CardTitle className="text-lg">Ограничения</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1.5 text-sm marker:text-muted-foreground">
                      {selectedQuestion.constraints.map((constraint, index) => (
                        <li key={index} className="text-muted-foreground">
                          {constraint}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
          <ScrollBar />
        </ScrollArea>
      </ResizablePanel>

      <ResizableHandle withHandle />

      {/* code editor area */}
      <ResizablePanel defaultSize={52} maxSize={100}>
        <div className="h-full relative">
          <Editor
            height={"100%"}
            defaultLanguage={language}
            language={language}
            value={code}
            theme={editorTheme}
            onChange={(value) => setCode(value || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 16,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              padding: { top: 16, bottom: 16 },
              wordWrap: "on",
              wrappingIndent: "indent",
            }}
          />
        </div>
      </ResizablePanel>

      {/* output area */}
      {["javascript", "typescript"].includes(language) && (
        <>
          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={8} maxSize={50} className="flex flex-col h-full overflow-hidden">
            <div className="h-full flex items-center gap-2 p-4">
              <Button className="rounded-full font-medium flex items-center gap-2" onClick={runCode}>
                <PlayIcon />
                Запустить
              </Button>

              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">Результат:</span>
              </div>

              <div className="flex-1 overflow-auto">
                <code className="text-sm text-muted-foreground">{output}</code>
              </div>
            </div>
          </ResizablePanel>
        </>
      )}
    </ResizablePanelGroup>
  );
}

export default CodeEditor;
