import { useFilterContext } from "../context/FilterContext";

const RangeFilter = () => {
    const { filters: { rent, currentStock, maxStock }, updateFilterValue } = useFilterContext();

    const rangeType = [
        {
            name: "rent",
            label: "Rent",
            step: 10,
            value: rent,
            minValue: 30,
            maxValue: 150,
            defaultValue: 30,
        },
        {
            name: "currentStock",
            label: "Current Stock",
            step: 1,
            value: currentStock,
            minValue: 0,
            maxValue: 10,
            defaultValue: 0,
        },
        {
            name: "maxStock",
            label: "Maximum Stock",
            step: 1,
            value: maxStock,
            minValue: 0,
            maxValue: 10,
            defaultValue: 0,
        },
    ];

    return (
        rangeType.map((range, index) => (
            <div key={index}>
                <div className="flex flex-col gap-2 pb-6">
                    <label htmlFor={range.name} className="flex items-center justify-between text-[15px] md:text-base">
                        <span>{range.label}</span>
                        <span className="text-sm">{range.name === 'rent' ? '₹ ' : ''}{range.value}</span>
                    </label>
                    <input
                        type="range"
                        id={range.name}
                        name={range.name}
                        step={range.step}
                        value={range.value}
                        max={range.maxValue}
                        min={range.minValue}
                        onChange={updateFilterValue}
                        className="h-1 cursor-pointer accent-lime-100 bg-gradient-to-r from-lime-100 to-lime-600 rounded-lg appearance-none"
                    />
                </div>
                <hr />
            </div>
        ))
    )
}

export default RangeFilter;
