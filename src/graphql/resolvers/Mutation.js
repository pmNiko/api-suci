import { tasks } from "../utils/sample";
const Mutation = {
  createTask(_, { input }) {
    input._id = tasks.length;
    tasks.push(input);
    return input;
  },
};

export default Mutation;
