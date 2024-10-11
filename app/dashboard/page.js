import Hero from "../components/Hero"
import Main from "../components/Main"
import Dashboard from "../components/Dashboard"
import Login from "../components/Login"

export const metadata = {
    title: "Reflective | Dashboard"
}

export default function DashboardPage(){
    const isAuthenticaed = false
    let children = (<Login/>)
    if (isAuthenticaed){
        children = (<Dashboard/>)
    }
    return (
        <Main>
            {children}
        </Main>
    )
}