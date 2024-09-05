import { Flex, Image, Layout } from "antd";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import CoverImg from "/header-cover.png";

function App() {
  const { Footer } = Layout;
  return (
    <>
      <div className="page-container">
        <Flex className="page-content">
          <Layout>
            <Image src={CoverImg} height="300px" preview={false} />
            <SearchPage />
          </Layout>
        </Flex>
      </div>
      <Layout className="page-footer">
        <Footer>Pham Nhat Minh</Footer>
      </Layout>
    </>
  );
}

export default App;
