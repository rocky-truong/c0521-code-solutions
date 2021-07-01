select "c"."firstName" as "first name",
       "c"."lastName" as "last name",
    sum("p"."amount") as "total paid"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  group by "c"."firstName",
           "c"."lastName"
  order by "total paid" desc;
