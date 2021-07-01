select "categories"."name" as "category",
  count("filmCategory"."filmId") as "films"
  from "actors" as "a"
  join "castMembers" using ("actorId")
  join "filmCategory" using ("filmId")
  join "categories" using ("categoryId")
  where ("a"."firstName" = 'Lisa') and(
        "a"."lastName" = 'Monroe')
  group by "categories"."name"
  order by "category" desc;
