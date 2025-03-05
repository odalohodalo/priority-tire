import { gql } from "@apollo/client";

export const GET_ALL_TIRES = gql`
  query GetAllTires {
    tires {
      id
      sku
      type
      roadHazardWarranty
      loadRange
      speedRating
      performance
      mpn
      overallDiameter
      season
      aspectRatio
      brand
      utqg
      runFlat
      rebateAvailable
      countryOfOrigin
      sidewall
      size
      loadIndex
      sectionWidth
      model
      rimDiameter
      treadDepth
      approvedRimWidth
      price
      rating
      stock
    }
  }
`;

export const GET_TIRE_BY_ID = gql`
  query GetTireById($id: Int!) {
    tire(id: $id) {
      id
      sku
      type
      roadHazardWarranty
      loadRange
      speedRating
      performance
      mpn
      overallDiameter
      season
      aspectRatio
      brand
      utqg
      runFlat
      rebateAvailable
      countryOfOrigin
      sidewall
      size
      loadIndex
      sectionWidth
      model
      rimDiameter
      treadDepth
      approvedRimWidth
      price
      rating
      stock
    }
  }
`;
