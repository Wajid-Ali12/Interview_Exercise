import {HomeLayout} from "../layouts/MainLayout/HomeLayout";
import SquareGuides from "../modules/home/components/SquareGuides";
import SearchHeader from "../modules/home/components/SearchHeader";

const Home = () => {
    return (
        <HomeLayout>
            <SearchHeader />
            <SquareGuides />
        </HomeLayout>
    )
}

export default Home

