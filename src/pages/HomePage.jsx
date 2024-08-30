import SectionTitle from '../ui/SectionTitle'
import HomeMain from '../features/items/HomeMain'
import PopularItemList from '../features/items/PopularItemList'
import TrendingItemList from '../features/items/TrendingItemList'

export default function HomePage() {
    return (
        <div className="flex flex-col items-center justify-center pt-28 sm:pt-20">
            <HomeMain />
            <SectionTitle
                title="Popular Items"
                additionalClassName="sticky w-[80%] 2xl:w-[60%]"
            />
            <PopularItemList />
            <SectionTitle
                title="Trending Items"
                additionalClassName="w-[80%] 2xl:w-[60%]"
            />
            <TrendingItemList />
        </div>
    )
}
