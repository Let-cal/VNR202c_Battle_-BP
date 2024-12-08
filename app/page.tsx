import { AIChat } from "@/components/ai-chat";
import Context from "@/components/historical_context/slide_tong";
import Historical from "@/components/historical_context/slide_tong2";
import { Summary } from "@/components/summary";
import { Victory } from "@/components/victory";

export default function Home() {
    return (
        <main className="w-screen overflow-hidden">
            <Victory />
            <Context />
            <Historical />
            <Summary />
            <AIChat />
        </main>
    );
}
