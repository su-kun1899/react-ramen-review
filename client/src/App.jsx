import {Outlet} from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";

function AuthButton() {
    const {isLoading, isAuthenticated, loginWithRedirect, logout} = useAuth0();

    function handleClickLoginButton() {
        loginWithRedirect({
            appState: {
                path: window.location.pathname,
            },
        });
    }

    function handleClickLoguoutButton() {
        logout({
            localOnly: true,
        });
    }

    if (isLoading) {
        return (
            <button className="button is-warning is-inverted is-outlined is-loading">
                Loading
            </button>
        )
    }

    if (isAuthenticated) {
        return (
            <button className="button is-warning is-inverted is-outlined" onClick={handleClickLoguoutButton}>
                ログアウト
            </button>
        )
    }

    return (
        <button
            className="button is-warning is-inverted is-outlined"
            onClick={handleClickLoginButton}
        >
            ログイン
        </button>
    );
}

function Header() {
    return (
        <section className="hero is-warning">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">
                        React
                        <br className="is-hidden-tablet"/>
                        ラーメンレビュー
                    </h1>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="content">
                <p className="has-text-centered">
                    これは React 学習用に作成したサンプルアプリケーションです。
                </p>
            </div>
        </footer>
    );
}

export function App() {
    return (
        <>
            <Header/>
            <section className="section has-background-warning-light">
                <div className="container">
                    <div className="block has-text-right">
                        <AuthButton/>
                    </div>
                    <Outlet/>
                </div>
            </section>
            <Footer/>
        </>
    );
}
