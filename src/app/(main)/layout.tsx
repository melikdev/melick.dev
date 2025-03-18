type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutProps) => {
  return (
    <main className="">
      <section className="">{children}</section>
    </main>
  );
};

export default MainLayout;
