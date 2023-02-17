import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./app.scss";
import Scroll from "../components/Scroll";
import { setSearchField, requestRobots } from "../actions";
 
// * Functional Component with React hooks and redux
 
const App = () => {
  const dispatch = useDispatch();
  const { searchField } = useSelector((state) => state.searchRobots);
  const { robots, isPending } = useSelector(state => state.requestRobots);

  //useSelector odczytuje wartości ze stanu store i nasłuchuje aktualizacji
  // kiedy useDispatch zwraca metodę dispatch ze store aby pozwolic nam wysyłać akcje
  //przy użyciu tej metody. W komoponentach klasowych używa się w zamian tego
  //mapToStateProps, mapDispatchToProps
  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };
  const onRequestRobots = () => {
    dispatch(requestRobots());
 }
  useEffect(() => {
    onRequestRobots();
  }, []);
 
  const filterRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });
  return isPending ? (
    <h1 className="f1">Loding....</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">Robo Friends</h1>
      <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterRobots} />
        </Scroll>
    </div>
  );
};
export default App; 

//connect to Higher Order Function. Oznacxza to że jest to Funkcja
// która zwraca inną funkcję. I właśnie w tej innej funkcji otrzymuej jako
// parametr App

//UWAGA GDY UŻYWAMY KOMPONENTÓW FUNKCYJNYCH I UZYWAMY HOOKÓ + useDispacth, useSelector
// NIE MUSIMY UŻYWAĆ CONNECT!!

//Connect sprawia że komponent App jest tak zwany "redux-aware" czyt. świadomy
// obecności reduxa i ma dostęp do stanu i do zmian stanu w redux store
//Conenct w przyjmuje równieć parametry MapStateToProps i mapDispatchToProps

// Przez mapStateToProps chcemy powiedzieć komponentowi na jaki stan ma zwracać uwagę
// a przez mapDispatchToProps na jakie akcje ma zwracać uwage


// PRZY UŻYCIU KOMPONENTÓW KLASOWYCH ZAMIAST useDispatch (zastępujący mapDisptatchToPtops)
// i zamiast useSelector(mapStateToProps) używamy :

// const mapStateToProps = state => {
//     return {
//         searchField: state.searchRobots.searchField,
//         robots: state.requestRobots.robots,
//         isPending: state.requestRobots.isPending,
//         error: state.requestRobots.error
//     }
//     // Funckja ta wskazuje komponentowi jakiego stanu ma nasłuchiwać
//     //zwrócony obiekt będzie przekazany do app jako propsy
// }

// const mapDispatchToProps = (dispatch) => ({
//     //dispatch jest tym co wywołuje action i wysyła akcję do reducera
//     onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
//     // on searchChange otrzymuje event i wtedy wywoływana jest
//     // akcja seTsearchField jako parametr metody dysipatch
//     // która daje możliwośc do wysłania akcji, je uruchumonienia i
//     // wysłania do reducer
//     //FUnkcja ta mówi  jakich propsów ma komponent nasłuchiwać
//     onRequestRobots: () => dispatch(requestRobots())
//     //RequestRobots to funkcja(akcja) wyższego rzędu, która w swoim ciele
//     //zwraca funkcję, która przyjmuje jako parametr dispatch. Ma to na celu
//     //uruchomienie thunk Middleware, który nasłuchuje aż jakaś akcja nie zwróci
//     //obiektu, a zwróci funkcję
// })
