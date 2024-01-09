import PageBottom from "./components/PageBottom";
import PageMain from "./components/PageMain";
import PageTop from "./components/PageTop";

function Home() {
  return (
    <div className="m-common">
      <PageTop />
      <PageMain />
      <PageBottom />
    </div>
  );
}

export default Home;
