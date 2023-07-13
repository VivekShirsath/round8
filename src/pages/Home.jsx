import { Header } from "../components/Header"
import { Body } from "../components/Body"

export const Home = () => {
    return(
        <div className="flex  flex-col  gap-3 p-3">
            <Header/>
            <Body/>
        </div>
    )
}