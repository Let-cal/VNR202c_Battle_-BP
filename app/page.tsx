import { AIChat } from "@/components/ai-chat";
import Context from "@/components/historical_context/slide_tong";
import Historical from "@/components/historical_context/slide_tong2";
import { Leaders } from "@/components/leaders";
import Strategy from "@/components/strategy/main_slide";
import { Summary } from "@/components/summary";
import { Victory } from "@/components/victory";

export default function Home() {
    return (
        <main className="w-screen overflow-hidden">
            <Victory />
            <Context />
            <Historical />
            <Strategy />
            <Leaders />
            <Summary />
            <AIChat />
        </main>
    );
}
