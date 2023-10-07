import { defineField, defineType } from "sanity";

export default defineType({
  name: "gallery",
  title: "Gallery",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
    }),
  ],
  preview: {
    select: {
      title: "date",
    },
  },
});
