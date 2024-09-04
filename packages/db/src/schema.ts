import { integer, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("user", {
  id: uuid("id").primaryKey(),
  name: text("name").notNull(),
  imageSrc: text("image-src"),
  email: text("email").unique().notNull(),
  phone: integer("phone").unique(),
  password: text("password").notNull(),
});
