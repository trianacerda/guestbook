import Header from '../../components/layout/Header';

const LayoutViews = ({ children }) => {
  return (
    <div className="layout=views">
      <Header />
      <main className="children-comps">{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutViews;
