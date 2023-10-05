import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import {schemas} from "./sanity/schemas";

export const config = defineConfig({
  name: "Yasin_Content_Studio",
  title: 'Yasin Content Studio',
  projectId: 'dhp2ol24',
  dataset: 'production',
  apiVersion: "2023-10-04",
  basePath: "/admin",
  plugins: [deskTool()], 
  schema: { types: schemas }
})