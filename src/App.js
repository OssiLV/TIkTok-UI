import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { DefaultLayout, HeaderOnly } from '~/componnents/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/following">Following</Link> <br />
                <Link to="/">Home</Link>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;

                        if (route.layout) {
                            Layout = route.layout;
                        } else if (route.layout === null) {
                            Layout = Fragment;
                        }

                        const Page = route.Component;
                        {
                            /* console.log(<Layout/>); */
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
