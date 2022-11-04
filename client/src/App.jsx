import {Route, Router, Routes} from "react-router-dom";

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
        <Router location="" navigator="">
            <Header/>
            <section className="section has-background-warning-light">
                <div className="container">
                    <div className="block has-text-right">
                        <button className="button is-warning is-inverted is-outlined">
                            ログイン
                        </button>
                    </div>
                </div>
                {/*<Routes>*/}
                {/*    <Route path="/" exact>*/}
                {/*        */}
                {/*    </Route>*/}
                {/*</Routes>*/}
            </section>
            <Footer/>
        </Router>
    );
}
