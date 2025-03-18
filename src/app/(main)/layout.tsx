type LayoutProps = {
  className: string;
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
