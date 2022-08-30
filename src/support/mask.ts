import { debounce } from "lodash";
import { mask } from "maska";

export const delayedMask = debounce(mask, 500)
export { mask } from 'maska'