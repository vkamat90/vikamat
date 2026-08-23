export type Capture = {
  id: string;
  caption: string;
  location?: string;
  date?: string;
  orientation: "landscape" | "portrait" | "square";
  // No real photo yet — render a placeholder gradient tile instead of an <img>.
  // Once you have real photos, add `src: "/captures/whatever.jpg"` and the
  // grid will render the image instead automatically.
  src?: string;
  gradient: string; // css gradient, brand-toned
};

const g = {
  sienna: "linear-gradient(135deg, #a15c33, #5b3420)",
  indigo: "linear-gradient(135deg, #526eae, #253357)",
  oxblood: "linear-gradient(135deg, #a55650, #4f2523)",
  wash: "linear-gradient(135deg, #ddd4c0, #8a8375)",
};

export const captures: Capture[] = [
  { id: "c1", caption: "Add your photo", location: "Seattle", orientation: "landscape", gradient: g.sienna },
  { id: "c2", caption: "Add your photo", location: "Goa", orientation: "portrait", gradient: g.indigo },
  { id: "c3", caption: "Add your photo", location: "Kuala Lumpur", orientation: "square", gradient: g.oxblood },
  { id: "c4", caption: "Add your photo", location: "Mumbai", orientation: "landscape", gradient: g.wash },
  { id: "c5", caption: "Add your photo", orientation: "portrait", gradient: g.oxblood },
  { id: "c6", caption: "Add your photo", orientation: "landscape", gradient: g.indigo },
];
