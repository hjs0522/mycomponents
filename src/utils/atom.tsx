import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom} = recoilPersist();

export const counterState = atom({
    key:'counterState',
    default:0,
    effects_UNSTABLE: [persistAtom],
})