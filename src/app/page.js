import Mainsection from "@/components/Mainsection";
import MySwiper from "@/components/MySwiper";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Mainsection />
      <MySwiper />
    </main>
  );
}
