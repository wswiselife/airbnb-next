// createtime 2024-03-07

"use client";

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
// 导入hook
import useRegisterModal from "../../hooks/useRegisterModal";
import { useState } from "react";
import Modal from "./Modal";
import Header from "../Header";
import Input from "../inputs/Input";
import toast from "react-hot-toast";
import Button from "../Button";

const RegisterModal = () => {
    // 使用hook,控制moadl显隐
    const registerModal = useRegisterModal();
    // 控制请求过程中禁止点击
    const [isLoading, setIsLoading] = useState(false);

    // react-hook-form 的写法，具体参照官网
    // 目的是为空错误的时候提示
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    // 固定的写法
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios
            .post("/api/register", data)
            .then(() => {
                registerModal.onClose();
            })
            .catch((error) => {
                toast.error("some error");
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Header title="Welcome to Airbnb" subTitle="Create an account!" />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                label="Password"
                type="password"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                label="Continue with Google"
                outline
                icon={FcGoogle}
                onClick={() => {}}
            />
            <Button
                label="Continue with Github"
                outline
                icon={AiFillGithub}
                onClick={() => {}}
            />

            <div className="text-neutral-500 text-center mt-4 font-light">
                <p>
                    Already have an account?
                    <span
                        className="text-neutral-800
                        cursor-pointer
                        hover:underline">
                        Log in
                    </span>
                </p>
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={registerModal.isOpen}
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            disabled={isLoading}
            title="Register"
            actionLabel="Submit"
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default RegisterModal;
