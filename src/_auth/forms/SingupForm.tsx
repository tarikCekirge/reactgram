"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,

    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { SignupValidation } from "@/lib/validation"
import Loader from "@/components/shared/Loader"
import { Link } from "react-router-dom"
import { createUserAccount } from "@/lib/appwrite/api"
import { toast } from "sonner"





const SingupForm = () => {

    const isLoading = false;

    const form = useForm<z.infer<typeof SignupValidation>>({
        resolver: zodResolver(SignupValidation),
        defaultValues: {
            name: "",
            username: "",
            email: "",
            password: ""
        },
    })
    async function onSubmit(values: z.infer<typeof SignupValidation>) {
        const newUser = await createUserAccount(values);

        if (!newUser) {
            return toast(<div className="p-2 bg-accent">Sign up failed. Please try again</div>)
        }
    }

    return (
        <Form {...form}>
            <div className=" sm:w-md flex items-center flex-col gap-2">
                <img src="/assets/images/logo.svg" alt="logo" className="w-40" />
                <h2 className="text-xl font-bold md:text-2xl pt-5 sm:pt-12 text-center">Create a new account</h2>
                <p className="text-zinc-400 text-sm">To use Reactgram,please enter your account details</p>

                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-6 mt-4">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs">Name</FormLabel>
                                <FormControl>
                                    <Input type="text" className="border-none "  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs">Username</FormLabel>
                                <FormControl>
                                    <Input type="text" className="border-none "  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs">Email</FormLabel>
                                <FormControl>
                                    <Input type="email" className="border-none bg-primary"  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-xs">Password</FormLabel>
                                <FormControl>
                                    <Input type="password" className="border-none"  {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button disabled={isLoading} type="submit" className="prima">
                        {isLoading ? (
                            <div className="flex items-center justify-center gap-2">
                                <Loader />Loading...

                            </div>
                        ) : (
                            <div>Submit</div>
                        )}
                    </Button>
                    <p className="text-sm font-light text-foreground text-center">Already have an account? <Link className="text-primary" to={"/sign-in"}>Log in</Link></p>
                </form>
            </div>
        </Form>
    )
}

export default SingupForm
