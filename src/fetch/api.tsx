import { PersonProps } from "../interface";

export const getData = async ():Promise<PersonProps[]>=>{
    const res = await fetch(`http://localhost:3000/api/new_data.json`);
    const data = await res.json()
    return data
}