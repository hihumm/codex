import React from "react";
import { useForm } from "react-hook-form";

export default function FormRoute() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    console.log(watch("example"));

    return (
        <form className="usa-form" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="FName">First Name</label>
            <input className="usa-input" defaultValue="test" {...register("FName", { required: true })} />
            <div>{errors.FName && <span>Please enter your first name</span>}</div>
            <label htmlFor="LName">Last Name</label>
            <input className="usa-input" {...register("LName", { required: true })} />
            <div>{errors.LName && <span>Please enter your last name</span>}</div>
            <label htmlFor="Email">Email Address</label>
            <input type="email" className="usa-input" {...register("Email", {
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                required: true
            })} />
            <div>{errors.Email && <span>Please enter a valid email</span>}</div>
            <input className="usa-button" type="submit" />
        </form>
    );
}
