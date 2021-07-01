select ("countries"."name") as "country",
       count("countries"."name") as "totalCities"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."countryId"
  order by "totalCities" desc;
