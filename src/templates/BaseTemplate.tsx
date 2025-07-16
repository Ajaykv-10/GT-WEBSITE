export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  // const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="mx-auto max-w-screen-md">
        <header className="border-b border-gray-300">

        </header>

        <main>{props.children}</main>

        <footer className="border-t border-gray-300 py-8 text-start text-sm">
          {`Copyright @ ${new Date().getFullYear()} by GT Holidays Pvt Ltd. All Rights Reserved.`}
        </footer>
      </div>
    </div>
  );
};
