import { useState } from "react";
import { Flex, Layout } from "antd";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SearchBox from "./components/search";
import CardList from "./listings/CardList";

function App() {
  const [count, setCount] = useState(0);
  const { Sider, Header, Footer, Content } = Layout;
  return (
    <>
      <Flex>
        <Layout>
          <Sider width="20%">
            <SearchBox />
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content>
              <CardList />
              <button>Load more</button>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </Flex>
    </>
  );
}

export default App;
