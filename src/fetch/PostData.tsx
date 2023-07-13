import { useMutation } from "react-query";
import { postData } from "./api";

const PostData = () =>  {
    const mutation = useMutation(postData)

    return(
        <form
        onSubmit={event => {
            event.preventDefault();
            const form = event.target as HTMLFormElement;
            const user = {
            name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
            email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
            nickname: (form.elements.namedItem('nickname') as HTMLInputElement)?.value,
            role: (form.elements.namedItem('role') as HTMLInputElement)?.value,
            mbti: (form.elements.namedItem('mbti') as HTMLInputElement)?.value
            };
            mutation.mutate(user);
        }}
        >
            <label>
                Name: 
                <input name="name" type="text" />
            </label>
            <label>
                Email: 
                <input name="email" type="text" />
            </label>
            <label>
                Nickname: 
                <input name="nickname" type="text" />
            </label>
            <label>
                Role: 
                <input name="role" type="text" />
            </label>
            <label>
                Mbti: 
                <input name="mbti" type="text" />
            </label>
            <button type="submit">add User</button>
        </form>
    );
}
export default PostData;