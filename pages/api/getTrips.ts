import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity"
import { sanityClient } from "sanityconfig";
import { Trip } from "typings";


const query = groq`
    *[_type == "trip"] {
      ...,
      from->,
      to->
    }
`
type Data = {
    trips: Trip[],
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const trips: Trip[] = await sanityClient.fetch(query)

    res.status(200).json({ trips })
  }