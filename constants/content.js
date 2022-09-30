import icons from "../constants/icons";

/**
 * Methods Content
 */
const MethodsContent = [
  {
    id: "Aeropress",
    title: "Aeropress",
    src: icons.Aeropress,
  },
  {
    id: "FrenchPress",
    title: "French Press",
    src: icons.FrenchPress,
  },
  {
    id: "MokaPot",
    title: "Moka Pot",
    src: icons.MokaPot,
  },
  {
    id: "PourOver",
    title: "Pour Over",
    src: icons.Dripper,
  },
];
export { MethodsContent };
/* ---------------------------------- */
/*         Content generators         */
/* ---------------------------------- */
/**
 * Servings Content
 *
 * {
 * id: "1",
 * title: "1",
 * src: icons.Default,
 * }
 */
export function servingsContent(from = 1, to = 5) {
  let res = [];
  rangeGenerator(from, to).map((value) =>
    res.push({
      id: value,
      title: value,
      src: icons.Default,
    })
  );

  return res;
}
/**
 * Sequence generator function (commonly referred to as "range")
 * Generate numbers range 0..4
 * @param from
 * @param to
 * @param threshold
 */
export function rangeGenerator(from, to, threshold = 1) {
  return Array.from({ length: (to - from) / threshold + 1 }, (_, i) => from + i * threshold);
}
/**
 *
 * @function rangeGenerator used to provide an array
 * It will return 1: { @var value } => looks like e.g. 1:10 - check the @example
 *
 * @param {string} method
 *
 * @example
 *  [
 *    { label: "1:10", value: "10" },
 *    { label: "1:11", value: "11" },
 *    { label: "1:12", value: "12" },
 *  ]
 *
 */
export function ratioProvider(method) {
  const res = [];
  let from, to;

  switch (method) {
    // 100g / 1L > 1:10
    case "aeropress":
      from = 9;
      to = 15;
      break;
    // 75g / 1L > 1:13
    case "frenchpress":
      from = 12;
      to = 18;
      break;
    // 200g / 1L > 1:5
    case "moka":
      from = 6;
      to = 10;
      break;
    // 60g / 1L > 1:16
    case "pourover":
      from = 13;
      to = 18;
      break;
    default:
      from = 10;
      to = 15;
      break;
  }

  rangeGenerator(from, to).map((value) =>
    res.push({
      label: `1:${value}`,
      value,
    })
  );

  return res;
}
/* ---------------------------------- */
/*      End of content generators      */
/* ---------------------------------- */
