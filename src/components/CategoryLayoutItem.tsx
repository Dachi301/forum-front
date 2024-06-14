interface PropsTypes {
    title: string
}

function CategoryLayoutItem({title}: PropsTypes) {
    return (
        <li className={'text-[11px] cursor-pointer text-[#1682FD] truncate'}>
            {title}
        </li>
    );
}

export default CategoryLayoutItem;