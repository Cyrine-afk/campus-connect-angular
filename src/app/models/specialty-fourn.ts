export enum SpecialtyFourn {
    DAIRY = "DAIRY",
    MEAT = "MEAT",
    PASTERIES = "PASTERIES",
    GRAINS = "GRAINS",
    WHOLEFOODS = "WHOLEFOODS", 
    VEGETABLES = "VEGETABLES", 
    FRUITS = "FRUITS", 
    WATER = "WATER", 
    JUICE = "JUICE",
}

export const SpecialtyFourn2LabelMapping: Record<SpecialtyFourn, string> = {
    [SpecialtyFourn.DAIRY]: "DAIRY",
    [SpecialtyFourn.MEAT]: "MEAT",
    [SpecialtyFourn.PASTERIES]: "PASTERIES",
    [SpecialtyFourn.GRAINS]: "GRAINS",
    [SpecialtyFourn.WHOLEFOODS]: "WHOLEFOODS",
    [SpecialtyFourn.VEGETABLES]: "VEGETABLES",
    [SpecialtyFourn.FRUITS]: "FRUITS",
    [SpecialtyFourn.WATER]: "WATER",
    [SpecialtyFourn.JUICE]: "JUICE"
};
