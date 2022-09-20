import icons from "../constants/icons";

/**
 * Methods Content
 */
const MethodsContent = [
  {
    id: "Aeropress",
    title: "Aeropress",
    src: require("./../assets/icons/aeropress.png"),
  },
  {
    id: "PourOver",
    title: "Pour Over",
    src: require("./../assets/icons/dripper.png"),
  },
];
/**
 * Servings Content
 */
const ServingsContent = [
  {
    id: "1",
    title: "1",
    src: icons.Default,
  },
  {
    id: "2",
    title: "2",
    src: icons.Default,
  },
  {
    id: "3",
    title: "3",
    src: icons.Default,
  },
  {
    id: "4",
    title: "4",
    src: icons.Default,
  },
  {
    id: "5",
    title: "5",
    src: icons.Default,
  },
  {
    id: "6",
    title: "6",
    src: icons.Default,
  },
  {
    id: "7",
    title: "7",
    src: icons.Default,
  },
];

export {
  MethodsContent,
  ServingsContent,
};
/* ---------------------------------- */
/*         Content generators         */
/* ---------------------------------- */
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
    case "aeropress":
      from = 9;
      to = 16;
      break;
    case "pourover":
      from = 10;
      to = 17;
      break;
    default:
      from = 10;
      to = 15;
      break;
  }

  rangeGenerator(from, to).map((value) => res.push({ label: `1:${value}`, value }));

  return res;
}
/* ---------------------------------- */
/*      End of content generatos      */
/* ---------------------------------- */
