import { defineField, defineType } from "sanity";

export default defineType({
  name: "til",
  title: "TIL",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "markdown",
    }),
  ],
  preview: {
    select: {
      title: "date",
    },
  },
});
