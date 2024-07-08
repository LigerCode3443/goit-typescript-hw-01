type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: AllType,
  bottom: AllType
): Pick<AllType, "name" | "position" | "color" | "weight"> {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

compare(
  { name: "fox", color: "red", position: 23, weight: 23 },
  { name: "dog", color: "yellow", position: 213, weight: 213 }
);
