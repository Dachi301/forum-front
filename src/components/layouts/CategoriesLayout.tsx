import StarIcon from "@/assets/icons/StarIcon.tsx";
import CategoryLayoutItem from "@/components/CategoryLayoutItem.tsx";

type Category = {
    id: number,
    title: string
}

function CategoriesLayout() {
    const categories: Category[] = [
        {
            id: 1,
            title: 'Politics'
        },
        {
            id: 2,
            title: 'Programming'
        },
        {
            id: 3,
            title: 'Sport'
        },
        {
            id: 4,
            title: 'Science and Education'
        },
        {
            id: 5,
            title: 'Jobs in Georgia'
        },

    ]

    return (
        <div className={'fixed top-32 right-8'}>
            <div>
                <div className="bg-white w-[230px] shadow-default py-7 px-5">
                    <div className="flex flex-col gap-2">
                        <div className={'flex items-center gap-2'}>
                            <StarIcon/>
                            <h1 className="text-sm tracking-wide">Categories</h1>
                        </div>
                        <div className={'bg-[#EAEAEA] h-[1px] w-full'}/>
                        <ul className={'flex flex-col gap-2 pl-1 list-inside list-disc'}>
                            {categories.map((category: any) => <CategoryLayoutItem key={category.id}
                                                                                   title={category.title}/>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoriesLayout;