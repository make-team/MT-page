import { FIELD } from "constant/checkItems";

const RECRUIMENT_ADD = "recruiment/RECRUIMENT_ADD" as const;
const RECRUIMENT_DELETE = "recruiment/RECRUIMENT_DELETE" as const;

let nextId = 1;

export const addRecruiment = (
  field: keyof typeof FIELD,
  skill: string,
  count: number
) => ({
  type: RECRUIMENT_ADD,
  payload: {
    id: nextId++,
    field,
    skill,
    count,
  },
});

export const deleteRecruiment = (id: number) => ({
  type: RECRUIMENT_DELETE,
  payload: id,
});

type TodosAction =
  | ReturnType<typeof addRecruiment>
  | ReturnType<typeof deleteRecruiment>;

export type Item = {
  id?: number;
  field: keyof typeof FIELD;
  skill: string;
  count: number;
};

export type RecruimentItem = Item[];

const initialState: RecruimentItem = [];

function recruiment(
  state: RecruimentItem = initialState,
  action: TodosAction
): RecruimentItem {
  switch (action.type) {
    case RECRUIMENT_ADD:
      return state.concat({
        field: action.payload.field,
        skill: action.payload.skill,
        count: action.payload.count,
      });
    case RECRUIMENT_DELETE:
      return state.filter((deleteItem) => deleteItem.id === action.payload);
    default:
      return state;
  }
}

export default recruiment;
