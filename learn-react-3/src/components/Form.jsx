import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

/*
  React-hook-form
  * Get us the Form hook from react

  Yup library will used for validation

  @hookform/resolvers is the library to integrate scheme validators with react-hook-form
  * This can be used with yup, joi and many more validators used before.
  * To integrate we used to pass schema defined in this
*/

export const Form = () => {

    const schema = yup.object().shape({
        fullName: yup.string().required(),
        email: yup.string().email().required(),
        age: yup.number().positive().integer().min(18).required(),
        password: yup.string().min(4).max(15).required(),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("password"), null], "Passwords Don't Match")
            .required(),
    });

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Full Name..." {...register("fullName")} />
            <p>{errors.fullName?.message}</p>
            <input type="text" placeholder="Email..." {...register("email")} />
            <p>{errors.email?.message}</p>
            <input type="number" placeholder="Age..." {...register("age")} />
            <p>{errors.age?.message}</p>
            <input type="password" placeholder="Password..." {...register("password")} />
            <p>{errors.password?.message}</p>
            <input type="password" placeholder="Confirm Password..." {...register("confirmPassword")} />
            <p>{errors.confirmPassword?.message}</p>
            <input type="submit" />
        </form>
    );
};