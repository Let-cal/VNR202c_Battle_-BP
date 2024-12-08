import { AIChat } from "@/components/ai-chat";
import { Summary } from "@/components/summary";

export default function Home() {
    return (
        <div className="w-screen overflow-hidden ">
            <section className="h-screen bg-black"></section>
            <Summary />
            <AIChat />
            <section className="h-full bg-red-500"></section>
        </div>
    );
}
