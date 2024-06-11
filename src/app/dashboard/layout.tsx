import Header from "@/components/header/header";

export default function DashboardLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header/>
    <main className="w-full min-h-full">
            <section className='w-full text-start'>{props.children}</section>
    </main>
    </div>
  );
}
