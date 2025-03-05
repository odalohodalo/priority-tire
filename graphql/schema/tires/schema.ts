import { makeSchema, objectType, queryType } from "nexus";
import { join } from "path";
import tiresData from "../../data/tires.json";

const Tire = objectType({
  name: "Tire",
  definition(t) {
    t.int("id");
    t.string("sku");
    t.string("type");
    t.boolean("roadHazardWarranty");
    t.string("loadRange");
    t.string("speedRating");
    t.string("performance");
    t.string("mpn");
    t.float("overallDiameter");
    t.string("season");
    t.int("aspectRatio");
    t.string("brand");
    t.string("utqg");
    t.boolean("runFlat");
    t.boolean("rebateAvailable");
    t.string("countryOfOrigin");
    t.string("sidewall");
    t.string("size");
    t.int("loadIndex");
    t.int("sectionWidth");
    t.string("model");
    t.int("rimDiameter");
    t.string("treadDepth");
    t.string("approvedRimWidth");
    t.float("price");
    t.float("rating");
    t.int("stock");
  },
});

const Query = queryType({
  definition(t) {
    t.list.field("tires", {
      type: "Tire",
      resolve() {
        return tiresData;
      },
    });

    t.field("tire", {
      type: "Tire",
      args: {
        id: "Int",
      },
      resolve(_, { id }) {
        const tire = tiresData.find((tire) => tire.id === id);
        return tire || null;
      },
    });
  },
});

export const schema = makeSchema({
  types: [Tire, Query],
  outputs: {
    schema: join(
      process.cwd(),
      "graphql/schema/tires/generated/schema.graphql"
    ),
    typegen: join(
      process.cwd(),
      "graphql/schema/tires/generated/nexus-typegen.ts"
    ),
  },
});
