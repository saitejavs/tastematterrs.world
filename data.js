/* Taste of Everything — taxonomy.
   Entries live in data-1.js … data-6.js and push into window.ITEMS.

   Every entry answers four things separately, so nothing is vague:
     sense — what it is actually like to taste, see, hear or hold
     diff  — how it differs from the nearest thing anyone else makes
     only  — the mechanism that pins it to this one place
     rare  — the numbers: how many makers, how much output, how small the window
   rank: 5 = a handful of hands · 4 = one village or one facility
         3 = one valley or town · 2 = one region · 1 = one country */

window.CATEGORIES = [
  { id: "food",   name: "Food & Ingredients", note: "Ingredients one place alone can make",
    subs: ["Spice", "Cured & Aged", "Grain & Ferment", "Salt & Oil", "Sea & Shore"] },
  { id: "sweet",  name: "Sugar & Sweets", note: "Sugarwork tied to one town's hands",
    subs: ["Confection", "Pastry", "Frozen"] },
  { id: "drink",  name: "Drink", note: "Terroir and process that cannot be moved",
    subs: ["Tea", "Coffee", "Wine & Spirit", "Fermented"] },
  { id: "scent",  name: "Scent & Attar", note: "Aromatics that fail outside one soil",
    subs: ["Flower", "Resin & Wood", "Earth"] },
  { id: "cloth",  name: "Cloth & Dye", note: "Fibre and weave that only survive locally",
    subs: ["Wool & Hair", "Silk & Brocade", "Dye & Print", "Straw & Fibre"] },
  { id: "craft",  name: "Craft & Making", note: "A tolerance kept alive by very few hands",
    subs: ["Horology", "Metal & Blade", "Glass & Clay", "Lacquer & Leaf", "Bamboo & Wood"] },
  { id: "sound",  name: "Sound & Instruments", note: "Materials and tunings with no substitute",
    subs: ["Wood & Bow", "Bronze & Bell", "Invented Here"] },
  { id: "pig",    name: "Ink, Paper & Pigment", note: "Colour and surface from a single source",
    subs: ["Pigment", "Ink & Dye", "Paper"] },
  { id: "tech",   name: "Technology", note: "One facility, one process, no second source",
    subs: ["Semiconductors", "Big Science", "Aerospace", "Standards & Vaults", "Precision Manufacturing"] },
  { id: "cars",   name: "Cars & Circuits", note: "A method or road unique to one place",
    subs: ["Proving Ground", "Method"] },
  { id: "bikes",  name: "Two Wheels", note: "Racing and framebuilding shaped by terrain",
    subs: ["Racing & Rally", "Framebuilding"] },
  { id: "uni",    name: "Schools of One Subject", note: "The world's only real option in its field",
    subs: ["Single-Subject", "Field Stations"] },
  { id: "mon",    name: "Monuments", note: "Structures no one else could copy",
    subs: ["Ancient", "Sacred", "Engineering"] },
  { id: "nat",    name: "Natural Wonders", note: "Geology or biology found in exactly one place",
    subs: ["Fire & Chemistry", "Sky & Light", "Caves & Water", "Flats & Mountains"] },
  { id: "park",   name: "Protected Land", note: "Land defined by one unrepeatable feature",
    subs: ["Island Endemism", "Forest", "Marine", "Ice & Alkali"] },
  { id: "move",   name: "Transit", note: "A route or vehicle that cannot exist elsewhere",
    subs: ["Rail", "Water", "Suspended"] },
  { id: "hist",   name: "Turning Points", note: "The specific room where knowledge turned",
    subs: ["Ideas & Science", "Consequence"] }
];

window.ITEMS = [];
