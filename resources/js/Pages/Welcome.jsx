import { Link, Head } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome, HMB News" />

            <div className="  bg-darker bg-center bg-gray-100 dark:bg-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="h-screen bg-right bg-cover">
                    <div className="w-full container mx-auto p-6">
                        <div className="w-full flex items-center justify-between">
                            <a
                                className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                                href="/"
                            >
                                <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                            </a>

                            <div className="flex w-1/2 justify-end content-center">
                                {props.auth.user ? (
                                    <Link
                                        href={route("newsfeed")}
                                        className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
                                    >
                                        News
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route("login")}
                                            className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
                                        >
                                            Log in
                                        </Link>

                                        <Link
                                            href={route("register")}
                                            className="inline-block text-blue-300 no-underline hover:text-indigo-800 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 "
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="container pt-24 md:pt-30 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                        <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                            <h1 className="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
                                HMB News
                            </h1>
                            <p className="block font-medium text-sm text-gray-700 dark:text-gray-300">
                                HMB is a leading 24-hour news and information
                                cable television network and website, delivering
                                breaking news and feature stories from around
                                the world. The website covers a wide range of
                                topics including politics, business, technology,
                                entertainment, sports, health, and travel..
                            </p>
                        </div>

                        <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                            <img
                                className="w-5/6 mx-auto lg:mr-0 slide-in-bottom"
                                src={"/web/devices.svg"}
                            />
                        </div>

                        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                            <a
                                className="text-gray-500 no-underline hover:no-underline"
                                href="https://imharsh.web.app/"
                            >
                                &copy; Harsh
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
