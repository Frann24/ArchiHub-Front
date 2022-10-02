import { order, filterType } from "./postSlice";

export const filterTypePost = (allPosts, type) =>
  type !== "default"
    ? filterType(allPosts.filter((e) => e.project_type === type))
    : filterType(allPosts);

export const orderPosts = (filter, type) => {
  const orderMethod = {
    default: { method: (a, b) => (a._id > b._id ? 1 : -1) },
    large: { method: (a, b) => (Number(a.mts2) > Number(b.mts2) ? -1 : 1) },
    small: { method: (a, b) => (Number(a.mts2) > Number(b.mts2) ? 1 : -1) },
    recent: {
      method: (a, b) => (new Date(a.year) > new Date(b.year) ? 1 : -1),
    },
    old: { method: (a, b) => (new Date(a.year) > new Date(b.year) ? -1 : 1) },
  };
  const filterF = [...filter];
  console.log("filtro",filter,"type",type)
  return order(filterF.sort(orderMethod[type].method));
};
