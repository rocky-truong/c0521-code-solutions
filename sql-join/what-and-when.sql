select "f"."releaseYear" as "year",
       "c"."name" as "category name"
  from "films" as "f"
  join "filmCategory" using ("filmId")
  join "categories" as "c" using ("categoryId")
  where "f"."title" = 'Boogie Amelie';
