import Header from "./components/header/Header";
import Search from "./components/search/Search";
import Users from "./components/users/Users";
import Wrapper from "./components/wrapper/Wrapper";


function App() {
  return (
    <>
     <Header />
     <Wrapper>
        <Search/>
        <Users/>
     </Wrapper>
    </>
  )
}

export default App
