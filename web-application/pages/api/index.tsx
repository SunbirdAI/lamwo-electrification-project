import type { NextApiRequest, NextApiResponse } from "next";

const API_INFO = {
  version: "v0",
  name: "Lamwo Electrification API",
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.send(API_INFO);
  return req;
};
