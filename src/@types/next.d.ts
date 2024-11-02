import "next";
import { ParsedUrlQuery } from "querystring";

declare module "next" {
  interface GetStaticPropsContext<Q extends ParsedUrlQuery = ParsedUrlQuery> {
    params: Q & Promise<{ locale: string }>;
  }
}
