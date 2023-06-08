export type Items = {
    name: string;
    cost: number;
    weight: number;
};

export type ToolsCategories = "Artisans" | "GamingSets" | "MusicalInstruments"

export type ToolsOptions = {
    [tool: string]: Items;
}

export type Tools = {
    [category in ToolsCategories]: ToolsOptions
};


// type ListOfTool = "AlchemistSupplies" |
//     "BrewersSupplies" |
//     "BrewersSupplies" |
//     "CalligraphersSupplies" |
//     "CarpentersTools" |
//     "CartographersTools" |
//     "CobblersTools" |
//     "CooksUtensils" |
//     "GlassblowersTools" |
//     "JewelersTools" |
//     "LeatherworkerTools" |
//     "MasonsTools" |
//     "PaintersSupplies" |
//     "PottersTools" |
//     "SmithsTools" |
//     "TinkersTools" |
//     "WeaversTools" |
//     "WoodcarversTools" |