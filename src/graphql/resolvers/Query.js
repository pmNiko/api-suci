/*
  ---- Query Resolvers -----
*/
import { tasks } from "../utils/sample";

const Query = {
  test() {
    return "Query de prueba a través de GraphQL!";
  },
  tasks() {
    return tasks;
  },
};

export default Query;
