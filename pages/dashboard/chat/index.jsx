import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import DashboardLayout from '../../../components/dashboard/DashboardLayout'
import Header from '../../../components/dashboard/Header'
// import { ChatCompletionMessage } from "openai/resources/index.mjs";
// import { Empty } from "../../../components/empty";
// import { Loader } from "../../../components/loader";
import { cn } from "../../../lib/utils";
// import { UserAvatar } from "../../../components/user-avatar";
// import { BotAvatar } from "../../../components/bot-avatar";
import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react"

import { Badge } from "../../../components/ui/badge"
import { Label } from "../../../components/ui/label"
import { Textarea } from "../../../components/ui/textarea"


const Conversation = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const router = useRouter();
  const [messages, setMessages] = useState([]);

  const onSubmit = async (values) => {
    try {
      const userMessage = {
        role: "user",
        content: values.prompt,
      };

      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/code", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      }
      console.log("error");
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  function formatTextForReadability(content) {
    if (content !== null) {
      return content.replace(/\.\s/g, ".\n");
    }
    return '';
  }

  return (
    <>

      <DashboardLayout>
        <Header />
        <div className="flex flex-col px-4">
          <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold">Ai Doctor</h1>
            <Button
              variant="outline"
              size="sm"
              className="ml-auto gap-1.5 text-sm"
            >
              <Share className="size-3.5" />
              Share
            </Button>
          </header>
          <main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3 h-screen">
            <div
              className="relative hidden flex-col items-start gap-8 md:flex" x-chunk="dashboard-03-chunk-0"
            >
              <form className="grid w-full items-start gap-6">
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    AI Doctor Details
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="model">Model</Label>
                    <div className="border border-gray-300 p-2 rounded-md">Neural Genesis</div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="temperature">Accuracy</Label>
                    <div className="border border-gray-300 p-2 rounded-md">0.4</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-3">
                      <Label htmlFor="top-p">Top </Label>
                      <div className="border border-gray-300 p-2 rounded-md">0.7</div>
                    </div>
                    <div className="grid gap-3">
                      <Label htmlFor="top-k">Low</Label>
                      <div className="border border-gray-300 p-2 rounded-md">0.0</div>
                    </div>
                  </div>
                </fieldset>
                <fieldset className="grid gap-6 rounded-lg border p-4">
                  <legend className="-ml-1 px-1 text-sm font-medium">
                    Messages
                  </legend>
                  <div className="grid gap-3">
                    <Label htmlFor="role">Role</Label>
                    <div className="border border-gray-300 p-2 rounded-md">System</div>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="content">Prompt Content Example</Label>
                    <Textarea
                      id="content"
                      placeholder="You are a..."
                      className="border border-gray-300 p-2 rounded-md min-h-[6.5rem]"
                      readOnly
                      value="Can you provide some guidance on managing stress? I've been feeling overwhelmed lately and could use some advice on how to cope with it better."
                    />
                  </div>
                </fieldset>

              </form>
            </div>
            <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
              <Badge variant="outline" className="absolute right-3 top-3">
                Output
              </Badge>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-center text-gray-500">The response will appear here</p>
              </div>
              <form
                className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                x-chunk="dashboard-03-chunk-1"
              >
                <Label htmlFor="message" className="sr-only">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."
                  className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                />
                <div className="flex items-center p-3 pt-0">
                  <Button type="submit" size="sm" className="ml-auto gap-1.5">
                    Send Message
                    <CornerDownLeft className="size-3.5" />
                  </Button>
                </div>
              </form>
            </div>

          </main>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Conversation;