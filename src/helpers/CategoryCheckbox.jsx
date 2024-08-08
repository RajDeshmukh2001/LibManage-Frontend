import { useMemo } from "react";
import { Checkbox } from "@nextui-org/react";
import { useBookContext } from "../context/BookContext";

const CategoryCheckbox = ({ category, updateFilterValue }) => {
    const { data: booksData } = useBookContext();

    const categories = useMemo(() => {
        const allCategories = booksData?.map(book => book.category) || [];
        const uniqueCategories = [...new Set(allCategories)];
        return uniqueCategories.sort();
    }, [booksData]);

    return (
        <div className="flex flex-col gap-2 md:max-h-[140px] md:overflow-y-scroll">
            {categories.map((cat, index) => (
                <Checkbox 
                    key={index}
                    size="sm"
                    name="category"
                    value={cat}
                    checked={category.includes(cat)} 
                    onChange={updateFilterValue}
                >
                    {cat}
                </Checkbox>
            ))}
        </div>
    )
}

export default CategoryCheckbox;