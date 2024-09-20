import type { NextApiRequest, NextApiResponse } from "next";
import village_data from "./villages.json";
import Fuse from "fuse.js";

export default (req: NextApiRequest, res: NextApiResponse) => {
  let dataset: any = [...village_data];

  // handle search query
  let searchQuery: any = req.query.search?.toString().trim();

  if (searchQuery && searchQuery !== "") {
    // Step 1: Exact matching (starts with)
    const exactMatch = dataset.filter((item: any) =>
      item.village.toLowerCase().startsWith(searchQuery.toLowerCase())
    );

    const containsMatch = dataset.filter((item: any) =>
      item.village.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const options = {
      useExtendedSearch: true,
      keys: [
        "village",
        //"parish",
        //"subcounty",
        //"NES_category",
        //"power_supply_analysis.source",
        //"power_supply_analysis.factor_in_favor",
      ],
    };

    if (exactMatch.length > 0) {
      const fuse = new Fuse(exactMatch, options);
      dataset = fuse.search(searchQuery).map((x: any) => x.item);
    } else {
      const fuse = new Fuse(containsMatch, options);
      dataset = fuse.search(searchQuery).map((x: any) => x.item);
    }
  }

  // sort dataset on village name
  dataset = dataset.sort((a: any, b: any) => (a.village > b.village ? 1 : -1));

  res.send(dataset);
  return req;
};
