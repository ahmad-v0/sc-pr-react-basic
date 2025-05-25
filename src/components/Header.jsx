import SearchBox from "./SearchBox"
export default function Header(){
    return <div className="header w100 dFlex alignCenter spaceBetween fs1-5rem fw700">
    <div className="w25 p1rem"><a href="#"><img src="./src/assets/jumanjiLogo.png" alt="Jumanji Logo" className="logo"/></a></div>
    <div className="navbar w50 mx1rem p1rem">
    <div className="w100 dFlex spaceBetween">
    <a href="#">Home</a>
    <a href="#">TestPage</a>
    <a href="#">AnotherTestPage</a>
    </div>
    </div>
    <div className="w25 p1rem">
    <SearchBox />
    </div>
    </div>
}