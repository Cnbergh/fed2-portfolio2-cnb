
export default function DashboardLayout(props: {
  children: React.ReactNode;
  tasks: React.ReactNode;
  habitswellbeing: React.ReactNode;
  journal: React.ReactNode;
}) {
  return (
    <main className="w-full min-h-full">
            <section className='w-full text-start'>{props.children}</section>
    </main>
  );
}
