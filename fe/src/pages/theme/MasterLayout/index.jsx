import Header from '../Header';
// import Footer from '../Footer';
import SideBar from '../SideBar';
import { memo } from 'react';
const MasterLayout = ({ children, ...props }) => {
    return (
        <>
            <div {...props}>
                <Header />
                <div className="container">
                    <SideBar />
                    {children}
                </div>
                {/* <Footer /> */}
            </div>
        </>
    );
};

export default memo(MasterLayout);
